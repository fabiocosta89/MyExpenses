import React from 'react';

import BrandLogo from './brand-logo';
import Sidebar from './sidebar';
import SideMenu from './sidebar/side-menu';
import SideMenuItem from './sidebar/side-menu/side-menu-item';
import SideMenuItemExpand from './sidebar/side-menu/side-menu-item-expand';

const MainSideBar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand logo */}
            <BrandLogo />
            {/* Sidebar */}
            <Sidebar>
                <SideMenu>
                    <SideMenuItem href="/" name="Dashboard" icon="fas fa-th"/>
                    <SideMenuItemExpand href="/expenses" name="Expenses">
                        <SideMenuItem href="/expenses" name="Board" icon="far fa-circle"/>
                    </SideMenuItemExpand>
                </SideMenu>
            </Sidebar>
        </aside>
    );
};

export default MainSideBar;