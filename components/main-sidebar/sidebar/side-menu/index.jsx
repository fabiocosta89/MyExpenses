import React from 'react';

import SideMenuItem from './side-menu-item';

const SideMenu = () => {
    return (
        <ul className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
                <SideMenuItem href="/" name="Dashboard"/>
                <SideMenuItem href="/" name="Settings"/>
        </ul>
    );
};

export default SideMenu;