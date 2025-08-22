import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

interface UserInterface {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

const Users = () => {
  const {data: users, isLoading, error} = useFetch<UserInterface>('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && !!users.length && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users