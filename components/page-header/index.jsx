import React from 'react';

import Breadcrumb from '../breadcrumb';

const PageHeader = ({title, children}) => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <Breadcrumb>
                            {children}
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;