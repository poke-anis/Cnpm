import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import {Tab,Tabs,TabPane ,TabContent} from 'react-bootstrap'

import styled from 'styled-components'
 
const Box = styled.div`
display: flex;
flex-direction: column;
width : 50%;
`
const Box2 = styled.div`
display: flex;
flex-direction: column;
width : 30%;
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

const Vaccin = (props)=>{
  const {id,formik} = props
    return(
 
        <FormikProvider value={formik}>
        <FlexBox>
        <Box>
        <label htmlFor="Nom_D_Vaccin">Nom du vaccin</label>
        <Inputstyled
          id="Nom_D_Vaccin"
          name="Nom_D_Vaccin"
          type="text"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Nom_D_Vaccin`}
          />
        </Box>
        <Box>
        <label htmlFor="Fabricant">Fabricant</label>
        <Inputstyled
          id="Fabricant"
          name="Fabricant"
          type="text"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Fabricant`}        />
        </Box>
        <Box>
        <label htmlFor="Date_D_Vaccination">Date de vaccination</label>
        <Inputstyled
          id="Date_D_Vaccination"
          name="Date_D_Vaccination"
          type="date"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Date_D_Vaccination`}        />
        </Box>
        <Box>
        <label htmlFor="Dose">Dose</label>
        <Inputstyled
          id="Dose"
          name="Dose"
          type="text"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Dose`}        />
        </Box>
        <Box>
        <label htmlFor="Voie">Voie</label>
        <Inputstyled
          id="Voie"
          name="Voie"
          type="text"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Voie`}        />
        </Box>
        <Box>
        <label htmlFor="Point_D">Point d'injection</label>
        <Inputstyled
          id="Point_D"
          name="Point_D"
          type="text"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Point_D`}        />
        </Box>
        <Box>
        <label htmlFor="Num_D_Lot">N° de lot</label>
        <Inputstyled
          id="Num_D_Lot"
          name="Num_D_Lot"
          type="text"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Num_D_Lot`}        />
        </Box>
        <Box>
        <label htmlFor="Date_D_Peremption">Date de péremption</label>
        <Inputstyled
          id="Date_D_Peremption"
          name="Date_D_Peremption"
          type="date"
          onChange={formik.handleChange}
          name={`Vaccin[${id}].Date_D_Peremption`}        />
        </Box>
        </FlexBox>
        </FormikProvider>
        
    )
}


const Solvant = (props)=>{
  const {id,formik} = props

  return(
      <FormikProvider value={formik}>
      <FlexBox>
      <Box>
      <label htmlFor="Nom_D_Solvant">Nom du solvant</label>
      <Inputstyled
        id="Nom_D_Solvant"
        name="Nom_D_Solvant"
        type="text"
        onChange={formik.handleChange}
        name={`Solvant[${id}].Nom_D_Solvant`}      />
      </Box>
      <Box>
      <label htmlFor="Fabricant">Fabricant</label>
      <Inputstyled
        id="Fabricant"
        name="Fabricant"
        type="text"
        onChange={formik.handleChange}
        name={`Solvant[${id}].Fabricant`}
      />
      </Box>
      <Box>
      <label htmlFor="Numero_D_Lot">Numero du lot</label>
      <Inputstyled
        id="Numero_D_Lot"
        name="Numero_D_Lot"
        type="text"
        onChange={formik.handleChange}
        name={`Solvant[${id}].Numero_D_Lot`}
      />
      </Box>
      <Box>
      <label htmlFor="Date_D_P">Date de péremption</label>
      <Inputstyled
        id="Date_D_P"
        name="Date_D_P"
        type="text"
        onChange={formik.handleChange}
        name={`Solvant[${id}].Date_D_P`}
      />
      </Box>
      <Box>
      <label htmlFor="Date_Heure_R">Date et heure de reconstitution</label>
      <Inputstyled
        id="Date_Heure_R"
        name="Date_Heure_R"
        type="text"
        onChange={formik.handleChange}
        name={`Solvant[${id}].Date_Heure_R`}
      />
      </Box>
      </FlexBox>
      </FormikProvider>
      
  )
}


