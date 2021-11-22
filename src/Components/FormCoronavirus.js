import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import {Tab,Tabs,TabPane ,TabContent,Nav,TabContainer} from 'react-bootstrap'
import { InputText,InputCheck,InputNumber,InputRadio,InputDate,InputSelect,InputFile } from './FormikInputs';
import styled from 'styled-components'
 
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


const Vaccin = (props)=>{
  const {id,formik} = props
  console.log(formik.values.Vaccin[id].Type_D_V)
    return( 
    <FormikProvider value={formik}>
      <InputText name="Type du vaccin :" id={`Vaccin${id}.Type_D_V`} formik={formik} />
      <InputText name="Fabricant :" id={`Vaccin${id}.Fabricant`} formik={formik} />
      <InputDate name="Date de vaccination :" id={`Vaccin${id}.Date_D_V`} formik={formik} />
      <InputText
        name="Heure de vaccination :"
        id={`Vaccin${id}.Heure_D_V`}
        formik={formik}
      />
      <InputSelect
        name="Dose :"
        id={`Vaccin${id}.Dose`}
        options={["1ère", "2ème", "3ème", "4ème"]}
        formik={formik}
      />
      <InputSelect
        name="Voie :"
        id={`Vaccin${id}.Voie`}
        options={["ID", "SC", "IM", "Orale"]}
        formik={formik}
      />
      <InputSelect
        name="Point d'injection :"
        id={`Vaccin${id}.Point_I`}
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
      
      <InputText name="N° de lot :" id={`Vaccin${id}.Numero_D_L`} formik={formik} />
      <InputFile
        name="Photo du lot (Si possible) :"
        id={`Vaccin${id}.Photo_L`}
        formik={formik}
      /> 
      <InputDate name="Date de Péremption :" id={`Vaccin${id}.Date_D_P`} formik={formik} />

        </FormikProvider>
        
    )
}


const Solvant = (props)=>{
  const {id,formik} = props

  return(
      <FormikProvider value={formik}>

<InputSelect
          name="Solvant :"
          id={`Solvant${id}.Solvant`}
          options={["Du même vaccin", "Autre"]}
          formik={formik}
        />
        <InputText name="Fabricant :" id={`Solvant${id}.Fabricant_D_S`} formik={formik} />
        <InputText name="N° de lot :" id={`Solvant${id}.Numero_D_L_D_S`} formik={formik} />
        <InputFile
          name="Photo du lot (Si possible) :"
          id={`Solvant${id}.Photo_L_D_S`}
          formik={formik}
        />
        <InputDate
          name="Date de péremption :"
          id={`Solvant${id}.Date_D_P_D_S`}
          formik={formik}
        />
        <InputDate
          name="Date de reconstitution :"
          id={`Solvant${id}.Date_D_R`}
          formik={formik}
        />
        <InputText
          name="Heure de reconstitution :"
          id={`Solvant${id}.Heure_D_R`}
          formik={formik}
        />
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
        "Type_D_V":'',
        "Fabricant":'',
        "Date_D_Vaccination":'',
        "Dose":'',
        "Voie":'',
        "Point_D":'',
        "Num_D_Lot":'',
        "Date_D_Peremption":'',
      },
      {
        "Type_D_V":'',
        "Fabricant":'',
        "Date_D_Vaccination":'',
        "Dose":'',
        "Voie":'',
        "Point_D":'',
        "Num_D_Lot":'',
        "Date_D_Peremption":'',
      },
      {
        "Type_D_V":'',
        "Fabricant":'',
        "Date_D_Vaccination":'',
        "Dose":'',
        "Voie":'',
        "Point_D":'',
        "Num_D_Lot":'',
        "Date_D_Peremption":'',
      },
      {
        "Type_D_V":'',
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
        Vaccin0:{Type_D_V:''},
        Vaccin1:{Type_D_V:''},
        Vaccin2:{Type_D_V:''},
        
      
      
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [Vaccins,setVaccins] = useState([1])
  const [Solvants,setSolvants] = useState([1])

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <FlexBox>
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
        </FlexBox>
        <BigBox>
          <InputText name="Nom :" id="Nom" formik={formik} />
          <InputText name="Prénom :" id="Prenom" formik={formik} />
          <InputNumber name="Tél/Fax/Mobile :" id="Tel" formik={formik} />
          <InputNumber name="Age :" id="Age" formik={formik} />
        </BigBox>
        <BigBox>
          <InputRadio
            name="Sexe :"
            id="Sexe"
            radioContent={["Masculin", "Feminin"]}
            formik={formik}
          />
          <InputText name="Taille (cm) :" id="Taille" formik={formik} />
          <InputText name="Poids (Kg) :" id="Poids" formik={formik} />
        </BigBox>

        <Titre>Vaccin(s) administré(s)</Titre>
        <TabContainer id="Vaccins-tabs-example" defaultActiveKey="Vaccin#1" >
        <Nav variant="tabs"  >
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
                <button
                  onClick={() => {
                    console.log(Vaccins);
                    setVaccins([...Vaccins, Vaccins.length + 1]);
                  }}
                >
                  +
                </button>
              );
            }}
          />
        </Nav>
<TabContent>
          {Vaccins.map((el, index) => {
            console.log(`Vaccin#${el}`)
            return (
              <TabPane eventKey={`Vaccin#${el}`} key={index}>
                    <Vaccin formik={formik} id={index} className={`Vaccin#${el}`}/>
              </TabPane>
            );
          })}


        </TabContent>
        </TabContainer>
        <Titre>Solvant(s)</Titre>
        <TabContainer id="Solvants-tabs-example" defaultActiveKey="Solvant#1" >
        <Nav variant="tabs"  >
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
                <button type="button"
                  onClick={() => {
                    setSolvants([...Solvants, Solvants.length + 1]);
                  }}
                >
                  ++
                </button>
              );
            }}
          />
        </Nav>
<TabContent>
          {Solvants.map((el, index) => {
            console.log(`Solvant#${el}`)
            return (
              <TabPane eventKey={`Solvant#${el}`} key={index}>
                    <Solvant formik={formik} id={index} className={`Solvant#${el}`}/>
              </TabPane>
            );
          })}


        </TabContent>
        </TabContainer>
        <InputRadio name="Traitement reçu de la MPVI :" 
                id="Traitement_R_MPVI"             
                radioContent={[
              "Oui",
              "Non"]}
                formik={formik} /> 
        <InputRadio name="Hospitalisation :" 
                id="Hospitalisation"             
                radioContent={[
              "Oui",
              "Non"]}
                formik={formik} /> 
<InputRadio name="Evolution :" 
                id="Evolution"             
                radioContent={[
              "En voie de guérison",
              "Guéri",
              "Guéri avec des séquelles",
              "Non guéri","Evolution inconnue","Décès"]}
                formik={formik} /> 
{        formik.values.Evolution === "Décès"?            
        <InputDate name="Date de décès :" id="Date_D_D" formik={formik} />
        :null}
{        formik.values.Evolution === "Décès"?<InputSelect name=" " 
                id="Freqequence_U_U"             
                options={[
              "Jour",
              "Semaine",
               "mois"]}
                formik={formik} />  :null} 

        <button type="submit">Submit</button>
      </FormikProvider>
    </form>
  );

};


export default FormBlanche;