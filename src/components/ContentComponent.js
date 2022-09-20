import React, { Component } from "react";
import ArticlesComponent from "./ArticlesComponent";

class ContentComponent extends Component {
    render() {
        return (
            <section id="content">
                <h2 className="subheader">Latest Articles</h2>
                { /* Listado articulos */}
                <ArticlesComponent/>


            </section>
        );
    }
}

export default ContentComponent;
