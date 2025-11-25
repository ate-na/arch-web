# React Vite Tailwind Starter

A modern React application built with **Vite** and **Tailwind CSS**, following a modular and scalable architecture. This project includes multilingual support, reusable components, hooks, and organized folder structure for efficient development.

## Features

- **React 18 + Vite** – Fast and lightweight development environment
- **Tailwind CSS** – Utility-first styling for responsive UI
- **i18n support** – Multilingual capability using JSON-based translations
- **State management** – Centralized store for app-wide state
- **Modular structure** – Organized components, pages, hooks, routes, utils, and assets
- **Reusable components** – Easily maintainable UI components
- **Custom hooks** – Reusable logic for cleaner code
- **Routing** – Structured routing with a dedicated `routes` folder
- **Assets & data** – Organized folders for static assets and mock data

## Folder Structure

public/
src/
  assets/      # Images, icons, and other static resources
  components/  # Reusable UI components
  data/        # Static data or mock data files
  hooks/       # Custom React hooks
  i18n/        # Internationalization setup and translation files
  pages/       # Page-level components for routing
  routes/      # Route definitions and configuration
  store/       # State management (e.g., Redux, Zustand, or Context)
  utils/       # Helper functions and utilities

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project directory
cd your-repo-name

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev

npm run build
# or
yarn build  
