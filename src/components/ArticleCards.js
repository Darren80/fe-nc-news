import React, { useEffect, useState } from 'react'
import { getArticles } from '../endpoints';
import ArticleCard from './ArticleCard'

function ArticleCards() {
    const [articles, setArticles] = useState();
    const [articleIndex, setArticleIndex] = useState(0);
    useEffect(() => {
        getArticles()
            .then(({ data: articles }) => { setArticles(articles) })
    }, []);
    const sections = ['article_headline', 'article_sub_left', 'article_sub_right', 'sub', 'sub', 'sub'];

    return (
        <div>
            {articles ?
                <div className='article_cards'>
                    {articles.map((article, index) => {
                        if (!sections[index]) { console.log("END"); }
                        return (
                            <section className={sections[index]} key={index}>
                                <ArticleCard article={article} />
                            </section>
                        )
                    })}
                </div>
                : null}
        </div>
    )
}

export default ArticleCards