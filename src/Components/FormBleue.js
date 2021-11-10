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

const FormBleue = () => {
  const formik = useFormik({
    initialValues: {
      Nom: '',
      Pre:'',
      Profession: '',
      Etablissement: '',
      Tel: '',
      Adresse: '',
      Exercice: '',
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

      <Titre>Identité du rapporteur</Titre>
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
        <label htmlFor="Prenom">Prénom</label>
        <Inputstyled
          id="Prenom"
          name="Prenom"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Prenom}

        />
      </Box>

      <Box>
        <label htmlFor="Profession">Profession/Grade</label>
        <Inputstyled
          id="Profession"
          name="Profession"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Profession}
        />
      </Box>

      <Box>
<label htmlFor="Etablissement">Etablissement</label>
<Inputstyled
  id="Etablissement"
  name="Etablissement"
  type="number"
  onChange={formik.handleChange}
  value={formik.values.Etablissement}
/>
</Box>

<Box>
        <label htmlFor="Tel">Tél</label>
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

<p>
Cette fiche est destinée au relevé d'incidents ou risques d'incidents aux dispositifs médicaux.
Que devez vous rapporter ?
Des problèmes importants du type insuffisance de conditionnement, défection de produit, mauvaise fabrication et/ou présentation.
Vous pouvez faire des suggestions pour améliorer la situation, ou fournir des conseils au fabricant ou bien au fournisseur.
A quoi sert votre rapport ?
A informer le fournisseur et le producteur après investigations auprès d'autres utilisateurs.
Une information ainsi qu'une action adaptée au problème seront entreprises en vue de sauvegarder la sécurité et la performance des dispositifs médicaux.
</p>


<Titre>Identification du produit</Titre>
<Box>
<label htmlFor="Typedp">Type de produit</label>
<Inputstyled 
  id="Typedp"
  name="Typedp"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Typedp}/>
</Box>
<Box>
        <label htmlFor="Nomdm">Nom de marque</label>
        <Inputstyled
          id="Nomdm"
          name="Nomdm"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Nomdm}
        />
      </Box>
<Box>
      <label htmlFor="Numerodm">Numéro du modèle</label>
      <Inputstyled
        id="Numerodm"
        name="Numerodm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Numerodm}
      />
      </Box>
      <Box>
      <label htmlFor="Serie">Série/Batch/N° de lot</label>
      <Inputstyled
        id="Serie"
        name="Serie"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Serie}
      />
      </Box>
      <Box>
      <label htmlFor="Descriptiondp">Description du problème</label>
<textarea rows="5" cols="10" 
  id="Descriptiondp"
  name="Descriptiondp"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Descriptiondp}/>
</Box>
<Box>
      <label htmlFor="Suggestions">Suggestions</label>
<textarea rows="5" cols="10" 
  id="Suggestions"
  name="Suggestions"
  type="Text"
  onChange={formik.handleChange}
  value={formik.values.Suggestions}/>
</Box>
      <Box>
        <label htmlFor="Fabricant">Fabricant : Nom, Adresse et Téléphone</label>
        <Inputstyled
          id="Fabricant"
          name="Fabricant"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Fabricant}
        />
</Box>

<Box>
        <label htmlFor="Fournisseur">Fournisseur : Nom, Adresse et Téléphone</label>
        <Inputstyled
          id="Fournisseur"
          name="Fournisseur"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Fournisseur}
        />
      </Box>


<Box>
<label htmlFor="Fabricantcheck">Fabricant et/ou fournisseur ont-ils été informés du problème
<div>
<Inputstyled
  name="Fabricantcheck"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  name="Fabricantcheck"
  type="checkbox"
  value="Non"
/>Non
</div>
</label>
</Box>

<Box>
<label htmlFor="Casualite">Avez-vous pris le soin de vérifier la relation de causalité
<div>
<Inputstyled
  name="Casualite"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  name="Casualite"
  type="checkbox"
  value="Non"
/>Non
</div>
</label>
</Box>

<Box>
<label htmlFor="produit">Le produit ou son emballage sont ils en votre possession (à ne pas jeter SVP), Si oui transmettre au cnpm
<div>
<Inputstyled
  name="produit"
  type="checkbox"
  value="Oui"
/>Oui
<Inputstyled
  name="produit"
  type="checkbox"
  value="Non"
/>Non
</div>
</label>
</Box>


      <Box>
      <label htmlFor="Datedf">Date de fabrication</label>
      <Inputstyled
        id="Datedf"
        name="Datedf"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.Datedf}
      />
      </Box>
      <Box>
      <label htmlFor="Dateddp">Date d'achat du produit</label>
      <Inputstyled
        id="Dateddp"
        name="Dateddp"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.Dateddp}
      />
      </Box>
      <Box>
      <label htmlFor="Datedp">Date de péremption</label>
      <Inputstyled
        id="Datedp"
        name="Datedp"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.Datedp}
      />
      </Box>

      <button type="submit">Submit</button>


      </FormikProvider>

    </form>

  );

};


export default FormBleue;