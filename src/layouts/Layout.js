import React from "react";
import "./_layout.scss";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;