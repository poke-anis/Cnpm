import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar, Nav, Container, } from "react-bootstrap";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import Authentication from "./Components/Authentification";
import AuthenticationCnpm from "./Components/AuthentificationCnpm";
import Register from "./Components/Register";
import EnTete from "./Components/Header";
import Formulaire from "./Components/Formulaire";
import MesDeclarations from "./Components/MesDeclarations";
import "./Components/Moderateurs.js"
import Notificateur from "./Components/Notificateur";
import Moderateurs from "./Components/Moderateurs"
import Home from "./Components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components/Button.css"
import 'normalize.css'

var Body = styled.div`

`;

const userContext = createContext("");


function Navigationbar (props) {
 const  {isloged,Deco}= props

return(
  <Navbar variant="dark" className="sticky-top Navcolor">
  {isloged === 'false' ?
    <Container>
      <Navbar.Brand href="#home">CNMP</Navbar.Brand>
      <Nav className="me-auto" style={{width:'100%'}}>
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/Seconnecter">Se connecter</Nav.Link>
        <Nav.Link href="/Register">S'inscrire</Nav.Link>
        <Nav.Link href="/SeconnecterCnpm"  style={{marginLeft:'auto'}}>Cnpm Login</Nav.Link>
      </Nav>
    </Container>
  :
  isloged === 'Mods' ? 
    <Container>
      <Navbar.Brand href="">CNMP</Navbar.Brand>
      <Nav className="me-auto" style={{width:'100%'}}>
      <Nav.Link href="/">Accueil</Nav.Link>
      <Nav.Link
 href="/MesDeclaration"
        >
          Afficher les declaration
        </Nav.Link>
        <Nav.Link href="/Profile">Profile</Nav.Link>
        <Nav.Link href="/Mods">Panneau de Gestion</Nav.Link>
        <Nav.Link onClick={Deco} style={{marginLeft:'auto'}}>
          Se deconnecter
        </Nav.Link>
      </Nav>
    </Container>
:isloged === 'User' ? 
  <Container>
    <Navbar.Brand href="/">CNMP</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/">Accueil</Nav.Link>
      <Nav.Link
        href="/Declaration"
      >
        Faire une declaration
      </Nav.Link>
      {/* <Nav.Link
        href="/MesDeclaration"
      >
        Afficher les declaration
      </Nav.Link> */}
      <Nav.Link href="/Profile">Profile</Nav.Link>
      <Nav.Link onClick={Deco} style={{marginLeft:'auto'}}>
        Se deconnecter
      </Nav.Link>
    </Nav>
  </Container>
 : isloged=== 'Cnpm'?
 <Container>
   <Nav className="me-auto">
    <Navbar.Brand href="/">CNMP</Navbar.Brand>
    <Nav.Link href="/">Accueil</Nav.Link>
 <Nav.Link
        href="/MesDeclaration"
      >
        Afficher les declaration
      </Nav.Link>
      
      <Nav.Link onClick={Deco} style={{marginLeft:'auto'}}>
        Se deconnecter
      </Nav.Link>
      </Nav>
  </Container>:null}
</Navbar>
  )
}


function App() {
  const [cookies, removeCookie] = useCookies("token_key");
  const [Espace, setEspace] = useState(cookies.Espace);
  const [isloged, setIsloged] = useState(cookies.token_key !== 'undefined' && cookies.token_key ? cookies.UserType : 'false');
  const navigate = useNavigate();
  const readCookie = () => {
    if (cookies.token_key !== 'undefined' && cookies.token_key ) {
      setIsloged(cookies.UserType);
      setEspace(cookies.Espace)
    } else {
      setIsloged('false');
    }
  };
  function Deco(props) {
    removeCookie("token_key");
    removeCookie("UserType");
    removeCookie("id");
    setIsloged('false');
    navigate("/");
  }
  useEffect(() => {
    readCookie();
    
  }, []);


  return (
    <Body className="App">
      <userContext.Provider value={{ isloged, setIsloged }}>
        <EnTete></EnTete>
        <Navigationbar isloged={isloged}  Deco={Deco}/>

        <Routes>
        {/*   {isloged === "User" || isloged === "Mods"? (
            <Route path="/" element={<Navigate to="/Profile" />} />
          ) : isloged === "Cnpm"?
          <Route path="/" element={<Navigate to="/MesDeclaration" />} />:
          
            <Route path="/" element={<Navigate to="/Seconnecter" />} />
          } */}
<Route path="/" element={<Home/>}/>
{isloged === 'false' ?
<>
          <Route
          path="/Seconnecter"
          element={
            <Authentication
              useNavigate={useNavigate}
              userContext={userContext}
            />
          }
        />
        <Route
        path="/SeconnecterCnpm"
        element={
          <AuthenticationCnpm
            useNavigate={useNavigate}
            userContext={userContext}
          />
        }
      />
      <Route path="/Register" element={<Register useNavigate={useNavigate}/>} />
      </>
:isloged === 'User'||isloged === 'Mods' ||isloged === 'Cnpm'? 
<>
<Route path="/Mods" element={<Moderateurs cookie={cookies} />} />
<Route
  path="/Declaration"
  element={<Formulaire Espace={Espace} userID={cookies.id}/>}
/>
<Route
  path="/MesDeclaration"
  element={<MesDeclarations  cookie={cookies} />}
/>
<Route path="/Profile" element={<Notificateur />} />
</>
:null}


          
         
        </Routes>

      </userContext.Provider>
    </Body>
  );
}

export default App;
