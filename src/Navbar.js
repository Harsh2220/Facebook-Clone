import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import { Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';

function Navbar() {
    return (
        <div className="Navbar">

            <div className="Nav_left">
                <div className="logo">
                    <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"></img>
                </div>
                <div className="search">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="Nav_middle">
                <div className="option option_active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="option">
                    <FlagOutlinedIcon fontSize="large" />
                </div>
                <div className="option">
                    <SubscriptionsRoundedIcon fontSize="large" />
                </div>
                <div className="option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="option">
                    <PeopleRoundedIcon fontSize="large" />
                </div>
            </div>

            <div className="Nav_right">
                <div className="Nav_info">
                    <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/94193782_228612315058057_8158821850890108928_n.jpg?_nc_cat=100&amp;ccb=1-3&amp;_nc_sid=dbb9e7&amp;_nc_ohc=cWs_RnwSgDYAX88U2FY&amp;_nc_ht=scontent.famd1-3.fna&amp;tp=27&amp;oh=a3907fc45533bc9106d34715800dc8f8&amp;oe=60969247"/>
                    <h4>Harsh</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
            
        </div>
    );
}

export default Navbar;