import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Home = () => {
  const userData = useSelector(state => state.user.userData)
  
  return (
    <Container>
      <h2>{userData.user.name} kirjautunut</h2>
      <Link to="/login" className="btn btn-link">Kirjaudu ulos</Link>
    </Container>
  )
}

export { Home }