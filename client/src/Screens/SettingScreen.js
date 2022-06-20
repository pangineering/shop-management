import React from 'react'
import { Container, Button } from "react-bootstrap"

function SettingScreen() {
  return (
    <Container>
      <h1>My Setting</h1>
      <Container>
        <h2>Personal</h2>
        <Button>Save</Button>
        <hr />
      </Container>
      <Container>
        <h2>Account</h2>
        <Button>Save</Button>
        <hr />
      </Container>
      <Container>
        <h2>Shops</h2>
        <Button>Save</Button>
        <hr />
      </Container>
    </Container>
  )
}

export default SettingScreen