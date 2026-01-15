import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px' // Adds a little space between links
  };
  return (<div>
    <ul style={{
      backgroundColor: 'lightgray',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <li style={{
        color: 'white'
      }}>
        <Link to={'/about'} style={linkStyle}>About</Link>
        <Link to={'/'} style={linkStyle}>Home</Link>
        <Link to={'/contact'} style={linkStyle}>Contact</Link>
        <Link to={'/services'} style={linkStyle}>Services</Link>
      </li>
    </ul>
  </div>)
}