const FormBlanche = () => {
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
      <Titre>Identité du rapporteur</Titre>
      <FlexBox>
      <Box>

      <label htmlFor="Wilaya">Wilaya</label>
<select name="Wilaya" 
        id="wilaya" 
        type="select"           
        onChange={formik.handleChange}
        value={formik.values.wilaya}>

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

      <Box>
      <label htmlFor="Etablissement">Etablissement publique (CHU, EPH, EHS, EPSP)</label>
      <Inputstyled
        id="Etablissement"
        name="Etablissement"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Etablissement}
      />
      </Box>

      <Box>
        <label htmlFor="Commune">Commune</label>
        <Inputstyled
          id="Commune"
          name="Commune"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Commune}

        />
      </Box>

      <Box>
        <label htmlFor="Etablissement_P">Etablissement privé </label>
        <Inputstyled
          id="Etablissement_P"
          name="Etablissement_P"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Etablissement_P}
        />
      </Box>

      <Box>
      <label htmlFor="Centre_D_V">Centre de vaccination</label>
      <Inputstyled
        id="Centre_D_V"
        name="Centre_D_V"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Centre_D_V}
      />
      </Box>

      <Box>
      <label htmlFor="Nom_D_P">Nom du patient</label>
      <Inputstyled
        id="Nom_D_P"
        name="Nom_D_P"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Nom_D_P}
      />
      </Box>
      <Box>
      <label htmlFor="Adresse_D_P">Adresse du patient</label>
      <Inputstyled
        id="Adresse_D_P"
        name="Adresse_D_P"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Adresse_D_P}
      />
      </Box>
      <Box>
              <label htmlFor="Telephone">Téléphone</label>
              <Inputstyled
                id="Telephone"
                name="Telephone"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.Telephone}
              />
            </Box>
            <Box>

            <label htmlFor="Sexe">Sexe</label>
            <div>
      <Inputstyled
        id="Sexe"
        name="Sexe"
        type="radio"
        value="Masculin"
        onChange={formik.handleChange}
        name='Sexe'
      />Masculin
      <Inputstyled
        id="Sexe"
        name="Sexe"
        type="radio"
        value="Feminin"
        onChange={formik.handleChange}
        name='Sexe'
      />Feminin
      </div>
      </Box>

      <Box>
            <label htmlFor="Date_D_N">Date de naissance</label>
            <Inputstyled
              id="Date_D_N"
              name="Date_D_N"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.Date_D_N}
            />
            </Box>
            <Box>
            <label htmlFor="Date_A_MPVI">Date de l’apparition de la MPVI </label>
            <Inputstyled
              id="Date_A_MPVI"
              name="Date_A_MPVI"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.Date_A_MPVI}
            />
            </Box>

            <Box>

            <label htmlFor="Nom_D_N">Nom du notificateur</label>
      <Inputstyled
        id="Nom_D_N"
        name="Nom_D_N"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Nom_D_N}
      />
                  </Box>

      <Box>
        <label htmlFor="Courriel">Courriel</label>
        <Inputstyled
          id="Courriel"
          name="Courriel"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Courriel}
        />
      </Box>
      <Box>
<label htmlFor="Adresse">Adresse</label>
<Inputstyled
  id="Adresse"
  name="Adresse"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.Adresse}
/>
      </Box>

      <Box>
      <label htmlFor="Date_D_D">Date de déclaration </label>
      <Inputstyled
        id="Date_D_D"
        name="Date_D_D"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.Date_D_D}
      />
      </Box>

      <Box>
<label htmlFor="Fonction">Fonction</label>
<Inputstyled
  id="Fonction"
  name="Fonction"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.Fonction}
/>
      </Box>
      </FlexBox>
<Titre>Vaccin(s) administré(s)</Titre>
<Tabs defaultActiveKey="Vaccin#1" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Vaccin#1" title="Vaccin #1">
    <Vaccin formik={formik} id={"0"}  className="Vaccin#1"/>
  </Tab>
  <Tab eventKey="Vaccin#2" title="Vaccin #2">
    <Vaccin formik={formik} id={"1"} className="Vaccin#2"/>
  </Tab>
  <Tab eventKey="Vaccin#3" title="Vaccin #3" >
    <Vaccin formik={formik} id={"2"} className="Vaccin#3"/>
  </Tab>
  <Tab eventKey="Vaccin#4" title="Vaccin #4" >
    <Vaccin formik={formik} id={"3"}  className="Vaccin#4"/>
  </Tab>
</Tabs>

<Titre>Solvant(s)</Titre>
 <Tabs defaultActiveKey="Solvant#1" id="uncontrolled-tab-example" className="mb-3">
