import React from "react";
import ArticlesComponent from "./ArticlesComponent";

const ContentComponent = () => {
    return (
        <section id="content">
            <h2 className="subheader">Latest Articles</h2>
            { /* Listado articulos */}
            <ArticlesComponent/>
        </section>
    );
}
export default ContentComponent;
