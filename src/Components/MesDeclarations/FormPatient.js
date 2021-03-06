import React, { useState, useEffect } from "react";
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

const FormJauneDecla = React.forwardRef((props,ref) => {
  
  const { decla } = props;

  const [progress,setProgress] = useState(0)
  const [declaData, setDeclaData] = useState(decla.Cases);
  const [declaUser, setDeclaUser] = useState(decla.creator);

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

  const namereturn = (value) => {
    if (value === 'Point_I') {
    return "Au point d'injection"
    }
    else if (value === 'Systemiques')
    {return 'Systemiques'}
    else if (value === 'Infectieux')
    {return 'Infectieux'}
    else if (value === 'Neurologiques')
    {return 'Neurologiques'}
    else if (value === 'Digestifs')
    {return 'Digestifs'}
    else if (value === 'Cardio_vasculaires')
    {return 'Cardio vasculaires'}
    else if (value === 'Respiratoires')
    {return 'Respiratoires'}
    else if (value === 'Allergiques')
    {return 'Allergiques'}
    else if (value === 'Sphere_ORL')
    {return 'Sphere ORL'}
    else if (value === 'Biologiques')
    {return 'Biologiques'}
    else if (value === 'Musculo_squelettique')
    {return 'Musculo squelettique'}
    else if (value === 'Ophtalmologiques')
    {return 'Ophtalmologiques'}
    }
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Nom
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Nom} />
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
                  <Form.Control readOnly defaultValue={declaData.Prenom} />
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
                  <Form.Control readOnly defaultValue={declaData.Tel} />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Age
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Age} />
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
                  Sexe
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Sexe} />
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Taille
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Taille} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Poids
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Poids} />
                </Col>
              </Form.Group>
            </BigBox>
          </FlexBox>
          <FlexBox >
          {declaData.Reactions.map((el, index) => (
            
              <BigBox  key={index}>
                <h1 style={{ width: "100%", textAlign: "center" }}>
                  Reaction {index + 1}
                </h1>
                {/* // Auto1 */}
                { el.Type_D_L_R != null &&
                el.Type_D_L_R.map((elem, index2) => (
                  <div key={index2}>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="5">
                        Description de la r??action
                      </Form.Label>
                      <Col sm="7">
                        <Form.Control readOnly defaultValue={decla.typeOfApp === "Mobile" ? namereturn(elem):elem} />
                      </Col>
                    </Form.Group>


                      { el.Description_D_L_R != null &&
                el.Description_D_L_R.map((elem2, index3) => (
                  <Form.Group
                  key={index3}
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                      
                                              <Form.Label column sm="5">
                        :
                      </Form.Label>
                      <Col sm="7">
                        <Form.Control
                          readOnly
                          defaultValue={elem2}
                        />
                        </Col>
                       </Form.Group>))}
                   
                  </div>
                ))}

                {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null: (
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
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Date d???apparition
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Date_A} />
                  </Col>
                </Form.Group>
               
              </BigBox>

            
          ))}
          </FlexBox>
          <div className="page-break" />
          {declaData.Medicaments.map((el, index) => (
            <FlexBox key={index}>
              <BigBox>
                <h1 style={{ width: "100%", textAlign: "center" }}>
                  Medicament {index + 1}
                </h1>
                {/* // Auto1 */}
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    M??dicament(s) DCI (mettre le nom de marque)
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Medciament_DCI} />
                  </Col>
                </Form.Group>

                { progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null: (
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
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    N?? de lot
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Numero_D_L} />
                  </Col>
                </Form.Group>
                {progress < 100 ? (
                  <ProgressBar animated now={progress} />
                ) :declaPic === undefined?  
                null: (
                  declaPic
                    .filter((el, key) => el.fieldname === `Photo_L_${index}`)
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
                {/* //auto2 */}
                {el.Type_Voie_A != null &&
                el.Type_Voie_A.map((elem, index2) => (
                  <div key={index2}>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="5">
                        Voie d???administration
                      </Form.Label>
                      <Col sm="7">
                        <Form.Control readOnly defaultValue={elem} />
                      </Col>
                    </Form.Group>
                    { declaData.Description_Voie_A != null &&
                declaData.Description_Voie_A.map((elem2, index3) => (
                    <Form.Group
                    key={index3}
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
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
                ))}

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Posologie
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Posologie} />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Date d???administration Debut
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Date_A_D} />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Date d???administration Fin
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Date_A_F} />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Raison d???emploi (indication)
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={el.Raison_E} />
                  </Col>
                </Form.Group>
              </BigBox>
            </FlexBox>
          ))}
          <FlexBox>
            <BigBox>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                  Nature de traitement
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Nature_D_T} />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
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
              {declaData.Type_Evolution != null &&
          declaData.Type_Evolution.map((elem,index2)=>
  <div key={index2}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="5">
            Description de l'evolution
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
            <BigBox>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="5">
                Cons??quences sur la vie quotidienne 
                </Form.Label>
                <Col sm="7">
                  <Form.Control readOnly defaultValue={declaData.Cons??quences_S_V_Q} />
                </Col>
              </Form.Group>
              {declaData.Cons??quences_S_V_Q === "Oui" ? (
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="5">
                    Types de Cons??quences sur la vie quotidienne
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control readOnly defaultValue={declaData.Cons??quences_S_V_Q_O} />
                  </Col>
                </Form.Group>
              ) : null}
              

              {/* Auto3 */}
              {declaData.Type_A != null &&
              declaData.Type_A.map((elem, index2) => (
                <div key={index2}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="5">
                      Ant??c??dents du malade/Histoire de la maladie ou
                      commentaires
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control readOnly defaultValue={elem} />
                    </Col>
                  </Form.Group>
                  { declaData.Description_A != null &&
                declaData.Description_A.map((elem2, index3) => (
                  <Form.Group
                  key={index3}
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
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
              ))}

            </BigBox>
          </FlexBox>
        </div>
      )}
    </Form>
  );
})

export default FormJauneDecla;
