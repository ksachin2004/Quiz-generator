# TechPrepBuddy

A modern, full-stack web application for generating, taking, and reviewing computer science quizzes. Built with React (Vite, Tailwind), Node.js, Express, and MongoDB. Designed for students preparing for technical interviews and placements.

---

##  Features

- **Interactive Quiz Generator**: Take quizzes on OS, DBMS, CN, and OOPS with instant feedbacks.
- **User Authentication**: Secure registration and login with JWT, password hashing, and protected routes.
- **Placement-Focused Content**: Curated questions and study material for core CS subjects.
- **Modern UI/UX**: Glassmorphism cards, responsive design, smooth animations, and professional layout.
- **Result Analysis**: Motivational feedback, score breakdown, and review of correct/incorrect answers.
- **Security**: Rate limiting, helmet, CORS, and input validation.

---

## ️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Framer Motion, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Other**: ESLint, dotenv, helmet, express-rate-limit

---

## Project Structure

```
TechPrepBuddy/
  client/      # React frontend (Vite, Tailwind)
  server/      # Node.js/Express backend (API, auth, MongoDB)
```

---

##  Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/ksachin2004/TechPrepBuddy.git
cd "TechPrepBuddy"
```

### 2. Setup Environment Variables
Create a `.env` file in `server/` with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Install Dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### 4. Run the Application
- **Backend**: (from `server/`)
  ```bash
  npm run dev
  # or: npm start
  ```
- **Frontend**: (from `client/`)
  ```bash
  npm run dev
  ```
- Visit: [http://localhost:5173](http://localhost:5173)

---

##  Authentication & API

### User Model
- `username` (unique, required)
- `email` (unique, required)
- `password` (hashed, required)

### Auth Endpoints
- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login with username/email & password
- `GET /api/auth/me` — Get current user info (JWT required)

### Example Register
```json
{
  "username": "sachin",
  "email": "sachin@example.com",
  "password": "yourpassword"
}
```

### Example Login
```json
{
  "identifier": "sachin", // or email
  "password": "yourpassword"
}
```

---

##  Quiz Features
- Choose subject (OS, DBMS, CN, OOPS)
- Select number of questions
- Take quiz with instant feedback
- Review results with motivational messages
- Retake quizzes and track improvement

---

##  UI/UX Highlights
- Glassmorphism card grid for subjects
- Animated transitions and responsive layout
- Professional, accessible, and mobile-friendly design

---

##  License

This project is licensed under the MIT License.

---

##  Acknowledgements
- [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)
- [Framer Motion](https://www.framer.com/motion/), [Heroicons](https://heroicons.com/) 