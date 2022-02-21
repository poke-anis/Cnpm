import React, { useState } from "react";
import { useFormik, FormikProvider } from "formik";
import {
  Tab,
  Nav,
  Button,
  Form,
  ProgressBar
} from "react-bootstrap";
import {
  InputText,
  InputCheck,
  InputNumber,
  InputRadio,
  InputDate,
  InputSelect,
  InputFile,
} from "./FormikInputs";
import styled from "styled-components";
import axiosConfig from "../axios";
import Auto8 from './Auto8'
import Auto3 from './Auto3'
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
background-color: #FFFFFF;
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

const Vaccin = (props) => {
  const { id, formik ,onFileChange} = props;

  return (
    <FormikProvider value={formik}>
             <FlexBox>
          <BigBox>
      <InputText
        name="Type du vaccin :"
        id={`Vaccins[${id}].Type_D_V`}
        formik={formik}
      />
                    <InputFile
                    
  name='Photo du Vaccin (Si possible) :'
  id={`Photo_D_V_${id+1}`}
  onFileChange={onFileChange}
/>
      <InputText
        name="Fabricant :"
        id={`Vaccins[${id}].Fabricant_V`}
        formik={formik}
      />
      <InputDate
        name="Date de vaccination :"
        id={`Vaccins[${id}].Date_D_V`}
        formik={formik}
      />
      <InputText
        name="Heure de vaccination :"
        id={`Vaccins[${id}].Heure_D_V`}
        formik={formik}
      />
            </BigBox>
      <BigBox>
      <InputSelect
        name="Dose :"
        id={`Vaccins[${id}].Dose`}
        options={["","1ère", "2ème", "3ème", "4ème"]}
        formik={formik}
      />
      <InputSelect
        name="Voie :"
        id={`Vaccins[${id}].Voie`}
        options={["","ID", "SC", "IM", "Orale"]}
        formik={formik}
      />
      <InputSelect
        name="Point d'injection :"
        id={`Vaccins[${id}].Point_I`}
        options={[
          "",
          "Deltoide Gauche",
          "Deltoide Droit",
          "Avant bras Gauche",
          "Avant bras Droit",
          "Cuisse Droit",
          "Cuisse Gauche",
        ]}
        formik={formik}
      />

      <InputText
        name="N° de lot :"
        id={`Vaccins[${id}].Numero_D_L_V`}
        formik={formik}
      />

  <InputFile
  name='Photo du lot (Si possible) :'
  id={`Photo_L_D_V_${id+1}`}
  onFileChange={onFileChange}
/>
      <InputDate
        name="Date de Péremption :"
        id={`Vaccins[${id}].Date_D_P`}
        formik={formik}
      />
            </BigBox>
      </FlexBox>
    </FormikProvider>
  );
};

const Solvant = (props) => {
  const { id, formik ,onFileChange} = props;

  return (
    <FormikProvider value={formik}>
       <FlexBox>
  <BigBox>
      <InputSelect
        name="Solvant :"
        id={`Solvants[${id}].Solvant`}
        options={["","Du même vaccin", "Autre"]}
        formik={formik}
      />
                <InputFile
  name='Photo du Solvant (Si possible) :'
  id={`Photo_S_${id+1}`}
  onFileChange={onFileChange}
/>
      <InputText
        name="Fabricant :"
        id={`Solvants[${id}].Fabricant`}
        formik={formik}
      />
      <InputText
        name="N° de lot :"
        id={`Solvants[${id}].Numero_D_L`}
        formik={formik}
      />
      </BigBox>
<BigBox>
                <InputFile
  name='Photo du lot (Si possible) :'
  id={`Photo_L_D_S_${id+1}`}
  onFileChange={onFileChange}
/>
      <InputDate
        name="Date de péremption :"
        id={`Solvants[${id}].Date_D_P`}
        formik={formik}
      />
      <InputDate
        name="Date de reconstitution :"
        id={`Solvants[${id}].Date_D_R`}
        formik={formik}
      />
      <InputText
        name="Heure de reconstitution :"
        id={`Solvants[${id}].Heure_D_R`}
        formik={formik}
      />
      </BigBox>
         </FlexBox>
    </FormikProvider>
  );
};

