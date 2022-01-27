import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Notification } from "../Notification"
import { login, logout } from '../../actionsCreators/userActions'
import { useDispatch } from "react-redux"

const Login = () => {
  const [loggingIn, setLoggingIn] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { email, password } = inputs

  useEffect(() => {
    dispatch(logout());
  }, [dispatch])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setLoggingIn(true)
    setSubmitted(true)

    if (email && password) {
      dispatch(login(email, password))
        .then(() => {
          setLoggingIn(false)
          navigate('/')
        })
        .catch(() => {
          setLoggingIn(false)
        })
    } else {
      setLoggingIn(false)
    }
  }

  return (
    <Container>
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Notification />
          {/* <div className="col-lg-8 offset-lg-2"> */}
          <div>
            <form name="form" onSubmit={handleLogin}>
                <label>Sähköposti</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                {submitted && !email &&
                        <div className="invalid-feedback">Sähköpostiosoite on pakollinen</div>
                }    
              <div className="form-group">
                <label>Salasana</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                {submitted && !password &&
                        <div className="invalid-feedback">Salasana on pakollinen</div>
                } 
              </div>
              <div className="form-group">
                <button className="btn btn-primary">
                  {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                  Kirjaudu sisään
                </button>
                <Link to="/register" className="btn btn-link">Rekisteröidy</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export { Login }