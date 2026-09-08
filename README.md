# 1Fi Marketplace

This is a React-based Marketplace application built with TypeScript, Vite, and Tailwind CSS. It is designed to provide a seamless shopping experience with integrated EMI (Equated Monthly Installment) options.

## Architecture

The project follows a clean, component-based architecture organized by domain:

- **React & Vite**: Fast development and build process.
- **TypeScript**: Ensures type safety across the application.
- **Tailwind CSS**: Used for styling and responsive design.
- **Domain-Driven Organization**: The `src/components` directory is organized by feature domains (e.g., `emi`, `marketplace`, `product`, `shop`), making the codebase scalable and maintainable.
- **State Management**: Uses custom hooks in `src/components/hooks` to manage data fetching and local state.
- **Routing**: Implemented with `react-router-dom` for seamless navigation between pages.

## Key Features

- **Product Marketplace**: Browse a wide range of products with search and category filtering.
- **Product Details**: Detailed view of products with image galleries and specifications.
- **EMI Integration**: Flexible EMI plan selection for eligible products, with an intuitive UI to choose plans.
- **Checkout Flow**: A streamlined checkout process from product selection to success confirmation.

## Project Structure

```
src/
  ├── components/    # Domain-specific UI components
  ├── pages/         # Page-level components (Marketplace, Checkout, etc.)
  ├── services/      # API integration logic
  ├── types/         # TypeScript interfaces and types
  ├── utils/         # Utility functions and helpers
  └── assets/        # Static assets (images, icons)
```

## Getting Started

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
