# Zerodha Trading Platform Clone

A full-stack trading platform built as a clone of Zerodha — India's largest stock broker. This project demonstrates a complete MERN stack implementation with real-time WebSocket communication, JWT authentication, and a fully functional trading dashboard.

---

## 🏗️ Project Architecture

This is a monorepo with three separate applications:

```
Trading Platform/
├── client/       → Public marketing website (React + Vite + Tailwind CSS v4)
├── dashboard/    → Trader's dashboard (React + Vite + Tailwind CSS v4)
└── server/       → REST API + WebSocket backend (Node.js + Express 5)
```

**Ports (local development)**
| App       | Port                    |
|-----------|-------------------------|
| Client    | http://localhost:3000   |
| Dashboard | http://localhost:4000   |
| Server    | http://localhost:5500   |

---

## ✨ Features

### Authentication

- Email + password registration and login
- JWT access tokens + refresh tokens
- Tokens stored in secure `httpOnly` cookies
- Token refresh on expiry (silent re-authentication)
- Protected routes — unauthenticated users redirected to login
- Logout clears tokens from DB and cookies

### Dashboard

- **Live Watchlist** — real-time price updates every 2 seconds via WebSocket (Socket.io)
- **Live NIFTY 50 & SENSEX** — simulated price fluctuation in the top bar
- **Holdings** — view all stock holdings with live P&L, current value, and investment summary
- **Positions** — view all open intraday positions
- **Orders** — full order history with cancel functionality
- **Funds** — account balance and fund summary
- **Buy/Sell windows** — place BUY or SELL orders for any stock in the watchlist
- **Portfolio charts** — Doughnut chart (watchlist) and Vertical Bar chart (holdings)
- **User profile dropdown** — shows name, email, and logout button

### Backend

- RESTful API with consistent `ApiResponse` / `ApiError` structure
- Joi schema validation on all inputs
- Global error handling middleware
- Auto-seeds dummy holdings and positions for every new user
- User data isolation — every user only sees their own data
- Socket.io WebSocket server for live price simulation

### Client (Marketing Site)

- Home, About, Products, Pricing, Support pages
- Fully responsive with Tailwind CSS v4
- Signup page with account opening information

---

## 🛠️ Tech Stack

### Frontend — Client (Marketing Site)

| Package              | Version  |
|----------------------|----------|
| React                | ^19.2.0  |
| Vite                 | ^7.x     |
| Tailwind CSS         | ^4.1.17  |
| React Router DOM     | ^7.9.6   |
| React Icons          | ^5.5.0   |

### Frontend — Dashboard (Trading App)

| Package              | Version  |
|----------------------|----------|
| React                | ^19.2.0  |
| Vite                 | ^7.x     |
| Tailwind CSS         | ^4.1.18  |
| React Router DOM     | ^7.11.0  |
| Axios                | ^1.13.2  |
| Socket.io Client     | ^4.8.3   |
| Chart.js             | ^4.5.1   |
| react-chartjs-2      | ^5.3.1   |
| React Hot Toast      | ^2.6.0   |
| React Icons          | ^5.5.0   |

### Backend

| Package              | Version  |
|----------------------|----------|
| Node.js              | v18+     |
| Express              | ^5.2.1   |
| MongoDB + Mongoose   | ^9.1.1   |
| Socket.io            | ^4.8.3   |
| jsonwebtoken         | ^9.0.3   |
| bcrypt               | ^6.0.0   |
| Joi                  | ^18.1.2  |
| cookie-parser        | ^1.4.7   |
| dotenv               | ^17.2.3  |
| cors                 | ^2.8.5   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/Jashan-Maan/Trading-Platform.git
cd Trading-Platform
```

### 2. Set up environment variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5500
NODE_ENV=development

FRONTEND_URL=http://localhost:4000

MONGODB_URL=mongodb://localhost:27017/Zerodha

ACCESS_TOKEN_SECRET=your_access_token_secret_here
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
REFRESH_TOKEN_EXPIRY=7d
```

> **Note:** `FRONTEND_URL` is used for CORS and Socket.io — set it to the dashboard origin (`http://localhost:4000`).

### 3. Install dependencies

Open three terminal windows and run:

```bash
# Terminal 1 — Server
cd server
npm install

# Terminal 2 — Client
cd client
npm install

# Terminal 3 — Dashboard
cd dashboard
npm install
```

### 4. Run the applications

```bash
# Terminal 1 — Server (http://localhost:5500)
cd server
npm run dev

# Terminal 2 — Client (http://localhost:3000)
cd client
npm run dev

# Terminal 3 — Dashboard (http://localhost:4000)
cd dashboard
npm run dev
```

---

## 📡 API Reference

### Users

| Method | Endpoint                      | Description          | Auth |
|--------|-------------------------------|----------------------|------|
| POST   | `/api/v1/users/register`      | Register new user    | ❌   |
| POST   | `/api/v1/users/login`         | Login user           | ❌   |
| POST   | `/api/v1/users/logout`        | Logout user          | ✅   |
| POST   | `/api/v1/users/refresh-token` | Refresh access token | ❌   |
| GET    | `/api/v1/users/me`            | Get current user     | ✅   |

