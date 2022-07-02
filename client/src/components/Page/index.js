//dependencies
import React from "react";
import PageContent from "../PageContent";
import Listing from "../Listing";
import Home from "../Home";
import Login from "../Login";

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case 'home':
                return <Home />;
            case 'listing':
                return <Listing />;
            case 'login':
                return <Login />;
            default:
                return <Home />;
        }
    };

    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;


