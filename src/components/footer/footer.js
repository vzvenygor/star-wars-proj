import React from 'react';
import starWarsLogo from '../../img/star-wars-logo.png';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
<div>
    <hr className='hr'></hr>
    <div className='footer'>
        <nav className='footerNav'>
            <ul>
                <li>Characters</li>
                <li>Planets</li>
                <li>Films</li>
            </ul>
            <ul>  
                <li>Vehicles</li>
                <li>Starships</li>
                <li>Species</li>
            </ul>
        </nav>

        <div className='starWarsLogo'>
            <img src={starWarsLogo} alt='Star Wars Logo'/> 
            <p className='footerDescr'>All you want to know about Star Wars world</p>
        </div> 

        <div className='footerIcons'>
        <p className='authorDescr'>exam project by Volodymyr Zvenyhorodskyi</p>
            <FaFacebookSquare />
            <FaLinkedin />
            <FaGithubSquare />
        </div>
    </div>
</div>
  )
}

export default Footer;