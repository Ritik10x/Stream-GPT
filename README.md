Live - https://stream-gpt-ai.netlify.app/


AI-Powered Movie Recommendation Platform

Stream-GPT-AI is a Netflix-inspired movie recommendation web application that leverages Artificial Intelligence to deliver intelligent movie suggestions based on natural language input. The application integrates Gemini AI for recommendation generation and the TMDB API for real-time movie data, providing users with an engaging and scalable movie discovery experience.

🚀 Features

🤖 AI-Powered Movie Recommendations using Gemini AI

🔍 Natural Language Search for discovering movies

🎥 Real-Time Movie Data (posters, ratings, metadata) via TMDB API

🎨 Netflix-Inspired Responsive UI

🧠 Global State Management with Redux Toolkit

🔐 User Authentication (Sign-In & Logout)

⚡ Optimized API Calls using Redux caching & memoization

🌍 Production Deployment on Netlify with environment variables


⚡ Performance Optimization & API Call Reduction

To ensure scalability and optimal performance, Stream-GPT-AI minimizes unnecessary API calls by leveraging Redux state management and in-memory caching.

API responses from TMDB and Gemini AI are stored centrally in Redux store

Before making any new API request, the application checks if the required data already exists in the store

If data is available, it is reused instead of triggering another network request

This prevents redundant API calls during:

Page navigation

Component re-renders

Back-and-forth user interactions

By using this approach, the application supports unlimited user navigation without breaking or overloading APIs, even when users revisit pages multiple times. This design significantly improves performance, reduces latency, and makes the application more scalable for high traffic usage.

🔧 Techniques Used

Redux Toolkit for centralized state storage

Conditional data fetching logic

In-memory caching via global state

Avoidance of unnecessary re-fetching



🛠 Tech Stack

Frontend

React (Vite)

JavaScript

Redux Toolkit

CSS / Tailwind CSS

Netlify (Deployment)

Backend

Node.js

Express.js

MongoDB (Hosted)

bcrypt (Password Hashing)

Render (Backend Deployment)

APIs & Services

Gemini AI

TMDB REST API
