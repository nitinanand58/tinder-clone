import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import TinderLogo from "./TinderLogo.png"


const Header = () => {
    return (
        <div className='header'>
        <IconButton>
        <PersonIcon fontSize="medium" className="header__icon"/>
        </IconButton>
        
        <img 
        className="header__logo"
        src={TinderLogo} 
        alt="TinderLogo"/>

        <IconButton>
        <ForumIcon fontSize="medium" className="header__icon"/>
        </IconButton>
       
            
        </div>
    )
}

export default Header
