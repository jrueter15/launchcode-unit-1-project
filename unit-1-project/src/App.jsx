import SignupLogin from './components/SignupLogin/SignupLogin'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
    const mockWins = [
    { id: 1, text: "Went for a walk" },
    { id: 2, text: "Read 5 pages of a book" },
    { id: 3, text: "Meditate for 5 minutes" }
  ];

  // Tracks if the user is logged in, defaults to false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>    
      <div className="container">
        {/*Checks to see if isAuthenticated is true before allowing access to the Navbar and other elements */}
        {isAuthenticated ? (
          <>
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={
                  isAuthenticated ? <Home wins={mockWins} /> : <SignupLogin onAuthSuccess={() => setIsAuthenticated(true)} />
                } />
                {/*Passes mockWins as prop*/}
                <Route path="/home" element={<Home wins={mockWins} />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <footer>
              <ul>
                  <li>
                    <a href="https://jamesclear.com/">James Clear - author of Atomic Habits and inspiration for this app</a>
                  </li>
                  <li>
                      <a href="https://www.hubermanlab.com/">Informational Podcast - Huberman Lab</a>
                  </li>
                  <li>
                      Copyright 2025
                  </li>
              </ul>
            </footer>
          </>
        ) : (
          <main> 
            {/*If isAuthenticated is false, will rerun */}
            <SignupLogin onAuthSuccess={() => setIsAuthenticated(true)}/>
          </main>
        )}
      </div>
    </Router>        
  );
}

export default App
