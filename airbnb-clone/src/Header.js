import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
function Header() {
    return (
            <div className="header">
            <Link to= "/">
            <img className="header__icon" src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png" alt="logo"/>
            </Link>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header__right">
                <Button className="header__hostButton"> Become a host </Button>
                <Button className="header__hostButton">
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                </Button>
               <Button className="header__hostButton" >
                    <Avatar/>
               </Button>
               
            </div>
        </div>
    )
}

export default Header;
