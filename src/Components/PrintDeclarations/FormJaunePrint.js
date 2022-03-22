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
const InsideTitre = styled.span`
    background:#fff; 
    padding:0 10px; 
`

const TitreBig = styled.h1`
   width: 100%; 
   border-bottom: 3px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
   padding-top:10px;
`

const FlexBox = styled.div`
margin-top:10px;

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

            
            <TitreBig>
            <InsideTitre>Information Compte</InsideTitre>
                </TitreBig>
              <div>
              <h6 style={{display: "inline"}}>
                  Nom :
                </h6>
                   <p style={{display: "inline"}}>{declaUser.Nom}</p>
              </div>
 
              <div>

                <h6 style={{display: "inline"}}>
                  Prenom :
                </h6>
                <p style={{display: "inline"}}>{declaUser.Prenom}</p>
                </div>
                <div>
                <h6 style={{display: "inline"}}>
                  Telephone :
                </h6>
                <p style={{display: "inline"}}>{declaUser.Telephone}</p>
                </div>
                
                
                <div>

                <h6 style={{display: "inline"}}>
                Email :
                </h6>
                <p style={{display: "inline"}}>{declaUser.Email}</p>
                </div>
                <div>

                <h6 style={{display: "inline"}}>
                  Nom d'utilisateur :
                </h6>
                <p style={{display: "inline"}}>{declaUser.Username}</p>
                </div>
                
                <div>

                  <h6 style={{display: "inline"}}>
                    Exercice :
                  </h6>
                  <p style={{display: "inline"}}>{declaUser.Type_Exercice}</p>
                  </div>

                  <div>

                <h6 style={{display: "inline"}}>
                Adresse Professionnelle :
                </h6>
                <p style={{display: "inline"}}>{declaUser.Adresse_Professionnelle}</p>
                </div>

                <div>

                <h6 style={{display: "inline"}}>
                  Profession :
                </h6>
                <p style={{display: "inline"}}>{declaUser.Profession}</p>
                </div>

            
          </FlexBox>
          <FlexBox>
            
            <TitreBig >
            <InsideTitre>
                  Information Patient
                  </InsideTitre>
                </TitreBig>
                <div>

                <h6 style={{display: "inline"}}>
                  Nom :
                </h6>
                <p style={{display: "inline"}}>{declaData.Nom}</p>
                </div>
                <div>

                <h6 style={{display: "inline"}}>
                  Prenom :
                </h6>
                <p style={{display: "inline"}}>{declaData.Prenom}</p>
                </div>
                <div>

                <h6 style={{display: "inline"}}>
                  Telephone :
                </h6>
                <p style={{display: "inline"}}>{declaData.Tel}</p>
                </div>
                <div>

                <h6 style={{display: "inline"}}>
                  Age :
                </h6>
                <p style={{display: "inline"}}>{declaData.Age}</p>
                </div>


            
            
                <div>

                <h6 style={{display: "inline"}}>
                  Sexe :
                </h6>
                <p style={{display: "inline"}}>{declaData.Sexe}</p>
                </div>

              {declaData.Sexe === "Feminin" ? (
<>
<h6 style={{display: "inline"}}>
                    Enceinte :
                  </h6>
                  <p style={{display: "inline"}}>{declaData.Enceinte}</p>
                  
                  </>

                ): null}
{                declaData.Enceinte === "Oui" ? (
<>
<h6 style={{display: "inline"}}>
                    Dernière date des règles
                  </h6>
                  <p style={{display: "inline"}}>{declaData.Derniere_D_R}</p>       
                  </>

              ) : null}  
                <div>

                <h6 style={{display: "inline"}}>
                  Taille :
                </h6>
                <p style={{display: "inline"}}>{declaData.Taille}</p> 
                </div>
                <div>

                <h6 style={{display: "inline"}}>
                  Poids :
                </h6>
                <p style={{display: "inline"}}>{declaData.Poids}</p> 
                </div>

            
          </FlexBox>
          
          <FlexBox >

          {declaData.Reactions.map((el, index) => (
      
         
              <div key={index} >
                <TitreBig >
                <InsideTitre>
                  Reaction {index + 1}
                  </InsideTitre>
                </TitreBig>
                {/* // Auto1 */}
                { el.Type_D_L_R != null &&
                el.Type_D_L_R.map((elem, index2) => (
                  <div key={index2}>

                      <h6 style={{display: "inline"}}>
                        Description de la réaction
                      </h6>
                      <p style={{display: "inline"}}>{decla.typeOfApp === "Mobile" ? namereturn(elem):elem}</p>

                      { el.Description_D_L_R != null &&
                el.Description_D_L_R.map((elem2, index3) => (

<>
<h6 style={{display: "inline"}}>
                        :
                      </h6>
                      <p style={{display: "inline"}}>{elem2}</p> 
</>
                                              
                       ))}
                   
                  </div>
                ))}

                {declaPic === [] & progress < 100 ? (
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

                  <h6 style={{display: "inline"}}>
                    Date d’apparition :
                  </h6>
                  <p style={{display: "inline"}}>{el.Date_A}</p> 

               
              </div>
              
     
          ))}
          </FlexBox>
          
          {declaData.Medicaments.map((el, index) => (
            <FlexBox key={index}>
              
                <TitreBig >
                <InsideTitre>
                  Medicament {index + 1}
                  </InsideTitre>
                </TitreBig>
                {/* // Auto1 */}

                  <h6 style={{display: "inline"}}>
                    Médicament(s) DCI (mettre le nom de marque)
                  </h6>
                  <p style={{display: "inline"}}>{el.Medciament_DCI}</p> 


                {declaPic === [] & progress < 100 ? (
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
                  <h6 style={{display: "inline"}}>
                    N° de lot :
                  </h6>
                  <p style={{display: "inline"}}>{el.Numero_D_L}</p> 

 
                {declaPic === [] & progress < 100 ? (
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
              
              
                {/* //auto2 */}
                {el.Type_Voie_A != null &&
                el.Type_Voie_A.map((elem, index2) => (
                  <div key={index2}>

                      <h6 style={{display: "inline"}}>
                        Voie d’administration :
                      </h6>
                      <p style={{display: "inline"}}>{elem}</p> 


                    {el.Description_Voie_A != null &&
                el.Description_Voie_A.map((elem2, index2) => (
<>                      <h6 style={{display: "inline"}}>
                        :
                      </h6>
                      <p style={{display: "inline"}}>{elem2}</p> 
                      </>


                ))}
                  </div>
                ))}
                <div>

 
                  <h6 style={{display: "inline"}}>
                    Posologie :
                  </h6>
                  <p style={{display: "inline"}}>{el.Posologie}</p> 
                  </div>
                  <div>
 
                  <h6 style={{display: "inline"}}>
                    Date d’administration Debut :
                  </h6>
                  <p style={{display: "inline"}}>{el.Date_A_D}</p> 
                  </div>
                  <div>

                  <h6 style={{display: "inline"}}>
                    Date d’administration Fin :
                  </h6>
                  <p style={{display: "inline"}}>{el.Date_A_F}</p> 
                  </div>
                  <div>

                  <h6 style={{display: "inline"}}>
                    Raison d’emploi (indication) :
                  </h6>
                  <p style={{display: "inline"}}>{el.Raison_E}</p> 
                  </div>

              
                       </FlexBox>
          ))}
         
          <FlexBox>
          <div>

                <h6 style={{display: "inline"}}>
                  Nature de traitement :
                </h6>
                <p style={{display: "inline"}}>{declaData.Nature_D_T}</p>
                </div>
                <div>
                <h6 style={{display: "inline"}}>
                  Descriptif du traitement :
                </h6>
                <p style={{display: "inline"}}>{declaData.Descriptif_D_T}</p>
                </div>
                <div>
                <h6 style={{display: "inline"}}>
                  Evolution :
                </h6>
                <p style={{display: "inline"}}>{declaData.Evolution}</p>
                </div>
              {declaData.Evolution === "Décès" ? (
 <>
                   <h6 style={{display: "inline"}}>
                    Date de décès :
                  </h6>
                  <p style={{display: "inline"}}>{declaData.Date_D_D}</p>
                  </>

 
              ) : null}
            
            
 
                <h6 style={{display: "inline"}}>
                  Sequelles :
                </h6>
                <p style={{display: "inline"}}>{declaData.Sequelles}</p>

  
              {declaData.Sequelles === "Oui" ? (
<>                  <h6 style={{display: "inline"}}>
                    Types de séquelle :
                  </h6>
                  <p style={{display: "inline"}}>{declaData.Types_D_S}</p>
                 </>

  
              ) : null}

              {/* Auto3 */}
              {declaData.Type_A != null &&
              declaData.Type_A.map((elem, index2) => (
                <div key={index2}>
  
                    <h6 style={{display: "inline"}}>
                      Antécédents du malade/Histoire de la maladie ou
                      commentaires :
                    </h6>
                    <p style={{display: "inline"}}>{declaData.elem}</p>
  
                    <h6 style={{display: "inline"}}>
                      :
                    </h6>
                    <p style={{display: "inline"}}>{declaData.Description_A[index2]}</p>
   
                </div>
              ))}
<div>
                <h6 style={{display: "inline"}}>
                  Les facteurs de risques associés :
                </h6>
                <p style={{display: "inline"}}>{declaData.Facteurs_R_A}</p>
                </div>

       
            
          </FlexBox>
        </div>
      )}
    </Form>
  );
})

export default FormJauneDecla;
