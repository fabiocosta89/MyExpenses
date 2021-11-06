import React from "react";
import Link from 'next/link';

const SideMenuItemExpand = ({href, name, children}) => {
    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        {name}
                        <i className="right fas fa-angle-left"></i>
                    </p>
                </a>
            </Link>
            <ul className="nav nav-treeview">
                {children}
            </ul>
        </li>
    );
}

export default SideMenuItemExpand;