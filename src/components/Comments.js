import React, { useEffect, useState } from 'react'
import { getArticlesComments } from '../endpoints';
import './Comment.css'

function Comments({ article_id }) {
    const [comments, setComments] = useState();

    useEffect(() => {
        getArticlesComments(article_id)
            .then(({ data: comments }) => {
                setComments(comments);
            })
    })

    return (
        <div className='comments-area'>
            {comments ? comments.map(comment => {
                return (
                    <div className='comment'>
                        <h1 className='author'>{comment.author}</h1>
                        <h2 className='date'>{comment.created_at}</h2>
                        <p className='content'>{comment.body}</p>
                        <span className='votes'><img src='' alt='checkmark' />{comment.votes}</span>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Comments;