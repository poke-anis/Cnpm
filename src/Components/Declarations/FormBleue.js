import React, { useState } from 'react'
import { useFormik,FormikProvider } from 'formik';
import { InputText,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';
import {Button,ProgressBar,Form} from 'react-bootstrap'
import styled from 'styled-components'
import axiosConfig from "../axios"
import swal from "sweetalert";
import Compressor from 'compressorjs';
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
background-color: #AAF1F7;
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


var FormBleue = (props) => {
  const {userID} = props
 var [files,setFiles] = useState([])
 const [progress,setProgress] = useState(0)
var formik = useFormik({
    initialValues: {
      Type_P_E: '',
      Nom_D_M:'',
      Reference: '',
      Numero_D_L: '',
      Date_D_F: '',
      Date_A: '',
      Date_D_P: '',
      Nom_D_Fabricant: '',
      Adresse_D_Fabricant: '',
      Telephone_D_Fabricant: '',
      Nom_D_Fournisseur: '',
      Adresse_D_Fournisseur: '',
      Telephone_D_Fournisseur: '',
      Fabriquant_I_P: '',
      Date_Fabriquant_I_P:'',
      Relation_C: '',
      Produit_P: '',
      Type_I: 'Incident Mineur',
      "Incident Mineur": '',
      Frequence_I:''
    },

    onSubmit: (values,{resetForm}) => {

 const formData = new FormData();
 setValidated(true);

 formData.append(
  'body',
  JSON.stringify(values)
  );
  formData.append(
    'typeOfFiches',
    'Bleue'
    );
  files.forEach((el,index)=>{
    console.log(el)
    formData.append(
  `${el.file_id}`,
  el.uploaded_file.file
  , `${el.uploaded_file.file.name}`
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
      setValidated(false);

      resetForm({values:''})
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
  new Compressor(file,{
    quality: 0.4,
    success: (file) => { setFiles([...files, { file_id: id, uploaded_file: { file } } ]) }})

 }
 const [validated, setValidated] = useState(false);

  return (

    <Form  validated={validated}  onSubmit={formik.handleSubmit} >
            <TitreBig>Fiche de Matériovigilance</TitreBig>

    <FormikProvider value={formik}>
        <Titre> <InsideTitre> Identification du produit</InsideTitre></Titre>
        <FlexBox>
    <BigBox>
        <InputText
          name="Type de produit/emploi :"
          id="Type_P_E"
          formik={formik}
        />
        
              <InputFile
  name='Photo du produit (Si possible) :'
  id={`Photo_P`}
  onFileChange={onFileChange}
/>
        <InputText
          name="Nom de marque/Numéro du modèle :"
          id="Nom_D_M"
          formik={formik}
        />
        <InputText name="Référence :" id="Reference" formik={formik} />
        <InputText name="N° de lot :" id="Numero_D_L" formik={formik} />

        
              <InputFile
  name='Photo du lot (Si possible) :'
  id={`Photo_L`}
  onFileChange={onFileChange}
/>


        <InputDate name="Date de Fabrication :" id="Date_D_F" formik={formik} />
        <InputDate name="Date d'Achat :" id="Date_A" formik={formik} />
        <InputDate name="Date de Péremption :" id="Date_D_P" formik={formik} />
        </BigBox>
        <BigBox>
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

</BigBox>
    </FlexBox>
        <Titre><InsideTitre> Description du problème</InsideTitre> </Titre>
        <BigBox>
        <InputSelect
          name="Type d'incident :"
          id="Type_I"
          options={["","Incident Mineur", "Incident Majeur", "Incident Grave"]}
          formik={formik}

        />
        <InputText name="Frèquence de l'incident aves le même dispositif et le même lot :" id="Frequence_I" formik={formik} />
        </BigBox>
        <div style={{display:"flex"}}> <Button type="submit" variant="primary">Confirmer</Button><ProgressBar animated now={progress} style={{width:'50%',margin:'10px'}}/></div>
        </FormikProvider>
    </Form>

  );

};


export default FormBleue;