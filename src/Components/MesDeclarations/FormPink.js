import React, { useState,useEffect } from "react";
import {  Field,} from "formik";
import {Figure} from "react-bootstrap"
import {
  Col,
  Row,
    
  Form,
} from "react-bootstrap";
import {
  InputText,
  InputCheck,

} from "./FormikInputs";
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
margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const FormBlancheDecla = (props) => {
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
              Nom
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Nom} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Prenom
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Prenom}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Telephone
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Tel} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Age
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Age} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Sexe
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Sexe} />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Taille
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Taille}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Poids
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Poids} />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            N° de lot
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Numero_D_L}
              />
            </Col>
          </Form.Group>
          
          {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
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
            Nom complet
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_C}
              />
            </Col>
          </Form.Group>
          {declaPic = undefined ? (
                <div>Loading...</div>
              ) : (
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
            Société/marque
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Societe_M}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Usage/fonction du produit
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Usage_D_P}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Lieu d'achat
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Lieu_A}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Coordonnées inscrites sur le produit
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Coordonnees_S_L_P}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date de première utilisation
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_P_U}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Frequence_U_U
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Frequence_U_U}
              />
            </Col>
          </Form.Group>

        
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Fréquence d'utlisation (par jour/semaine/mois)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Frequence_U}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Durée d'utilisation du produit
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Duree_U_P}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date de survenue de l'effet indésirable
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_S_E_I}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Utilisation simultanée de produit
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Utilisation_S_P}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Exposition particulière au produit
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Exposition_P}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Zone d'application du produit
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Zone_A_P}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Le site de la réaction
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Site_R}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Description des zones concernées
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Description_Z_C}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Description de l'effet indésirable
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Description_E_I}
              />
            </Col>
          </Form.Group>
          {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_E_I`)
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
              Traitement
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Traitement}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Evolution
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Evolution}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Sequelles
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Sequelles}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Antécédents du malade/Histoire de la maladie ou commentaires
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Antecedant_M_H}
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

export default FormBlancheDecla;
