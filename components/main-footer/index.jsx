import React from 'react';

import RightFooter from './right-footer';
import LeftFooter from './left-footer';

const MainFooter = () => {
    return (
        <footer className="main-footer">
            <RightFooter />
            <LeftFooter />
        </footer>
    );
};

export default MainFooter;