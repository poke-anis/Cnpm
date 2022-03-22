import React, { useState,useEffect } from "react";
import {Figure} from "react-bootstrap"
import {
  Col,
  Row,
  ProgressBar,
  Form,} from "react-bootstrap";

import styled from "styled-components";
import axiosConfig from "../axios";


const BigBox = styled.div`
padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  border: 2px solid #dee2e6;
`;


const FlexBox = styled.div`
margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const FormParmeDecla = React.forwardRef((props,ref) => {
  const { decla } = props;
  const [progress,setProgress] = useState(0)
  const [declaData, setDeclaData] = useState(decla.Cases);
  const [declaUser, setDeclaUser] = useState(decla.creator);

  const [declaPic, setdeclaPic] = useState([]);
  useEffect(() => {
    axiosConfig.get(`/secure/getImages/${decla._id}`, {
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      }})
    .then(res => {
      if(res.data.length !==0){setdeclaPic(res.data[0].images);}
      })
  
  }, [])
  return (
    <Form ref={ref} style={{margin :"50px"}}>
      {declaData.length === 0 ? (
                          <ProgressBar animated now={progress} />

      ) : (
        <div>
                              <FlexBox>

<BigBox>
<h1 style={{ width: "100%", textAlign: "center" }}>
      Information Compte
    </h1>
  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
      Nom
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Nom} />
    </Col>
  </Form.Group>
  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
      Prenom
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Prenom} />
    </Col>
  </Form.Group>
  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
      Telephone
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Telephone} />
    </Col>
  </Form.Group>

  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
    Email
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Email} />
    </Col>
  </Form.Group>
</BigBox>
<BigBox>
  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
      Nom d'utilisateur
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Username} />
    </Col>
  </Form.Group>
    <Form.Group
      as={Row}
      className="mb-3"
      controlId="formPlaintextEmail"
    >
      <Form.Label column sm="5">
        Exercice 
      </Form.Label>
      <Col sm="7">
        <Form.Control readOnly defaultValue={declaUser.Type_Exercice} />
      </Col>
    </Form.Group>

  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
    Adresse Professionnelle
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Adresse_Professionnelle} />
    </Col>
  </Form.Group>
  <Form.Group
    as={Row}
    className="mb-3"
    controlId="formPlaintextEmail"
  >
    <Form.Label column sm="5">
      Profession
    </Form.Label>
    <Col sm="7">
      <Form.Control readOnly defaultValue={declaUser.Profession} />
    </Col>
  </Form.Group>
</BigBox>
</FlexBox>
                    <FlexBox>
<BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Type de dispositif médical de diagnostic in vitro (DMDIV)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Dispositif_M_D_I_V}
              />
            </Col>
          </Form.Group>
          {declaData.Dispositif_M_D_I_V === "Autre"?
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Lequel
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Lequel_D_M_D_I_V}
              />
            </Col>
          </Form.Group>:null}
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null:
 (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_P`)
                  .map((el, key) => (
                    <Figure key={key}>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  ))
              )}
              {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null:
 (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_N`)
                  .map((el, key) => (
                    <Figure key={key}>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  ))
              )}
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom commercial/Modèle/Type/Référence
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Nom_C} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Dénomination commune
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Denomination_C}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Domaine d'application
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Domaine_A} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            N° de série ou de lot
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Numero_S_L} />
            </Col>
          </Form.Group>
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null:
 (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_S_L`)
                  .map((el, key) => (
                    <Figure key={key}>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  ))
              )}
              </BigBox>
              <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Version du logiciel
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.V_D_L}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date de péremption
                        </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Date_D_P} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date de mise en service
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_M_S}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom, Adresse du distributeur
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_A_D}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom, Adresse du Fabricant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_A_F}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date de survenue
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_S}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Lieu de survenue
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Lieu_D_S}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom, qualité, téléphone, fax de l'utilisateur si différent du déclarant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_Q_T_F_U}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nature de l'incident
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nature_D_I}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Description des faits et conséquences constatée
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Description_F_C_C}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Le fabricant ou le fournisseur sont-ils informés de l'incident ou risque d'incident?
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Fabriquant_I_I}
              />
            </Col>
          </Form.Group>
          {declaData.Fabriquant_I_I === "Oui" ?
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="5">
          Quelle attitude a-t-il préconisé :
          </Form.Label>
          <Col sm="7">
            <Form.Control
              
              readOnly
              defaultValue={declaData.Attitude_P}
            />
          </Col>
        </Form.Group>
          :null}

          </BigBox>
          </FlexBox>
        </div>
      )}
    </Form>
  );
});

export default FormParmeDecla;
