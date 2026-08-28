# Serenity Planners - Luxury Event & Travel Management

Serenity Planners is a fullstack web application for bespoke wedding, luxury event, and travel planning services. Built with a modern, glassmorphic React frontend and a robust Node.js/Express backend for processing client inquiries and email notifications.

## Project Structure

```
.
├── client/                 # React + Vite + TailwindCSS Frontend
│   ├── public/
│   │   └── images/        # Static images and branding assets
│   ├── src/
│   │   ├── assets/        # Icons and visual media
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Destinations.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── EnquiryForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx   # Main Landing Page
│   │   ├── lib/
│   │   │   └── validation.js # Zod schema validation
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js + Express Backend API
│   ├── src/
│   │   ├── controllers/   # Request handlers (enquiryController.js)
│   │   ├── routes/        # API endpoints (enquiryRoutes.js)
│   │   ├── services/      # Email service (emailService.js)
│   │   ├── middleware/    # Global error & validation handlers
│   │   ├── validators/    # Server side Zod schemas
│   │   ├── app.js         # Express app configuration
│   │   └── server.js      # Server bootstrapper
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### 1. Setup Backend (`server/`)
```bash
cd server
npm install
npm run dev
```
The server will run on `http://localhost:5000`.

### 2. Setup Frontend (`client/`)
```bash
cd client
npm install
npm run dev
```
The client will run on `http://localhost:5173`.

## API Endpoints

- `GET /api/health` - Server health check
- `POST /api/enquiries` - Submit luxury event/travel inquiry
