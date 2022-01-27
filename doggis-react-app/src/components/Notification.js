import React from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  return (
    <Container>
      {notification.message && (
        <div className="form-group">
          <div className={notification.success ? "alert alert-success" : "alert alert-danger"} role="alert">
            {notification.message}
          </div>
        </div>
      )}
    </Container>
  )
}

export { Notification }

