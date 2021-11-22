import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';

import styled from 'styled-components'


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


const FormPink = () => {
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

    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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

    <InputRadio name="Sexe :" 
                id="Sexe"             
                radioContent={[
              "Masculin",
              "Feminin"]}
                formik={formik} />       
    <InputText name="Taille (cm) :" id="Taille" formik={formik} />
    <InputText name="Poids (Kg) :" id="Poids" formik={formik} />

    </BigBox>
    </FlexBox>

<Titre>PRODUIT/INGRÉDIENT</Titre>
<Box>

<InputText name="N° de lot :" id="Numero_D_L" formik={formik} />
<InputFile
        name="Photo du lot (Si possible) :"
        id="Photo_L"
        formik={formik}
      /> 
<InputText name="Nom Complet :" id="Nom_C" formik={formik} />
<InputFile
          name="Photo du produit (Si possible) :"
          id="Photo_P"
          formik={formik}
        />
<InputText name="Société/Marque :" id="Societe_M" formik={formik} />
<InputText name="Usage/Fonction du produit :" id="Usage_D_P" formik={formik} />
<InputText name="Lieu d'achat :" id="Lieu_A" formik={formik} />
<InputText name="Coordonnées inscrites sur le produit :" id="Coordonnees_S_L_P" formik={formik} />
</Box>
<Titre>UTILISATION DU PRODUIT</Titre>
<Box>
<InputDate name="Date de première utilisation :" id="Date_D_P_U" formik={formik} />
<InputText name="Fréquence d'utilisation (par jour/semaine/mois) :" id="Frequence_U" formik={formik} />
<InputSelect name=" " 
                id="Freqequence_U_U"             
                options={[
              "Jour",
              "Semaine",
               "mois"]}
                formik={formik} />  
<InputText name="Durée d'utilisation du produit :" id="Dure_U_P" formik={formik} />
<InputDate name="Date de survenue de l'effet indésirable :" id="Date_S_E_I" formik={formik} />
<InputCheck name="Utilisation simultanée de produit :" 
id="Utilisation_S_P"
checkContent={["Autre produit cosmétique","Médicament","Complément alimentaire","Plante médicinale","Autre"]} 
formik={formik}
 />
<InputText name="Autre" id="Utilisation_S_P_A" formik={formik} />
<InputSelect name="Exposition particulière au : " 
id="Exposition_P"
options={["Usage professionnel","Usage normal","Mésusage"]} 
formik={formik}
></InputSelect>
</Box>
<Titre>Localisation de l'effect indésirable</Titre>
<Box>
<InputText name="Zone d'application du produit" id="Zone_A_P" formik={formik} />
<InputCheck name="La site de la réaction :" 
id="Site_R"
checkContent={["Localisé","A distance de a zone d'application"]} 
formik={formik}
 />
<InputText name="Description des zones concernées" id="Description_Z_C" formik={formik} />
<InputText name="Traitement" id="Traitement" formik={formik} />
<InputSelect name="Evolution :" 
id="Evolution"
options={["Disparition", "En cours","Inconnue","Dècés"]} 
formik={formik}
 />    
{        formik.values.Evolution === "Décès"?            
        <InputDate name="Date de décès :" id="Date_D_D" formik={formik} />:null}
<InputCheck name="Séquelles :"     
id="Sequelles"
checkContent={["Oui","Non"]} 
formik={formik}
 />
 {        formik.values.Sequelles === "Oui"?            
        <InputText name="Types de séquelle" id="Type_D_S" formik={formik} />:null}
</Box>
 

      <button type="submit">Envoyer</button>


      </FormikProvider>

    </form>

  );

};


export default FormPink;