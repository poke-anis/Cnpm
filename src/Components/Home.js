import {Card,Button,Modal} from "react-bootstrap";
import React, { useState, useEffect, createContext } from "react";
import axiosConfig from "./axios";
import styled from "styled-components";
import parse from 'html-react-parser';
const Content = styled.div`
display:flex;
flex-wrap:wrap;
align-content:space-between;
justify-content:center;
gap: 40px;
padding: 50px;
width: 100%;
height: 100%;

`

function ModalForm(props) {

  const {values} = props
console.log(props)

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {values.titre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
<div>{parse(values.description)}
</div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        
      </Modal.Footer>
    </Modal>


  );
}



const Home = () => {
  const [cnpmAlertes, setCnpmAlertes] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [valeurmodal,setValeurmodal] = useState({})
  useEffect(() => {
    axiosConfig.get(`/getalertes/`).then((res) => {
      setCnpmAlertes(res.data);
    });
    console.log(cnpmAlertes)
  }, []);
const afficherForm = (props) =>{

  setValeurmodal(props)
  setModalShow(true)

}
  return (
    <Content>
      <h1 style={{width:"100%",textAlign:'center'}}>Alertes</h1>
      {cnpmAlertes.length !== 0
        ? cnpmAlertes.map((el, index) => (
            <Card style={{ width: "18rem" }} key={index}>
              {el.image
                ? el.image.map((el, index) => (
                    <Card.Img
                      key={index}
                      style={{objectFit: 'contain'}}
                      variant="top"
                      width={100}
                      height={100}
                      src={`data:${el.mimetype};base64,${el.buffer}`}
                    />
                  ))
                : null}

              <Card.Body>
                <Card.Title>{el.titre}</Card.Title>
                <Card.Text>
                  {modalShow ?              <ModalForm
                  key={index}
                    values={valeurmodal}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  /> :null}

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => {afficherForm(el)}}>
                  Afficher
                </Button>{" "}
                {el.creator[0].Nom}
              </Card.Footer>
            </Card>
          ))
        : null}
    </Content>
  );
};

export default Home;