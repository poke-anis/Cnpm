import React, { useState } from 'react'
import {Nav,TabContainer,TabPane ,TabContent} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import FormContent from './FormContent'
import "./Formulaire.css"

const Content = styled.div`
grid-column-start:2;
grid-column-end:4;
grid-row-start:3;
grid-row-end:4;
padding: 50px;
`
const LeftContent = styled.div`
grid-column-start:1;
grid-column-end:2;
grid-row-start:3;
grid-row-end:4;
margin-Right: 50px;
border-right: 2px solid #dee2e6;

`


const Formulaire = () =>{
    const [Tab,setTab] = useState('Jaune')

    return(

<TabContainer id="left-tabs-example" defaultActiveKey={Tab} >

    <LeftContent className="LeftContent">
    <h4>Type de declaration</h4>

      <Nav variant="pills" className="flex-column" >
        <Nav.Item >
          <Nav.Link className="Jaune" eventKey="Jaune" onClick={()=>{setTab('Jaune')}}>Fiche de Pharmacovigilance (Fiche Jaune)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="Bleue" eventKey="Bleue" onClick={()=>{setTab('Bleue')}}>Fiche Matériovigilance (Fiche Bleue)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="Blanche" eventKey="Blanche" onClick={()=>{setTab('Blanche')}}>Fiche Vaccinovigilance (Fiche Blanche)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="Parme" eventKey="Parme" onClick={()=>{setTab('Parme')}}>Fiche Réactovigilance (Fiche Parme)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="Verte" eventKey="Verte" onClick={()=>{setTab('Verte')}}>Fiche Phytovigilance (Fiche Verte)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="Rose" eventKey="Rose" onClick={()=>{setTab('Rose')}}>Fiche Cosmétovigilance (Fiche Rose)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="Orange" eventKey="Orange" onClick={()=>{setTab('Orange')}}>Fiche Compléments alimentaires (Fiche Orange)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="coronavirus" eventKey="coronavirus" onClick={()=>{setTab('coronavirus')}}>Fiche déclaration coronavirus</Nav.Link>
        </Nav.Item>
      </Nav>
    </LeftContent>
    <Content>
      <TabContent>
        <TabPane eventKey="Jaune" >
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane transition eventKey="Bleue" mountOnEnter>
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane eventKey="Blanche" mountOnEnter>
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane eventKey="Parme"  mountOnEnter>
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane eventKey="Verte" mountOnEnter>
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane eventKey="Rose"  mountOnEnter>
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane eventKey="Orange" mountOnEnter>
          <FormContent Tab={Tab} />
        </TabPane>
        <TabPane eventKey="Coronavirus" >
          <FormContent Tab={Tab} />
        </TabPane>
      </TabContent>
    </Content>

</TabContainer>
        )
}

export default Formulaire;