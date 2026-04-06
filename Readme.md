# Zerodha Trading Platform Clone

A full-stack trading platform built as a clone of Zerodha — India's largest stock broker. This project demonstrates a complete MERN stack implementation with real-time WebSocket communication, JWT authentication, and a fully functional trading dashboard.

---

## 🏗️ Project Architecture

This is a monorepo with three separate applications:

```
jashan-maan-trading-platform/
├── client/       → Public marketing website (React + Vite)
├── dashboard/    → Trader's dashboard (React + Vite)
└── server/       → REST API + WebSocket backend (Node.js + Express)
```

**Ports (local development)**
| App | Port |
|---|---|
| Client | http://localhost:3000 |
| Dashboard | http://localhost:4000 |
| Server | http://localhost:5500 |

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
- **Buy/Sell windows** — place BUY or SELL orders for any stock in the watchlist
- **Portfolio charts** — Doughnut chart (watchlist) and Bar chart (holdings)
- **User profile dropdown** — shows name, email, and logout button

### Backend

- RESTful API with consistent `ApiResponse` / `ApiError` structure
- Joi schema validation on all inputs
- Global error handling middleware
- Auto-seeds dummy holdings and positions for every new user
- User data isolation — every user only sees their own data

### Client (Marketing Site)

- Home, About, Products, Pricing, Support pages
- Fully responsive with Tailwind CSS
- Signup page with account opening information

---

## 🛠️ Tech Stack

**Frontend (Client & Dashboard)**

- React 19
- Vite
- Tailwind CSS v4
- React Router DOM v7
- Axios
- Socket.io Client
- Chart.js + react-chartjs-2
- React Hot Toast
- React Icons

**Backend**

- Node.js
- Express 5
- MongoDB + Mongoose
- Socket.io
- JSON Web Token (jsonwebtoken)
- bcrypt
- Joi
- cookie-parser
- dotenv
- cors

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB running locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/jashan-maan-trading-platform.git
cd jashan-maan-trading-platform
```

### 2. Set up environment variables

Create a `.env` file inside the `server/` directory:

```env
MONGODB_URL=mongodb://localhost:27017/Zerodha
PORT=5500

ACCESS_TOKEN_SECRET=your_access_token_secret_here
ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
REFRESH_TOKEN_EXPIRY=7d

NODE_ENV=development
```

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
| ------ | ----------------------------- | -------------------- | ---- |
| POST   | `/api/v1/users/register`      | Register new user    | ❌   |
| POST   | `/api/v1/users/login`         | Login user           | ❌   |
| POST   | `/api/v1/users/logout`        | Logout user          | ✅   |
| POST   | `/api/v1/users/refresh-token` | Refresh access token | ❌   |
| GET    | `/api/v1/users/me`            | Get current user     | ✅   |

### Holdings

| Method | Endpoint           | Description         | Auth |
| ------ | ------------------ | ------------------- | ---- |
| GET    | `/api/v1/holdings` | Get user's holdings | ✅   |

### Positions

| Method | Endpoint            | Description          | Auth |
| ------ | ------------------- | -------------------- | ---- |
| GET    | `/api/v1/positions` | Get user's positions | ✅   |

### Orders

| Method | Endpoint                  | Description       | Auth |
| ------ | ------------------------- | ----------------- | ---- |
| POST   | `/api/v1/orders`          | Place a new order | ✅   |
| GET    | `/api/v1/orders`          | Get user's orders | ✅   |
| DELETE | `/api/v1/orders/:orderId` | Cancel an order   | ✅   |

### WebSocket Events

| Event              | Direction       | Description                        |
| ------------------ | --------------- | ---------------------------------- |
| `watchlist:update` | Server → Client | Live price updates every 2 seconds |

---

## 🔐 How Authentication Works

```
Register
  → Password hashed with bcrypt (10 salt rounds)
  → Access token (15m) + Refresh token (7d) generated
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
server/src/
├── config/          → Cookie options, Joi schemas
├── controllers/     → Business logic for each resource
├── data/            → Seed data (holdings, positions, watchlist)
├── db/              → MongoDB connection
├── middlewares/     → Auth, validation, error handling
├── models/          → Mongoose schemas
├── routes/          → Express routers
└── utils/           → ApiError, ApiResponse, asyncHandler, SeedingData

dashboard/src/
├── components/      → WatchList, BuyActionWindow, SellActionWindow, Menu, Charts
├── context/         → AppContext (user state, buy/sell window state)
├── pages/           → Holdings, Positions, Orders, Funds, Summary
└── data/            → Static seed data (fallback)

client/src/
├── components/      → Navbar, Footer, page sections
└── pages/           → Home, About, Products, Pricing, Support, Signup
```

---

## 💡 Key Design Decisions

**Why httpOnly cookies instead of localStorage?**
httpOnly cookies are inaccessible to JavaScript, protecting tokens from XSS attacks. localStorage is vulnerable to script injection.

**Why refresh tokens?**
Short-lived access tokens (15 min) reduce the risk of token theft. Refresh tokens allow silent re-authentication without requiring the user to log in again.

**Why WebSockets for the watchlist?**
Polling (repeated HTTP requests every 2 seconds) wastes server resources. WebSockets maintain a single persistent connection and the server pushes updates only when data changes — the same architecture used by real trading platforms.

**Why seed data on register?**
In a real trading system, holdings and positions are created automatically by an order execution engine. For this demo, seeding on registration gives every new user a fully populated dashboard immediately.

---

## 🙋 Author

**Jashan Maan**  
[GitHub](https://github.com/Jashan-Maan) · [LinkedIn](https://www.linkedin.com/in/jashan-maan/)
