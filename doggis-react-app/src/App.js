import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { history } from './utils/history'
import { clearNotification } from './actionsCreators/notificationActions'
import { Register } from './components/users/Register'
import { Login } from './components/users/Login'
import { Protected } from './components/Protected'
import { Home } from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearNotification())
      console.log("history", location)
    })
  }, [dispatch])

  return (
    <Container className="col-md-8 offset-md-2">            
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
          </Route>          
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
