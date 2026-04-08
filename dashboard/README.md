# Trading Platform - Dashboard

This directory contains the dashboard application for the Trading Platform. It is built to securely present real-time trading data, charts, and administrative or user controls using modern web development technologies.

## Technologies Used

- **[React](https://react.dev/)**: A JavaScript library for building dynamic user interfaces.
- **[Vite](https://vitejs.dev/)**: A fast build tool and development server, significantly improving the frontend development experience.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and customizable UI development.
- **[Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)**: Powerful data visualization libraries for rendering interactive dashboards and market charts.
- **[Socket.io-client](https://socket.io/)**: Real-time bidirectional event-based communication for live market data updates.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for interacting with the backend REST API.
- **[React Router Dom](https://reactrouter.com/)**: Declarative routing for navigating between different views.
- **[react-hot-toast](https://react-hot-toast.com/)**: Lightweight notifications for the React app.

## Folder Structure

- **src/**: Contains the source code for the dashboard application.
  - **components/**: Contains reusable React components.
  - **pages/**: Contains page components.
  - **services/**: Contains service functions for API calls.
  - **utils/**: Contains utility functions.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or above is recommended).
- **npm**: The Node package manager.

### Installation

1.  Navigate into the `dashboard` directory (if you are not already there):

    ```bash
    cd dashboard
    ```

2.  Install the project dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server with hot-module replacement (HMR), run:

```bash
npm run dev
```

Vite will start the server and provide a local URL (typically `http://localhost:5173` or `5174`). Open this URL in your web browser to view the application.

### Building for Production

When you are ready to prepare the dashboard for deployment, create an optimized production build by running:

```bash
npm run build
```

This command bundles the application into the `dist` folder, minimizing files and optimizing assets for the best performance.

You can preview the built application locally using:

```bash
npm run preview
```

## Linting & Code Quality

The project uses ESLint to maintain code quality and consistency. To run the linter and check for issues, use:

```bash
npm run lint
```
