import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import allArticles from './allArticles';

const Blog = () =>{
    const articles = allArticles.map((article) =>
        <div key={article.id} className="card-item">
        <div className='img--container'>
            <img src={article.img} className="img--article" alt="messi"/>
        </div>
        <div className='info--container'>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <small>{article.user}</small>
        </div>
    </div>
    )
    
    return(
        <div>
            <HeaderComponent/>
            <h1>Blog Content</h1>
            <div className='card--container'>
                {articles}
            </div>
        </div>
    );
}

export default Blog;