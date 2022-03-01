import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Bar = styled.footer`
background-color:#034EA2;
color : white;
font-size: 0.7rem;

`

const  Titre = styled.div`
display: flex;
align-items: center;
justify-content:space-around;`


const BasDePage = (props)=>{
    const {setModalShow}= props
    return (
        <Bar>
            <Titre  style={{display:'flex',justifyContent:'space-around',flexWrap:"wrap"}}>
            <div>Cnpm 2022</div>
            <Nav.Link as={Link} to="/Privacy" href="/Privacy">
            Politique de confidentialité de l’application              </Nav.Link>
            <div >
            <div onClick={()=>setModalShow(true)}>En cas de problème technique avec le site veuillez nous contacter en cliquant ici </div>
            </div>
            </Titre>

                
        </Bar>

    )
}

export default BasDePage;