### Holdings

| Method | Endpoint           | Description          | Auth |
|--------|--------------------|----------------------|------|
| GET    | `/api/v1/holdings` | Get user's holdings  | ✅   |

### Positions

| Method | Endpoint            | Description           | Auth |
|--------|---------------------|-----------------------|------|
| GET    | `/api/v1/positions` | Get user's positions  | ✅   |

### Orders

| Method | Endpoint                    | Description        | Auth |
|--------|-----------------------------|--------------------|------|
| POST   | `/api/v1/orders`            | Place a new order  | ✅   |
| GET    | `/api/v1/orders`            | Get user's orders  | ✅   |
| DELETE | `/api/v1/orders/:orderId`   | Cancel an order    | ✅   |

### WebSocket Events

| Event              | Direction         | Description                          |
|--------------------|-------------------|--------------------------------------|
| `watchlist:update` | Server → Client   | Live price updates every 2 seconds   |

---

## 🔐 How Authentication Works

```
Register
  → Password hashed with bcrypt (10 salt rounds)
  → Access token (1d) + Refresh token (7d) generated
  → Both tokens stored in httpOnly cookies
  → Dummy holdings + positions seeded for new user

Login
  → Password verified with bcrypt.compare()
  → New tokens generated and set in cookies

Protected Request
  → Auth middleware reads accessToken from cookie or Authorization header
  → JWT verified → user attached to req.user
  → Controller executes with req.user._id for data isolation

Token Refresh
  → refreshToken from cookie verified
  → New access + refresh tokens issued (rotation)
  → Old refresh token replaced in DB

Logout
  → refreshToken removed from DB ($unset)
  → Both cookies cleared
```

---

## 📁 Folder Structure

```
server/
├── src/
│   ├── config/
│   │   ├── cookiesConfig.js       → httpOnly cookie options
│   │   └── joiSchema.js           → Joi validation schemas
│   ├── controllers/
│   │   ├── holdings.controller.js
│   │   ├── orders.controller.js
│   │   ├── positions.controller.js
│   │   └── users.controller.js
│   ├── data/
│   │   └── data.js                → Watchlist seed data
│   ├── db/
│   │   └── db.js                  → MongoDB connection
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── errorHandling.middleware.js
│   │   └── validation.middleware.js
│   ├── models/
│   │   ├── holdings.model.js
│   │   ├── orders.model.js
│   │   ├── positions.model.js
│   │   └── users.model.js
│   ├── routes/
│   │   ├── holdings.routes.js
│   │   ├── orders.route.js
│   │   ├── positions.routes.js
│   │   └── users.routes.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── SeedingData.js
│   └── index.js                   → App entry point (Express + Socket.io)

dashboard/
└── src/
    ├── components/
    │   ├── BuyActionWindow.jsx
    │   ├── Dashboard.jsx
    │   ├── DoughnutChart.jsx
    │   ├── Loading.jsx
    │   ├── LoginPage.jsx
    │   ├── Menu.jsx
    │   ├── SellActionWindow.jsx
    │   ├── TopBar.jsx
    │   ├── VerticalBarChart.jsx
    │   └── WatchList.jsx
    ├── context/
    │   └── AppContext.jsx          → User state, buy/sell window state
    ├── pages/
    │   ├── Apps.jsx
    │   ├── Funds.jsx
    │   ├── Holdings.jsx
    │   ├── Home.jsx
    │   ├── Orders.jsx
    │   ├── Positions.jsx
    │   └── Summary.jsx
    ├── constants.js
    └── App.jsx

client/
└── src/
    ├── components/
    │   ├── about/
    │   ├── common/                → Navbar, Footer
    │   ├── home/
    │   ├── pricing/
    │   ├── products/
    │   ├── signup/
    │   └── support/
    ├── pages/
    │   ├── about/
    │   ├── home/
    │   ├── pricing/
    │   ├── products/
    │   ├── signup/
    │   ├── support/
    │   └── PageNotFound.jsx
    ├── constant.js
    └── App.jsx
```

---

## 💡 Key Design Decisions

**Why `httpOnly` cookies instead of localStorage?**
`httpOnly` cookies are inaccessible to JavaScript, protecting tokens from XSS attacks. `localStorage` is vulnerable to script injection.

**Why refresh tokens?**
Short-lived access tokens (1 day) reduce the risk of token theft. Refresh tokens allow silent re-authentication without requiring the user to log in again.

**Why WebSockets for the watchlist?**
Polling (repeated HTTP requests every 2 seconds) wastes server resources. WebSockets maintain a single persistent connection and the server pushes updates as data changes — the same architecture used by real trading platforms.

**Why seed data on register?**
In a real trading system, holdings and positions are created automatically by an order execution engine. For this demo, seeding on registration gives every new user a fully populated dashboard immediately.

**Why Express 5?**
Express 5 introduces async error propagation out of the box — thrown errors in async route handlers are automatically forwarded to the global error handler without requiring explicit `try/catch` or `next(err)` calls.

---

## 🙋 Author

**Jashan Maan**  
[GitHub](https://github.com/Jashan-Maan) · [LinkedIn](https://www.linkedin.com/in/jashan-maan/)
