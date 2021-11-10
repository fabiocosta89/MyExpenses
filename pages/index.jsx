import Head from 'next/head'
import React from 'react';

import PageHeader from '../components/page-header';
import BreadcrumbItem from '../components/breadcrumb/breadcrumb-item';

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>MyExpenses</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageHeader title="Dashboard">
                <BreadcrumbItem title="Dashboard" />
            </PageHeader>
        </>
    );
}

export default Dashboard;