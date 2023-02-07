import React, { useEffect, useState } from 'react'
const { getArticles } = require('../endpoints');

function ArticleCard({ article }) {

    return (
        <div>
            {article ?
                <div className='article_card' key={article.article_id}>
                    <h1>{article.title}</h1>
                    <img src={article.article_img_url} />
                    <p>{article.body}</p>
                </div>
                : null}
        </div>
    )
}

export default ArticleCard