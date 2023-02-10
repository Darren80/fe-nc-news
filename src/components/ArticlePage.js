import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getArticle } from '../endpoints';

function ArticlePage() {
    let { article_id } = useParams();
    const [article, setArticle] = useState();
    useEffect(() => {
        getArticle(article_id)
            .then(({ data: article }) => { setArticle(article[0]); console.log(article); })
    }, [])

    return (
        <div>
            {article ?
                <div className='container'>
                    <h1 className='title'>{article.title}</h1>
                    <section className='article-info'>
                        <p>By: {article.author}</p>
                        <p>Published on: {article.created_at}</p>
                        <p>Topic: {article.topic}</p>
                    </section>
                    <p>{article.body}</p>
                    <div>
                        <p>Comments:</p>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default ArticlePage