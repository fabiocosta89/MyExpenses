import React from 'react';
import Link from 'next/link';

const SideMenuItem = ({href, name}) => {
    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>{name}</p>
                </a>
            </Link>
        </li>
    );
};

export default SideMenuItem;