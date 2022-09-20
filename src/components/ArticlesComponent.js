import React, { Component } from "react";

class ArticlesComponent extends Component {
    render() {
        return (
            <div id="articles">
                <article className="article-item" id="article-template">
                    <div className="image-wrap">
                        <img  alt="Paisaje" />
                    </div>

                    <h2>New Post</h2>
                    <span className="date">
                        5 minutes ago
                    </span>
                    <a href="/">Read more</a>

                    <div className="clearfix"></div>
                </article>


            </div>
        );
    }
}

export default ArticlesComponent;
