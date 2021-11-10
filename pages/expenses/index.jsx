import Head from 'next/head'
import React from 'react';

import PageHeader from '../../components/page-header';
import BreadcrumbItem from '../../components/breadcrumb/breadcrumb-item';

const Expenses = () => {
    return (
        <>
            <Head>
                <title>MyExpenses - Expenses Board</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageHeader title="Board">
                <BreadcrumbItem title="Expenses" href="#" />
                <BreadcrumbItem title="Board" />
            </PageHeader>
        </>
    );
};

export default Expenses;