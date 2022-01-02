import React, { useState, useEffect } from "react";
import { useFormik, Field, FormikProvider, FieldArray } from "formik";
import {Figure} from "react-bootstrap"
import {
  Col,
  Row,
  ProgressBar,
  Form,
} from "react-bootstrap";
import {
  InputText,
  InputCheck,
  InputNumber,
  InputRadio,
  InputDate,
  InputSelect,
  InputFile,
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

const FormJauneDecla = React.forwardRef((props,ref) => {
  
  const { decla } = props;

  const [progress,setProgress] = useState(0)
  const [declaData, setDeclaData] = useState(decla.Cases);
  const [declaPic, setdeclaPic] = useState([]);
  useEffect(() => {
    axiosConfig.get(`/secure/getImages/${decla._id}`
    , {
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      }})
    .then(res => {
      if(res.data.length !==0){setdeclaPic(res.data[0].images);}
      
      })
  
  }, [])
  return (
    <Form >
      {declaData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div ref={ref}>
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
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Sexe
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Sexe} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Enceinte
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Enceinte} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Dernière date des règles
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Derniere_D_R} />
            </Col>
          </Form.Group>
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
          
          {declaData.Reaction.map((el, index) => 
          <FlexBox key={index}>
            <BigBox> 
  <h1>Reaction {index+1}</h1>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Description de la réaction 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Description_D_L_R}
              />
            </Col>
          </Form.Group>
          {declaPic === [] ? (
                <ProgressBar animated now={progress} />
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_R_${index}`)
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
            Date d’apparition 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_A}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Médicament(s) DCI (mettre le nom de marque)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Medciament_DCI}
              />
            </Col>
          </Form.Group>

          {declaPic === [] ? (
                <ProgressBar animated now={progress} />
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_M_${index}`)
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
            N° de lot
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Numero_D_L}
              />
            </Col>
          </Form.Group>
          {declaPic === [] ? (
                <ProgressBar animated now={progress} />
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_L_${index}`)
                  .map((el, key) => 
                  
                  (
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
            Voie d’administration 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Voie_A}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Posologie
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Posologie}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date d’administration Debut
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_A_D}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date d’administration Fin
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_A_F}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Raison d’emploi (indication)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Raison_E}
              />
            </Col>
          </Form.Group>
          </BigBox></FlexBox>)}
          
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nature de traitement
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nature_D_T}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Descriptif du traitement 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Descriptif_D_T}
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
            Date de décès
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_D}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
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
            Types de séquelle
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Type_D_S}
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
                defaultValue={declaData.Antecedent_M}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Les facteurs de risques associés 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Facteurs_R_A}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
        </div>
        
      )}
      
    </Form>
    
  );
})

export default FormJauneDecla;
