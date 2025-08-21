import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import Users from './components/pages/Users'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
