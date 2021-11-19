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
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Categories;