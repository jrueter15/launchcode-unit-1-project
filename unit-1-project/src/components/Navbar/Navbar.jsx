import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Dot.Today</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
