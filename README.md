# Restaurant Recipe List Web App

A modern, fully-featured restaurant ordering application built with React.js, featuring a complete food listing, cart management, admin dashboard, and order management system.

## 🚀 Features

### Main Features
- **Home Page** - Attractive landing page with featured recipes
- **Menu/Recipe Listing** - Browse all food items with filtering and search
- **Recipe Details** - Detailed view of each recipe with ingredients
- **Shopping Cart** - Add/remove items, quantity management, price calculation
- **Favorites/Wishlist** - Save favorite recipes for later
- **Search & Filter** - Search by name/description and filter by category
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Mode** - Toggle between light and dark themes

### Extra Features
- **Toast Notifications** - User-friendly notifications
- **Pagination** - Navigate through recipes efficiently
- **Admin Dashboard** - View statistics and manage orders
- **Order Management** - Track and update order status
- **Order History** - View complete order history and analytics
- **Local Storage** - Cart and favorites persist across sessions
- **Loading Spinner** - Smooth loading states
- **Modern UI** - Clean, modern restaurant-style interface

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Navbar, Footer, SearchBar, Loader, etc.
│   └── cards/            # FoodCard, CategoryCard, CartItemCard, etc.
├── pages/                # Home, Menu, Cart, About, Contact, etc.
├── admin/                # Admin Dashboard, Order Management, History
├── context/              # CartContext, FavoritesContext, OrderContext, ThemeContext
├── hooks/                # useDebounce, useLocalStorage, useAsync
├── data/                 # foodData.js (dummy data)
├── utils/                # formatters.js, validators.js
├── styles/               # CSS files
├── assets/               # Images and static files
├── App.js                # Main app component with routing
└── index.js              # Entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Navigate to project directory**
```bash
cd Restaurant-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

## 🗂️ Key Files

### Context & State Management
- `src/context/CartContext.js` - Shopping cart management
- `src/context/FavoritesContext.js` - Favorites/wishlist management
- `src/context/OrderContext.js` - Order history management
- `src/context/ThemeContext.js` - Dark mode toggle

### Components
- `src/components/common/Navbar.js` - Navigation bar
- `src/components/common/Footer.js` - Footer section
- `src/components/cards/FoodCard.js` - Food item card
- `src/components/cards/CartItemCard.js` - Cart item card

### Pages
- `src/pages/Home.js` - Home page
- `src/pages/Menu.js` - Menu listing with filters
- `src/pages/RecipeDetails.js` - Recipe details page
- `src/pages/Cart.js` - Shopping cart page
- `src/pages/Favorites.js` - Favorites page
- `src/pages/About.js` - About us page
- `src/pages/Contact.js` - Contact us page

### Admin
- `src/admin/AdminDashboard.js` - Admin dashboard
- `src/admin/OrderManagement.js` - Order management
- `src/admin/OrderHistory.js` - Order history

## 🎨 Categories

The app includes recipes from these categories:
- 🍕 Pizza
- 🍔 Burger
- 🍝 Pasta
- 🥤 Drinks
- 🍰 Dessert
- 🍲 Indian Food
- 🥢 Chinese Food

## 💾 Features Details

### Shopping Cart
- Add/remove items
- Update quantities
- Real-time price calculation
- Cart totals with tax
- Save cart to localStorage
- Place orders with delivery info

### Favorites
- Add/remove favorites
- Quick access to wishlist
- Persist favorites in localStorage

### Admin Dashboard
- View total orders, pending orders, revenue
- Quick access to order management
- Recent orders at a glance

### Order Management
- View all orders with filtering
- Update order status (Pending → Processing → Completed/Cancelled)
- Track customer details
- View order items and totals

### Dark Mode
- Toggle dark mode from navbar
- Automatic theme persistence
- Smooth transitions between themes

## 🎯 Sample Food Data

Each food item includes:
- ID
- Title
- Category
- Price
- Rating & Reviews
- Image
- Description
- Ingredients
- Preparation time
- Servings

## 📊 Pagination

- 9 items per page by default
- Smart pagination with page numbers
- Previous/next navigation
- Auto-hide when not needed

## 🔍 Search & Filter

- Real-time search with debounce
- Filter by category
- Combined search + category filtering
- Shows result count

## 🎨 Color Scheme

- **Primary Color:** #FF6B6B (Red)
- **Secondary Color:** #4ECDC4 (Teal)
- **Accent Color:** #FFE66D (Yellow)
- **Dark Mode:** #1a1a1a
- **Light Mode:** #f5f5f5

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Advanced Features

### Hooks
- **useDebounce** - Debounced search input
- **useLocalStorage** - localStorage management
- **useAsync** - Async operations handling

### Utilities
- **formatCurrency** - Currency formatting (INR)
- **formatDate** - Date formatting
- **validateEmail** - Email validation
- **validatePhone** - Phone validation

### Local Storage
- Cart items persist
- Favorites persist
- Theme preference persists
- Order history persists

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Hot Toast** - Notifications
- **React Spinners** - Loading animations
- **Axios** - HTTP client (setup ready)

## 📝 Usage Examples

### Add to Cart
```javascript
import { useCart } from './context/CartContext';

const { addToCart } = useCart();
addToCart(foodItem);
```

### Toggle Favorite
```javascript
import { useFavorites } from './context/FavoritesContext';

const { toggleFavorite } = useFavorites();
toggleFavorite(foodItem);
```

### Place Order
```javascript
import { useOrder } from './context/OrderContext';

const { placeOrder } = useOrder();
const orderId = placeOrder({
  items: cartItems,
  totalPrice: totalPrice,
  customer: customerData
});
```

## 🌙 Dark Mode

Toggle dark mode from the navbar. Theme preference is saved to localStorage automatically.

## 📞 Contact Form

The contact form validates all fields before submission. Messages can be extended to integrate with backend APIs.

## 🔐 Future Enhancements

- Backend API integration
- User authentication
- Payment gateway integration
- Real-time order tracking
- Email notifications
- Rating & reviews system
- Wishlists per user
- Promo codes & discounts
- Analytics dashboard

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📧 Support

For support or questions, please contact: support@restaurant.com

---

**Happy Coding! 🎉**

Built with ❤️ using React.js
