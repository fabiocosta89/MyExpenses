import React from 'react';

import BrandLogo from './brand-logo';
import Sidebar from './sidebar';
import SideMenu from './sidebar/side-menu';
import SideMenuItem from './sidebar/side-menu/side-menu-item';
import SideUserPanel from './sidebar/side-userpanel';

const MainSideBar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand logo */}
            <BrandLogo />
            {/* Sidebar */}
            <Sidebar>
                <SideUserPanel />
                <SideMenu>
                    <SideMenuItem href="/" name="Dashboard" icon="fas fa-th" isActive={true} />
                    <SideMenuItem href="/expense-types" name="Expense Types" icon="fas fa-th" />
                    <SideMenuItem href="/expenses" name="Expenses" icon="far fa-circle" />
                    <SideMenuItem href="/categories" name="Categories" icon="far fa-circle" />
                </SideMenu>
            </Sidebar>
        </aside>
    );
};

export default MainSideBar;