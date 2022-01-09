import React from 'react'
import {Field} from 'formik';

import styled from 'styled-components'

import SelectField from './React-select'


const FlexBox = styled.div`
display: flex;
flex-direction:column;

width : 100%;

`

const Auto3 =(props)=>{
    const Type_A = [
        { label: "Neurologiques", value: "Neurologiques"},
        { label: "Digestifs", value: "Digestifs"},
        { label: "Cardio-vasculaires", value: "Cardio_vasculaires"},
        { label: "Respiratoires", value: "Respiratoires"},
        { label: "Allergiques", value: "Allergiques"},
        { label: "Sphére ORL", value: "Sphere_ORL"},
        { label: "Endocriniens", value: "Endocriniens"},
        { label: "Biologiques", value: "Biologiques"},
        { label: "Musculo-squelettique", value: "Musculo_squelettique"},
        { label: "Ophtalmologiques", value: "Ophtalmologiques"},
        { label: "Autres", value: "Autres"},
      ];

      const Neurologiques = [
        { label: "Vertige", value: "Vertige" },
        { label: "Céphalée/ migraine ", value: "Céphalée/ migraine " },
        { label: "Guillain Barré", value: "Guillain Barré" },
        { label: "Paresthésies /fourmillements", value: "Paresthésies /fourmillements" },
        { label: "Convulsion", value: "Convulsion" },
        { label: "Trouble de la conscience/ lipothymie", value: "Trouble de la conscience/ lipothymie" },
        { label: "Névralgies/", value: "Névralgies/" },
        { label: "Crise de panique", value: "Crise de panique" },
        { label: "Encéphalopathie", value: "Encéphalopathie" },
        { label: "Hypotonie-hyporeactivité", value: "Hypotonie-hyporeactivité" },
        { label: "Confusion/epilepsie", value: "Confusion/epilepsie" },
        { label: "Insomnie", value: "Insomnie" },
        { label: "Paralysie", value: "Paralysie" },
      ];
      const Digestifs = [
        { label: "RCUH/MALADIE DE CROHN", value: "RCUH/MALADIE DE CROHN" },
        { label: "Ulcère", value: "Ulcère" },
        { label: "Hémorroides", value: "Hémorroides" },
        { label: "RGO", value: "RGO" },
        { label: "Gastrite", value: "Gastrite" },
        { label: "Hémorragie digestive", value: "Hémorragie digestive" },
        { label: "Dysphagie", value: "Dysphagie" },
      ];
      const Cardio_vasculaires = [
        { label: "HTA", value: "HTA" },
        { label: "Tachycardie/ Palpitations", value: "Tachycardie/ Palpitations" },
        { label: "Hypotension", value: "Hypotension" },
        { label: "Cardiopathies/valvulopathies", value: "Cardiopathies/valvulopathies" },
        { label: "Trouble du rythme", value: "Trouble du rythme" },
        { label: "Thrombose /phlébite/  thrombophlébite", value: "Thrombose /phlébite/  thrombophlébite" },
        { label: "AVC", value: "AVC" },
        { label: "Saignement", value: "Saignement" },
        { label: "Précordialgies", value: "Précordialgies" },
        { label: "Infarctus du myocarde", value: "Infarctus du myocarde" },
        { label: "Embolie pulmonaire", value: "Embolie pulmonaire" },
        { label: "Accident ischemique transitoire", value: "Accident ischemique transitoire" },
      ];
      const Respiratoires = [
        { label: "Toux chronique", value: "Toux chronique" },
        { label: "pneumothorax/epanchement liquidien", value: "pneumothorax/epanchement liquidien" },
        { label: "tuberculose pulmonaire", value: "tuberculose pulmonaire" },
        { label: "Pneumopathie", value: "Pneumopathie" },
        { label: "Douleur thoracique", value: "Douleur thoracique" },
        { label: "BPCO", value: "BPCO" },
        { label: "DDP", value: "DDP" },
        { label: "Crise d'asthme", value: "Crise d'asthme" },
        { label: "Crépitation / OAP", value: "Crépitation / OAP" },
      ];
      const Allergiques = [
        { label: "Urticaire", value: "Urticaire" },
        { label: "Oedeme facial/angio-oedeme/bouffissure du visage", value: "Oedeme facial/angio-oedeme/bouffissure du visage" },
        { label: "Eruption cutanée érythémateuse", value: "Eruption cutanée érythémateuse" },
        { label: "Rash cutané", value: "Rash cutané" },
        { label: "Allergie respiratoire", value: "Allergie respiratoire" },
        { label: "Allergie alimentaire", value: "Allergie alimentaire" },
        { label: "Réaction allergique/ anaphylactique/ oedeme de quinck ", value: "Réaction allergique/ anaphylactique/ oedeme de quinck " },
        { label: "Oedeme des extrémités", value: "Oedeme des extrémités" },
        { label: "Rougeur du visage", value: "Rougeur du visage" },
        { label: "Picotement laryngé", value: "Picotement laryngé" },
      ];
      const Sphere_ORL = [,
        { label: "Rhinite à répétition", value: "Rhinite à répétition" },
        { label: "Angine à répétition", value: "Angine à répétition" },
        { label: "Epistaxis à répétition ", value: "Epistaxis à répétition " },
        { label: "Otalgie / otite", value: "Otalgie / otite" },
      ];
      const Endocriniens = [,
        { label: "Diabéte type 1", value: "Diabéte type 1" },
        { label: "Diabéte type 2", value: "Diabéte type 2" },
        { label: "Hyperthyroidie", value: "Hyperthyroidie" },
        { label: "Hypothyroidie", value: "Hypothyroidie" },
      ];

      const Musculo_squelettique = [
        { label: "Douleur lombaire", value: "Douleur lombaire" },
        { label: "PR/SPA", value: "PR/SPA" },
        { label: "ostéoporose", value: "ostéoporose" },
      ];
      const Ophtalmologiques = [
        { label: "Trouble visuel", value: "Trouble visuel" },
        { label: "Uvéite", value: "Uvéite" },
        { label: "Conjonctivite", value: "Conjonctivite" },
        { label: "Cataracte", value: "Cataracte" },
        { label: "Hémorragie sous conjontivale", value: "Hémorragie sous conjontivale" },
      ];
      var {id,formik,onFileChange,values} = props
      var idf = `${id}Type_A`
      var idf2 = `${id}Description_A`
  const varreturn = (value) => {
  if (value === 'Neurologiques')
  {return Neurologiques}
  else if (value === 'Digestifs')
  {return Digestifs}
  else if (value === 'Cardio_vasculaires')
  {return Cardio_vasculaires}
  else if (value === 'Respiratoires')
  {return Respiratoires}
  else if (value === 'Allergiques')
  {return Allergiques}
  else if (value === 'Sphere_ORL')
  {return Sphere_ORL}
  else if (value === 'Endocriniens')
  {return Endocriniens}
  else if (value === 'Musculo_squelettique')
  {return Musculo_squelettique}
  else if (value === 'Ophtalmologiques')
  {return Ophtalmologiques}
  }
  
    return(
<FlexBox>
        <Field
        isMulti={true}
             component={SelectField}
             name={`Type_A`}
          options={Type_A}
        />
        {values
          ? 
          values.map((word,key) => {
              return (
                <label htmlFor={word} key={key}>
                  {word}
                  <Field
                  isMulti={true}
                    options={varreturn(word)}
                    component={SelectField}
                    name={`${idf2}`}
                  />
                </label>
              );
            })
/* {
        formik.values.Antecedents_D_M.filter(word.value === 'Neurologiques')?
<label htmlFor="Neurologiques">Neurologiques
        <Field
             component={SelectField}
             name={`Neurologiques`}
          options={Neurologiques}
        /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Digestifs')?
<label htmlFor="Digestifs">Digestifs
        <Field
             component={SelectField}
             name={`Digestifs`}
          options={Digestifs}
        /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Cardio_vasculaires')?
<label htmlFor="Cardio_vasculaires">Cardio_vasculaires
        <Field
             component={SelectField}
             name={`Cardio_vasculaires`}
          options={Cardio_vasculaires}
        /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Respiratoires')?
<label htmlFor="Respiratoires">Respiratoires
        <Field
             component={SelectField}
             name={`Respiratoires`}
          options={Respiratoires}
        /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Allergiques')?
<label htmlFor="Allergiques">Allergiques
        <Field
             component={SelectField}
             name={`Allergiques`}
          options={Allergiques}
        /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Sphere_ORL')?
<label htmlFor="Sphere_ORL">Sphere_ORL
        <Field
             component={SelectField}
             name={`Sphere_ORL`}
          options={Sphere_ORL}
        /></label>:        
        formik.values.Antecedents_D_M.filter(word.value === 'Endocriniens')?
        <label htmlFor="Endocriniens">Endocriniens
                <Field
                     component={SelectField}
                     name={`Endocriniens`}
                  options={Endocriniens}
                /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Musculo_squelettique')?
<label htmlFor="Musculo_squelettique">Musculo_squelettique
        <Field
             component={SelectField}
             name={`Musculo_squelettique`}
          options={Musculo_squelettique}
        /></label>:
        formik.values.Antecedents_D_M.filter(word.value === 'Ophtalmologiques') ?
<label htmlFor="Ophtalmologiques">Ophtalmologiques
        <Field
             component={SelectField}
             name={`Ophtalmologiques`}
          options={Ophtalmologiques}
        /></label> */
        :null}
</FlexBox>
    )
}

export default Auto3;