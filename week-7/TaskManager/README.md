# Nexus Task Manager

A professional, high-performance task management application built with React, Tailwind CSS, and Framer Motion. This project features a modern glassmorphism design, real-time statistics, and persistent storage.

## Key Features

- **Modern UI/UX**: Sleek dark theme with glassmorphism effects and smooth animations.
- **Task Management**: Full CRUD capabilities (Create, Read, Update, Delete).
- **Smart Filtering**: Filter tasks by status (All, Active, Completed).
- **Priority System**: Visual priority indicators (1-5) with color-coded badges.
- **Persistence**: Automatically saves your tasks to local storage.
- **Real-time Stats**: Dynamic progress bar and task counters.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.

## Tech Stack

- **Frontend**: React 19 (Vite)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form

## Development Flow

1. **State Orchestration**: The `TaskManager.jsx` component serves as the central hub, managing task state, persistence, and filtering logic.
2. **Component Architecture**:
   - `AddTask`: Handles input validation and task creation using `react-hook-form`.
   - `TasksList`: Renders task items with entry/exit animations using `AnimatePresence`.
   - `TasksCount`: Provides visual feedback on productivity metrics.
3. **Design System**: Built on a unified CSS variable system in `index.css` for consistent spacing, colors, and blurring effects.
4. **Data Model**: Tasks are stored as objects with unique IDs, names, priorities, completion status, and timestamps.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```text
src/
├── Components/
│   ├── AddTask.jsx      # Task creation form
│   ├── TaskManager.jsx  # Main state container
│   ├── TasksCount.jsx   # Stats and progress
│   └── TasksList.jsx    # Animated task list
├── App.jsx              # App layout & background
├── index.css            # Tailwind & global styles
└── main.jsx             # Entry point
```

---
Built for productivity.

