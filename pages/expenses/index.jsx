import Head from 'next/head'
import React from 'react';

import PageHeader from '../../components/page-header';
import BreadcrumbItem from '../../components/breadcrumb/breadcrumb-item';

const Expenses = () => {
    const title = "Expenses Board";

    return (
        <>
            <Head>
                <title>MyExpenses - {title}</title>
            </Head>
            <PageHeader title={title}>
                <BreadcrumbItem title={title} />
            </PageHeader>
        </>
    );
};

export default Expenses;