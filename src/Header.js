import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
      {/* logo */}
      <Link to='/'>
        <img
            className="hader_logo"
            src="https://www.kindpng.com/picc/m/17-172246_amazon-logo-white-amazon-logo-png-on-black.png"
            alt="am"
        />
      </Link>

      {/* searchbox */}

    
      <input type="text" className="header_searchInput"/>
      <SearchIcon className='header_searchIcon'></SearchIcon>
      {/* nav */}
      {/* cart icon */}
    </nav>
  );
}

export default Header;
