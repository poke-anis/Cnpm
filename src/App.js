import React, { useState, useEffect } from 'react'
import './App.css';
import Authentication from '../src/Components/Authentification'
import EnTete from './Components/Header';
import Formulaire from './Components/Formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Form,Button,FormGroup,Navbar,Nav,Container } from 'react-bootstrap'

var Body = styled.div`
display:grid;
grid-template-columns:20% auto 30%;
grid-template-rows: 15% 10% auto ;
`
var Navigation = styled(Navbar)`
grid-column-start:1;
grid-column-end:4;
grid-row-start:2;
grid-row-end:3;
`
function App() {
  const [Connected ,setConnected] = useState(true)

  return (
    <Body className="App">
      <EnTete></EnTete>
      <Navigation  variant="dark" className="sticky-top Navcolor" >
            { Connected === false ?
                <Container>
                    <Navbar.Brand href="#home">CNMP</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#pricing">Se connecter</Nav.Link>
                    <Nav.Link href="#features">S'inscrire</Nav.Link>
                    </Nav>
                </Container>:
                <Container>
                    <Navbar.Brand href="#home">CNMP</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#home">Declaration</Nav.Link>
                    <Nav.Link href="#home">Profile</Nav.Link>
                    </Nav>
                </Container>}
            </Navigation>

      { Connected === false ?<Authentication></Authentication>:null}
      { Connected === true ? <Formulaire></Formulaire>:null}

    </Body>
  );
}

export default App;
