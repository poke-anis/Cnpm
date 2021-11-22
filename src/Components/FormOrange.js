import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';
import { MultiSelect } from "react-multi-select-component";
import styled from 'styled-components'
import axios from 'axios'
import SelectField from './React-select'
import CreatableSelect from 'react-select/creatable';
import {Tab,Tabs,TabPane ,TabContent,Nav,TabContainer} from 'react-bootstrap'
const Box = styled.div`
display: flex;
flex-direction: column;
width : 45%;
`
const BigBox = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
width : 49%;
border: 2px solid #dee2e6;

`
const Titre = styled.h1`
text-align: center;
border: 3px black solid;
margin:10px;
padding:5px;
width:100%;
`
const Inputstyled = styled(Field)`
margin:5px;
`
const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
width : 100%;

`


const Produit = (props)=>{

    const {id,formik} = props
  
    return (
      <FormikProvider value={formik}>
        <InputText name="Nom commercial complet :" id={`Produit${id}.Nom_C_C`} formik={formik} />
        <InputText name="Fabricant :" id={`Produit${id}.Fabricant`} formik={formik} />
        <InputText name="N° de lot :" id={`Produit${id}.Numero_D_L`} formik={formik} />
        <InputFile
          name="Photo du lot (Si possible) :"
          id={`Produit${id}.Photo_L`}
          formik={formik}
        />
        <InputDate
          name="Date de fabrication :"
          id={`Produit${id}.Date_D_F`}
          formik={formik}
        />
        <InputDate
          name="Date de péremption :"
          id={`Produit${id}.Date_D_P`}
          formik={formik}
        />
        <InputText name="Motif de la consommation :" id={`Produit${id}.Numero_D_L`} formik={formik} />
        <InputText name="Dose consommée :" id={`Produit${id}.Numero_D_L`} formik={formik} />
        <InputRadio
              name="Lieu d'achat :"
              id={`Produit${id}.Lieu_A`}
              radioContent={["Pharmacie", "Herboriste","Supermarché","Autre"]}
              formik={formik}
            />
      </FormikProvider>
    );
  }
  


const FormOrange = () => {

      const [Produits,setProduits] = useState([1])

  const formik = useFormik({
    initialValues: {
      Nom: '',
      Prenom: '',
      Tel: '',
      Age: '',
      Sexe: '',
      Taille: '',
      poids: '',
      Description_D_L_R: '',
      Date_A: '',
      Medciament_DCI: '',
      Numero_D_L: '',
      Voie_A: '',
      Posologie: '',
      Date_A_D: '',
      Date_A_F: '',
      Raison_E: '',
      Nature_D_T: '',
      Descriptif_D_T: '',
      Evolution:'',
      Sequelles:'',
      Facteurs_R_A:'',
    Partie_U:'' ,
    Dose:{},
    Mode_D_P: '',

    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      axios.post(`http://127.0.0.1:3001/api/postfichesData/`, { values })
      .then(res => {
        console.log(res);
        console.log(res.data);})
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <Titre>Informations du patient</Titre>
        <FlexBox>
          <BigBox>
            <InputText name="Nom :" id="Nom" formik={formik} />
            <InputText name="Prénom :" id="Prenom" formik={formik} />
            <InputNumber name="Tél/Fax/Mobile :" id="Tel" formik={formik} />
            <InputNumber name="Age :" id="Age" formik={formik} />
          </BigBox>
          <BigBox>
            <InputRadio
              name="Sexe :"
              id="Sexe"
              radioContent={["Masculin", "Feminin"]}
              formik={formik}
            />
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

        <Titre>Identification du produit</Titre>
        <TabContainer id="Produits-tabs-example" defaultActiveKey="Produit#1" >
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
                <button type="button"
                  onClick={() => {
                    setProduits([...Produits, Produits.length + 1]);
                  }}
                >
                  ++
                </button>
              );
            }}
          />
        </Nav>
<TabContent>
          {Produits.map((el, index) => {
            console.log(el)
            return (
              <TabPane eventKey={`Produit#${el}`} key={index}>
                    <Produit formik={formik} id={index} className={`Produit#${el}`}/>
              </TabPane>
            );
          })}


        </TabContent>
        </TabContainer>
        <InputDate name="Date d’apparition :" id="Date_A" formik={formik} />
        <InputText name="Délai de survenue :" id="Delai_D_S" formik={formik} />

        <Titre>Conduite adoptée</Titre>
        <InputCheck name="Arrêt de la phytothérapie :" 
id="Arret_D_L_P"
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
        /></label>:null}
         <InputRadio name="Gravité :" 
id="Gravite"
radioContent={["Non grave","Hospitalisation ou prolongation de l'hospitalisation","Mise en jeu du pronostic vital","Autre situation médicale grave","Décès"]} 
formik={formik}
 />       
{        formik.values.Gravite === "Décès"?            
        <InputDate name="Date de décès :" id="Date_D_D" formik={formik} />:null}
        <Titre>Consommations associées</Titre>

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




        <button type="submit">Submit</button>
      </FormikProvider>
    </form>
  );

};


export default FormOrange;