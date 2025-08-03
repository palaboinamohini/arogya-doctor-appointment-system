🏥 Healthcare Appointment Booking Interface

    This is a simple web-based interface that allows users to view available doctors, check their time slots, and book appointments seamlessly. It is built using vanilla HTML, CSS, and JavaScript for educational and demonstration purposes.

📸 Features

    1.View a list of doctors and their specialties
    2.Check available time slots
    3.Book an appointment via a simple form
    4.Appointment confirmation message


🛠️ Tools & Libraries Used

    🖥️ Frontend
        React.js – Component-based UI development
        HTML5 – Markup for content structure
        CSS3 – Styling and layout
        JavaScript (ES6+) – Interactivity and logic
        Environment Variables  – Used to store API base URL (`REACT_APP_API_URL`)
       ✅ Deployed as a Static Website on [Render.com](https://render.com)

    🧠 Backend
        Node.js – JavaScript runtime for backend logic
        Express.js – Web framework for handling API requests
        (Optional for future) MongoDB / SQL – For appointment data storage
        (Optional) CORS, body-parser – Middleware support
        ✅ Deployed as a Web Service on [Render.com](https://render.com)
    
    🌐 Deployment (Render.com)
       🔗  Frontend (Static Website) : [https://arogya-doctor-appointment-system.onrender.com](https://arogya-doctor-appointment-system.onrender.com)
       🔗  Backend (Web Service) : [https://arogya-doctor-appointment-system-backend.onrender.com](https://arogya-doctor-appointment-system-backend.onrender.com)
       ✅ Frontend uses backend API via `REACT_APP_API_URL` environment variable


🚀 Improvements With More Time

    With more development time and backend integration, the following enhancements could be added:
        ✅ Persistent Storage (e.g., Firebase, MongoDB)
        📅 Calendar UI for date selection with disabled unavailable slots
        📱 Fully Responsive UI for mobile and tablet screens
        🧪 Input validation and error-handling improvements


⚠️ Challenges Faced & Solutions

    1. Connecting Frontend and Backend
    Challenge: Setting up API routes to communicate between React and Express.
    Solution: Used axios (or fetch) on the frontend and created RESTful API endpoints using Express.js.

    2. Form Data Retention
    Challenge: Resetting form values after submission while keeping confirmation visible.
    Solution: After showing the confirmation message, the form fields were reset programmatically without reloading the page.

    3. UI Clarity
    Challenge: Making the UI clear and usable with only HTML/CSS, without a UI framework.
    Solution: Used clean layout, Flexbox/Grid, and card-style design to separate components visually.

    4. CORS Errors
    Challenge: React frontend was blocked from calling backend due to cross-origin restrictions.
    Solution: Installed and configured cors middleware in the Express app.

    5. State Management in React
    Challenge: Managing form inputs and selected doctor/time slot.
    Solution: Used useState hooks for controlled inputs and conditional renderin

    6. Frontend and Backend Communication**
    Challenge: CORS errors and mismatched API routes.
    Solution: Used `cors` middleware in backend and ensured consistent API base URLs in React frontend.

    7. Deploying Full Stack App**
    Challenge: Hosting frontend and backend together, configuring environment properly.
    Solution: Deployed backend on **Render** and frontend on **Netlify/Vercel**, connected using environment variables.


📦 How to Run the Project

    🔹 Frontend (React.js)
        cd frontend
        npm install
        npm start
        Runs on: http://localhost:3001

    🔸 Backend (Node.js + Express)
        cd backend
        npm install
        node server.js
        Runs on: http://localhost:5000

🧑‍💻 Author

    Palaboina Mohini
    Email: palaboina.99267.mohini@gmail.com
    Location: Hemunagar, Bilaspur, Chhattisgarh, India
    github.link : https://github.com/palaboinamohini/arogya-doctor-appointment-system.git
