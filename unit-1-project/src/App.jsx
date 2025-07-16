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
      <div>
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

        <footer>Footer</footer>
      </div>
    </Router>        
  )
}

export default App
