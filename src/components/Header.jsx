import React from 'react'
import "../styles/header.css"
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            <div className='logo'>W</div>
            <div className='logo-text'>WASSERSTOFF</div>
        </div>
        <div className='search-container'>
            <input type="text" />
            <SearchIcon/>
        </div>
        <div className='nav-container'>
            <Link to={"/"} className="link">Statistics</Link>
            <Link to={"/"} className="link">Overview</Link>
            <Link to={"/"} className="link">Dashboard</Link>
            <Link to={"/"} className="link">Analytics</Link>
        </div>
        <div className='profile-container'>
            <PermIdentityIcon/>
            <TuneIcon/>
        </div>
    </div>
  )
}

export default Header