import React from 'react'
import useFetch from '../../hooks/useFetch'

interface PostInterface {
  id: number
  title: string
  body: string
  userId: number
}

const Posts = () => {
  const { data: posts, isLoading, error } = useFetch<PostInterface>('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && !!posts.length && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <small>Author ID: {post.userId}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Posts