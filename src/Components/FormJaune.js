import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider } from 'formik';
import styled from 'styled-components'
 
const Box = styled.div`
display: flex;
flex-direction: column;
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



const FormJaune = () => {
  const formik = useFormik({
    initialValues: {
      Nom: '',
      Age: '',
      Taille: '',
      Sexe: '',
      Description: '',
      Nature: '',
      Descriptif: '',
      Evolution: '',
      Sequelles: '',
      Histoire: '',
      Facteurs: '',
      Nom2: '',
      Pre: '',
      Tel: '',
      Adresse: '',
      Mail: '',
      Exercice: '',
      Adressep: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik)
  return (
    <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik}>

      <Titre> Informations malade</Titre>
      <Box>
      <label htmlFor="Nom">Nom</label>
      <Inputstyled
        id="Nom"
        name="Nom"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Nom}
      />
      </Box>

      <Box>
        <label htmlFor="Age">Age du malade</label>
        <Inputstyled
          id="Age"
          name="Age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Age}

        />
      </Box>

      <Box>
        <label htmlFor="Taille">Taille</label>
        <Inputstyled
          id="Taille"
          name="Taille"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Taille}
        />
      </Box>
      <Box>

<label htmlFor="Poids">Poids</label>
<Inputstyled
  id="Poids"
  name="Poids"
  type="number"
  onChange={formik.handleChange}
  value={formik.values.Poids}
/>
</Box>

<label htmlFor="Sexe">Sexe</label>
<Inputstyled
  id="Sexe"
  name="Sexe"
  type="radio"
  value="Masculin"
  onChange={formik.handleChange}
  value={formik.values.Sexe}
/>Masculin
<Inputstyled
  id=""Sexe
  name="Sexe"
  type="radio"
  value="Feminin"
  onChange={formik.handleChange}
  value={formik.values.Sexe}
/>Feminin
<Titre>Description de la réaction indésirable</Titre>
<Box>
<label htmlFor="Description">Description de la réaction (nature, localisation, gravité, caractéristiques)</label>
<textarea rows="5" cols="10" 
  id="Description"
  name="Description"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Description}/>
</Box>

<Titre>Traitement de la réaction indésirable</Titre>
<Box>
<label htmlFor="Nature">Nature du traitement</label>
<div>
<Inputstyled
  id="Nature"
  name="Nature"
  type="radio"
  value="Médicamenteux"
/>Médicamenteux
</div>
<div>
<Inputstyled
  id="Nature"
  name="Nature"
  type="radio"
  value="NonMédicamenteux"
/>Non Médicamenteux
</div>
</Box>
<Box>
<label htmlFor="Descriptif">Descriptif du traitement</label>
<textarea rows="5" cols="10" 
  id="Descriptif"
  name="Descriptif"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Descriptif}/>
</Box>

<Box>
<label htmlFor="Evolution">Evolution
<div>
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Disparition"
/>Disparition
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Encours"
/>En cours
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Inconnue"
/>Inconnue
<Inputstyled
  name="Evolution"
  type="checkbox"
  value="Deces"
/>Deces
</div>
</label>
</Box>

{/* 
<div role="group" aria-labelledby="checkbox-group">
<label htmlFor="Evolution">Evolution</label>
<FormikProvider>

            <label >
              <Field type="checkbox" name="checked" value="One" />
              Disparition
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              En cours
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Inconnue
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Deces
            </label>
            </FormikProvider>

          </div> */}





<Box>
<label htmlFor="Sequelles">Séquelles</label>
<div>
<Inputstyled
  id="Sequelles"
  name="Sequelles"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  id="Sequelles"
  name="Sequelles"
  type="checkbox"
  value="Non"
/>Non
</div>
</Box>

<Box>
<label htmlFor="Histoire">Histoire de la maladie ou commentaires</label>
<textarea rows="5" cols="10" 
  id="Histoire"
  name="Histoire"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Histoire}/>
</Box>
<Box>
<label htmlFor="Facteurs">Les facteurs de risques associés (insuffisance rénale, exposition antérieure au médicament suspecté, allergies antérieures, modalités d'utilisation)</label>
<textarea rows="5" cols="10" 
  id="Facteurs"
  name="Facteurs"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Facteurs}/>
</Box>

<Titre> Identité du rapporteur</Titre>
      <Box>
      <label htmlFor="Nom2">Nom</label>
      <Inputstyled
        id="Nom2"
        name="Nom2"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Nom2}
      />
      </Box>

      <Box>
        <label htmlFor="Pre">Prénom</label>
        <Inputstyled
          id="Pre"
          name="Pre"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Pre}
        />
      </Box>

      <Box>
        <label htmlFor="Tel">Tél/Fax</label>
        <Inputstyled
          id="Tel"
          name="Tel"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Tel}
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
        <label htmlFor="Mail">E-mail</label>
        <Inputstyled
          id="Mail"
          name="Mail"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Mail}
        />
      </Box>

      <label htmlFor="Exercice">Type d'Exercice
      
<Inputstyled
  name="Exercice"
  type="radio"
  value="Publique"

/>Publique
<Inputstyled
  name="Exercice"
  type="radio"
  value="Privé"

/>Privé
</label>
      <Box>
        <label htmlFor="Adressep">Adresse postale</label>
        <Inputstyled
          id="Adressep"
          name="Adressep"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Adressep}
        />
      </Box>


      <button type="submit">Submit</button>


      </FormikProvider>

    </form>

  );

};


export default FormJaune;