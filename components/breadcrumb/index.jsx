import React from 'react';

const Breadcrumb = ({children}) => {
    return (
        <ol className="breadcrumb float-sm-right">
            {children}
        </ol>
    );
}

export default Breadcrumb;