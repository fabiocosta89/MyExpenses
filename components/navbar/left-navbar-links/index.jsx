import React from 'react';
import Link from 'next/link'

const LeftNavbarLinks = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
            </li>
        </ul>
    );
};

export default LeftNavbarLinks;