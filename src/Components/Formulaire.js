import React, { useState } from "react";
// import "../Components/theme_1638455751035.";
import "./Button.css";
import styled from "styled-components";
import FormContent from "./FormContent";
import { Nav, Button, Tab } from "react-bootstrap";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px;
  
`;
const Container = styled.div`
  display: flex;
  
`;
const LeftContent = styled(motion.div)`
  width: 20%;
  margin-right: 50px;
  border-right: 2px solid #dee2e6;
  background-color: #272727;
`;

const Butt = styled(Button)`
  width: 100%;
  margin-bottom: 3px;
`;

const Formulaire = (props) => {
  const { Espace,userID } = props;
  console.log(Espace)
  const [tab, setTab] = useState(Espace === "Professionnel" ?"Jaune":"Rose");
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey={tab}>
        <LeftContent 
                  initial={{ x: -400,opacity: 0 }}
                  animate={{ x: 0,opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
        className="LeftContent">
          <h4 style={{ textAlign: "center",color:"white"}}>Type de declaration</h4>

            {Espace === "Professionnel"? 
              <Nav variant="pills" className="flex-column">
              <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="flat"
                className="yellow"
                eventKey="Jaune"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Jaune");
                }}
              >
                Fiche de Pharmacovigilance
                <span
                  className="badge badge-pill bg-yellow"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="secondary"
                className="blue"
                id="Bleue"
                eventKey="Bleue"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Bleue");
                }}
              >
                Fiche de Matériovigilance
                <span
                  className="badge badge-pill bg-blue"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="danger"
                className="blanche"
                id="Blanche"
                eventKey="Blanche"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Blanche");
                }}
              >
                Fiche de Vaccinovigilance
                <span
                  className="badge badge-pill bg-blanche"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="success"
                className="parme"
                id="Parme"
                eventKey="Parme"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Parme");
                }}
              >
                Fiche de Réactovigilance
                <span
                  className="badge badge-pill bg-parme"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="warning"
                className="vert"
                id="Verte"
                eventKey="Verte"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Verte");
                }}
              >
                Fiche de Phytovigilance
                <span
                  className="badge badge-pill bg-vert"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="info"
                className="rose"
                id="Rose"
                eventKey="Rose"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Rose");
                }}
              >
                Fiche de Cosmétovigilance
                <span
                  className="badge badge-pill bg-rose"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="light"
                className="orange"
                id="Orange"
                eventKey="Orange"
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  setTab("Orange");
                }}
              >
                Fiche Compléments alimentaires
                <span
                  className="badge badge-pill bg-orange"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
              <Nav.Link
                variant="danger"
                className="blanche"
                id="coronavirus"
                eventKey="Coronavirus"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                }}
                onClick={() => {
                  setTab("Coronavirus");
                }}
              >
                Fiche de déclaration coronavirus
                <span
                  className="badge badge-pill bg-blanche"
                  style={{
                    marginLeft: "auto",
                    color: "black",
                    lineHeight: "2",
                    width: "9%",
                  }}
                >
                  {" "}
                </span>
              </Nav.Link>
            </Nav.Item> 
            </Nav>:Espace === "Grand Public"? 
            
            <Nav variant="pills" className="flex-column">
<Nav.Item style={{ width: "100%", height: "100%" }}>
            <Nav.Link
              variant="info"
              className="rose"
              id="Rose"
              eventKey="Rose"
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => {
                setTab("Rose");
              }}
            >
              Fiche de Cosmétovigilance
              <span
                className="badge badge-pill bg-rose"
                style={{
                  marginLeft: "auto",
                  color: "black",
                  lineHeight: "2",
                  width: "9%",
                }}
              >
                {" "}
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ width: "100%", height: "100%" }}>
            <Nav.Link
              variant="light"
              className="orange"
              id="Orange"
              eventKey="Orange"
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => {
                setTab("Orange");
              }}
            >
              Fiche Compléments alimentaires
              <span
                className="badge badge-pill bg-orange"
                style={{
                  marginLeft: "auto",
                  color: "black",
                  lineHeight: "2",
                  width: "9%",
                }}
              >
                {" "}
              </span>
            </Nav.Link>
          </Nav.Item>
            <Nav.Item style={{ width: "100%", height: "100%" }}>
            <Nav.Link
              variant="warning"
              className="vert"
              id="Verte"
              eventKey="Verte"
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => {
                setTab("Verte");
              }}
            >
              Fiche de Phytovigilance
              <span
                className="badge badge-pill bg-vert"
                style={{
                  marginLeft: "auto",
                  color: "black",
                  lineHeight: "2",
                  width: "9%",
                }}
              >
                {" "}
              </span>
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item style={{ width: "100%", height: "100%" }}>
            <Nav.Link
              variant="light"
              className="blanche"
              id="PatientFr"
              eventKey="PatientFr"
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => {
                setTab("PatientFr");
              }}
            >
              Fiche Patient
              <span
                className="badge badge-pill bg-blanche"
                style={{
                  marginLeft: "auto",
                  color: "black",
                  lineHeight: "2",
                  width: "9%",
                }}
              >
                {" "}
              </span>
            </Nav.Link>
          </Nav.Item>
          </Nav>
          : null}
          
          
        </LeftContent>
        <Content
                  initial={{ x: 1000,opacity: 0 }}
                  animate={{ x: 0,opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
        >
          <Tab.Content style={{ width: "100%" }}>
            <Tab.Pane eventKey="Jaune">
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Bleue" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Blanche" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Parme" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Verte" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Rose" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Orange" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="PatientFr" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey="Coronavirus" mountOnEnter>
              <FormContent Tab={tab} userID={userID} />
            </Tab.Pane>
          </Tab.Content>
        </Content>
      </Tab.Container>
    </Container>
  );
};

export default Formulaire;
