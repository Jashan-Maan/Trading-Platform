# Full-Stack Trading Platform

Welcome to the **Trading Platform**, a comprehensive, full-stack application designed to facilitate real-time trading, market analysis, and user management. This repository contains the complete ecosystem, split into three distinct modules: a consumer-facing **client**, an administrative **dashboard**, and a robust backend **server**.

## 🏗️ Project Architecture

The project is structured as a monorepo consisting of three main directories:

1. **`client/` (Frontend Application)**
   - The primary interface for trading users.
   - Built with **React**, **Vite**, and **TailwindCSS**.
   - Handles user registration, viewing real-time prices, and executing simulated trades.
   - [Read the Client Documentation](./client/README.md)

2. **`dashboard/` (Administrative Dashboard)**
   - A specialized frontend for administrators or power users.
   - Built with **React**, **Vite**, **TailwindCSS**, and **Chart.js** for profound data visualization.
   - Focuses on real-time market data charts, active sockets tracking, and performance metrics.
   - [Read the Dashboard Documentation](./dashboard/README.md)

3. **`server/` (Backend API & WebSocket Hub)**
   - The central nervous system of the platform.
   - Built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.
   - Integrates **Socket.io** to push real-time price updates securely via **JWT** authenticated sessions.
   - [Read the Server Documentation](./server/Readme.md)

## 🚀 Quick Start Guide

Because this application relies on three mutually inclusive parts, you will need to install dependencies and run each environment.

### 1. Database Setup

Ensure you have a MongoDB instance running. Go into the `server/` directory and configure your `.env` file according to the specifications in the server documentation.

### 2. Installation

You need to run the install command inside each of the three directories. Open your terminal and run:

```bash
# Install Server dependencies
cd server && npm install

# Install Client dependencies
cd ../client && npm install

# Install Dashboard dependencies
cd ../dashboard && npm install
```

### 3. Running the Ecosystem

To run the entire platform locally, you will need to open **three separate terminal windows/tabs** to start all development servers concurrently.

**Terminal 1 (Server):**
```bash
cd server
npm run dev
```

**Terminal 2 (Client):**
```bash
cd client
npm run dev
```

**Terminal 3 (Dashboard):**
```bash
cd dashboard
npm run dev
```

By default, Vite will start the frontend apps on ports such as `5173` and `5174`, while the Express server will operate on the port you configured (commonly `5000` or `5001`).

## 🛠️ Global Technologies

- **Language**: JavaScript (ES6+)
- **Frontend**: React 19, Vite, TailwindCSS v4
- **Backend**: Node.js, Express 5
- **Database**: MongoDB & Mongoose
- **Real-Time Data**: Socket.io
- **Visualization**: Chart.js / react-chartjs-2
