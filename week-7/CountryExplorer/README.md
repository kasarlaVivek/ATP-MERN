# Country Explorer

A sleek, responsive React application that allows users to search and explore information about countries worldwide. It fetches real-time data from the REST Countries API and presents it in a premium, glassmorphic dark-mode interface.

## Features

- Real-time Search: Instantly search for countries by name. The search includes debouncing to optimize API calls and improve performance.
- Premium UI: A modern, glassmorphic dark-theme design featuring subtle micro-animations, glowing gradients, and smooth transitions.
- Comprehensive Data: View essential details for each country, including its flag, capital city, region, and population.
- Responsive Grid: A flexible layout that adapts beautifully across mobile, tablet, and desktop screens.
- Error Handling: Graceful error management and informative loading states to enhance the user experience.

## Technology Stack

- Framework: React (Vite)
- Styling: Custom Vanilla CSS (Glassmorphism design system)
- Data Source: REST Countries API (v3.1)
- Typography: Outfit (Google Fonts)

## Getting Started: Building and Running the App

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher recommended)
- npm or yarn

### Step 1: Clone or Navigate to the Directory

Open your terminal and navigate to the project directory:

```bash
cd CountryExplorer
```

### Step 2: Install Dependencies

Run the following command to install all necessary packages and dependencies required for the project:

```bash
npm install
```

### Step 3: Start the Development Server

Start the Vite development server. This will compile the application and watch for any changes you make to the code:

```bash
npm run dev
```

### Step 4: Open in Your Browser

Once the development server is running, your terminal will display a local URL (typically `http://localhost:5173`). Open this link in your web browser to view and interact with the application.

## Project Structure

```text
src/
├── components/
│   ├── CountryCard.jsx   # Individual card component for displaying country details
│   ├── CountryList.jsx   # Grid layout component that maps over the country array
│   └── SearchBar.jsx     # Input component with debounced search logic
├── App.jsx               # Main application container handling state and API requests
├── main.jsx              # Application entry point
└── index.css             # Global stylesheet with custom premium design tokens
```
