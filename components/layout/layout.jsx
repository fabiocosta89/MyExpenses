import React from 'react';

import Navbar from '../navbar/navbar';

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;