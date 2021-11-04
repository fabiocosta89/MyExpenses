import React from 'react';

import LeftNavbarLinks from './left-navbar-links/left-navbar-links';

const Navbar = () => {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <LeftNavbarLinks />
        </nav>
    );
};

export default Navbar;