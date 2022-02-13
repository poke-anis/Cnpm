import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useNavigate, Link,useParams } from "react-router-dom";
import "./App.css";
import { Navbar, Nav, Container, } from "react-bootstrap";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import Authentication from "./Components/Authentification";
import AuthenticationCnpm from "./Components/AuthentificationCnpm";
import Register from "./Components/Register";
import EnTete from "./Components/Header";
import BasDePage from "./Components/BasDePage";
import Formulaire from "./Components/Formulaire";
import MesDeclarations from "./Components/MesDeclarations";
import "./Components/Moderateurs.js"
import Notificateur from "./Components/Notificateur";
import Moderateurs from "./Components/Moderateurs"
import Home from "./Components/Home"
import PasswordForget from "./Components/PasswordForget"
import PasswordChange from "./Components/PasswordChange"
import Support from "./Components/Support"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components/Button.css"
import 'normalize.css'

var Body = styled.div`

`;

const userContext = createContext("");


function Navigationbar (props) {
 const  {isloged,Deco}= props

return(
  <Navbar collapseOnSelect  expand="lg" sticky="top" className="Navcolor" variant='dark'>
     <Container>

 <Navbar.Brand to="/" href="#home">CNPM</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  {isloged === 'false' ?
      
      <Nav className="me-auto" style={{width:'100%'}}>
        <Nav.Link

      as={Link} href="/" to="/">Accueil</Nav.Link>
        <Nav.Link
      as={Link} to="/Seconnecter"  href="/Seconnecter">Se connecter</Nav.Link>
        <Nav.Link
      as={Link} to="/Register" href="/Register">S'inscrire</Nav.Link>
        <Nav.Link
       to="/SeconnecterCnpm"  href="/SeconnecterCnpm" style={{marginLeft:'auto'}}>Cnpm Login</Nav.Link>
      </Nav>
  
  :
  isloged === 'Mods' ? 
      
      <Nav className="me-auto" style={{width:'100%'}}>
      <Nav.Link
      as={Link} to="/" href="/=">Accueil</Nav.Link>
      <Nav.Link
      as={Link}
      href="/MesDeclaration"
 to="/MesDeclaration"
        >
          Afficher les declaration
        </Nav.Link>
        <Nav.Link
      as={Link} to="/Profile" href="/Profile">Profile</Nav.Link>
        <Nav.Link
      as={Link} to="/Mods" href="/Mods">Panneau de Gestion</Nav.Link>
        <Nav.Link
        onClick={Deco}
        style={{marginLeft:'auto'}}>
          Se deconnecter
        </Nav.Link>
      </Nav>
:isloged === 'User' ? 
    <Nav className="me-auto" style={{width:'100%'}}>
    <Nav.Link
      as={Link}  href="/" to="/">Accueil</Nav.Link>
      <Nav.Link
      as={Link}
        to="/Declaration"
        href="/Declaration"
      >
        Faire une declaration
      </Nav.Link>
      {/* <Nav.Link
      as={Link}
        href="/MesDeclaration"
      >
        Afficher les declaration
      </Nav.Link> */}
      <Nav.Link
      as={Link} to="/Profile" href="/Profile">Profile</Nav.Link>
      <Nav.Link
       onClick={Deco} style={{marginLeft:'auto'}}>
        Se deconnecter
      </Nav.Link>
    </Nav>
 : isloged=== 'Cnpm'?
   <Nav className="me-auto" style={{width:'100%'}}>
    <Nav.Link
      as={Link} to="/" href="/">Accueil</Nav.Link>
 <Nav.Link
      as={Link}
        to="/MesDeclaration"
        href="/MesDeclaration"
      >
        Afficher les declaration
      </Nav.Link>
      <Nav.Link
      as={Link} to="/Mods" href="/Mods">Panneau de Gestion</Nav.Link>
      <Nav.Link
      onClick={Deco} style={{marginLeft:'auto'}}>
        Se deconnecter
      </Nav.Link>
      </Nav>
  :null}
  </Navbar.Collapse>
    </Container>
</Navbar>
  )
}


function App() {
  const [cookies,setCookie, removeCookie] = useCookies("token_key");
  const [Espace, setEspace] = useState(cookies.Espace);
  const [isloged, setIsloged] = useState(cookies.token_key !== 'undefined' && cookies.token_key ? cookies.UserType : 'false');
  const [modalShow, setModalShow] = useState(false);
  const [changement,setChangement] = useState("");
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
    removeCookie("Espace");
    removeCookie("UserType");
    removeCookie("id");
    setIsloged('false');
    navigate("/");
  }
  useEffect(() => {
    
    console.log(Espace)
    if(cookies.Espace !== Espace )
    {
      setCookie('Espace', Espace, { path: '/' });
    }else{
      readCookie();
    }
  }, [Espace]);


  return (
    <Body className="App">
      <userContext.Provider value={{ isloged, setIsloged }}>
        <EnTete></EnTete>
        <Navigationbar isloged={isloged}  Deco={Deco}/>

        <Routes>

<Route path="/" element={<Home/>}/>
{isloged === 'false' ?
<>
<Route path="/PasswordForget" element={<PasswordForget />} />
<Route path="/PasswordChange/:token" element={<PasswordChange useParams={useParams}/>} />
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
:isloged === 'User'? 
<>

<Route
  path="/Declaration"
  element={<Formulaire Espace={Espace} userID={cookies.id}/>}
/>
<Route path="/Profile" element={<Notificateur Espace={Espace}/>} />
</>
:isloged === 'Mods' ||isloged === 'Cnpm'?
<>
<Route path="/Mods" element={<Moderateurs cookie={cookies} />} />
<Route
  path="/MesDeclaration"
  element={<MesDeclarations  cookie={cookies} />}
/>
<Route path="/Profile" element={<Notificateur Espace={Espace} setEspace={setEspace}/>} />

</>
:
null}
        
         
        </Routes>
        <BasDePage setModalShow={setModalShow}/>
        {modalShow ? (
      <Support
        
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    ) : null}
      </userContext.Provider>
    </Body>
  );
}

export default App;
