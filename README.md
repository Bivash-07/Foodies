# 🍽️ Foodies

**Foodies** is a simple food ordering along recipe-generation web app built using Node.js and plain HTML/CSS/JS. It allows users to register, log in, explore recipes and menus, and simulate placing orders. 
It’s a great starting project for learning server-side JavaScript without frameworks like React or templating engines.

Live Demo 👉 [https://foodies-vytx.onrender.com]


## 📁 Project Structure
foodies/
├── public/ # Static assets (CSS/images/scripts)
├── Menu.html 
├── home.html 
├── index.html # Landing page
├── login.html 
├── recipe.html 
├── register.html 
├── .gitignore
├── connection.js # MongoDB connection setup
├── orders.js
├── registers.js 
├── test.js 
├── package.json
├── package-lock.json


## 🚀 Features

- 🌐 Static HTML-based frontend
- 📦 User registration and login system
- 🥘 Menu and recipe listing
- 🛒 Simulated order placement
- 💾 MongoDB-based data storage (via `connection.js`)
- 🔗 Simple routing and backend logic using Node.js

## 🛠️ Technologies Used

- Node.js 
- MongoDB (via `connection.js`)
- HTML, CSS, JavaScript
- No frontend framework used



## 📦 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/foodies.git](https://github.com/Bivash-07/Foodies.git
   cd foodies
   
2. Install dependencies
   npm install

3. Set up your MongoDB connection
   In connection.js,
   mongoose.connect('mongodb-connection-string');

4. Run the application
   node test.js
