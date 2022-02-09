import React, { useState } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputFile } from './FormikInputs';

import styled from 'styled-components'
import axiosConfig from "../axios"
import swal from "sweetalert";
import {Tab,Nav,Button,ProgressBar,Form} from 'react-bootstrap'
import Auto1 from './Auto1'
import Auto3 from './Auto3'
import Auto6 from './Auto6'

const BigBox = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
width : 49%;
border: 2px solid #dee2e6;
padding:10px;

`
const TitreBig = styled.h1`
text-align: center;
background-color: #FDE6B5;
margin:10px;
padding:5px;
width:100%;
`
const Titre = styled.h1`
   width: 100%; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
   padding-top:10px;
`
const InsideTitre = styled.span`
    background:#fff; 
    padding:0 10px; 
`
const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
width : 100%;
margin-top:5px;
margin-bottom:10px;
`

const Inputstyled = styled(Field)`
margin:5px;
`


const Produit = (props)=>{

    const {id,formik,onFileChange} = props
  
    return (
      <FormikProvider value={formik}>
                <FlexBox>
          <BigBox>
        <InputText name="Nom commercial complet :" id={`Produits[${id}].Nom_C_C`} formik={formik} />
        <InputFile
  name='Photo du produit (Si possible) :'
  id={`Photo_P_${id}`}
  onFileChange={onFileChange}
/>
        <InputText name="Fabricant :" id={`Produits[${id}].Fabricant`} formik={formik} />
        <InputText name="N° de lot :" id={`Produits[${id}].Numero_D_L`} formik={formik} />

        <InputFile
  name='Photo du Lot (Si possible) :'
  id={`Photo_L_${id}`}
  onFileChange={onFileChange}
/>
</BigBox>
<BigBox>
        <InputDate
          name="Date de fabrication :"
          id={`Produits[${id}].Date_D_F`}
          formik={formik}
        />
        <InputDate
          name="Date de péremption :"
          id={`Produits[${id}].Date_D_P`}
          formik={formik}
        />
        <InputText name="Motif de la consommation :" id={`Produits[${id}].Motif_D_C`} formik={formik} />
        <InputText name="Dose consommée :" id={`Produits[${id}].Dose_C`} formik={formik} />
        <InputRadio
              name="Lieu d'achat :"
              id={`Produits[${id}].Lieu_A`}
              radioContent={["Pharmacie", "Herboriste","Supermarché","Autre"]}
              formik={formik}
            />
                            
          </BigBox>
          </FlexBox>
      </FormikProvider>
    );
  }
  


