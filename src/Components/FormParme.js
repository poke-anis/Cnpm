import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import {Tab,Tabs,TabPane ,TabContent} from 'react-bootstrap'
import { InputText,InputCheck,InputNumber,InputRadio } from './FormikInputs';
import styled from 'styled-components'

const Box = styled.div`
display: flex;
flex-direction: column;
width : 50%;
`

const BigBox = styled.div`

width : 50%;
`
const Titre = styled.h1`
text-align: center;
border: 3px black solid;
margin:10px;
padding:5px;

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


const FormParme = () => {
const formik = useFormik({
initialValues: {
Wilaya: '',
Etablissement:'',
Commune: '',
Etablissement_P: '',
Centre_D_V: '',
Nom_D_P: '',
Adresse_D_P: '',
Telephone: '',
Sexe: '',
Date_D_N: '',
Date_A_MPVI: '',
Nom_D_N: '',
Courriel: '',
Adresse: '',
Date_D_D: '',
Fonction: '',
Vaccin:[{
"Nom_D_Vaccin":'',
"Fabricant":'',
"Date_D_Vaccination":'',
"Dose":'',
"Voie":'',
"Point_D":'',
"Num_D_Lot":'',
"Date_D_Peremption":'',
},
{
"Nom_D_Vaccin":'',
"Fabricant":'',
"Date_D_Vaccination":'',
"Dose":'',
"Voie":'',
"Point_D":'',
"Num_D_Lot":'',
"Date_D_Peremption":'',
},
{
"Nom_D_Vaccin":'',
"Fabricant":'',
"Date_D_Vaccination":'',
"Dose":'',
"Voie":'',
"Point_D":'',
"Num_D_Lot":'',
"Date_D_Peremption":'',
},
{
"Nom_D_Vaccin":'',
"Fabricant":'',
"Date_D_Vaccination":'',
"Dose":'',
"Voie":'',
"Point_D":'',
"Num_D_Lot":'',
"Date_D_Peremption":'',
},],
Solvant : [
{"Nom_D_Solvant":'',
"Fabricant":'',
"Numero_D_Lot":'',
"Date_D_P":'',
"Date_Heure_R":''},
{"Nom_D_Solvant":'',
"Fabricant":'',
"Numero_D_Lot":'',
"Date_D_P":'',
"Date_Heure_R":''},
{"Nom_D_Solvant":'',
"Fabricant":'',
"Numero_D_Lot":'',
"Date_D_P":'',
"Date_Heure_R":''},
{"Nom_D_Solvant":'',
"Fabricant":'',
"Numero_D_Lot":'',
"Date_D_P":'',
"Date_Heure_R":''}],
Manifestaion_I: '',
Grave: '',
Traitement_R_MPVI: '',
Traitement_R_MPVI_Ifyes: '',
Evolution: '',
Autopise_Effectuee: '',
Antecedents_Medicaux: '',
Prise_Medicaments: '',



},

onSubmit: values => {
alert(JSON.stringify(values, null, 2));
},
});
const Etablissement = ['Etablissement de santé(CHU)','EPSP','EPH','Fabricant','Distributeur','Laboratoire Medical privé','Autre']

return (
  <form onSubmit={formik.handleSubmit}>
    <FormikProvider value={formik}>
      <Titre>
        PROBLEME THÉRAPEUTIQUE POSÉ PAR UN RÉACTIF "RÉACTOVIGILANCE"
      </Titre>
      <InputText name="Date d’envoi du signalement:" formik={formik} />
      <FlexBox>
        <BigBox>
          <Titre>Le Déclarant</Titre>

          <InputText name="Nom" id="Nom" formik={formik} />
          <InputText name="Prénom" id="Prenom" formik={formik} />
          <InputText name="Profession :" id="Profession" formik={formik} />
          <InputText
            name="Adresse professionnelle :"
            id="Adresse_P"
            formik={formik}
          />
          <Box>
            <label htmlFor="Wilaya">Wilaya</label>
            <select
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
            </select>
          </Box>
          <InputText name="Code postal" id="Code_P" formik={formik} />
          <InputText name="E-mail :" id="Email" formik={formik} />
          <InputText name="Téléphone :" id="Telephone" formik={formik} />
          <InputText name="Fax :" id="Fax" formik={formik} />
          <InputCheck
            name="Etablissement"
            id="Etablissement"
            checkContent={Etablissement}
            formik={formik}
          />
          <InputRadio
            name="Le déclarant est-il collaborateur de réactovigilance ?"
            id="Collaborateur"
            radioContent={["Oui", "Non"]}
            formik={formik}
          />
          <InputText
            name="Le nom du collaborateur :"
            id="Nom_D_C"
            formik={formik}
          />
          <InputText
            name="E-mail du collaborateur :"
            id="Email_D_C"
            formik={formik}
          />
          <InputText
            name="Telephone du collaborateur:"
            id="Telephone_D_C"
            formik={formik}
          />
          <InputText
            name="Fax du collaborateur:"
            id="Fax_D_C"
            formik={formik}
          />
        </BigBox>

        <BigBox>
          <Titre>
            Le Dispositif médical de diagnostic in vitro (DMDIV) concerné
          </Titre>
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
          <InputText name="Nom commercial :" id="Nom_C" formik={formik} />
          <InputText name="Modèle :" id="Modele" formik={formik} />
          <InputText name="Type :" id="Type" formik={formik} />
          <InputText name="Fax du collaborateur:" id="Nom_C" formik={formik} />
          <InputText name="Référence :" id="Reference" formik={formik} />
          <InputCheck
            name="Domaine d’application :"
            id="Domaine_A"
            formik={formik}
            checkContent={['Biochimie','Anatomo-cytopathologie','Bactérologie','Hemostase','Virologie','Hématologie','Mycologie/Parasitologie','Pharmaco/Toxicologie','Immuno-Hématologie','Génétique','Auto-immunité-immunologie','autre']}
          />
          <InputText name="Dénomination commune :" id="Denomination_C" formik={formik} />
          <InputText name="N° de série ou de Lot :" id="Numero_S_L" formik={formik} />
          <InputText name="Version du logiciel :" id="V_D_L" formik={formik} />
          <InputText name="Date de péremption :" id="Date_D_P" formik={formik} />
          <InputText name="Date de mise en service :" id="Date_D_M_S" formik={formik} />
          <InputText name="Nom, adresse du distributeur :" id="Nom_A_D" formik={formik} />
          <InputText name="Nom, adresse du Fabricant :" id="Nom_A_F" formik={formik} />
          <Titre>
          Circonstances et conséquences de l’incident ou du risque d’incident
          </Titre>
          <InputText name="Date de survenue :" id="Date_D_S" formik={formik} />
          <InputText name="Lieu de survenue :" id="Lieu_D_S" formik={formik} />
        </BigBox>
      </FlexBox>


      <button type="submit">Submit</button>
    </FormikProvider>
  </form>
);

};

export default FormParme;