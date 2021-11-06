import React from 'react';

const SideMenu = ({children}) => {
    return (
        <ul className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
                {children}
        </ul>
    );
};

export default SideMenu;