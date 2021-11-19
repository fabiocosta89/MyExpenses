import React from 'react';

const ResponsiveHoverTable = ({cardTitle, head, body}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{cardTitle}</h3>
            </div>
            <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            {head.map((value, index) => {
                                return <th key={index}>{value}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResponsiveHoverTable;