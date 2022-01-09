import React, { useState } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';
import axiosConfig from "../axios"
import styled from 'styled-components'
import Auto5 from './Auto5'
import Auto3 from './Auto3'
import {Button,ProgressBar} from 'react-bootstrap'
import swal from "sweetalert";
const BigBox = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
width : 49%;
border: 2px solid #dee2e6;
padding:10px;

`
const Titre = styled.h1`
text-align: center;
border: 3px black solid;
margin:10px;
padding:5px;
width:100%;
`
const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
width : 100%;
margin-top:5px;
margin-bottom:10px;
`


const FormPink = (props) => {
  const {userID} = props
  var [files,setFiles] = useState([])
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
      Numero_D_L: '',
      Nom_C: '',
      Photo_P: '',
      Societe_M: '',
      Usage_D_P: '',
      Lieu_A: '',
      Coordonnees_S_L_P: '',
      Date_D_P_U: '',
      Frequence_U_U: '',
      Frequence_U: '',
      Duree_U_P: '',
      Date_S_E_I: '',
      Utilisation_S_P: '',
      Exposition_P: '',
      Zone_A_P: '',
      Site_R: '',
      Description_Z_C: '',
      Description_E_I: '',
      Traitement: '',
      Evolution: '',
      Sequelles: '',
      Type_A: '',



    },


    onSubmit: values => {

      const formData = new FormData();
     
      formData.append(
       'body',
       JSON.stringify(values)
       );
       formData.append(
        'typeOfFiches',
        'Pink'
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



  return (
    <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>
            <Titre>Fiche de Cosmétovigilance</Titre>
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
<FlexBox>
    <BigBox>

<InputText name="N° de lot :" id="Numero_D_L" formik={formik} />
                              <InputFile
  name='Photo du lot (Si possible) :'
  id={`Photo_L`}
  onFileChange={onFileChange} 
/>
<InputText name="Nom Complet :" id="Nom_C" formik={formik} />

                              <InputFile
  name='Photo du produit (Si possible) :'
  id={`Photo_P`}
  onFileChange={onFileChange}
/>
</BigBox>
<BigBox>
<InputText name="Société/Marque :" id="Societe_M" formik={formik} />
<InputText name="Usage/Fonction du produit :" id="Usage_D_P" formik={formik} />
<InputText name="Lieu d'achat :" id="Lieu_A" formik={formik} />
<InputText name="Coordonnées inscrites sur le produit :" id="Coordonnees_S_L_P" formik={formik} />

    </BigBox>
    </FlexBox>
<Titre>UTILISATION DU PRODUIT</Titre>
    <FlexBox>
    <BigBox>
<InputDate name="Date de première utilisation :" id="Date_D_P_U" formik={formik} />
<InputText name="Fréquence d'utilisation (par jour/semaine/mois) :" id="Frequence_U" formik={formik} />
<InputSelect name=" " 
                id="Frequence_U_U"             
                options={[
              "Jour",
              "Semaine",
               "mois"]}
                formik={formik} />  
<InputText name="Durée d'utilisation du produit :" id="Duree_U_P" formik={formik} />
</BigBox>
<BigBox>

<InputDate name="Date de survenue de l'effet indésirable :" id="Date_S_E_I" formik={formik} />
<InputCheck name="Utilisation simultanée de produit :" 
id="Utilisation_S_P"
checkContent={["Autre produit cosmétique","Médicament","Complément alimentaire","Plante médicinale","Autre"]} 
formik={formik}
 />
<InputText name="Autre" id="Utilisation_S_P" formik={formik} />
<InputSelect name="Exposition particulière au : " 
id="Exposition_P"
options={["Usage professionnel","Usage normal","Mésusage"]} 
formik={formik}
></InputSelect>
</BigBox>
    </FlexBox>




<Titre>Localisation de l'effect indésirable</Titre>
<FlexBox>
    <BigBox>
<InputText name="Zone d'application du produit" id="Zone_A_P" formik={formik} />
<InputCheck name="La site de la réaction :" 
id="Site_R"
checkContent={["Localisé","A distance de a zone d'application"]} 
formik={formik}
 />
<InputText name="Description des zones concernées" id="Description_Z_C" formik={formik} />
<label htmlFor="Type_E_I">Description de l'effet indésirable :</label>

<Auto5 id={``} formik={formik} values={formik.values.Type_E_I}/>
</BigBox>
<BigBox>
<InputFile
  name="Photo de l'effet indesirable (Si possible) :"
  id={`Photo_E_I`}
  onFileChange={onFileChange}
/>
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
        <label htmlFor="Type_A">Antécédents du malade/Histoire de la maladie ou commentaires :</label>
<Auto3 id={``} formik={formik} values={formik.values.Type_A}/>


    </BigBox>
    </FlexBox>

    <div style={{display:"flex"}}> <Button type="submit" variant="primary">Confirmer</Button><ProgressBar animated now={progress} style={{width:'50%',margin:'10px'}}/></div>


      </FormikProvider>

    </form>

  );

};


export default FormPink;