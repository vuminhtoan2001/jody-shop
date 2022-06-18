import { Fragment } from 'react';

import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;
