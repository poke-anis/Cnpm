import React, { useState, useEffect } from "react";
import { useFormik, Field, FormikProvider, FieldArray } from "formik";
import {} from "react-bootstrap"
import {
  Figure,
  Col,
  Row,  
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

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const BigBox = styled.div`
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

const FormCoronavirusDecla = (props) => {
  const { decla } = props;
  const [progress,setProgress] = useState(0)
  const [declaData, setDeclaData] = useState(decla.Cases);
  const [declaPic, setdeclaPic] = useState();

  useEffect(() => {
    axiosConfig.get(`/secure/getImages/${decla._id}`, {
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(progressEvent.lengthComputable)
        setProgress(percentCompleted);
      }})
    .then(res => {
      setdeclaPic(res.data);
      console.log(res)
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
              Wilaya
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Wilaya}
              />
            </Col>
          </Form.Group>
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
          </BigBox>
          <BigBox>
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
              Sexe
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Sexe} />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          {declaData.Vaccin.map((el, index) => (
            <FlexBox key={index}>
            <BigBox>
              <h1>Vaccin {index+1}</h1>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Type du vaccin
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Type_D_V} />
                </Col>
              </Form.Group>
              {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_D_V_${index}`)
                  .map((el, key) => (
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  ))
              )}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Fabricant
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Fabricant}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Date de vaccination
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Date_D_V} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Heure de vaccination
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Heure_D_V}
                  />
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
                  Dose
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Dose} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Voie
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Voie} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Point D'injection
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Point_D} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  N° de lot
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Num_D_Lot}
                  />
                </Col>
              </Form.Group>
              {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_L_D_V_${index}`)
                  .map((el, key) => (
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  ))
              )}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Date de péremption
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Date_D_Peremption}
                  />
                </Col>
              </Form.Group>
              </BigBox>
  
  </FlexBox>
          ))}

          {declaData.Solvant.map((el, index) => (
                    <FlexBox key={index}>
                    <BigBox>
              <h1>Solvant {index+1}</h1>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Solvant
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Nom_D_S}
                  />
                </Col>
              </Form.Group>
              {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_D_S_${index}`)
                  .map((el, key) => (
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  ))
              )}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Fabricant
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Fabricant}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
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
              {declaPic === undefined ? (
                <div>Loading...</div>
              ) : (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_L_D_S_${index}`)
                  .map((el, key) => (
                    <Figure>
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Date de péremption
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Date_D_P} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Date de reconstitution
                </Form.Label>
                <Col sm="7">
                  <Form.Control  readOnly defaultValue={el.Date_D_R} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Heure de reconstitution
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    
                    readOnly
                    defaultValue={el.Heure_D_R}
                  />
                </Col>
              </Form.Group>
              </BigBox>
          </FlexBox>
          ))}
                    <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Manifestation(s) post-vaccinale(s) indésirable(s)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Manifestation_P_V_I}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Traitement reçu de la MPVI
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Traitement_R_MPVI}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Lequel
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Lequel}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Hospitalisation
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Hospitalisation}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Motif
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Motif_H}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Hopital
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Hopital}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
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
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Autopsie effectuée
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Autopsie_E}
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
              Prise concomitante de médicaments ou autre substance
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Prise_C_M}
              />
            </Col>
          </Form.Group>
          </BigBox>
        </FlexBox>
        </div>
      )}
    </Form>
  );
};

export default FormCoronavirusDecla;