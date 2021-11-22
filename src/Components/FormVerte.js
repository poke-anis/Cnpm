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


const Plante = (props)=>{
    const Partie_U = [
        { label: "entière", value: "entiere" },
        { label: "fleurs", value: "fleurs" },
        { label: "feuilles", value: "feuilles"},
        { label: "tiges", value: "tiges"},
        { label: "écorces", value: "ecorces"},
        { label: "fruits", value: "fruits"},
        { label: "racines", value: "racines"},
        { label: "graines", value: "graines"},
        { label: "Autre", value: "Autre"},
      ];
      const Dose = [
        { label: "Cuillère à café", value: "Cuillere_A_C" },
        { label: "Cuillère à soupe", value: "Cuillere_A_S" },
        { label: "Poignée", value: "Poignee"},
        { label: "Pincée", value: "Pincee"},
        { label: "Gramme", value: "Gramme"},

      ];
      const Mode_D_P = [
        { label: "infusion", value: "infusion" },
        { label: "Décoction", value: "Décoction" },
        { label: "Macération", value: "Macération"},
        { label: "Autre", value: "Autre"},

      ];

    const {id,formik} = props
  
    return (
      <FormikProvider value={formik}>
        <InputText
          name="Nom,Vernaculaire et Nom scientifique (si connu) :"
          id={`Plante${id}.Nom_V_N_S`}
          formik={formik}
        />

        <h1>Parties utilisées</h1>
        <label htmlFor="Parties utilisées">Parties utilisées</label>
        <Field
             component={SelectField}
             name={`Plante${id}.Partie_U`}
          options={Partie_U}
        />
        <label htmlFor="Dose">Dose</label>

        <Field
        name={`Plante${id}.Dose`}
             component={SelectField}
          options={Dose}
        />
        <label htmlFor="Mode de préparation">Mode de préparation</label>
        <Field
        name={`Plante${id}.Mode_D_P`}
             component={SelectField}
          options={Mode_D_P}
        />

        <InputCheck
          name="Dates d’utilisation :"
          id={`Plante${id}.Date_U`}
          checkContent={["Début", "Fin"]}
          formik={formik}
        />
        <InputText
          name="Raison d'utilisation de la plante médicinale :"
          id={`Plante${id}.Raison_U_P_M`}
          formik={formik}
        />
      </FormikProvider>
    );
  }
  


const FormVerte = () => {
      const [Plantes,setPlantes] = useState([1])

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
        <InputText name="Nom de marque :" id="Nom_D_M" formik={formik} />
        <Titre>Identification de la (les) plante(s)</Titre>
        <TabContainer id="Plantes-tabs-example" defaultActiveKey="Plante#1" >
        <Nav variant="tabs"  >
          {Plantes.map((el, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link eventKey={`Plante#${el}`}>Plantes#{el}</Nav.Link>
              </Nav.Item>
            );
          })}
          <Nav.Item
            as={() => {
              return (
                <button type="button"
                  onClick={() => {
                    setPlantes([...Plantes, Plantes.length + 1]);
                  }}
                >
                  ++
                </button>
              );
            }}
          />
        </Nav>
<TabContent>
          {Plantes.map((el, index) => {
            console.log(el)
            return (
              <TabPane eventKey={`Plante#${el}`} key={index}>
                    <Plante formik={formik} id={index} className={`Plante#${el}`}/>
              </TabPane>
            );
          })}


        </TabContent>
        </TabContainer>
        <InputDate name="Date d’apparition :" id="Date_A" formik={formik} />
        <InputText name="Délai d’apparition :" id="Delai_A" formik={formik} />

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


export default FormVerte;