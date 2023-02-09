import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const { getArticles } = require('../endpoints');

function ArticleCard({ article }) {
    const navigate = useNavigate();
    const handleClick = () => { navigate(`/article/${article.article_id}`) }

    return (
        <div className='article_card' key={article.article_id} onClick={handleClick}>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
        </div>
    )
}

export default ArticleCard