/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Apps Script web app URL that records wholesale orders (see docs/wholesale-orders-setup.md). */
  readonly VITE_ORDER_SHEET_URL?: string;
}
