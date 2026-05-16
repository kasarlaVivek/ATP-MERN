# Tech Catalog Application

## Overview
This project is a React-based product catalog application designed to showcase a premium collection of electronics and accessories. It provides users with a seamless interface to browse, search, and filter products from various leading brands.

## Project Architecture and Flow

### Component Structure
The application is built using a component-based architecture for modularity and scalability:
1. App: The root component that serves as the main entry point and container for the application.
2. Products: The primary container component responsible for managing the product state, search logic, and brand filtering.
3. ProductCard: A presentational component that renders individual product details including images, pricing, and descriptions.

### Data Management
Product information is stored as a structured array of objects within the Products component. The catalog utilizes authentic, high-quality product photography sourced from official repositories to ensure a realistic and professional user experience. Each product object contains essential metadata such as productId, name, price, brand, description, and high-resolution image URLs.


### Search and Filter Logic
1. Search Functionality: Users can search for products by name or brand. The logic performs a case-insensitive search across the product collection.
2. Brand Filtering: A dedicated filter allows users to narrow down the catalog to specific brands. This is dynamically generated based on the brands available in the data set.
3. Combined Filtering: The application handles both search queries and brand filters simultaneously, ensuring that only products meeting both criteria are displayed.

## Technical Implementation and Design

### Styling and Aesthetics
The application implements a premium dark-themed design system using Vanilla CSS. Key design features include:
1. Glassmorphism: Cards and control sections utilize backdrop-filter effects for a modern, layered appearance.
2. Responsive Grid: A flexible CSS Grid layout ensures the catalog adapts perfectly to various screen sizes, from mobile devices to large monitors.
3. Typography: The design utilizes high-quality fonts (Inter and Outfit) via Google Fonts to enhance readability and professional appeal.
4. Micro-interactions: Subtle hover effects, scale transformations, and fade-in animations are implemented to provide a dynamic and engaging user experience.

### Development Workflow
The project was developed using Vite for optimized build performance and Hot Module Replacement (HMR). The development process involved:
1. Establishing a robust design system in index.css.
2. Developing modular components with encapsulated styles (CSS modules or component-specific CSS).
3. Implementing state management using React hooks (useState and useMemo) to handle user interactions and data filtering.
4. Optimizing assets and accessibility features such as lazy loading for images and descriptive alt tags.

## Setup and Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run 'npm install' to install the necessary dependencies.
4. Run 'npm run dev' to start the development server.
5. Open the provided local URL in your browser to view the application.
