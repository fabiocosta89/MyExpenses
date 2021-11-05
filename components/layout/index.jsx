import React from 'react';

import Navbar from '../navbar';
import MainSideBar from '../main-sidebar';
import MainFooter from '../main-footer';

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <Navbar />
            <MainSideBar />
            <main>{children}</main>
            <MainFooter />
        </div>
    );
};

export default Layout;