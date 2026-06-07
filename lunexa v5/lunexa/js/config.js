// LUNEXA v5 | DevLeadLabs | Patel Gaurav | Ahmedabad
const LUNEXA_CONFIG = {
  SHEETS_WEBHOOK: 'https://script.google.com/macros/s/AKfycbzzu7zLgAH4hZV0Ji4atz_-mTkEd07MX9pJAiulShDaEXovhKxaFRiLa7pS3AkybQCpqQ/exec', // paste your Google Apps Script URL here
  BRAND: {
    name: 'Lunexa', company: 'DevLeadLabs', founder: 'Patel Gaurav',
    email: 'devleadlabs@gmail.com',
    instagram: 'https://www.instagram.com/devleadlab',
    city: 'Ahmedabad, India', support: '24/7'
  }
};
async function syncToSheets(type, data) {
  if (!LUNEXA_CONFIG.SHEETS_WEBHOOK) return;
  try {
    await fetch(LUNEXA_CONFIG.SHEETS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ type, data, timestamp: new Date().toISOString() })
    });
  } catch(e) { /* non-critical */ }
}
