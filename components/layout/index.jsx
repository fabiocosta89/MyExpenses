import React from 'react';

import Navbar from '../navbar';
import MainSideBar from '../main-sidebar';

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <Navbar />
            <MainSideBar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;