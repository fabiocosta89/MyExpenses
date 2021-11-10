import React from 'react';
import Head from 'next/head';

import PageHeader from '../../../components/page-header';
import BreadcrumbItem from '../../../components/breadcrumb/breadcrumb-item';

const Categories = () => {
    const title = "Expenses Categories";

    return (
        <>
            <Head>
                <title>MyExpenses - {title}</title>
            </Head>
            <PageHeader title={title}>
                <BreadcrumbItem title="Expenses" href="/expenses" />
                <BreadcrumbItem title={title} />
            </PageHeader>

        </>
    );
}

export default Categories;