# Aurora Shop — Amazon-like E-commerce (React + Vite + Tailwind)

Aurora Shop is a multi-page Amazon-inspired storefront built with React 18, TypeScript, Vite, and Tailwind CSS. It implements the required browsing, product detail, cart, and mock checkout flows defined in `input_ui_spec.txt`, with responsive layouts and accessible interactions.

## Features
- Home hero and featured category sections (Electronics, Books, Fashion)
- Products listing with category filter, price range filter, sorting (Low→High, High→Low), and search param support
- Product detail page with quantity selector and add-to-cart
- Cart page with quantity controls, remove, subtotal, and proceed to checkout
- Checkout page with mock form (name, address, email, payment method) and mock submission state
- Global sticky header with search and cart badge; footer links
- React Context cart state (add/remove/update) persistent for the app session (no storage)
- Lazy-loaded pages, mobile-first responsive grid, keyboard-focusable controls, and aria-labels for search and cart actions

## Tech Stack
- React 18, TypeScript (strict)
- Vite 5
- Tailwind CSS 3
- React Router v6
- pnpm for package management

## Project Structure
```
src/
  components/  # Layout, cards, filters, cart UI
  context/     # Cart context provider
  data/        # Mock products
  hooks/       # useProducts
  pages/       # Home, Products, Product Detail, Cart, Checkout
  types/       # Shared TypeScript types
  utils/       # Helpers (formatting)
  App.tsx, main.tsx, index.css
```

## Getting Started
1) Install dependencies
```
pnpm install
```
2) Run the dev server
```
pnpm dev
```
3) Build for production
```
pnpm build
```
4) Preview production build
```
pnpm preview
```

## Manual Validation Steps
- Home: hero renders; featured sections show products and View Product buttons.
- Products: category dropdown filters; min/max price filter works; sorting toggles; search via header (`/products?q=...`) filters results; Add to Cart updates badge.
- Product detail: rating/price/description visible; quantity selector adjusts; Add to Cart adds chosen quantity.
- Cart: items list with +/− and remove; subtotal updates; Proceed to Checkout navigates.
- Checkout: form fields are focusable and required; selecting payment and submitting shows mock confirmation.
- Responsiveness: grids collapse to one column on mobile, two on tablet, three on desktop; header sticky.
- Accessibility: search input and cart controls have aria-labels; keyboard tabbing reaches form fields and buttons.

## Known Limitations
- No persistence across page reloads (spec allows session-only state).
- No real payments or backend integrations (per non-goals).
