import React, { useEffect, useState } from 'react'
import { getArticles } from '../endpoints';
import ArticleCard from './ArticleCard'

function ArticleCards() {
    const [articles, setArticles] = useState();
    useEffect(() => {
        getArticles()
            .then(({ data: articles }) => setArticles(articles))
    }, []);

    return (
        <div>
            {articles ?
            <div className='article_cards'>
                <section className="article_headline">
                    <ArticleCard article={articles.shift()}/>
                </section>
                <section className="article_sub_left">
                    <ArticleCard article={articles.shift()}/>
                </section>
                <section className="article_sub_right">
                    <ArticleCard article={articles.shift()}/>
                </section>
                <section className="sub">
                    <ArticleCard article={articles.shift()}/>
                </section>
                <section className="sub">
                    <ArticleCard article={articles.shift()}/>
                </section>
                <section className="sub">
                    <ArticleCard article={articles.shift()}/>
                </section>
            </div>
            : null}
        </div>
    )
}

export default ArticleCards