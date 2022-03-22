import React, { useState ,useEffect} from "react";
import {Figure} from 'react-bootstrap'
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

const FormBlancheDecla = React.forwardRef((props,ref) => {
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
          <BigBox>
          {declaData.Sexe === "Féminin" ? (
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
                    Dernière date des règles
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      readOnly
                      defaultValue={declaData.Derniere_D_R}
                    />
                  </Col>
                </Form.Group>
              ) : null}  


          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Taille (cm)
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
              Poids (Kg)
            </Form.Label>
            <Col sm="7">
              <Form.Control  readOnly defaultValue={declaData.Poids} />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
      
          {declaData.Vaccins.map((el, index) => 
              <FlexBox key={index}>
            <BigBox>
                <h1 style={{width:"100%",textAlign:"center"}}>Vaccin {index+1}</h1>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="5">
              Type du vaccin
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Type_D_V}
                />
              </Col>
            </Form.Group>
            {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null: (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_D_V_${index}`)
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
                Fabricant
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Fabricant_V}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="5">
              Date de vaccination
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Date_D_V}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="5">
                Voie
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Voie}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="5">
                Point D'injection
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Point_D}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="5">
              N° de lot
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Numero_D_L_V}
                />
              </Col>
            </Form.Group>
            {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null:(
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_L_V_${index}`)
                  .map((el, key) => 
                    <Figure key={key}>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>
                  )
              )}
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="5">
              Date de péremption
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  
                  readOnly
                  defaultValue={el.Date_D_P_V}
                />
              </Col>
            </Form.Group>
            
            </BigBox>
  
            </FlexBox>
          )}
<div className="page-break" />

          {declaData.Solvants.map((el, index) => 
          <FlexBox key={index}>
          <BigBox>

<h1 style={{width:"100%",textAlign:"center"}}>Solvant {index+1}</h1>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Solvant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Type_S}
              />
            </Col>
          </Form.Group>
          {el.Type_S === "Autre"?
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Lequel
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Lequel_S}
              />
            </Col>
          </Form.Group>:null}
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null: (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_T_S_${index}`)
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
              Fabricant
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Fabricant_S}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              N° de lot
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Numero_D_L_S}
              />
            </Col>
          </Form.Group>
          {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null: (
                declaPic
                  .filter((el, key) => el.fieldname === `Photo_L_S_${index}`)
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
              Date de péremption
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_D_P_S}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Date de reconstitution
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Date_D_R_S}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Heure de reconstitution
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={el.Heure_D_R_S}
              />
            </Col>
          </Form.Group>
          </BigBox>
          </FlexBox>
          )}
          
          <FlexBox>
          <BigBox>

            {/* Auto8 */}
          {declaData.Type_Manifestation_P_V_I != null &&
          declaData.Type_Manifestation_P_V_I.map((elem,index2)=>
  <div key={index2}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Manifestation(s) post-vaccinale(s) indésirable(s)
            </Form.Label>
            <Col sm="7">
              <Form.Control
                
                readOnly
                defaultValue={elem}
              />
            </Col>
          </Form.Group>
          { declaData.Description_Manifestation_P_V_I != null &&
                declaData.Description_Manifestation_P_V_I.map((elem2, index3) => (

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" key={index3}>
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
          {declaData.Evolution === "Décès"?
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
          </Form.Group>:null}
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
          {/* Auto3 */}
          {declaData.Type_A != null &&
          declaData.Type_A.map((elem,index2)=>
  <div key={index2}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
              Antécédents du malade/Histoire de la maladie ou commentaires
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
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" key={index3}>
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
          {declaData.Prise_C_M === "Oui"?
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="5">
                    Lequel :
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        
                        readOnly
                        defaultValue={declaData.Lequel_C_M}
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

export default FormBlancheDecla;