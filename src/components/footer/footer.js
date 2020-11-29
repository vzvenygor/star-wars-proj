import React from 'react';
import starWarsLogo from '../../img/star-wars-logo.png';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<div>
    <hr className='hr'></hr>
    <div className='footer'>
        <nav className='footerNav'>
            <ul>
                <Link to='/people'>
                    <li>Characters</li>
                </Link>
                <Link to='/planets'>
                    <li>Planets</li>
                </Link>
                <Link to='/films'>
                    <li>Films</li>
                </Link>
            </ul>
            <ul> 
                <Link to='/vehicles'>
                    <li>Vehicles</li>
                </Link>
                <Link to='/starships'>
                    <li>Starships</li>
                </Link>
                <Link to='/species'>
                    <li>Species</li>
                </Link>
            </ul>
        </nav>

        <div className='starWarsLogo'>
            <img src={starWarsLogo} alt='Star Wars Logo'/> 
            <p className='footerDescr'>All you want to know about Star Wars world</p>
        </div> 

        <div className='footerIcons'>
        <p className='authorDescr'>exam project by Volodymyr Zvenyhorodskyi</p>
        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer noopener">
            <FaFacebookSquare />
        </a>
        <a href='https://www.linkedin.com' target="_blank" rel="noreferrer noopener">
            <FaLinkedin />
        </a>
        <a href='https://github.com/' target="_blank" rel="noreferrer noopener">
            <FaGithubSquare />
        </a>
        </div>
    </div>
</div>
  )
}

export default Footer;