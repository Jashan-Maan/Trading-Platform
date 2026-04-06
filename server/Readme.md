# Trading Platform - Backend Server

This directory contains the Node.js backend server for the Trading Platform. It processes business logic, interacts with the database, and provides both a RESTful API and real-time WebSocket communication for the client and dashboard applications.

## Technologies Used

- **[Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)**: A fast, unopinionated web framework for building the core REST API.
- **[MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)**: NoSQL database coupled with an elegant Object Data Modeling (ODM) library for data persistence.
- **[Socket.io](https://socket.io/)**: Real-time bidirectional event-based communication, essential for live price updates and real-time order tracking.
- **[JSON Web Token (JWT)](https://jwt.io/) & [Bcrypt](https://www.npmjs.com/package/bcrypt)**: Tools for secure user authentication, authorization, and password hashing.
- **[Joi](https://joi.dev/)**: Powerful schema description language to validate incoming API request payloads.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Module to load environment variables from a `.env` file into `process.env`.
- **[CORS](https://www.npmjs.com/package/cors) & [cookie-parser](https://www.npmjs.com/package/cookie-parser)**: Middleware libraries for handling Cross-Origin Resource Sharing constraints and parsing HTTP cookies.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed (v18 or above is recommended).
- **MongoDB**: You need a running MongoDB instance (either installed locally or hosted via a service like MongoDB Atlas).
- **npm**: The Node package manager.

### Keep the Environment Configured

Before running the server, please make sure you configure your environment variables.
Create a `.env` file in the root of the `server` folder. Typically, it should specify properties like:

```env
MONGODB_URL=mongodb://localhost:27017/zerodha
PORT=5500
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=7d
NODE_ENV=development
```


### Installation

1. Navigate into the `server` directory (if you are not already there):
   ```bash
   cd server
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the server in development mode, which uses `nodemon` to automatically restart upon file saves, run:

```bash
npm run dev
```

To run the server in a production environment, run:

```bash
npm start
```

## Structure & Architecture

The server acts as the central hub: 
- It processes HTTP requests (REST API) coming from the `client` and `dashboard`.
- It pushes real-time market data to connected clients using `Socket.io`.
- It handles complex business operations (e.g., executing trades, validating orders) securely behind JWT authentication.
