# 1Fi Marketplace

This is a React-based Marketplace application built with TypeScript, Vite, and Tailwind CSS. It is designed to provide a seamless shopping experience with integrated EMI (Equated Monthly Installment) options.

## Architecture

The project follows a clean, domain-driven architecture organized by feature domains:

- **React & Vite**: Fast development and build process with Hot Module Replacement (HMR)
- **TypeScript**: Ensures type safety across the entire application
- **Tailwind CSS**: Used for responsive styling and utility-first CSS
- **Domain-Driven Organization**: Components are grouped by feature (emi/, marketplace/, product/, shop/, ui/) for maintainability
- **State Management**: Custom React hooks in `src/components/hooks` manage data fetching and local state
- **Routing**: Implemented with `react-router-dom` for seamless navigation between pages
- **API Integration**: Services layer (`src/services/`) handles API calls with error handling and loading states

## Key Features & Implementation Details

### 1. Product Marketplace
- **Search & Filtering**: Implemented in `MarketplaceSearch` component with debounced search input (300ms delay)
- **Category Navigation**: `CategoryList` component displays categories with selected state management
- **Product Grid**: `ProductGrid` displays products with loading/error states and responsive layout
- **Data Flow**: `useProducts` hook manages API requests with search/category filters

### 2. Product Details
- **Image Gallery**: `ProductGallery` component with carousel-like image display
- **Variant Selection**: `VariantSelector` allows users to choose between product variants (color, size, etc.)
- **EMI Plan Selection**: `EMIPlanSelector` shows available EMI plans with visual cards showing monthly payment, tenure, and total amount
- **Smart Recommendations**: System automatically selects recommended EMI plan based on product price

### 3. Checkout Flow
- **Multi-Step Process**: 
  1. Product selection → 2. EMI plan selection → 3. Checkout confirmation → 4. Success page
- **State Management**: Uses React Router state to pass product/variant/plan data between pages
- **Order Summary**: Displays detailed breakdown including:
  - Product name and variant
  - EMI plan details (tenure, monthly payment, total amount)
  - Interest rate information (if applicable)
  - Payment schedule with first payment date
- **Guarantee Section**: 1Fi EMI Guarantee with no hidden charges and flexible repayment options

### 4. Success Page
- **Confirmation Message**: Visual success indicator with CheckCircle animation
- **Next Steps**: Clear guidance on confirmation email, product delivery, and EMI management
- **Important Notes**: Key information about payment scheduling and early repayment options
- **CTA Buttons**: Continue shopping, view EMI details, or return home

## Project Structure

```
src/
├── components/          # Domain-specific UI components
│   ├── emi/             # EMI plan components
│   ├── marketplace/     # Marketplace-specific components
│   ├── product/         # Product detail components
│   ├── shop/            # Shop-specific components
│   └── ui/              # Reusable UI components (Button, Skeleton, etc.)
├── hooks/               # Custom data fetching and state hooks
│   ├── useCategories.ts
│   ├── useEMIPlans.ts
│   └── useProducts.ts
├── pages/               # Page-level components
│   ├── Home.tsx
│   ├── Marketplace.tsx
│   ├── ProductDetails.tsx
│   ├── Shop.tsx
│   ├── Checkout.tsx
│   └── CheckoutSuccess.tsx
├── services/            # API integration layer
│   └── marketplaceApi.ts
├── types/               # TypeScript interfaces
│   └── marketplace.ts
├── utils/               # Utility functions
│   ├── cn.ts           # ClassName utility
│   └── emi.ts          # EMI formatting helpers
└── assets/              # Static assets (images, icons)
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/pranav172/1Fi-MarketPlace-assignment.git
   cd 1Fi-MarketPlace-assignment
   ```

2. **Install dependencies**
   ```bash
   npm ci
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Visit http://localhost:5173 — the application mounts at `#root` in `index.html`

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Routing**: react-router-dom
- **State Management**: Custom React hooks (no global state library)
- **Utilities**: Custom hooks and formatting functions in `src/utils/`
- **Testing**: Not included by default (consider adding vitest/jest)

## Key Implementation Highlights

### EMI Integration System
- Dynamic EMI plan calculation based on product price
- Visual plan selection with detailed breakdown (monthly payment, tenure, total amount)
- Smart recommendation system that suggests optimal plans
- Formatted display using `formatEMIDisplay` and `formatCurrency` utilities

### Responsive Design
- Mobile-first approach with Tailwind's responsive classes
- Consistent component styling across all screen sizes
- Accessible UI elements with proper ARIA attributes

### Performance Optimizations
- Debounced search input to reduce API calls
- Loading skeletons for better perceived performance
- Code splitting through Vite's dynamic imports
- Tree-shaking for optimized bundle size

## Available Scripts

- `npm run dev` — Start Vite development server with HMR
- `npm run build` — Run TypeScript build and produce production bundle
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run Oxlint for code style validation

## Environment Variables

Create a `.env` file in the project root for runtime configuration:
```env
VITE_API_BASE_URL=https://api.example.com
VITE_ANALYTICS_KEY=your_key_here
```

## Linting & Code Quality

This project includes Oxlint configuration with:
- React hooks rules
- TypeScript-aware linting (enable with `oxlint-tsgolint`)
- Custom rules for consistent code style

## Building & Deploying

- Build for production: `npm run build`
- The `dist/` folder contains production-ready static files
- Recommended deployment targets: Netlify, Vercel, GitHub Pages
- Vercel configuration: Build command `npm run build`, Output directory `dist/`

## Next Steps

- Add unit tests with vitest or jest
- Implement end-to-end testing with Playwright or Cypress
- Add authentication flow for user accounts
- Integrate with real backend API

## License

MIT License - feel free to use and modify for your own projects.