const FormOrange = (props) => {
  const {userID} = props
  var [files,setFiles] = useState([])
      const [Produits,setProduits] = useState([1])
      const [progress,setProgress] = useState(0)
  const formik = useFormik({
    initialValues: {
      Nom: '',
      Prenom: '',
      Tel: '',
      Age: '',
      Sexe: '',
      Taille: '',
      Poids: '',
      Profession: '',
      Activite_S: '',
      Regime_A_V: '',
      Produits:[{ 
        Nom_C_C: '',
        Fabricant: '',
        Fournisseur: '',
        Numero_D_L: '',
        Photo_L: '',
        Date_D_F: '',
        Date_D_P: '',
        Motif_D_C: '',
        Dose_C: '',
        Lieu_A: '',
    }],
    Description_D_L_R:'',
    Photo_E_I:'',
    Type_A:'',
      Date_A: '',
      Delai_D_S: '',
      Arret_D_C_A: '',
      Traitement_C: '',
      Lequel: '',
      Type_Evolution: '',
      Date_D_D: '',
      Medicament: '',
      Lequel_M: '',
      Alcool: '',
      Tabac: '',
      Millepertuis: '',
      Pamplemousse: '',
      The: '',
      Cafe: '',
      Cannabis: '',
      Autres_P: '',
    },

    onSubmit: values => {

      const formData = new FormData();
      setValidated(true);

      formData.append(
       'body',
       JSON.stringify(values)
       );
       formData.append(
        'typeOfFiches',
        'Orange'
        );
       files.forEach((el,index)=>{
         formData.append(
       `${el.file_id}`,
       el.uploaded_file.file
       );
     })
     
  
      axiosConfig.post(`/secure/postfichesData/?userID=${userID}`,   formData,  {
       headers: {
         "Content-Type": "multipart/form-data",
       }, 
       onUploadProgress: (progressEvent) => {
           let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
           setProgress(percentCompleted);
         }
     } )
     .then((res) => {
      if (res.data.result === "success") {
        swal("Success!", res.data.message, "success").then(value => {
        });
      } else if (res.data.result === "error") {
        swal("Error!", res.data.message, "error");
      }
    });
         }, 
       });
      var onFileChange = (event,name) => {
       event.preventDefault();
     
       let id = event.target.id;
     
       let file = event.target.files[0];
         setFiles([...files, { file_id: id, uploaded_file: {file} }]);

      }
     
  ;

  const [validated, setValidated] = useState(false);

  return (
    <Form  validated={validated}  onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
      <TitreBig>Fiche Compléments alimentaires</TitreBig>
        <Titre><InsideTitre>Informations du patient</InsideTitre></Titre>
        <FlexBox>
          <BigBox>
            <InputText name="Nom :" id="Nom" formik={formik} maxlength={3}/>
            <InputText name="Prénom :" id="Prenom" formik={formik} />
            <InputNumber name="Tél/Fax/Mobile :" id="Tel" formik={formik} />
            <InputNumber name="Age :" id="Age" formik={formik} />
          
            <InputRadio
              name="Sexe :"
              id="Sexe"
              radioContent={["Masculin", "Feminin"]}
              formik={formik}
            />
            </BigBox>
          <BigBox>
            <InputText name="Taille (cm) :" id="Taille" formik={formik} />
            <InputText name="Poids (Kg) :" id="Poids" formik={formik} />
            <InputText name="Profession :" id="Profession" formik={formik} />
            <InputText
              name="Activité sportive (volume horaire/semaine) :"
              id="Activite_S"
              formik={formik}
            />
            <InputRadio
              name="Régime alimentaire végétarien :"
              id="Regime_A_V"
              radioContent={["Oui", "Non"]}
              formik={formik}
            />
          </BigBox>
        </FlexBox>

        <Titre><InsideTitre>Identification du produit</InsideTitre></Titre> 
        <Tab.Container id="left-tabs-example" defaultActiveKey="Produit#1">
        <Nav variant="tabs"  >
          {Produits.map((el, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link eventKey={`Produit#${el}`}>Produits#{el}</Nav.Link>
              </Nav.Item>
            );
          })}
          <Nav.Item
            as={() => {
              return (
                <Button  variant="light"type="Button"
                  onClick={() => {

                    setProduits([...Produits, Produits.length + 1]);
                  }}
                >
                  +
                </Button>
              );
            }}
          />
        </Nav>
<Tab.Content  >
          {Produits.map((el, index) => {

            return (
              <Tab.Pane eventKey={`Produit#${el}`} key={index}>
                    <Produit formik={formik} id={index} className={`Produits#${el}`}/>
              </Tab.Pane>
            );
          })}


        </Tab.Content>
        </Tab.Container>
        <FlexBox>
        <BigBox>
 
        <label htmlFor="Effets_I">Description de l'effet indésirable :</label>
        <Auto1 isMulti={false} id={``} formik={formik} values={formik.values.Type_D_L_R}/>
        <InputFile
  name="Photo de l'effet indesirable(Si possible) :"
  id={`Photo_E_I`}
  onFileChange={onFileChange}
/>
        <label htmlFor="Effets_I">Antécédents et terrain du patient  :</label>
        <Auto3 id={``} formik={formik} values={formik.values.Type_A}/>

</BigBox>
<BigBox>
        <InputDate name="Date d’apparition :" id="Date_A" formik={formik} />
        <InputText name="Délai de survenue :" id="Delai_D_S" formik={formik} />
        </BigBox>
        </FlexBox>
        <Titre><InsideTitre>Conduite adoptée</InsideTitre></Titre>
        <FlexBox>
        <BigBox>

        <InputCheck name="Arrêt du complément alimentaire:" 
id="Arret_D_C_A"
checkContent={["Oui","Non"]} 
formik={formik}
 />
        <InputRadio name="Traitement correcteur :" 
id="Traitement_C"
radioContent={["Oui","Non"]} 
formik={formik}
 />
{        formik.values.Traitement_C === "Oui"?            
        <label htmlFor="Lequel">Lequel
            <Inputstyled
            id="Lequel"
            name="Lequel"
            type="text"
            onChange={formik.handleChange}
        /></label>:null}   </BigBox>
         <BigBox>
         <InputRadio name="Gravité :" 
id="Gravite"
radioContent={["Non grave","Hospitalisation ou prolongation de l'hospitalisation","Mise en jeu du pronostic vital","Autre situation médicale grave","Décès"]} 
formik={formik}
 />       
{        formik.values.Gravite === "Décès"?            
        <InputDate name="Date de décès :" id="Date_D_D" formik={formik} />:null}
                              <label htmlFor="Type_Evolution">Evolution</label>

                <Auto6 id={``} formik={formik} values={formik.values.Type_Evolution}/>
                </BigBox>
                </FlexBox>

        <Titre><InsideTitre>Consommations associées</InsideTitre></Titre>
        <FlexBox>
          <BigBox>
        <InputRadio name="Médicament :" 
id="Medicament"
radioContent={["Oui","Non"]} 
formik={formik}
 />
 {        formik.values.Medicament === "Oui"?            
        <label htmlFor="Lequel">Lequel
            <Inputstyled
            id="Lequel_M"
            name="Lequel_M"
            type="text"
            onChange={formik.handleChange}
        /></label>:null}
         <InputRadio name="Alcool :" 
id="Alcool"
radioContent={["Oui","Non"]} 
formik={formik}
 />
         <InputRadio name="Tabac :" 
id="Tabac"
radioContent={["Oui","Non"]} 
formik={formik}
 />
         <InputRadio name="Millepertuis :" 
id="Millepertuis"
radioContent={["Oui","Non"]} 
formik={formik}
 />
 </BigBox>
 <BigBox>
         <InputRadio name="Pamplemousse :" 
id="Pamplemousse"
radioContent={["Oui","Non"]} 
formik={formik}
 />
 
         <InputRadio name="Thé :" 
id="The"
radioContent={["Oui","Non"]} 
formik={formik}
 />
         <InputRadio name="Café :" 
id="Cafe"
radioContent={["Oui","Non"]} 
formik={formik}
 />
         <InputRadio name="Cannabis :" 
id="Cannabis"
radioContent={["Oui","Non"]} 
formik={formik}
 />
        <InputText name="Autres produits :" id="Autres_P" formik={formik} />

        
          </BigBox>
          </FlexBox>

          <div style={{display:"flex"}}> <Button type="submit" variant="primary">Confirmer</Button><ProgressBar animated now={progress} style={{width:'50%',margin:'10px'}}/></div>
      </FormikProvider>
    </Form>
  );

};


export default FormOrange;