# Trading Platform - Frontend Client

This directory contains the frontend client application for the Trading Platform. It is built using modern web development technologies to ensure a fast, responsive, and maintainable user interface.

## Technologies Used

*   **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/)**: A fast build tool and development server, significantly improving the frontend development experience.
*   **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and customizable UI development.
*   **[React Router Dom](https://reactrouter.com/)**: Declarative routing for navigating between different views.
*   **[React Icons](https://react-icons.github.io/react-icons/)**: A collection of popular icon libraries accessible as React components.

## Getting Started

### Prerequisites

*   **Node.js**: Ensure you have Node.js installed (v18 or above is recommended).
*   **npm**: The Node package manager.

### Installation

1.  Navigate into the `client` directory (if you are not already there):
    ```bash
    cd client
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

Vite will start the server and provide a local URL (typically `http://localhost:5173`). Open this URL in your web browser to view the application.

### Building for Production

When you are ready to prepare the client for deployment, create an optimized production build by running:

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
