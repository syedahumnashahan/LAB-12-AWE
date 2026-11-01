# React + Raw Node.js Integration

## Introduction
This project demonstrates communication between a React frontend and a Raw Node.js backend using HTTP requests.

## Technologies Used
- React.js
- Node.js
- JavaScript
- HTTP Module
- React Hooks

## Backend
A basic HTTP server is created using Node.js HTTP module.

- Server runs on port 5000.
- API endpoint: `/api/info`
- Returns a JSON message.
- CORS headers allow frontend communication.

## Frontend
React uses:
- `useState()` to store the backend response.
- `useEffect()` to fetch data from the backend.
- `fetch()` to send an HTTP request.

## How to Run

### Start Backend
`node backend/server.js`

### Start Frontend
`cd frontend`

`npm start`

## Expected Output
React is communicating with Node.js

## Conclusion
This project demonstrates successful communication between a React frontend and a Raw Node.js backend using an HTTP API.
