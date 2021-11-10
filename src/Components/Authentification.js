import React, { useState, useEffect } from 'react'
import { Form,Button } from 'react-bootstrap'
import styled from 'styled-components'

var AuthBox = styled.div`
grid-column-start:2;
grid-column-end:3;
grid-row-start:2;
grid-row-end:3;
text-align: left;
display:flex;
flex-direction:column;
justify-content:space-around;
padding-top:100px;
`

const authentication = () =>
{
return (
    <AuthBox>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Identifiant</Form.Label>
    <Form.Control type="email" placeholder="Identifiant" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Mot de passe" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Rester connecté" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Entrer
  </Button>
</Form>
</AuthBox>
    )
}

export default authentication;