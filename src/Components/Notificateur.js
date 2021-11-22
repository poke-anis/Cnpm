import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import {Tab,Tabs,TabPane ,TabContent} from 'react-bootstrap'
import { InputText,InputCheck,InputNumber,InputRadio,InputSelect } from './FormikInputs';
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
const Notificateur = () =>{
    const formik = useFormik({
        initialValues: {
        Nom: '',
        Prenom:'',
        Tel: '',
        Email: '',
        Profession: '',
        Type_E: '',
        Adresse_P: '',
        },
        
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
        });
return(
    <form onSubmit={formik.handleSubmit}>
    <FormikProvider value={formik}>
    <Titre>
    Information du Notificateur
    </Titre>
    <FlexBox>
    <BigBox>
    <InputText name="Nom :" id="Nom" formik={formik} />
    <InputText name="Prénom :" id="Prenom" formik={formik} />
    <InputNumber name="Tél/Fax/Mobile :" id="Tel" formik={formik} />
    <InputText name="E-Mail :" id="Email" formik={formik} />
    </BigBox>
    <BigBox>
    <InputRadio name="Profession :" 
                id="Profession"             
                radioContent={[
              "Médecin",
              "Pharmacien",
              "Dentiste",
              "Paramedical",
              "Sage femme",
              "Autre",
            ]}
                formik={formik} />
    <InputRadio name="Type d’exercice :" 
                id="Type_E"             
                radioContent={[
              "Public",
              "Privé"]}
                formik={formik} />       
    <InputText name="Adresse professionnelle :" id="Adresse_P" formik={formik} />
    </BigBox>
    </FlexBox>
</FormikProvider>
  </form>
)

}


export default Notificateur;