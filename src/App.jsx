import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header.jsx';
import Footer from './Components/footer/Footer.jsx';
import Chatbot from './Components/chatbot/chatbot.jsx';
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Login from './pages/login/login.jsx';
// import SignUp from "./pages/sign-up/sign-up.jsx";
import Approvestudent from './Components/approve/approve.jsx';
import About from './Components/header/About.jsx';
import CouresesHeader from './Components/header/CouresesHeader.jsx';
import Verifi from './Components/approve/Verifi.jsx';

function App() {
    return (
        <Router>
            <div>
                {/* Render Chatbot component */}
                <Chatbot />
                {/* Header */}
                <Header />
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/sign-up" element={<SignUp />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<CouresesHeader />} />
                    <Route path="/approve" element={<Approvestudent />} />
                    <Route path="/verifi" element={<Verifi />} />
                </Routes>
                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
