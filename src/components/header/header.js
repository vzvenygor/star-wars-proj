import React from 'react';
import starWarsLogo from '../../img/star-wars-logo.png';
import { FaSearch } from 'react-icons/fa';
import './header.css';


const Header = () => {
  return (
<div>
    <div className='header'>
        <div className='logo-header'>
            <img src={starWarsLogo} alt='Star Wars Logo'/> 
        </div> 
        <nav className='nav'>
            <ul>
                <li>CHARACTERS</li>
                <li>PLANETS</li>
                <li>FILMS</li>
                <li>VEHICLES</li>
                <li>STARSHIPS</li>
                <li>SPECIES</li>
            </ul>
        </nav>

        <div className='search'>
            <input type="search" name="search" placeholder="Search" /> 
            <FaSearch />
        </div>

    </div>

    <hr className='hr'></hr>

</div>
    
  )
}

export default Header;