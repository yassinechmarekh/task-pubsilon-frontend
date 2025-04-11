# 🚀 Next.js Authentication Project

This project is a frontend application built with **Next.js 15**, designed to work with a **NestJS API** for authentication and related features.

---

## 📦 1. Project Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/yassinechmarekh/task-pubsilon-frontend.git
   cd frontend
   ```

2. Install dependencies :

    ```bash
    npm install
    ```

## 🔐 2. Add .env.local file

Create a .env.local file in the root of your project with the following variable: NEXT_PUBLIC_SERVER_URL with your actual NestJS API URL.

## 🚀 3. Start the project
To run the frontend locally, use:

    ```bash
    npm run dev
    ```

## 4. Don't forget to start the NestJS API
Make sure your NestJS backend is running before using the app. Navigate to your NestJS project and run:

    ```bash
    npm run start:dev
    ```

## 🗂️ 5. Project Structure
Here is the folder structure of the project:

![Our structure project](/public/images/readme.png)

## ✅ Features

+ User login and authentication with secure sessions
+ Home, login, welcome, error pages with navigation
+ Reusable UI components
+ Full integration with NestJS API for user operations