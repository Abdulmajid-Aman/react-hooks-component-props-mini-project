import React from 'react'
import Article from './Article'


const ArticleList = ({posts}) => {
  const pass = posts.map(post => {
    return (<Article key={post.id} tittle = {post.title} preview = {post.preview} date = {post.date}/>)
  })
  return (
   
      <main>
        {pass}
      </main>
  
  )
}

export default ArticleList