const FormCoronavirus = (props) => {
  const {userID} = props
  var [files,setFiles] = useState([])
  const [progress,setProgress] = useState(0)
  const formik = useFormik({
    initialValues: {
      Wilaya: "",
      Nom: "",
      Prenom: "",
      Tel: "",
      Age: "",
      Sexe: "",
      Date_A_E_I: "",
      Vaccins: [
        {
          Type_D_V: "",
          Fabricant: "",
          Date_D_V: "",
          Heure_D_V: "",
          Dose: "",
          Voie: "",
          Point_D: "",
          Num_D_Lot: "",
          Date_D_Peremption: "",
        },
      ],
      Solvants: [
        {
          Nom_D_Solvant: "",
          Fabricant: "",
          Numero_D_L: "",
          Photo_L_D_S: "",
          Date_D_P: "",
          Date_D_R: "",
          Heure_D_R: "",
        },
      ],
      Traitement_R_MPVI: "",
      Hospitalisation: "",
      Motif_H: "",
      Evolution: "",
      Date_D_D: "",
      Autopsie_E: "",
      Type_A: "",
      Prise_C_M: "",
      Prise_C_M_M: "",
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
        'Coronavirus'
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
       formik.setFieldValue(id ,file)
         setFiles([...files, { file_id: id, uploaded_file: {file} }]);

      }
  const [Vaccins,setVaccins] = useState([1])
  const [Solvants,setSolvants] = useState([1])
  const [validated, setValidated] = useState(false);

  return (
    <Form  validated={validated}  onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <TitreBig>Fiche de déclaration coronavirus</TitreBig>
        <Titre><InsideTitre>Informations malade</InsideTitre></Titre>
      <FlexBox>
          <BigBox>
            <label htmlFor="Wilaya">Wilaya</label>
            <Form.Select
              name="Wilaya"
              id="wilaya"
              type="select"
              onChange={formik.handleChange}
              value={formik.values.Wilaya}
            >
              <option value=""></option>
              <option value="Adrar">Adrar</option>
              <option value="Chlef">Chlef</option>
              <option value="Laghouat">Laghouat</option>
              <option value="Oum el-Bouaghi">Oum el-Bouaghi</option>
              <option value="Batna">Batna</option>
              <option value="Bejaia">Bejaia</option>
              <option value="Biskra">Biskra</option>
              <option value="Bechar">Bechar</option>
              <option value="Blida">Blida</option>
              <option value="Bouira">Bouira</option>
              <option value="Tamanghasset">Tamanghasset</option>
              <option value="Tebessa">Tebessa</option>
              <option value="Tlemcen">Tlemcen</option>
              <option value="Tiaret">Tiaret</option>
              <option value="Tizi Ouzou">Tizi Ouzou</option>
              <option value="Algiers">Algiers</option>
              <option value="Djelfa">Djelfa</option>
              <option value="Jijel">Jijel</option>
              <option value="Setif">Setif</option>
              <option value="Saida">Saida</option>
              <option value="Skikda">Skikda</option>
              <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
              <option value="Annaba">Annaba</option>
              <option value="Guelma">Guelma</option>
              <option value="Constantine">Constantine</option>
              <option value="Medea">Medea</option>
              <option value="Mostaganem">Mostaganem</option>
              <option value="MSila">MSila</option>
              <option value="Mascara">Mascara</option>
              <option value="Ouargla">Ouargla</option>
              <option value="Oran">Oran</option>
              <option value="El Bayadh">El Bayadh</option>
              <option value="Illizi">Illizi</option>
              <option value="Bordj Bou Arreridj">Bordj Bou Arreridj</option>
              <option value="Boumerdes">Boumerdes</option>
              <option value="El Taref">El Taref</option>
              <option value="Tindouf">Tindouf</option>
              <option value="Tissemsilt">Tissemsilt</option>
              <option value="El Oued">El Oued</option>
              <option value="Khenchela">Khenchela</option>
              <option value="Souk Ahras">Souk Ahras</option>
              <option value="Tipasa">Tipasa</option>
              <option value="Mila">Mila</option>
              <option value="Ain Defla">Ain Defla</option>
              <option value="Naama">Naama</option>
              <option value="Ain Temouchent">Ain Temouchent</option>
              <option value="Ghardaia">Ghardaia</option>
              <option value="Relizane">Relizane</option>
            </Form.Select>

          <InputText name="Nom :" id="Nom" formik={formik} maxlength={3}/>
          <InputText name="Prénom :" id="Prenom" formik={formik} />
          <InputNumber name="Tél/Fax/Mobile :" id="Tel" formik={formik} />

          <InputNumber name="Age :" id="Age" formik={formik} />
        </BigBox>
        <BigBox>
          <InputRadio
            name="Sexe :"
            id="Sexe"
            radioContent={["Masculin", "Féminin"]}
            formik={formik}
          />
      <InputDate
        name="Date de Date de l'apparition de l'effet indésirable :"
        id="Date_A_E_I"
        formik={formik}
      />
         </BigBox>
        </FlexBox>

        <Titre><InsideTitre>Vaccin(s) administré(s)</InsideTitre></Titre>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Vaccin#1">
          <Nav variant="tabs">
            {Vaccins.map((el, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={`Vaccin#${el}`}>Vaccin#{el}</Nav.Link>
                </Nav.Item>
              );
            })}
            <Nav.Item
              as={() => {
                return (
                  <Button
                  variant="primary"
                    onClick={() => {
                      setVaccins([...Vaccins, Vaccins.length + 1]);
                    }}
                  >
                    +
                  </Button>
                );
              }}
            />
          </Nav>
          <Tab.Content >
            {Vaccins.map((el, index) => {
              return (
                <Tab.Pane eventKey={`Vaccin#${el}`} key={index}>
                  <Vaccin
                  onFileChange={onFileChange}
                    formik={formik}
                    id={index}
                    className={`Vaccins#${el}`}
                  />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
          </Tab.Container>
{/*         <Titre><InsideTitre>Solvant(s)</InsideTitre></Titre>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Solvant#1">
          <Nav variant="tabs">
            {Solvants.map((el, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={`Solvant#${el}`}>Solvant#{el}</Nav.Link>
                </Nav.Item>
              );
            })}
            <Nav.Item
              as={() => {
                return (
                  <Button
                  variant="primary"
                    type="Button"
                    onClick={() => {
                      setSolvants([...Solvants, Solvants.length + 1]);
                    }}
                  >
                    +
                  </Button>
                );
              }}
            />
          </Nav>
          <Tab.Content >
            {Solvants.map((el, index) => {
              return (
                <Tab.Pane eventKey={`Solvant#${el}`} key={index}>
                  <Solvant
                  onFileChange={onFileChange}
                    formik={formik}
                    id={index}
                    className={`Solvants#${el}`}
                  />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
          </Tab.Container> */}
          <Titre><InsideTitre>Manifestation(s) post-vaccinale(s) indésirable(s)</InsideTitre></Titre>
        <FlexBox>
  <BigBox>
  <label htmlFor="Type_Manifestation_P_V_I">Manifestation(s) post-vaccinale(s) indésirable(s):</label>

        <Auto8 id={``} formik={formik} values={formik.values.Type_Manifestation_P_V_I}/>
        <InputRadio
          name="Traitement reçu de la MPVI :"
          id="Traitement_R_MPVI"
          radioContent={["Oui", "Non"]}
          formik={formik}
        />
        {formik.values.Traitement_R_MPVI === "Oui" ? (
          <InputText name="Lequel ?:" id="Lequel" formik={formik} />
        ) : null}
        <InputRadio
          name="Hospitalisation :"
          id="Hospitalisation"
          radioContent={["Oui", "Non"]}
          formik={formik}
        />
        {formik.values.Hospitalisation === "Oui" ? (
          <InputText name="Motif ?:" id="Motif_H" formik={formik} />
        ) : null}
        {formik.values.Hospitalisation === "Oui" ? (
          <InputText name="Indiquer l'hôpital :" id="Hopital" formik={formik} />
        ) : null}
                </BigBox>
  <BigBox>
        <InputRadio
          name="Evolution :"
          id="Evolution"
          radioContent={[
            "En voie de guérison",
            "Guéri",
            "Guéri avec des séquelles",
            "Non guéri",
            "Evolution inconnue",
            "Décès",
          ]}
          formik={formik}
        />
                  <label htmlFor="Type_A">Antécédents du malade/Histoire de la maladie ou commentaires</label>

         <Auto3 id={``} formik={formik} values={formik.values.Type_A}/>
        <InputRadio
          name="Prise concomitante de médicaments ou autre substance :"
          id="Prise_C_M"
          radioContent={["Oui", "Non"]}
          formik={formik}
        />
        </BigBox>
</FlexBox>
<div style={{display:"flex"}}> <Button type="submit" variant="primary">Confirmer</Button><ProgressBar animated now={progress} style={{width:'50%',margin:'10px'}}/></div>
      </FormikProvider>
    </Form>
  );
};

export default FormCoronavirus;
