import React from 'react';
import Link from 'next/link';

const SideMenuItem = ({href, name, icon}) => {
    const cName = "nav-icon " + icon;

    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link">
                    <i className={cName}></i>
                    <p>{name}</p>
                </a>
            </Link>
        </li>
    );
};

export default SideMenuItem;