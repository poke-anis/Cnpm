import React, { useState } from 'react'
import { useFormik,FormikProvider } from 'formik';
import { InputText,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';
import {Nav,Button,Tab,ProgressBar} from 'react-bootstrap'
import styled from 'styled-components'
import axiosConfig from "../axios"
import Auto1 from './Auto1'
import Auto2 from './Auto2'
import Auto3 from './Auto3'
import swal from "sweetalert";
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
const Reaction = (props)=>{
  const {id,formik,onFileChange} = props

  return(
      <FormikProvider value={formik}>
  <FlexBox>
    <BigBox>
    <label htmlFor="Description_D_L_R">Description de la réaction</label>
<Auto1 isMulti={true} id={`Reactions[${id}].`} formik={formik} values={formik.values.Reactions[`${id}`].Description_D_L_R}/>
  <InputFile
  name='Photo de la reaction (Si possible) :'
  id={`Photo_R_${id}`}
  onFileChange={onFileChange}
/>

<InputDate name="Date d’apparition :" id={`Reactions[${id}].Date_A`} formik={formik} />
<InputText name="Médicament(s) DCI (mettre le nom de marque) :" id={`Reactions[${id}].Medciament_DCI`} formik={formik} />

    <InputFile
  name="Photo du Médicament (Si possible) :"
  id={`Photo_M_${id}`}
  onFileChange={onFileChange}
/>


<InputText name="N° de lot :" id={`Reactions[${id}].Numero_D_L`} formik={formik} />

      </BigBox>
      <BigBox>
      <InputFile
  name="Photo du lot (Si possible) :"
  id={`Photo_L_${id}`}
  onFileChange={onFileChange}
/>

<label htmlFor="Description_D_L_R">Voie d’administration</label>

  <Auto2 id={`Reactions[${id}].`} formik={formik} values={formik.values.Reactions[id].Voie_A}/>
<InputText name="Posologie :" id={`Reactions[${id}].Posologie`} formik={formik} />
<InputDate name="Date d’administration (Début):" id={`Reactions[${id}].Date_A_D`} formik={formik} />
<InputDate name="Date d’administration (Fin):" id={`Reactions[${id}].Date_A_F`} formik={formik} />
<InputText name="Raison d’emploi (indication) :" id={`Reactions[${id}].Raison_E`} formik={formik} />
</BigBox>
</FlexBox>


      </FormikProvider>
      
  )
}



const FormJaune = (props) => {
  const {userID} = props
  var [files,setFiles] = useState([])
  const [progress,setProgress] = useState(0)
  const formik = useFormik({
    initialValues: {
      Nom: "",
      Prenom: "",
      Tel: "",
      Age: "",
      Sexe: "",
      Taille: "",
      Poids: "",
      Reactions: [{
        Description_D_L_R: [],
        Date_A: "",
        Medciament_DCI: "",
        Numero_D_L: "",
        Voie_A: [],
        Posologie: "",
        Date_A_D: "",
        Date_A_F: "",
        Raison_E: "",
      },],
      Nature_D_T: "",
      Descriptif_D_T: "",
      Evolution: "",
      Sequelles: "",
      Antecedent_M:[],
      Facteurs_R_A: "",
    },

    onSubmit: (values) => {
console.log(values)
      const formData = new FormData();

      formData.append(
       'body',
       JSON.stringify(values)
       );
       formData.append(
        'typeOfFiches',
        'Jaune'
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
     
  const [Reactions,setReactions] = useState([1])
  return (
    <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>
            <Titre>Fiche de Pharmacovigilance</Titre>

      <Titre> Informations malade</Titre>
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
                formik={formik} 
              />       
    <InputText name="Taille (cm) :" id="Taille" formik={formik} />
    <InputText name="Poids (Kg) :" id="Poids" formik={formik} />

    </BigBox>
    </FlexBox>

<Titre>Description de la réaction indésirable</Titre>
<Tab.Container id="left-tabs-example" defaultActiveKey="Reaction#1">
        <Nav variant="tabs"  >
          {Reactions.map((el, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link eventKey={`Reaction#${el}`}>Reaction#{el}</Nav.Link>
              </Nav.Item>
            );
          })}
          <Nav.Item
            as={() => {
              return (
                <Button type="button"
                  onClick={() => {
                    formik.values.Reaction[Reactions.length] = {
                      Description_D_L_R: "",
                      Date_A: "",
                      Medciament_DCI: "",
                      Numero_D_L: "",
                      Voie_A: "",
                      Posologie: "",
                      Date_A_D: "",
                      Date_A_F: "",
                      Raison_E: "",
                    };
                    setReactions([...Reactions, Reactions.length + 1]);

 
                  }}
                >
                  +
                </Button>
              );
            }}
          />
        </Nav>
<Tab.Content >
          {Reactions.map((el, index) => {

            return (
              <Tab.Pane eventKey={`Reaction#${el}`} key={index}>
                    <Reaction formik={formik} id={index} className={`Reaction#${el}`} onFileChange={onFileChange}/>
              </Tab.Pane>
            );
          })}


        </Tab.Content>
        </Tab.Container>



<Titre>Traitement de la réaction indésirable</Titre>
<FlexBox>
      <BigBox>
<InputRadio name="Nature du traitement:" 
                id="Nature_D_T"             
                radioContent={[
              "Médicamenteux",
              "Non Médicamenteux"]}
                formik={formik} /> 


<Box>
<label htmlFor="Descriptif_D_T">Descriptif du traitement</label>
<textarea rows="5" cols="10" 
  id="Descriptif_D_T"
  name="Descriptif_D_T"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Descriptif_D_T}/>
</Box>
</BigBox>
<BigBox>
<InputRadio name="Evolution :" 
                id="Evolution"             
                radioContent={[
              "Disparition",
              "En cours",
              "Inconnue",
              "Décès"]}
                formik={formik} /> 
     
       
<InputRadio name="Séquelles :" 
id="Sequelles"
radioContent={["Oui","Non"]} 
formik={formik}
 />
     <label htmlFor="Antecedents_D_M">Antécédents du malade/Histoire de la maladie ou commentaires</label>

   <Auto3 id={``} formik={formik} values={formik.values.Antecedents_D_M}/>
<InputSelect name="Les facteurs de risques associés :" 
id="Facteurs_R_A"
options={["Insuffisance rénale","Exposition antérieure au médicament suspecté",
"Allergies antérieures", "Atopie","Modalités d’utilisation","Insufficance hépatique"
,"Allergie alimentaire","Maladie auto-immune","Diabète","HTA","Insufficance cardiaque","Troubles endocréniens","Prise concomittante de médicaments","MICI","Hémopathies","Grossesse","Allaitement","Immunodepressions (VIH, Cancers, …)","Autre"]} 
formik={formik}

 />
               </BigBox>
               </FlexBox>
               
               <div style={{display:"flex"}}> <Button type="submit" variant="primary">Confirmer</Button><ProgressBar animated now={progress} style={{width:'50%',margin:'10px'}}/></div>
      


      </FormikProvider>

    </form>

  );

};


export default FormJaune;