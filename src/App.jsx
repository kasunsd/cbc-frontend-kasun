import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header.jsx'
import ProductCard from './components/productCard.jsx'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'
import SingUpPage from './pages/singup.jsx'
import AdminPage from './pages/adminPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes path="/*">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/singup" element={<SingUpPage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path='/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
