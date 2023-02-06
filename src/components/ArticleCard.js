import React from 'react'
const { getArticles } = require('../endpoints');

function ArticleCard() {
    getArticles()
        .then((articles) => console.log(articles))

    return (
        <div>ArticleCard</div>
    )
}

export default ArticleCard