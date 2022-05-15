import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Movie } from './pages/Movie'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/filme/:id" element={<Movie /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp