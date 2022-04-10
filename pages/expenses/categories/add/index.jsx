import Head from 'next/head';

import PageHeader from '../../../../components/page-header';
import BreadcrumbItem from '../../../../components/breadcrumb/breadcrumb-item';

const Add = () => {
    const title = "Add Category";
    
    return (
        <>
            <Head>
                <title>MyExpenses - {title}</title>
            </Head>
            <PageHeader title={title}>
                <BreadcrumbItem title="Expenses" href="/expenses" />
                <BreadcrumbItem title="Categories" href="/expenses/categories" />
                <BreadcrumbItem title="Add" />
            </PageHeader>
        </>
    );
}

export default Add;