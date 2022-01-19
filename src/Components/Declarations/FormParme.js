import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";
import { InputText, InputCheck, InputRadio,InputFile } from "./FormikInputs";
import {Button,ProgressBar,Form} from 'react-bootstrap'
import styled from "styled-components";
import axiosConfig from "../axios"
import swal from "sweetalert";
import { InputDate } from "../MesDeclarations/FormikInputs";
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

const FormParme = (props) => {
  const {userID} = props
  var [files,setFiles] = useState([])
  const [progress,setProgress] = useState(0)
  const formik = useFormik({
    initialValues: {
      Dispositif_M_D_I_V: "",
      Nom_C: "",
      Denomination_C: "",
      Domaine_A: "",
      Numero_S_L: "",
      V_D_L: "",
      Date_D_P: "",
      Date_D_M_S: "",
      Nom_A_D: "",
      Nom_A_F: "",
      Date_D_S: "",
      Lieu_D_S: "",
      Nom_Q_T_F_U: "",
      Nature_D_I: "",
      Description_F_C_C: "",
      Fabriquant_I_I: "",
    },

  
    onSubmit: (values) => {

      const formData = new FormData();
      setValidated(true);

      formData.append(
       'body',
       JSON.stringify(values)
       );
       formData.append(
        'typeOfFiches',
        'Parme'
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
      <FormikProvider value={formik}>
      <Titre>Fiche de Réactovigilance</Titre>
      <Titre>
              Le Dispositif médical de diagnostic in vitro (DMDIV) concerné
            </Titre>
        <FlexBox>
          <BigBox>

            <InputRadio
              name="Type de Dispositif médical de Diagnostic in vitro (DMDIV) :"
              id="Dispositif_M_D_I_V"
              formik={formik}
              radioContent={[
                "Réactif",
                "Récipient pour échantillon",
                "Automate",
                "Accessoire",
                "Autotest",
                "Autre",
              ]}
            />
            {formik.values.Dispositif_M_D_I_V === 'Réactif'? 
            
            <InputFile
        name="Photo_R"
        id="Photo_R"
        onFileChange={onFileChange}
      /> 
/*             <div>
        <Form.Control type="file" id={`Photo_R`} name='Photo_R' onChange={onFileChange} />
            </div> */:
  formik.values.Dispositif_M_D_I_V === 'Récipient pour échantillon'? 
  <InputFile
  name="Photo_R_E"
  id="Photo_R_E"
  onFileChange={onFileChange}
/> :null}
            <InputText
              name="Nom commercial/Modèle/Type/Référence :"
              id="Nom_C"
              formik={formik}
            />
            <InputText
              name="Dénomination commune :"
              id="Denomination_C"
              formik={formik}
            />
            <InputCheck
              name="Domaine d’application :"
              id="Domaine_A"
              formik={formik}
              checkContent={[
                "Biochimie",
                "Anatomo-cytopathologie",
                "Bactérologie",
                "Hemostase",
                "Virologie",
                "Hématologie",
                "Mycologie/Parasitologie",
                "Pharmaco/Toxicologie",
                "Immuno-Hématologie",
                "Génétique",
                "Auto-immunité-immunologie",
                "autre",
              ]}
            />
                     </BigBox>
         <BigBox>
            <InputText
              name="N° de série ou de Lot :"
              id="Numero_S_L"
              formik={formik}
            />
                        <InputFile
        name="Photo du numero de serie :"
        id="Photo_S_L"
        onFileChange={onFileChange}
      /> 

            <InputDate
              name="Date de péremption :"
              id="Date_D_P"
              formik={formik}
            />
            <InputDate
              name="Date de mise en service :"
              id="Date_D_M_S"
              formik={formik}
            />
            <InputDate
              name="Nom, adresse du distributeur :"
              id="Nom_A_D"
              formik={formik}
            />
            <InputText
              name="Nom, adresse du Fabricant :"
              id="Nom_A_F"
              formik={formik}
            />
                      </BigBox>
        </FlexBox>
            <Titre>
              Circonstances et conséquences de l’incident ou du risque
              d’incident
            </Titre>
            <FlexBox>
            <BigBox>
            <InputText
              name="Date de survenue :"
              id="Date_D_S"
              formik={formik}
            />
            <InputText
              name="Lieu de survenue :"
              id="Lieu_D_S"
              formik={formik}
            />
                        <InputText
              name="Nom, qualité, téléphone, fax de l'utilisateur si différent du déclarant :"
              id="Nom_Q_T_F_U"
              formik={formik}
            />
                        <InputText
              name="Nature de l'incident :"
              id="Nature_D_I"
              formik={formik}
            />
                                    <InputText
              name="Description des faits et conséquences constatée :"
              id="Description_F_C_C"
              formik={formik}
            />
                        <InputRadio
              name="Le fabricant ou le fournisseur sont-ils informés de l'incident ou risque d'incident? :"
              id="Fabriquant_I_I"
              formik={formik}
              radioContent={[
                "Oui",
                "Non",
              ]}
            />
                        {formik.values.Fabriquant_I_I === "Oui" ? (
              <InputText
                name="Quelle attitude a-t-il préconisé :"
                id="Attitude_P"
                formik={formik}
              />
            ) : null}
          </BigBox>
          </FlexBox>
          <div style={{display:"flex"}}> <Button type="submit" variant="primary">Confirmer</Button><ProgressBar animated now={progress} style={{width:'50%',margin:'10px'}}/></div>
      </FormikProvider>
    </Form>
  );
};

export default FormParme;
