import React from 'react';
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
import { useStatevalue } from './StateProvider';

function Navbar() {

    const [{ user }, dispatch] = useStatevalue("");

    return (
        <div className="Navbar">

            <div className="Nav_left">
                <div className="logo">
                    <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="logo"></img>
                </div>
                <div className="search">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
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
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
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