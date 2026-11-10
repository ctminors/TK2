/**
 * Tamava wholesale orders: receives the /wholesale form, adds one row per order
 * to this spreadsheet, and emails the order to the orders inbox.
 *
 * Setup: see docs/wholesale-orders-setup.md. The notification address lives in
 * Project Settings → Script Properties as NOTIFY_EMAIL (not in this file).
 */

const SHEET_NAME = 'Orders';

// Fixed columns, in order. Product quantities (qty-*) are added after these
// automatically, so new products don't need a script change.
const FIXED_COLUMNS = [
  ['timestamp', 'Received'],
  ['status', 'Status'],
  ['business', 'Business'],
  ['contact', 'Contact'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['address', 'Delivery address'],
  ['delivery-date', 'Preferred delivery'],
  ['notes', 'Notes'],
];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Honeypot: real visitors never fill this hidden field.
  if (p['bot-field']) return json_({ ok: true });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const headers = ensureHeaders_(sheet, p);

    const values = Object.assign({}, p, { timestamp: new Date(), status: 'New' });
    const row = headers.map(function (h) {
      const key = keyForHeader_(h);
      const v = values[key];
      // Prefix text with ' so Sheets never treats it as a formula.
      if (typeof v === 'string' && /^[=+\-@]/.test(v)) return "'" + v;
      return v === undefined ? '' : v;
    });
    sheet.appendRow(row);

    notify_(p, sheet);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

// Header text for a qty-<id> field, e.g. qty-root-powder-varietal-1 → "Qty: root-powder-varietal-1".
function qtyHeader_(key) {
  return 'Qty: ' + key.slice(4);
}

function keyForHeader_(header) {
  if (header.indexOf('Qty: ') === 0) return 'qty-' + header.slice(5);
  for (var i = 0; i < FIXED_COLUMNS.length; i++) {
    if (FIXED_COLUMNS[i][1] === header) return FIXED_COLUMNS[i][0];
  }
  return header;
}

function ensureHeaders_(sheet, p) {
  let headers = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(String)
    : [];

  if (headers.length === 0) {
    headers = FIXED_COLUMNS.map(function (c) { return c[1]; });
  }
  Object.keys(p).forEach(function (k) {
    if (k.indexOf('qty-') === 0 && headers.indexOf(qtyHeader_(k)) === -1) {
      headers.push(qtyHeader_(k));
    }
  });

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  return headers;
}

function notify_(p, sheet) {
  const to = PropertiesService.getScriptProperties().getProperty('NOTIFY_EMAIL');
  if (!to) return;

  const items = Object.keys(p)
    .filter(function (k) { return k.indexOf('qty-') === 0 && Number(p[k]) > 0; })
    .map(function (k) { return '  • ' + k.slice(4) + ': ' + p[k]; })
    .join('\n');

  const body = [
    'New wholesale order from ' + (p.business || '(no business name)'),
    '',
    'Items:',
    items || '  (none)',
    '',
    'Contact: ' + (p.contact || ''),
    'Email: ' + (p.email || ''),
    'Phone: ' + (p.phone || ''),
    'Delivery address: ' + (p.address || ''),
    'Preferred delivery: ' + (p['delivery-date'] || ''),
    'Notes: ' + (p.notes || ''),
    '',
    'Order sheet: ' + sheet.getParent().getUrl(),
  ].join('\n');

  const options = {};
  if (p.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) options.replyTo = p.email;

  MailApp.sendEmail(to, 'Wholesale order: ' + (p.business || 'new order'), body, options);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
