import React from 'react';
import Head from 'next/head';

import PageHeader from '../../../components/page-header';
import BreadcrumbItem from '../../../components/breadcrumb/breadcrumb-item';
import ResponsiveHoverTable from '../../../components/table';
import TableEditButton from "../../../components/tableEditButton";
import TableDeleteButton from "../../../components/tableDeleteButton";
import TableAddButton from '../../../components/tableAddButton/tableAddButton';

const Categories = () => {
    const title = "Expenses Categories";
    const data = React.useMemo(
        () => [
            {
                id: '1',
                name: 'Test 1',
                action: <>
                    <TableEditButton href="#" />
                    <TableDeleteButton href="#" />
                </>,
            },
            {
                id: '2',
                name: 'Test 2',
                action: <a />,
            },
            {
                id: '3',
                name: 'Test 3',
                action: <a />,
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: '',
                accessor: 'action',
            },
        ],
        []
    );

    return (
        <>
            <Head>
                <title>MyExpenses - {title}</title>
            </Head>
            <PageHeader title={title}>
                <BreadcrumbItem title="Expenses" href="/expenses" />
                <BreadcrumbItem title={title} />
            </PageHeader>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ResponsiveHoverTable 
                                cardTitle="Categories"
                                columns={columns}
                                data={data}
                            />
                        </div>
                        <div className='col-12'>
                            <TableAddButton href="/expenses/categories/add" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Categories;