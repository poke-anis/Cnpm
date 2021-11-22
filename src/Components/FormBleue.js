import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';

import styled from 'styled-components'
import axios from 'axios'

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


const FormBleue = () => {
  const formik = useFormik({
    initialValues: {
      Nom: '',
      Pre:'',
      Profession: '',
      Etablissement: '',
      Tel: '',
      Adresse: '',
      Exercice: '',
      Nature: '',
      Descriptif: '',
      Evolution: '',
      Sequelles: '',
      Histoire: '',
      Facteurs: '',
      Nom2: '',
      Pre: '',
      Tel: '',
      Adresse: '',
      Mail: '',
      Photo_P: '',
      Adressep: '',
      Type_I: 'Incident Mineur',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik)
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <Titre>Identification du produit</Titre>
        <InputText
          name="Type de produit/emploi :"
          id="Type_P_E"
          formik={formik}
        />
        
        <InputFile
          name="Photo du produit (Si possible) :"
          id="Photo_P"
          formik={formik}
        />
        <InputText
          name="Nom de marque/Numéro du modèle :"
          id="Nom_D_M"
          formik={formik}
        />
        <InputText name="Référence :" id="Reference" formik={formik} />
        <InputText name="N° de lot :" id="Numero_D_L" formik={formik} />
        <InputFile
          name="Photo du lot (Si possible) :"
          id="Photo_L"
          formik={formik}
        />
        <InputDate name="Date de Fabrication :" id="Date_D_F" formik={formik} />
        <InputDate name="Date d'Achat :" id="Date_A" formik={formik} />
        <InputDate name="Date de Péremption :" id="Date_D_P" formik={formik} />
        <InputText name="Nom du Fabricant:" id="Nom_D_Fabricant" formik={formik} />
        <InputText name="Adresse du Fabricant:" id="Adresse_D_Fabricant" formik={formik} />
        <InputText name="Téléphone du Fabricant:" id="Telephone_D_Fabricant" formik={formik} />
        <InputText name="Nom du Fournisseur:" id="Nom_D_Fournisseur" formik={formik} />
        <InputText name="Adresse du Fournisseur:" id="Adresse_D_Fournisseur" formik={formik} />
        <InputText name="Téléphone du Fournisseur:" id="Telephone_D_Fournisseur" formik={formik} />

        <InputRadio
          name="Fabriquant et/ou fournisseur ont-ils été informés du problème ? :"
          id="Fabriquant_I_P"
          radioContent={["Oui", "Non"]}
          formik={formik}
        />

        <InputRadio
          name="Avez-vous pris le soin de vérifier la relation de causalité ? :"
          id="Relation_C"
          radioContent={["Oui", "Non"]}
          formik={formik}
        />
        <InputRadio
          name="Le produit ou son emballage sont-ils en votre possession ? :"
          id="Produit_P"
          radioContent={["Oui", "Non"]}
          formik={formik}
        />
        <Titre>Description du problèle</Titre>
        <InputSelect
          name="Type d'incident :"
          id="Type_I"
          options={["Incident Mineur", "Incident Majeur", "Incident Grave"]}
          formik={formik}

        />

        <button type="submit">Submit</button>
      </FormikProvider>
    </form>
  );

};


export default FormBleue;