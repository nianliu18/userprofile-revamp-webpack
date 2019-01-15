import React from 'react'; 
import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' exact className='nav-item'> About </Link>
            <Link to='experience' className='nav-item'> Experience </Link>
            <Link to='projects' className='nav-item'> Projects </Link>
        </nav>
    );
}

export default NavBar;