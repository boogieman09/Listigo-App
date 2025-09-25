import { Link } from 'react-router-dom';
import Logo from '../Assets/Asset 2.png';
import '../Components/Navbar.css';


const Navbar = () => {
  return (
    <header>
        <nav className='nav_Container'>
            <img src={Logo} alt='logo.png' className='Logo_png'/>
            <Link to="/"  className="home-btn">Home</Link>
        </nav>
    </header>
  );
};

export default Navbar;