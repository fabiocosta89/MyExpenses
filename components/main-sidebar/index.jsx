import React from 'react';

import BrandLogo from './brand-logo';
import Sidebar from './sidebar';

const MainSideBar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand logo */}
            <BrandLogo />
            {/* Sidebar */}
            <Sidebar />
        </aside>
    );
};

export default MainSideBar;