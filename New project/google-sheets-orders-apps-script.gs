const SHEET_NAME = "Orders";

function doGet() {
  return jsonResponse({ ok: true, service: "La Vuerte Orders" });
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const sheet = getOrdersSheet();
    ensureHeaders(sheet);

    const address = payload.address || {};
    const customer = payload.customer || {};
    const preferences = payload.preferences || {};
    const totals = payload.totalsInINR || payload.totals || {};
    const items = Array.isArray(payload.items) ? payload.items : [];

    sheet.appendRow([
      new Date(),
      payload.orderId || "",
      customer.name || "",
      customer.phone || "",
      customer.email || "",
      [address.flat, address.building, address.street, address.landmark, address.city, address.state, address.pin].filter(Boolean).join(", "),
      items.map((item) => item.name).join(", "),
      items.map((item) => `${item.name} x ${item.qty}`).join(" | "),
      totals.total || "",
      payload.createdAt || new Date().toISOString(),
      "Confirmed",
      preferences.payment || "Pending",
      JSON.stringify(payload)
    ]);

    return jsonResponse({ ok: true, orderId: payload.orderId || "" });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message });
  }
}

function getOrdersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    "Timestamp",
    "Order ID",
    "Customer Name",
    "Contact Number",
    "Email",
    "Delivery Address",
    "Ordered Items",
    "Quantity",
    "Total Amount",
    "Order Date",
    "Order Status",
    "Payment Status",
    "Raw JSON"
  ]);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
