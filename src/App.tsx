import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MessageOverview from './components/message-overview';
import LoginPage from './components/login';
import Login from './components/login';


function App() {

    if(window.sessionStorage.getItem("loggedinUser") != null)
    {
        return (
        
            <>
                <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
                    <a
                        className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none"
                        href="/"
                    >
                    Studentbook
                    </a>
                    <nav>
                        <ul className="nav justify-content-center">
                            <li>
                                <Link to="/" className="nav-link px-4 fs-5 text-white">
                                    Messages
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="nav-link px-4 fs-5 text-white">
                                Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="container mt-5">
                    <Routes>
                        <Route path="/" element={<MessageOverview/>} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </main>
            </>
        );
        }
     
    
    else
    {
        return (
        
            <>
                <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
                    <a
                        className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none"
                        href="/"
                    >
                    Studentbook
                    </a>
                    <nav>
                        <ul className="nav justify-content-center">
                            <li>
                                <Link to="/messages" className="nav-link px-4 fs-5 text-white">
                                    Messages
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-4 fs-5 text-white">
                                Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="container mt-5">
                    <Routes>
                        <Route path="/messages" element={<MessageOverview />} />
                        <Route path="/" element={<LoginPage />} />
                    </Routes>
                </main>
            </>
        );
    }  
  
}

export default App;
