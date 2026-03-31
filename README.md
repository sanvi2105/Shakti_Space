# 🌸 Shakti Space

## Overview

This project is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React, Node.js)** with the goal of empowering women by providing access to job opportunities, learning resources, and a supportive community.

The platform is designed to be **inclusive**, welcoming women from **all educational and professional backgrounds**—whether highly educated or just beginning their journey.


## Mission

To create a space where women can:

* Discover job opportunities
* Learn and upskill
* Share their journeys
* Connect with organizations

## User Roles

### 👤 User (Job Seeker)

* Can register and log in
* Browse and apply for job opportunities
* Track application status via dashboard
* Access learning resources and modules
* Read and share success stories


### 🏢 Organisation

* Can register and log in
* Post job opportunities
* View applicants
* Manage hiring process
* Track engagement through dashboard


## Tech Stack

### 🔹 Frontend

* React.js
* Reactstrap / Bootstrap
* Axios
* React Router

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (with Mongoose)
* JWT Authentication
* bcrypt for password hashing

## Authentication

* Secure login & registration using JWT
* Passwords hashed using bcrypt
* Role-based access (User / Organisation)


## Key Features

### 🧾 Job Portal

* Organisations can post job openings
* Users can apply regardless of educational background


### 📊 Dashboards

* **User Dashboard:**

  * View applied jobs
  * Track application progress

* **Organisation Dashboard:**

  * View job postings
  * Track applicants and hiring


### 📚 Learning Resources

* Structured modules for skill development
* Helps users improve knowledge and employability


### 🌟 Success Stories

* Platform for sharing real-life journeys
* Inspires and motivates other users


### 🧭 Inclusive Design

* Built for women from **all walks of life**
* No strict barriers based on education or experience


## How It Works

1. User/Organisation registers
2. Logs in securely
3. Based on role:

   * Users explore jobs and apply
   * Organisations post jobs and review candidates
4. Users enhance skills through resources
5. Community grows through shared success stories


## Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd project-folder
```

---

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=8001
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

## 🌐 Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas


## Acknowledgement

This project is built with the vision of empowering women by providing opportunities, resources, and a platform to grow, regardless of their background.


## Live Demo
Check out the live website here: [ShaktiSpace Demo](https://shaktispace.onrender.com)

