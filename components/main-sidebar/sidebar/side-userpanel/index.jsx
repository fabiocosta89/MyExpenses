import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/img/Logo.png';

const SideUserPanel = () => {
    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <Image 
                    src={logo}
                    alt="User Image"
                    className="img-circle elevation-2"
                    width={33}
                    height={33}
                />
            </div>
            <div className="info">
            <a href="#" className="d-block">Fábio Costa</a>
            </div>
        </div>
    );
};

export default SideUserPanel;