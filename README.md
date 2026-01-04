# 🧠 HabitTracker

Helping you build better habits with the right tools and support.  
Create, track, and manage daily habits to build streaks and boost productivity.

---

## 🌐 Live Demo

- 🎯 **Primary:** [Habit Tracker](https://habit-tracket.netlify.app)  
- 🔁 **Backup:** [Cloudflare Backup](https://habit-tracker-d2m.pages.dev)

---

## 🖼️ Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/d2c812c9-890a-4a51-911c-ce295d630e7c" alt="White Habit Tracker UI" width="48%" />
  <img src="https://github.com/user-attachments/assets/dbd572d2-03cc-4799-888f-ee4231718018" alt="Dark Habit Tracker UI" width="48%" />
</p>

---

## ✨ Features

- 🔐 **User Authentication**  
  Secure login and registration using Email/Password and Google OAuth.

- ✅ **Daily Habit Completion**  
  Mark habits as complete each day and maintain streaks with visual feedback.

- 📊 **Progress Visualization**  
  Dynamic progress bars and streak badges to motivate consistent behavior.

- 🧩 **Habit Management**  
  Create, update, and delete habits with category tagging and image support.

- 👤 **User-Specific Data Filtering**  
  Only the logged-in user's habits are displayed, ensuring privacy and personalization.

---

## 🛠️ Tech Stack

### Frontend
- React  
- Tailwind CSS  
- Styled Components  
- React Router  
- Lottie React  
- Framer Motion  

### Backend
- Express.js  
- MongoDB  
- CORS  

### Authentication
- Firebase Authentication  

### Hosting
- Vercel (Server)  
- Netlify (Client)  
- Cloudflare (Backup Client)  

---


## 📦 Installation & Setup

### 1. Clone the repository

git clone https://github.com/Sakib8git/Project1-habit-tracker-clint.git

### 2. Install dependencies

npm install

### 3. Create .env file

VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_API_BASE=https://your-server-url.com

### 4. Start the

npm run dev

## 📦 Backend Setup

cd server
npm install
nodemon index.js

### Create .env file

DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password
