import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

function Navbar() {
  const [title, settitle] = useState('Udemy Offers');

  const links = [
    { id: 0, title: 'Udemy Offers', icon: <FaHome />, path: '/' },
    { id: 1, title: 'About', icon: <FaInfoCircle />, path: '/about' }
  ];

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
      </div>
    </div>
  );
}
export default Navbar;
