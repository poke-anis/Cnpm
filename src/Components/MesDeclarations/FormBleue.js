import React, { useState, useEffect } from "react";
import {Figure} from "react-bootstrap"
import {
  Col,
  Row,
  Form,
  ProgressBar
} from "react-bootstrap";

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

const FormBleueDecla = React.forwardRef((props,ref) => {
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
    <Form>
      {declaData.length === 0 ? (
                          <ProgressBar animated now={progress} />

      ) : (
        <div ref={ref} style={{margin :"50px"}}>
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
            Type de produit/emploi
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Type_P_E}
              />
            </Col>
          </Form.Group>
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined ? 
                null: (
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
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom de marque Num??ro du mod??le
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_D_M}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            R??f??rence
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Reference}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            N?? de lot
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Numero_D_L}
              />
            </Col>
          </Form.Group>
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined  ? 
                null: (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_L`)
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
            Date de Fabrication
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_F}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date Achat
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_A}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Date P??remption
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_P}
              />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Nom Du Fabricant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_D_Fabricant}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Adresse Du Fabricant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Adresse_D_Fabricant}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Telephone Du fabricant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Telephone_D_Fabricant}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Nom Du Fournisseur
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_D_Fournisseur}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Adresse Du Fournisseur
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Adresse_D_Fournisseur}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Telephone Du Fournisseur
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Telephone_D_Fournisseur}
              />
            </Col>
          </Form.Group>
         

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Fabriquant et/ou fournisseur ont-ils ??t?? inform??s du probl??me ?
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Fabriquant_I_P}
              />
            </Col>
          </Form.Group>
{   declaData.Fabriquant_I_P === "Oui"?       
<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Date
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_Fabriquant_I_P}
              />
            </Col>
          </Form.Group>:null}
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Avez-vous pris le soin de v??rifier la relation de causalit???
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Relation_C}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Le produit ou son emballage sont-ils en votre possession?
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Produit_P}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Type d'incident
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Type_I}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Fr??quence de l'incident aves le m??me dispositif et le m??me lot
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Frequence_I}
              />
            </Col>
          </Form.Group>
          

          </BigBox>
          </FlexBox>
        </div>
      )}
    </Form>
  );
});

export default FormBleueDecla;
