import React, { useState,useEffect } from "react";

import {Figure} from "react-bootstrap"
import {
  Col,
  Row,
  ProgressBar,
  Form,
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

const FormVerteDecla = React.forwardRef((props,ref) => {
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
              Tel
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
          {declaData.Sexe === "F??minin" ? (
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Enceinte
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={declaData.Enceinte} />
                  </Col>
                </Form.Group>): null}
{                declaData.Enceinte === "Oui" ? (
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Derni??re date des r??gles
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      readOnly
                      defaultValue={declaData.Derniere_D_R}
                    />
                  </Col>
                </Form.Group>
              ) : null}  
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

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Profession
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Profession}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Activit?? sportive (volume  horaire/semaine)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Activite_S}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            R??gime alimentaire v??g??tarien
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Regime_A_V}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom de marque
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Nom_D_M}
              />
            </Col>
          </Form.Group>
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
              </BigBox>
              </FlexBox>
          {declaData.Plantes.map((el, index) => 
          <FlexBox key={index}>
          <BigBox>
            <h1 style={{width:"100%",textAlign:"center"}}>Plante {index+1}</h1>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Nom,Vernaculaire et Nom scientifique (si connu)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Nom_V_N_S}
              />
            </Col>
          </Form.Group>
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null:
 (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_D_N_${index}`)
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
            Parties utilis??es
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Partie_U}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Dose
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Dose}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Mode de pr??paration 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Mode_D_P}
              />
            </Col>
          </Form.Group>
          {el.Mode_D_P === "Autre"?
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Lequel
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Lequel_M_D_P}
              />
            </Col>
          </Form.Group>:null}
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Dates d???utilisation 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_U}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            : 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_D_U}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Raison d'utilisation de la plante m??dicinale
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Raison_U_P_M}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          )}
          <div className="page-break" />
          <FlexBox>
          <BigBox>

{/* ///Auto1 */}
          {declaData.Type_D_L_R != null &&
          declaData.Type_D_L_R.map((elem,index2)=>
  <div key={index2}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Description de l???effet ind??sirable
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={elem}
              />
            </Col>
          </Form.Group>
          { declaData.Description_D_L_R != null &&
                declaData.Description_D_L_R.map((elem2, index3) => (
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"  key={index3}>
                    <Form.Label column sm="5">
                    :
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        
                        readOnly
                        defaultValue={elem2}
                      />
                    </Col>
                  </Form.Group>
                ))}
                  </div>
  )}

          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null:
 (
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


{/* Auto3 */}
          {declaData.Type_A != null &&
          declaData.Type_A.map((elem,index2)=>
  <div key={index2}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Ant??c??dents et terrain du patient 
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={elem}
              />
            </Col>
          </Form.Group>
          { declaData.Description_A != null &&
                declaData.Description_A.map((elem2, index3) => (
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"  key={index3}>
                    <Form.Label column sm="5">
                    :
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        
                        readOnly
                        defaultValue={declaData.Description_A[index2]}
                      />
                    </Col>
                  </Form.Group>
                   ))}
                  </div>
  )}

          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date d???apparition 
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
            D??lai d???apparition
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Delai_A}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Arr??t de la phytoth??rapie
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Arret_D_L_P}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Traitement correcteur
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Traitement_C}
              />
            </Col>
          </Form.Group>

          </BigBox>
          <BigBox>
          {declaData.Traitement_C === "Oui"?
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="5">
                    Lequel
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        
                        readOnly
                        defaultValue={declaData.Lequel_T}
                      />
                    </Col>
                  </Form.Group>
          :null}
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Gravit??
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Gravite}
              />
            </Col>
          </Form.Group>
          {declaData.Gravite === "D??c??s"?
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Date de d??c??s
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Date_D_D}
              />
            </Col>
          </Form.Group>:null}
          {/* //auto6 */}

          {declaData.Type_Evolution != null &&
          declaData.Type_Evolution.map((elem,index2)=>
  <div key={index2}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Evolution
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={elem}
              />
            </Col>
          </Form.Group>
          { declaData.Description_Evolution != null &&
                declaData.Description_Evolution.map((elem2, index3) => (
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"  key={index3}>
                    <Form.Label column sm="5">
                    :
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        
                        readOnly
                        defaultValue={elem2}
                      />
                    </Col>
                  </Form.Group>
                ))}
                  </div>
  )}


          </BigBox>
          </FlexBox>
          <FlexBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Medicament
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Medicament}
              />
            </Col>
          </Form.Group>
{declaData.Medicament === "Oui"?
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Lequel
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Lequel_M}
              />
            </Col>
          </Form.Group>:null}

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Alcool
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Alcool}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Tabac
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Tabac}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Millepertuis
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Millepertuis}
              />
            </Col>
          </Form.Group>
          </BigBox>
          <BigBox>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Pamplemousse
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Pamplemousse}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              The
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.The}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Cafe
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Cafe}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Cannabis
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Cannabis}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Autres produits
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={declaData.Autres_P}
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

export default FormVerteDecla;
