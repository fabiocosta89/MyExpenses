// Font Awesome Icons
import '@fortawesome/fontawesome-free/css/all.min.css';
// Theme style
import 'admin-lte/dist/css/adminlte.min.css';

import Head from 'next/head';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        import("jquery/dist/jquery.min");
        import("bootstrap/dist/js/bootstrap.bundle");
        import("admin-lte/dist/js/adminlte.min");
      }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;