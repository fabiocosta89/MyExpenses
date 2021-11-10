import React from 'react';
import Link from 'next/link';

const SideMenuItem = ({href, name, icon, isActive}) => {
    const iName = "nav-icon " + icon;
    const aName = isActive && isActive === true ? "active" : "";

    return (
        <li className="nav-item">
            <Link href={href}>
                <a className={`nav-link ${aName}`}>
                    <i className={iName}></i>
                    <p>{name}</p>
                </a>
            </Link>
        </li>
    );
};

export default SideMenuItem;