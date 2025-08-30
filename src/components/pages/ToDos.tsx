import useFetch from "../../hooks/useFetch"
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import type { RootState } from '../../redux/store'

interface ToDoInterface {
    id: number
    title: string
    completed: boolean
}

const ToDos = () => {
    const {data: todos, isLoading, error} = useFetch<ToDoInterface>('https://jsonplaceholder.typicode.com/todos', 10)
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }
    return (
      <div>
        <h1>ToDo</h1>
        {isLoading && <h2 className="loading">Loading...</h2>}
        {error && <h2 className="error">{error}</h2>}
        {!isLoading && !error && !!todos.length && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.completed}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}

export default ToDos