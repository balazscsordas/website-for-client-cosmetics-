import React from "react";
import {Helmet} from "react-helmet";

function Seo(props) {
    return (
        <Helmet>
            <title>{props.metaTitle}</title>
            <meta name="description" content={props.metaDescription}></meta>
            <meta property="og:title" content={props.metaTitle} ></meta>
            <meta property="og:description" content={props.metaDescription} ></meta>
            <meta property="og:type" content="website" ></meta>
            <meta name="twitter:card" content="summary" ></meta>
            <meta name="twitter:title" content={props.metaTitle} ></meta>
            <meta name="twitter:description" content={props.metaDescription} ></meta>
            <meta property="og:image" content={props.metaImage} ></meta>
            <meta property="og:site_name" content="Dorin Kozmetika - Győr" ></meta>
        </Helmet>
    )
};

export default Seo;