<Tab eventKey="Solvant#1" title="Solvant #1">
    <Solvant formik={formik} id={"0"}  className="Solvant#1"/>
  </Tab>
  <Tab eventKey="Solvant#2" title="Solvant #2">
    <Solvant formik={formik} id={"1"} className="Solvant#2"/>
  </Tab>
  <Tab eventKey="Solvant#3" title="Solvant #3" >
    <Solvant formik={formik} id={"2"} className="Solvant#3"/>
  </Tab>
  <Tab eventKey="Solvant#4" title="Solvant #4" >
    <Solvant formik={formik} id={"3"}  className="Solvant#4"/>
  </Tab> 
</Tabs> 








<label htmlFor="Manifestaion_I">Manifestation(s) indésirables(s)</label>
<FlexBox>
<Box>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Réaction locale sévère"
/>Réaction locale sévère
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Au-delà de l'articulation la plus proche"
/> Au-delà de l'articulation la plus proche
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Convulsions"
/>Convulsions
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Fébriles"
/>Fébriles
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Non Fébriles"
/>Non Fébriles
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Abcès au point d'injection"
/>Abcès au point d'injection
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Lymphadenite dûe au BCG"
/>Lymphadenite dûe au BCG
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Septicémie"
/>Septicémie
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Encéphalopathie"
/>Encéphalopathie
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="encéphalite"
/>encéphalite
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value=" Méningite"
/> Méningite
</div>
</Box>
<Box>

<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Paralysie flasque aigue"
/>Paralysie flasque aigue
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Syndrome du choc toxique"
/>Syndrome du choc toxique
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Thrombocytopénie"
/>Thrombocytopénie
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Réaction anaphylactique"
/>Réaction anaphylactique
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Fièvre >=38.5°c"
/>{"Fièvre >=38.5°c"}
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Hypotonie-Hyporéactivité"
/>Hypotonie-Hyporéactivité
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Arthralgie/Arthrite"
/>Arthralgie/Arthrite
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Vomissement"
/>Vomissement
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Diarrhée sévère"
/>Diarrhée sévère
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Cris ou pleurs presistants"
/>Cris ou pleurs presistants
</div>
<div>
<Inputstyled
  name="Manifestaion_I"
  type="checkbox"
  value="Autre"
/>Autre
</div>
</Box>
</FlexBox>



<Box>
<label htmlFor="Grave">Grave
<div>
<Inputstyled
  name="Grave"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  name="Grave"
  type="checkbox"
  value="Non"
/>Non
</div>
</label>
</Box>

<Box>
<label htmlFor="Traitement_R_MPVI">traitement reçu de la MPVI
<div>
<Inputstyled
  name="Traitement_R_MPVI"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  name="Traitement_R_MPVI"
  type="checkbox"
  value="Non"
/>Non
</div>
</label>
</Box>

<Box>
<label htmlFor="Traitement_R_MPVI_Ifyes">Si oui lequel</label>
<Inputstyled
  id="Traitement_R_MPVI_Ifyes"
  name="Traitement_R_MPVI_Ifyes"
  type="text"
  onChange={formik.handleChange}
  value={formik.values.Traitement_R_MPVI_Ifyes}
/>
  </Box>

 

<div>
<label htmlFor="Evolution">Evolution
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Envoiedeguérison"
/>Envoie de guérison
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Guéri"
/>Guéri
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Guériavecséquelles"
/>Guéri avec séquelles
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Guériavecséquelles"
/>Non guéri
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Evolutioninconnue"
/>Evolution inconnue
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Décès"
/>Décès
</label>
</div>

<label htmlFor="Autopise_effectuee">Autopise effectuée
<div>
<Inputstyled
  name="Autopise_Effectuee"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  name="Autopise_Effectuee"
  type="checkbox"
  value="Non"
/>Non
<Inputstyled
  name="Autopise_Effectuee"
  type="checkbox"
  value="Inconnu"
/>Inconnu
</div>
</label>
<Box>
      <label htmlFor="Antecedents_Medicaux">Antécédents médicaux (y compris antécédents de réactions similaires ou autres allergies)</label>
<textarea rows="5" cols="10" 
  id="Antecedents_Medicaux"
  name="Antecedents_Medicaux"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Antecedents_Medicaux}/>
</Box>

<Box>
      <label htmlFor="Prise_Medicaments">prise concomitante de médicaments ou autre substance (préciser)</label>
<textarea rows="5" cols="10" 
  id="Prise_Medicaments"
  name="Prise_Medicaments"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Prise_Medicaments}/>
</Box>


      <button type="submit">Submit</button>
      </FormikProvider>
    </form>

  );

};


export default FormBlanche;