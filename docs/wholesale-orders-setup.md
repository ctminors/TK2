# Wholesale orders → Google Sheet

The `/wholesale` order form sends each order to a Google Apps Script attached to a Google Sheet. The script adds one row per order and emails the order to the orders inbox (the buyer's address is set as Reply-to).

Create the sheet in the organization's Google account, not a personal one.

## One-time setup (about 10 minutes)

1. **Create the sheet.** In Google Drive, create a new Google Sheet named e.g. "Tamava wholesale orders".
2. **Add the script.** In the sheet: **Extensions → Apps Script**. Delete the sample code, paste in everything from [`google-apps-script/wholesale-orders.gs`](../google-apps-script/wholesale-orders.gs) and save.
3. **Set the notification inbox.** In the Apps Script editor: **Project Settings (gear) → Script Properties → Add script property**. Property `NOTIFY_EMAIL`, value: the inbox that should receive orders.
4. **Deploy it.** **Deploy → New deployment → Select type: Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, approve the permissions it asks for (it needs to edit this sheet and send email as you), and copy the **Web app URL** (ends in `/exec`).
5. **Give the URL to the site.**
   - Vercel: **Project → Settings → Environment Variables**, add `VITE_ORDER_SHEET_URL` = the web app URL (Production and Preview), then redeploy.
   - Local: put the same line in `.env.local` as `VITE_ORDER_SHEET_URL=https://script.google.com/macros/s/.../exec` and restart `npm run dev`.
6. **Test.** Send an order from `/wholesale`. A row should appear on the **Orders** tab within a few seconds, and the email should arrive.

## How the sheet works

- Columns: Received, Status, Business, Contact, Email, Phone, Delivery address, Preferred delivery, Notes, then one **Qty:** column per product. New products on the page get a new column automatically.
- **Status** starts as `New`. Change it by hand as the order moves along (e.g. Approved → Invoiced → Paid → Delivered).
- Hidden spam field: submissions that fill it are dropped silently.

## Changing the script later

After editing the code in Apps Script, use **Deploy → Manage deployments → (edit) → Version: New version → Deploy**. This keeps the same URL. A *new deployment* creates a new URL, and the site would need updating.

## Limits

- Gmail accounts can send about 100 emails a day from Apps Script; Google Workspace accounts about 1,500. Far above expected order volume.
- The browser can't read the script's reply (Google doesn't allow it for this kind of request), so the page shows the thank-you message once the order is sent. If an order ever seems missing, check the sheet first, then **Executions** in Apps Script for errors.
