import { Fragment } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;
