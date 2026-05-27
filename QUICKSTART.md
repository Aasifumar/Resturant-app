# Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

### Step 3: Open in Browser
```
http://localhost:3000
```

---

## 🗺️ Navigation Guide

### Main Pages
- **Home** - Click "Restaurant" logo or navigate to `/`
- **Menu** - Browse all recipes with filters and search
- **Recipe Details** - Click "View Details" on any recipe card
- **Cart** - Click the shopping cart icon in navbar
- **Favorites** - Click the heart icon in navbar
- **About** - Learn more about the restaurant
- **Contact** - Get in touch with us

### Admin Pages
- **Admin Dashboard** - Visit `/admin`
- **Order Management** - View and update order statuses
- **Order History** - See all orders and analytics

---

## 🎯 Key Features to Try

### 1. Add to Cart
- Click on any recipe card
- Click "Add to Cart" button
- See cart count update in navbar

### 2. Search Recipes
- Type in the search bar on Menu page
- Results update in real-time

### 3. Filter by Category
- Click category buttons on Menu page
- View filtered results

### 4. Checkout
- Go to Cart page
- Fill delivery information
- Click "Place Order"
- Order appears in Admin dashboard

### 5. Dark Mode
- Click moon icon in navbar
- Theme toggles and persists

### 6. Favorites
- Click heart icon on recipe cards
- Access favorites from heart icon in navbar

### 7. Admin Dashboard
- Visit `/admin`
- View order statistics
- Manage orders with status updates

---

## 📝 Sample Actions

### Place an Order
1. Go to Menu page
2. Add 2-3 items to cart
3. Click cart icon
4. Fill in your details
5. Click "Place Order"
6. View order in Admin Dashboard

### Manage Orders
1. Visit `/admin/orders`
2. Select an order
3. Change status from dropdown
4. See changes reflected

### Search Recipes
1. Go to Menu page
2. Type "Pizza" in search
3. See pizza results
4. Clear search to reset

---

## 🌙 Dark Mode

- Located in navbar (moon/sun icon)
- Automatic theme persistence
- Applied to all pages and components

---

## 💾 Local Storage

The app automatically saves:
- Shopping cart items
- Favorite recipes
- Order history
- Theme preference

Data persists across browser sessions!

---

## 🛠️ Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
}
```

### Add More Recipes
Edit `src/data/foodData.js` and add items to `foodData` array.

### Modify Food Categories
Add new categories in food data, they'll appear automatically.

### Change Pagination
Edit `itemsPerPage` in `src/pages/Menu.js`:
```javascript
const itemsPerPage = 12; // Change from 9
```

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| `src/App.js` | Main app with routing |
| `src/context/CartContext.js` | Cart management |
| `src/data/foodData.js` | Food items |
| `tailwind.config.js` | Colors & styling |
| `src/pages/Menu.js` | Menu page logic |

---

## 📱 Test Responsive Design

1. Open app in browser
2. Press `F12` for DevTools
3. Click device toolbar icon
4. Select different devices to test

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm start -- --port 3001
```

### Dependencies Not Installing
```bash
npm install --legacy-peer-deps
```

### Dark Mode Not Working
- Clear browser cache
- Check if JavaScript is enabled

### Data Not Persisting
- Check browser's localStorage is enabled
- Clear localStorage and try again

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Docs](https://reactrouter.com)

---

## 🎉 Ready to Go!

You now have a fully functional restaurant ordering app! 

**Next steps:**
- Explore the codebase
- Customize colors and content
- Add more recipes
- Integrate with a backend
- Deploy to production

Enjoy! 🚀
