import React, { useEffect } from "react"
import { Container, Row, Col, Table, ButtonGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getUser } from "../actionsCreators/userActions"
import { Notification } from "./Notification"

const Home = () => {
  const userId = useSelector(({ auth }) => auth.authData.user.id)
  const loading = useSelector(({ user }) => user.loading)
  const user = useSelector(({ user }) => user.userData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(userId))
  }, [userId, dispatch])

  return (
    <Container className="mt-5">
      <Notification />
      <Row>
        <Col lg={4} md={6} sm={12} >
          {!loading &&
            <div>
              <h5 style={{ color: "DodgerBlue", fontWeight: "bold" }}>-Tiedot-</h5>
              <Table responsive="sm">
                <tbody>
                  <tr>
                    <td>Nimi:</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <td>Käyttäjänimi:</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <td>Sähköposti:</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Puhelinnumero:</td>
                    <td>{user.phoneNumber}</td>
                  </tr>
                </tbody>
              </Table>
              <ButtonGroup>
                <Link to="/login" className="btn btn-link">Kirjaudu ulos</Link>
              </ButtonGroup>
            </div>
          }
          { loading ? <h2><span className="spinner-border spinner-border-sm mr-1"></span></h2> : null}
        </Col>
      </Row>
    </Container>
  )
}

export { Home }