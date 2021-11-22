import React, { useState, useEffect,useContext,createContext } from 'react'
import { BrowserRouter, Route, Switch, NavLink,Routes } from "react-router-dom";
import './App.css';
import Authentication from './Components/Authentification'
import Register from './Components/Register'
import EnTete from './Components/Header';
import Formulaire from './Components/Formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Form,Button,FormGroup,Navbar,Nav,Container } from 'react-bootstrap'
import cookie from 'react-cookies'
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

const userContext = createContext(null);

function App() {
  const [Connected ,setConnected] = useState(false)
  const [isloged, setIsloged] = useState({ token: cookie.load('token_key') })
  return (
    <Body className="App">
      <userContext.Provider value={{ isloged, setIsloged }}>
      <EnTete></EnTete>
      <Routes>
   
      <Route path="/Seconnecter" element={<Authentication/>} />
        <Route path="/Register" element={<Register/>} />
        </Routes>
   
      <Navigation  variant="dark" className="sticky-top Navcolor" >
            { isloged.token ?
                            <Container>
                            <Navbar.Brand href="#home">CNMP</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Accueil</Nav.Link>
                            <Nav.Link href="#home">Declaration</Nav.Link>
                            <Nav.Link href="#home">Profile</Nav.Link>
                            </Nav>
                        </Container>
                :
                <Container>
                    <Navbar.Brand href="#home">CNMP</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="/Seconnecter">Se connecter</Nav.Link>
                    <Nav.Link href="/Register">S'inscrire</Nav.Link>
                    </Nav>
                </Container>}
            </Navigation>


      { Connected === true ? <Formulaire></Formulaire>:null}
      </userContext.Provider>
    </Body>
  );
}

export default App;
