# Lunexa v5 — Premium E-Commerce Platform
**By DevLeadLabs | Patel Gaurav | Ahmedabad, India**
Contact: devleadlabs@gmail.com | Instagram: @devleadlab

---

## Quick Start
Open `index.html` in any browser. No build tools needed.

## Pages (18)
| Page | Description |
|---|---|
| index.html | Hero, flash deals, categories, featured, new arrivals |
| products.html | All products — live search & category filter |
| product.html | Product detail with unique reviews per product |
| cart.html | Shopping cart with GST (18%) calculation |
| wishlist.html | Saved wishlist |
| checkout.html | Card / UPI / Cash on Delivery checkout |
| success.html | Order confirmation with confetti |
| login.html | Sign in |
| signup.html | Create account with password strength meter |
| profile.html | Dashboard, orders, settings, address |
| tracking.html | Live order tracking with step progress |
| admin.html | Admin panel — Products, Users, Stats |
| about.html | Patel Gaurav · DevLeadLabs · Ahmedabad |
| contact.html | devleadlabs@gmail.com · @devleadlab |
| privacy.html | Privacy Policy |
| terms.html | Terms & Conditions |
| returns.html | Return Policy |
| cookies.html | Cookie preferences with toggle controls |

## Design System
- **Colors:** Neutral graphite/white — blue used as accent ONLY (not dominant)
- **Primary CTAs:** Charcoal/dark (`#0D1117`) — not blue gradients
- **Fonts:** Outfit (body) + Cormorant Garamond (display)
- **Theme:** Clean, premium, minimal — like Apple or Linear

## Admin Panel
- URL: `admin.html`
- Passkey: **lunexa2025**

## Features
- Auth system (signup, login, logout) — data in localStorage
- Cart & Wishlist — auth-gated with smooth modal
- Unique reviews per product (seed-based, 20 reviewers, 20 review texts)
- Order tracking with step-by-step progress indicator
- Google Sheets webhook integration (optional, see below)
- Cookie banner + preferences page with toggles
- Live search character-by-character on products page

---

## Google Sheets Integration

### Step 1 — Create Google Apps Script
1. Open Google Sheets → Extensions → Apps Script
2. Paste this code:

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet;

  if (data.type === 'order') {
    sheet = ss.getSheetByName('Orders') || ss.insertSheet('Orders');
    if (sheet.getLastRow() === 0)
      sheet.appendRow(['Timestamp','OrderID','Customer','Email','Total','Items','Payment','City','Date']);
    const d = data.data;
    sheet.appendRow([new Date(data.timestamp), d.orderId, d.customer, d.email, d.total, d.items, d.paymentMethod, d.city, d.date]);

  } else if (data.type === 'signup') {
    sheet = ss.getSheetByName('Users') || ss.insertSheet('Users');
    if (sheet.getLastRow() === 0)
      sheet.appendRow(['Timestamp','Name','Email','City','JoinedAt']);
    const d = data.data;
    sheet.appendRow([new Date(data.timestamp), d.name, d.email, d.city, d.createdAt]);

  } else if (data.type === 'contact') {
    sheet = ss.getSheetByName('Messages') || ss.insertSheet('Messages');
    if (sheet.getLastRow() === 0)
      sheet.appendRow(['Timestamp','Name','Email','Subject','Message']);
    const d = data.data;
    sheet.appendRow([new Date(data.timestamp), d.name, d.email, d.subject, d.message]);
  }

  return ContentService.createTextOutput('OK');
}
```

### Step 2 — Deploy
1. Click **Deploy → New Deployment**
2. Type: **Web App**
3. Execute as: **Me** | Access: **Anyone**
4. Click **Deploy** → copy the **Web App URL**

### Step 3 — Configure
Open `js/config.js` and paste your URL:
```javascript
SHEETS_WEBHOOK: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
```

Data now syncs on: signups, orders, and contact form submissions.

---

## Copyright
© 2025 Lunexa. All rights reserved by **DevLeadLabs**.
Founded by **Patel Gaurav** · Ahmedabad, Gujarat, India
