import React, { useState,useEffect } from "react";
import { Field,  } from "formik";
import {Figure} from "react-bootstrap"
import {
  Col,
  Row,
    
  Form,} from "react-bootstrap";
import {
  InputText,
  InputCheck,

} from "./FormikInputs";
import styled from "styled-components";
import axiosConfig from "../axios";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const BigBox = styled.div`
padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  border: 2px solid #dee2e6;
`;
const Titre = styled.h1`
  text-align: center;
  border: 3px black solid;
  margin: 10px;
  padding: 5px;
  width: 100%;
`;
const Inputstyled = styled(Field)`
  margin: 5px;
`;
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const FormParmeDecla = (props) => {
  const { decla } = props;
  const [progress,setProgress] = useState(0)
  const [declaData, setDeclaData] = useState(decla.Cases);
  const [declaPic, setdeclaPic] = useState();
  useEffect(() => {
    axiosConfig.get(`/secure/getImages/${decla._id}`, {
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      }})
    .then(res => {
      setdeclaPic(res.data);
      })
  
  }, [])
  return (
    <Form>
      {declaData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
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
          {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_R`)
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
              {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_R_E`)
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
          {1==2 & declaPic === undefined ? <div>Loading...</div>
  :
                  <img
                    src={`data:${declaPic.mimetype};base64,${declaPic.buffer}`}
                    alt=""
                  />
              }
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
         
          {declaPic === undefined ? (
            <div>Loading...</div>
          ) : (
            <img
              src={`data:${declaPic.mimetype};base64,${declaPic.buffer}`}
              alt=""
            />
          )}
          </BigBox>
          </FlexBox>
        </div>
      )}
    </Form>
  );
};

export default FormParmeDecla;
