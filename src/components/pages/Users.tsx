import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { Navigate } from 'react-router'
import { fetchAllUsers, selectUsers, selectUsersLoading, selectUsersError  } from '../../redux/slices/userSlice'

const Users = () => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectUsersLoading)
  const error = useSelector(selectUsersError)
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  useEffect(() => {
    dispatch(fetchAllUsers('https://jsonplaceholder.typicode.com/users'))
  }, [dispatch])

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
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