import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';
import {Tab,Tabs,TabPane ,TabContent,Nav,TabContainer} from 'react-bootstrap'
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
const Reaction = (props)=>{
  const {id,formik} = props

  return(
      <FormikProvider value={formik}>


<Box>

<label htmlFor="Description_D_L_R">Description de la réaction </label>
<select name="Description_D_L_R" 
  id={`Reaction${id}.Description_D_L_R`}
  type="select"           
  onChange={formik.handleChange}
  value={formik.values.wilaya}>
<option value="Point_I">Au point d'injection </option>
<option value="Systemiques">Systémiques</option>
<option value="Infectieux">Infectieux</option>
<option value="Neurologiques">Neurologiques</option>
<option value="Digestifs">Digestifs</option>
<option value="Cardio-vasculaires">Cardio-vasculaires</option>
<option value="Respiratoires">Respiratoires</option>
<option value="Allergiques">Allergiques</option>
<option value="Sphere_ORL">Sphére ORL</option>
<option value="Biologiques">Biologiques</option>
<option value="Musculo_squelettique">Musculo-squelettique</option>
<option value="Ophtalmologiques">Ophtalmologiques</option>
<option value="Autres">Autres</option>
</select>
</Box>
<Box>
<select name="Point_I" 
  id={`Reaction${id}.Point_I`} 
  type="select"           
  onChange={formik.handleChange}
  value={formik.values.wilaya}>
<option value="Point_I">Douleurs au point d'injection</option>
<option value="Systemiques">Systémiques</option>
<option value="Infectieux">Infectieux</option>
<option value="Neurologiques">Neurologiques</option>
<option value="Digestifs">Digestifs</option>
<option value="Cardio-vasculaires">Cardio-vasculaires</option>
<option value="Respiratoires">Respiratoires</option>
<option value="Allergiques">Allergiques</option>
<option value="Sphere_ORL">Sphére ORL</option>
<option value="Biologiques">Biologiques</option>
<option value="Musculo_squelettique">Musculo-squelettique</option>
<option value="Ophtalmologiques">Ophtalmologiques</option>
<option value="Autres">Autres</option>
</select>
</Box>
<InputDate name="Date d’apparition :" id={`Reaction${id}.Date_A`} formik={formik} />
<InputText name="Médicament(s) DCI (mettre le nom de marque) :" id={`Reaction${id}.Medciament_DCI`} formik={formik} />
{/* <InputFile
        name="Photo du Médicament (Si possible) :"
        id={`Reaction${id}.Photo_M`}
        formik={formik}
      />  */}
<InputText name="N° de lot :" id={`Reaction${id}.Numero_D_L`} formik={formik} />
{/* <InputFile
        name="Photo du lot (Si possible) :"
        id={`Reaction${id}.Photo_L`}
        formik={formik}
      />  */}
<InputText name="Voie d’administration :" id={`Reaction${id}.Voie_A`} formik={formik} />
<InputText name="Posologie :" id={`Reaction${id}.Posologie`} formik={formik} />
<InputDate name="Date d’administration (Début):" id={`Reaction${id}.Date_A_D`} formik={formik} />
<InputDate name="Date d’administration (Fin):" id={`Reaction${id}.Date_A_F`} formik={formik} />
<InputText name="Raison d’emploi (indication) :" id={`Reaction${id}.Raison_E`} formik={formik} />




      </FormikProvider>
      
  )
}



const FormJaune = () => {
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

      Nature_D_T: '',
      Descriptif_D_T: '',
      Evolution:'',
      Sequelles:'',
      Facteurs_R_A:'',

    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      axios.post(`http://192.168.1.38:3001/api/postfichesData/`, { values })
      .then(res => {
        console.log(res);
        console.log(res.data);})
    },
  });
  const [Reactions,setReactions] = useState([1])
  return (
    <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>

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
<TabContainer id="Reaction-tabs-example" defaultActiveKey="Reaction#1" >
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
                <button type="button"
                  onClick={() => {
                    setReactions([...Reactions, Reactions.length + 1]);
                  }}
                >
                  ++
                </button>
              );
            }}
          />
        </Nav>
<TabContent>
          {Reactions.map((el, index) => {
            console.log(`Reaction#${el}`)
            return (
              <TabPane eventKey={`Reaction#${el}`} key={index}>
                    <Reaction formik={formik} id={index} className={`Reaction#${el}`}/>
              </TabPane>
            );
          })}


        </TabContent>
        </TabContainer>



<Titre>Traitement de la réaction indésirable</Titre>
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
<InputSelect name="Les facteurs de risques associés :" 
id="Facteurs_R_A"
options={["Insuffisance rénale","Exposition antérieure au médicament suspecté",
"Allergies antérieures", "Atopie","Modalités d’utilisation","Insufficance hépatique"
,"Allergie alimentaire","Maladie auto-immune","Diabète","HTA","Insufficance cardiaque","Troubles endocréniens","Prise concomittante de médicaments","MICI","Hémopathies","Grossesse","Allaitement","Immunodepressions (VIH, Cancers, …)","Autre"]} 
formik={formik}

 />

      <button type="submit">Submit</button>


      </FormikProvider>

    </form>

  );

};


export default FormJaune;