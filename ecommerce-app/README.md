# ShopZone - Amazon-like E-commerce Website

A fully-functional, production-ready Amazon-like e-commerce website built with React, TypeScript, and Tailwind CSS. This project demonstrates modern front-end development practices including component-based architecture, state management, responsive design, and accessibility.

## 🛍️ Overview

ShopZone is a demo e-commerce platform featuring product browsing, filtering, cart management, and a mock checkout flow. The application showcases best practices in React development with TypeScript strict mode enabled.

### Key Features

- **Home Page**: Hero banner with featured product sections (Electronics, Books, Fashion)
- **Product Listing**: Grid layout with filtering (category, price range) and sorting (price low-high, high-low)
- **Product Detail**: Comprehensive product view with images, ratings, description, and quantity selector
- **Shopping Cart**: Full cart management with quantity controls and order summary
- **Checkout**: Mock checkout form with validation (no real payment processing)
- **Search**: Global product search functionality
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2+ | UI Framework |
| TypeScript | 5.2+ | Type Safety |
| Vite | 5.0+ | Build Tool |
| Tailwind CSS | 3.3+ | Styling |
| React Router | 6.20+ | Routing |
| pnpm | - | Package Manager |

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

```bash
# Clone or navigate to the project directory
cd ecommerce-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint for code quality |

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header.tsx     # Sticky header with logo, search, cart
│   ├── Footer.tsx     # Footer with links
│   ├── Layout.tsx     # Main layout wrapper
│   ├── ProductCard.tsx # Product display card
│   ├── StarRating.tsx # Star rating component
│   ├── CartItemCard.tsx # Cart item with controls
│   ├── ProductSection.tsx # Featured products section
│   └── HeroBanner.tsx # Home page hero
│
├── pages/             # Page-level views
│   ├── HomePage.tsx   # Landing page
│   ├── ProductListingPage.tsx # All products with filters
│   ├── ProductDetailPage.tsx  # Single product view
│   ├── CartPage.tsx   # Shopping cart
│   └── CheckoutPage.tsx # Checkout form
│
├── hooks/             # Custom React hooks
│   ├── useProductFilter.ts # Product filtering logic
│   └── useSearch.ts   # Search state management
│
├── context/           # React Context providers
│   └── CartContext.tsx # Global cart state
│
├── types/             # TypeScript type definitions
│   └── index.ts       # Product, CartItem, etc.
│
├── utils/             # Helper functions
│   └── index.ts       # formatPrice, truncateText, etc.
│
├── data/              # Mock data
│   └── products.ts    # 18 mock products
│
├── App.tsx            # Main app with routing
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🛒 User Flows

### 1. Browse Products
1. Visit home page to see featured products by category
2. Click "Shop Now" or category links to view all products
3. Use filters (category, price) and sorting to narrow results
4. Click product cards to view details

### 2. Add to Cart
1. From product listing: Click "Add to Cart" button
2. From product detail: Select quantity, click "Add to Cart"
3. Cart icon in header shows item count

### 3. Manage Cart
1. Navigate to cart page via header icon
2. Adjust quantities with +/- buttons
3. Remove items with "Remove" button
4. View order summary with subtotal

### 4. Checkout
1. Click "Proceed to Checkout" from cart
2. Fill in shipping information (name, address, email)
3. Select payment method (Credit Card/PayPal)
4. Click "Place Order" to complete mock checkout

## ✅ Manual UI Validation Steps

### Home Page
- [ ] Hero banner displays with "Shop Now" and "Browse Electronics" buttons
- [ ] Three product sections visible: Electronics, Books, Fashion
- [ ] Each section shows 4 products with images, titles, prices, ratings
- [ ] "View Product" buttons navigate to product details
- [ ] Header is sticky on scroll
- [ ] Footer contains About, Help, Privacy links

### Product Listing
- [ ] Grid displays all products
- [ ] Category dropdown filters products correctly
- [ ] Price range inputs filter by min/max price
- [ ] Sorting works for both price directions
- [ ] Product count updates with filters
- [ ] "Add to Cart" adds items and shows confirmation
- [ ] Search results display correctly from header search

### Product Detail
- [ ] Breadcrumb navigation works
- [ ] Product image, title, price, rating display correctly
- [ ] Description text is visible
- [ ] Quantity selector allows increase/decrease
- [ ] "Add to Cart" shows success message
- [ ] "View Cart" navigates to cart

### Cart
- [ ] Empty cart shows appropriate message
- [ ] Cart items display with images, titles, prices
- [ ] Quantity controls update correctly
- [ ] Remove button removes items
- [ ] Subtotal calculates correctly
- [ ] "Proceed to Checkout" navigates to checkout

### Checkout
- [ ] Form validation works for all required fields
- [ ] Email validation shows error for invalid format
- [ ] Payment method dropdown has both options
- [ ] Order summary shows cart items
- [ ] "Place Order" shows loading state
- [ ] Success page displays after order

### Responsiveness
- [ ] Mobile: Single column layout, hamburger-friendly
- [ ] Tablet: 2-column product grid
- [ ] Desktop: 3-4 column grids, sidebar filters

### Accessibility
- [ ] Tab navigation works through all interactive elements
- [ ] Focus indicators visible on buttons and links
- [ ] Screen reader labels on cart actions
- [ ] Form inputs have associated labels

## ⚠️ Known Limitations

1. **No Backend**: All data is mock/static
2. **No Persistence**: Cart clears on page refresh
3. **No Authentication**: No user accounts or login
4. **No Real Payments**: Checkout is simulated only
5. **No Order History**: Orders are not saved
6. **Static Images**: Using Unsplash placeholder images

## 📋 Specification Compliance

This project strictly follows the requirements in `input_ui_spec.txt`:

- ✅ Global Layout (sticky header, footer with links)
- ✅ Home Page with hero and featured sections
- ✅ Product Listing with filters and sorting
- ✅ Product Detail with quantity selector
- ✅ Cart with quantity controls and summary
- ✅ Checkout with mock form
- ✅ Global cart state management
- ✅ Mock product data
- ✅ Responsive design
- ✅ Accessibility features
- ✅ No authentication (as specified)
- ✅ No real payment integration (as specified)

## 🏗️ Architecture Decisions

1. **React Context for State**: Lightweight solution for cart state without external libraries
2. **Lazy Loading**: Pages are code-split for better initial load
3. **TypeScript Strict Mode**: Maximum type safety enabled
4. **Tailwind CSS**: Utility-first styling for rapid development
5. **Custom Hooks**: Encapsulated business logic for filtering and search

## 📄 License

This is a demo project for evaluation purposes.
