import React from 'react';
import { useTable } from 'react-table'

const ResponsiveHoverTable = ({cardTitle, columns, data}) => {
    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{cardTitle}</h3>
            </div>
            <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap" {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map((headerGroup, index) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                    {
                                        headerGroup.headers.map((column, index) => (
                                            <th {...column.getHeaderProps()} key={index}>
                                            {
                                                column.render('Header')
                                            }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row, index) => {
                                prepareRow(row)
                                return (
                                <tr {...row.getRowProps()} key={index}>
                                    {
                                    row.cells.map((cell, index) => {
                                    
                                    return (
                                        <td {...cell.getCellProps()} key={index}>
                                        {
                                            cell.render('Cell')
                                        }
                                        </td>
                                    )
                                    })}
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResponsiveHoverTable;