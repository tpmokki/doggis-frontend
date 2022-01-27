import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import types from "../../actionsCreators/actionTypes"
import { invalidEmail, invalidName, invalidPhone, invalidUsername, invalidPassword } from '../../utils/validations'
import { register } from '../../actionsCreators/userActions'
import { useNavigate, Link } from "react-router-dom"
import { Notification } from "../Notification"

const Register = () => {
  const [submitted, setSubmitted] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registering = useSelector(state => state.user.registering)

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setSubmitted(true)

    if (Object.values(newUser).every(v => v)) {
      dispatch(register(newUser))
        .then(() => {
          navigate('/login')
        })
        .catch(() => {
          dispatch({
            type: types.REGISTER_FAIL
          })
        })
    }
  }

  return (
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
          <form name="form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>Nimi</label>
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleChange}
                className={'form-control' + (submitted && !newUser.name ? ' is-invalid' : '')} />
              {submitted && invalidName(newUser.name) &&
                <div className="invalid-feedback">{invalidName(newUser.name)}</div>
              }
            </div>
            <div className="form-group">
              <label>Sähköposti</label>
              <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                className={'form-control' + (submitted && !newUser.email ? ' is-invalid' : '')} />
              {submitted && invalidEmail(newUser.email) &&
                <div className="invalid-feedback">{invalidEmail(newUser.email)}</div>
              }
            </div>
            <div className="form-group">
              <label>Käyttäjätunnus</label>
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleChange}
                className={'form-control' + (submitted && !newUser.username ? ' is-invalid' : '')} />
              {submitted && invalidUsername(newUser.username) &&
                <div className="invalid-feedback">{invalidUsername(newUser.username)}</div>
              }
            </div>
            <div className="form-group">
              <label>Puhelinnumero</label>
              <input
                type="text"
                name="phoneNumber"
                value={newUser.phoneNumber}
                onChange={handleChange}
                className={'form-control' + (submitted && !newUser.phoneNumber ? ' is-invalid' : '')} />
              {submitted && invalidPhone(newUser.phoneNumber) &&
                <div className="invalid-feedback">{invalidPhone(newUser.phoneNumber)}</div>
              }
            </div>
            <div className="form-group">
              <label>Salasana</label>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
                className={'form-control' + (submitted && !newUser.password ? ' is-invalid' : '')} />
              {submitted && invalidPassword(newUser.password) &&
                <div className="invalid-feedback">{invalidPassword(newUser.password)}</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">
                {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Rekisteröidy
              </button>
              <Link to="/login" className="btn btn-link">Peruuta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Register }
