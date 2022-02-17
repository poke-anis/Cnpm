import React, { useState } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputFile } from './FormikInputs';
import styled from 'styled-components'
import axiosConfig from "../axios"
import SelectField from './React-select'
import {Tab,Nav,Button,ProgressBar,Form} from 'react-bootstrap'
import Auto1 from './Auto1'
import Auto3 from './Auto3'
import Auto6 from './Auto6'
import swal from "sweetalert";
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
background-color: #E1FCE3;

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

    const {id,formik,onFileChange} = props
  
    return (
      <FormikProvider value={formik}>
                <FlexBox>
          <BigBox>
        <InputText
          name="Nom,Vernaculaire et Nom scientifique (si connu) :"
          id={`Plantes${id}.Nom_V_N_S`}
          formik={formik}
        />

                  <InputFile
  name='Photo (Si possible) :'
  id={`Photo_D_N_${id}`}
  onFileChange={onFileChange}
/>
  
        <label htmlFor="Parties utilisées">Parties utilisées</label>
        <Field
             component={SelectField}
             name={`Plantes${id}.Partie_U`}
          options={Partie_U}
        />
        <label htmlFor="Dose">Dose</label>

        <Field
        name={`Plantes${id}.Dose`}
             component={SelectField}
          options={Dose}
        />
                </BigBox>
<BigBox>
        <label htmlFor="Mode de préparation">Mode de préparation</label>
        <Field
        name={`Plantes${id}.Mode_D_P`}
             component={SelectField}
          options={Mode_D_P}
        />

        <InputCheck
          name="Dates d’utilisation :"
          id={`Plantes${id}.Date_U`}
          checkContent={["Début", "Fin"]}
          formik={formik}
        />
                
        <Field
        name={`Plantes${id}.Date_D_U`}
             component={SelectField}
          options={Mode_D_P}
        />
        <InputText
          name="Raison d'utilisation de la plante médicinale :"
          id={`Plantes${id}.Raison_U_P_M`}
          formik={formik}
        />
        </BigBox>
            </FlexBox>
      </FormikProvider>
    );
  }
  


const FormVerte = (props) => {
  const {userID} = props
      const [Plantes,setPlantes] = useState([1])
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
      Profession: '',
      Activite_S: '',
      Regime_A_V: '',
      Nom_D_M: '',
      Plantes:[{
        Nom_V_N_S:'',
        Partie_U:'' ,
        Dose:'',
        Mode_D_P: '',
        Date_U: '',
        Raison_U_P_M: '',
      }],
      Description_E_I:'',
      Type_A:'',
      Date_A: '',
      Delai_A: '',
      Arret_D_L_P: '',
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

    onSubmit: (values) => {
      setValidated(true);

      const formData = new FormData();

      formData.append(
       'body',
       JSON.stringify(values)
       );
       formData.append(
        'typeOfFiches',
        'Verte'
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

      const [validated, setValidated] = useState(false);

  return (
    <Form  validated={validated}  onSubmit={formik.handleSubmit}>
      <TitreBig>Fiche de Phytovigilance</TitreBig>
      <FormikProvider value={formik}>
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
        <BigBox>
        <InputText name="Nom de marque :" id="Nom_D_M" formik={formik} />

                  <InputFile
  name='Photo du Produit (Si possible) :'
  id={`Photo_P`}
  onFileChange={onFileChange}
/></BigBox>
        <Titre><InsideTitre>Identification de la (les) plante(s)</InsideTitre></Titre>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Plante#1">
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
                <Button variant="primary" type="Button"
                  onClick={() => {
                    setPlantes([...Plantes, Plantes.length + 1]);
                  }}
                >
                  +
                </Button>
              );
            }}
          />
        </Nav>
<Tab.Content>
          {Plantes.map((el, index) => {

            return (
              <Tab.Pane eventKey={`Plante#${el}`} key={index}>
                    <Plante onFileChange={onFileChange} formik={formik} id={index} className={`Plantes#${el}`}/>
              </Tab.Pane>
            );
          })}


        </Tab.Content>
        </Tab.Container>
        <FlexBox>
        <BigBox>

        <label htmlFor="Type_D_L_R">Description de l’effet indésirable </label>
        <Auto1 isMulti={false} id={``} formik={formik} values={formik.values.Type_D_L_R}/>
        <label htmlFor="Type_A">Antécédents et terrain du patient  </label>
        <Auto3 id={``} formik={formik} values={formik.values.Type_A}/>

                  <InputFile
  name='Photo de leffet indesirable(Si possible) :'
  id={`Photo_E_I`}
  onFileChange={onFileChange}
/>
</BigBox><BigBox>
        <InputDate name="Date d’apparition :" id="Date_A" formik={formik} />
        <InputText name="Délai d’apparition :" id="Delai_A" formik={formik} />
        </BigBox>
        </FlexBox>
        <Titre><InsideTitre>Conduite adoptée</InsideTitre></Titre>
        <FlexBox>
        <BigBox>

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
            id="Lequel_T"
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


export default FormVerte;