import SignupLogin from './components/SignupLogin/SignupLogin'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
    const mockWins = [
    { id: 1, text: "Went for a walk" },
    { id: 2, text: "Read 5 pages of a book" },
    { id: 3, text: "Meditate for 5 minutes" }
  ];

  return (
    <Router>    
      <div className="container">
        <header>
          <Navbar />
        </header>

        <main>

          <SignupLogin/>

          <Routes>
            <Route path="/home" element={<Home wins={mockWins}/>} />
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
      </div>
    </Router>        
  )
}

export default App
