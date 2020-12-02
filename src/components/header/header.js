import React from 'react';
import starWarsLogo from '../../img/star-wars-logo.png';
import './header.css';
import { Link } from 'react-router-dom';
import Search from '../search/search';

const Header = () => {
  return (
<div>
    <div className='topHeader'>
        <div className='logo-header'>
            <Link to='/'>
                <img src={starWarsLogo} alt='Star Wars Logo'/> 
            </Link>
        </div> 
        <nav className='nav'>
            <ul>
                <Link to='/people'>
                    <li>CHARACTERS</li>
                </Link>
                <Link to='/planets'>
                    <li>PLANETS</li>
                </Link>
                <Link to='/films'>
                    <li>FILMS</li>
                </Link>
                <Link to='/vehicles'>
                    <li>VEHICLES</li>
                </Link>
                <Link to='/starships'>
                    <li>STARSHIPS</li>
                </Link>
                <Link to='/species'>
                    <li>SPECIES</li>
                </Link>
            </ul>
        </nav>
        <Link to='/search'>
            <button className='searchButton'>Search</button>
        </Link>    
    </div>
    <hr className='hr'></hr>

</div>
    
  )
}

export default Header;