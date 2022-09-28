import React from "react";
import getArticles from "../getArticles";
const ArticlesComponent = () => {
    const articles = getArticles.map((article) =>
        <article key={article.id} className="article-item" id="article-template">
            <div className="image-wrap">
                <img alt="Paisaje" src={article.img} />
            </div>
            <h2>{article.title}</h2>
            <span className="date">
                {article.time} ago
            </span>
            <a href="/">Read more</a>
            <div className="clearfix"></div>
        </article>
    );

    return (
        <div id="articles">
            {articles}
        </div>
    );
}

export default ArticlesComponent;
