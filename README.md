# 🛒 Shopping Cart System

A simple **shopping cart system** that fetches product prices from `db.json` and calculates totals.

---

## 🚀 Features
- ✅ Fetches prices dynamically from `json-server`
- ✅ Supports adding multiple products
- ✅ Calculates **subtotal, tax (12.5%), and total**
- ✅ Includes unit tests (`npm test`)

---

## 📌 Setup Instructions

1️⃣ Install Dependencies
```bash
npm install
```

2️⃣ Start the Price API
```bash
npm run serve-products
```

✅ Runs json-server at http://localhost:3001/products

## 📌 Testing Instructions

🔹 Manual Testing

Run:
```bash
node test.js
```
Expected Output:
```bash
Adding items to the cart...

Cart contains 3 x cheerios @ 8.43
Cart contains 1 x shreddies @ 4.68
Cart contains 1 x frosties @ 4.99

Subtotal: 34.96
Tax: 4.37
Total: 39.33
```

If you want to add more produdcts and test them, you can do it by modifying test.js sample test.

🔹 Automated Testing

Run:
```bash
npm test
```



