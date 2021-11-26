// Font Awesome Icons
import '@fortawesome/fontawesome-free/css/all.min.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Theme style
import 'admin-lte/dist/css/adminlte.min.css';

import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        import("react-bootstrap/dist/react-bootstrap.min");
        import("admin-lte/dist/js/adminlte.min");
      }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default MyApp;