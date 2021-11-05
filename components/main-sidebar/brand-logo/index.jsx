import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/img/Logo.png';

const BrandLogo = () => {
    return (
        <Link href="/">
            <a className="brand-link">
                <Image
                    src={logo}
                    alt="MyExpenses Logo"
                    className="brand-image img-circle elevation-3"
                    width={33}
                    height={33}
                />
                <span className="brand-text font-weight-light">MyExpenses</span>
            </a>
        </Link>
    );
};

export default BrandLogo;