import React, { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../utils/Themes';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const links = [
    { id: 0, title: 'Udemy Offers', icon: <FaHome />, path: '/' },
    { id: 1, title: 'About', icon: <FaInfoCircle />, path: '/about' }
  ];

  const [title, settitle] = useState('Udemy Offers');
  const [nightMode, setnightMode] = useState(false);

  useEffect(() => {
    for (const [key, value] of Object.entries(
      nightMode ? darkTheme : lightTheme
    )) {
      document.querySelector(':root').style.setProperty(key, value);
    }
  }, [nightMode]);

  return (
    <div className="navBar">
      {/* <h1 className="navBar-title">{title}</h1> */}
      <div className="navItem-container">
        {links.map(link => (
          <NavLink
            key={link.id}
            className="navItem"
            activeClassName="navItem-active"
            onClick={() => settitle(link.title)}
            to={link.path}
            exact
          >
            {link.icon}
          </NavLink>
        ))}
        {nightMode ? (
          <FaMoon
            className="navItem"
            style={{ color: 'orange' }}
            onClick={() => setnightMode(!nightMode)}
          />
        ) : (
          <FaSun
            className="navItem"
            style={{ color: 'orange' }}
            onClick={() => setnightMode(!nightMode)}
          />
        )}
      </div>
    </div>
  );
}
export default Navbar;
