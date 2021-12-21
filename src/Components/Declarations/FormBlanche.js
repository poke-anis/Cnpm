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
  InputNumber,
  InputRadio,
  InputDate,
  InputSelect,
  InputFile,
} from "./FormikInputs";
import styled from "styled-components";
import axiosConfig from "../axios";
import Auto8 from "./Auto8";
import Auto3 from "./Auto3";
import swal from "sweetalert";

const BigBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  border: 2px solid #dee2e6;
  padding: 10px;
`;
const Titre = styled.h1`
  text-align: center;
  border: 3px black solid;
  margin: 10px;
  padding: 5px;
  width: 100%;
`;
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Vaccin = (props) => {
  const { id, formik, onFileChange } = props;

  return (
    <FormikProvider value={formik}>
      <FlexBox>
        <BigBox>
          <InputText
            name="Type du vaccin :"
            id={`Vaccin[${id}].Type_D_V`}
            formik={formik}
          />

          <InputFile
            name="Photo du Vaccin (Si possible) :"
            id={`Photo_D_V_${id}`}
            onFileChange={onFileChange}
          />
          <InputText
            name="Fabricant :"
            id={`Vaccin[${id}].Fabricant`}
            formik={formik}
          />
          <InputDate
            name="Date de vaccination :"
            id={`Vaccin[${id}].Date_D_V`}
            formik={formik}
          />
          <InputText
            name="Heure de vaccination :"
            id={`Vaccin[${id}].Heure_D_V`}
            formik={formik}
          />
        </BigBox>
        <BigBox>
          <InputSelect
            name="Dose :"
            id={`Vaccin[${id}].Dose`}
            options={["1ère", "2ème", "3ème", "4ème"]}
            formik={formik}
          />
          <InputSelect
            name="Voie :"
            id={`Vaccin[${id}].Voie`}
            options={["ID", "SC", "IM", "Orale"]}
            formik={formik}
          />
          <InputSelect
            name="Point d'injection :"
            id={`Vaccin[${id}].Point_I`}
            options={[
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
            id={`Vaccin[${id}].Numero_D_L`}
            formik={formik}
          />

          {/*              <div>
        <Form.Control type="file" id={`Photo_L_D_V_${id+1}`} name='Photo_L_D_V' onChange={onFileChange} />
  </div> */}
          <InputFile
            name="Photo du lot (Si possible) :"
            id={`Photo_L_D_V_${id}`}
            onFileChange={onFileChange}
          />
          <InputDate
            name="Date de Péremption :"
            id={`Vaccin[${id}].Date_D_P`}
            formik={formik}
          />
        </BigBox>
      </FlexBox>
    </FormikProvider>
  );
};

const Solvant = (props) => {
  const { id, formik, onFileChange } = props;

  return (
    <FormikProvider value={formik}>
      <FlexBox>
        <BigBox>
          <InputSelect
            name="Solvant :"
            id={`Solvant[${id}].Nom_D_S`}
            options={["Du même vaccin", "Autre"]}
            formik={formik}
          />

          <InputFile
            name="Photo du Solvant (Si possible) :"
            id={`Photo_D_S_${id}`}
            onFileChange={onFileChange}
          />
          <InputText
            name="Fabricant :"
            id={`Solvant[${id}].Fabricant`}
            formik={formik}
          />
          <InputText
            name="N° de lot :"
            id={`Solvant[${id}].Numero_D_L`}
            formik={formik}
          />
          {/*         <InputFile
          name="Photo du lot (Si possible) :"
          id={`Solvant[${id}].Photo_L_D_S`}
          formik={formik}
        /> */}
        </BigBox>
        <BigBox>
          <InputFile
            name="Photo du lot (Si possible) :"
            id={`Photo_L_D_S_${id}`}
            onFileChange={onFileChange}
          />
          <InputDate
            name="Date de péremption :"
            id={`Solvant[${id}].Date_D_P`}
            formik={formik}
          />
          <InputDate
            name="Date de reconstitution :"
            id={`Solvant[${id}].Date_D_R`}
            formik={formik}
          />
          <InputText
            name="Heure de reconstitution :"
            id={`Solvant[${id}].Heure_D_R`}
            formik={formik}
          />
        </BigBox>
      </FlexBox>
    </FormikProvider>
  );
};

const FormBlanche = () => {
  var [files, setFiles] = useState([]);
  const [progress,setProgress] = useState(0)
  const formik = useFormik({
    initialValues: {
      Wilaya: "",
      Nom: "",
      Prenom: "",
      Tel: "",
      Age: "",
      Sexe: "",
      Taille: "",
      Poids: "",
      Vaccin: [
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
      Solvant: [
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

      Manifestation_P_V_I: "",
      Traitement_R_MPVI: "",
      Hospitalisation: "",
      Motif_H: "",
      Evolution: "",
      Date_D_D: "",
      Autopsie_E: "",
      Antecedent_M: "",
      Prise_C_M: "",
    },

    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("body", JSON.stringify(values));
      formData.append("typeOfFiches", "Blanche");
      files.forEach((el, index) => {
        formData.append(`${el.file_id}`, el.uploaded_file.file);
      });

      axiosConfig
        .post(`/secure/postfichesData/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, 
          onUploadProgress: (progressEvent) => {
              let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              console.log(progressEvent.lengthComputable)
              setProgress(percentCompleted);
            }
        })
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
  var onFileChange = (event, name) => {
    event.preventDefault();

    let id = event.target.id;

    let file = event.target.files[0];
    setFiles([...files, { file_id: id, uploaded_file: { file } }]);

  };
  const [Vaccins, setVaccins] = useState([1]);
  const [Solvants, setSolvants] = useState([1]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <Titre>Fiche de Vaccinovigilance</Titre>

        <FlexBox>
          <BigBox>
            <label htmlFor="Wilaya">Wilaya</label>
            <Form.Select
              name="Wilaya"
              id="wilaya"
              type="select"
              onChange={formik.handleChange}
              value={formik.values.wilaya}
            >
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

            <InputText name="Nom :" id="Nom" formik={formik} />
            <InputText name="Prénom :" id="Prenom" formik={formik} />
            <InputNumber name="Tél/Fax/Mobile :" id="Tel" formik={formik} />
          </BigBox>
          <BigBox>
            <InputNumber name="Age :" id="Age" formik={formik} />

            <InputRadio
              name="Sexe :"
              id="Sexe"
              radioContent={["Masculin", "Feminin"]}
              formik={formik}
            />
            <InputText name="Taille (cm) :" id="Taille" formik={formik} />
            <InputText name="Poids (Kg) :" id="Poids" formik={formik} />
          </BigBox>
        </FlexBox>
        <Titre>Vaccin(s) administré(s)</Titre>
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
                    variant="danger"
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
          <Tab.Content>
            {Vaccins.map((el, index) => {
              return (
                <Tab.Pane eventKey={`Vaccin#${el}`} key={index}>
                  <Vaccin
                    onFileChange={onFileChange}
                    formik={formik}
                    id={index}
                    className={`Vaccin#${el}`}
                  />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
          </Tab.Container>
        <Titre>Solvant(s)</Titre>
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
                    variant="danger"
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
                    className={`Solvant#${el}`}
                  />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
          </Tab.Container>
        <FlexBox>
          <BigBox>
          <label htmlFor="Manifestation_P_V_I">Manifestation(s) post-vaccinale(s) indésirable(s)</label>

            <Auto8
              id={``}
              formik={formik}
              values={formik.values.Manifestation_P_V_I}
            />
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
              <InputText
                name="indiquer l'hôpital :"
                id="Hopital"
                formik={formik}
              />
            ) : null}
          </BigBox>
          <BigBox>
            <InputRadio
              name="Evolution :"
              id="Evolution"
              radioContent={["Disparition", "En cours", "Inconnue", "Deces"]}
              formik={formik}
            />
          <label htmlFor="Antecedents_D_M">Antécédents du malade/Histoire de la maladie ou commentaires</label>

            <Auto3
              id={``}
              formik={formik}
              values={formik.values.Antecedents_D_M}
            />
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
    </form>
  );
};

export default FormBlanche;