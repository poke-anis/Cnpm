import React from 'react'
import { Field } from 'formik';

import styled from 'styled-components'

import SelectField from './React-select'

const FlexBox = styled.div`
display: flex;
flex-direction:column;

width : 100%;

`

const Auto5 =(props)=>{
    const Type_E_I = [
        { label: "Systemiques", value: "Systemiques" },
        { label: "Neurologiques", value: "Neurologiques"},
        { label: "Digestifs", value: "Digestifs"},
        { label: "Cardio-vasculaires", value: "Cardio_vasculaires"},
        { label: "Respiratoires", value: "Respiratoires"},
        { label: "Allergiques", value: "Allergiques"},
        { label: "Sphére ORL", value: "Sphere_ORL"},
        { label: "Biologiques", value: "Biologiques"},
        { label: "Ophtalmologiques", value: "Ophtalmologiques"},
        { label: "Autres", value: "Autres"},
      ];
      const Systemiques = [
        { label: "Fièvre > 38,5°C", value: "Fièvre > 38,5°C" },
        { label: "Asthénie", value: "Asthénie" },
        { label: "Arthralgie", value: "Arthralgie"},
        { label: "Courbature", value: "Courbature"},
        { label: "Bouffées de chaleur", value: "Bouffées de chaleur"},
        { label: "Douleur musculaire", value: "Douleur musculaire"},
        { label: "Sueurs", value: "Sueurs"},
        { label: "Perte d'appétit", value: "Perte d'appétit"},
        { label: "Adénopathies", value: "Adénopathies"},
        { label: "Malaise", value: "Malaise"},
        { label: "Choc vagal/etat de choc/ syndrome de choc toxique", value: "Choc vagal/etat de choc/ syndrome de choc toxique"},
      ];
 
      const Neurologiques = [
        { label: "Vertige", value: "Vertige" },
        { label: "Céphalée/ migraine ", value: "Céphalée/ migraine " },
        { label: "Paresthésies /fourmillements", value: "Paresthésies /fourmillements" },
        { label: "Névralgies/ Névralgie du V", value: "Névralgies/ Névralgie du V" },
        { label: "Encéphalopathie", value: "Encéphalopathie" },
        { label: "Aphasie de brocca", value: "Aphasie de brocca" },
        { label: "Hypotonie-hyporeactivité", value: "Hypotonie-hyporeactivité" },
        { label: "Confusion", value: "Confusion" },
        { label: "Insomnie", value: "Insomnie" },
      ];
      const Digestifs = [
        { label: "Nausées", value: "Nausées" },
        { label: "Vomissements", value: "Vomissements" },
        { label: "Diarrhées", value: "Diarrhées" },
        { label: "Douleurs abdominales", value: "Douleurs abdominales" },
        { label: "Gout amère", value: "Gout amère" },
      ];
      const Cardio_vasculaires = [
        { label: "Pic hypertensif", value: "Pic hypertensif" },
        { label: "Tachycardie/ Palpitations", value: "Tachycardie/ Palpitations" },
        { label: "Hypotension", value: "Hypotension" },
        { label: "Trouble du rythme", value: "Trouble du rythme" },
        { label: "Thrombose /phlébite/  thrombophlébite", value: "Thrombose /phlébite/  thrombophlébite" },
        { label: "Saignement", value: "Saignement" },
        { label: "Embolie pulmonaire", value: "Embolie pulmonaire" },
      ];
      const Respiratoires = [
        { label: "Toux", value: "Toux" },
        { label: "Dyspnée /Gène respiratoire/oppression thoracique", value: "Dyspnée /Gène respiratoire/oppression thoracique" },
        { label: "Essoufflements", value: "Essoufflements" },
        { label: "Pneumopathie", value: "Pneumopathie" },
        { label: "Douleur thoracique", value: "Douleur thoracique" },
        { label: "Crise d'asthme", value: "Crise d'asthme" },
      ];
      const Allergiques = [
        { label: "Urticaire", value: "Urticaire" },
        { label: "Oedeme facial/angio-oedeme/bouffissure du visage", value: "Oedeme facial/angio-oedeme/bouffissure du visage" },
        { label: "Eruption cutanée érythémateuse", value: "Eruption cutanée érythémateuse" },
        { label: "Rash cutané", value: "Rash cutané" },
        { label: "Réaction allergique/ anaphylactique/ oedeme de quinck ", value: "Réaction allergique/ anaphylactique/ oedeme de quinck " },
        { label: "Oedeme des extrémités", value: "Oedeme des extrémités" },
        { label: "Rougeur du visage", value: "Rougeur du visage" },
        { label: "Picotement laryngé", value: "Picotement laryngé" },
      ];
      const Sphere_ORL = [
        { label: "Maux de gorge", value: "Maux de gorge" },
        { label: "Ecoulement nasal/rhinorrhées", value: "Ecoulement nasal/rhinorrhées" },
        { label: "Sécheresse buccale", value: "Sécheresse buccale" },
        { label: "Anosmie", value: "Anosmie" },
        { label: "Pharyngite", value: "Pharyngite" },
        { label: "Eternuement", value: "Eternuement" },
        { label: "Dysphonie", value: "Dysphonie" },
        { label: "Rhinite", value: "Rhinite" },
        { label: "Angine", value: "Angine" },
        { label: "Agueusie", value: "Agueusie" },
        { label: "Epistaxis", value: "Epistaxis" },
        { label: "Otalgie / otite", value: "Otalgie / otite" },
      ];
      const Biologiques = [
        { label: "Hypoglycémie", value: "Hypoglycémie" },
        { label: "Hyperglycémie", value: "Hyperglycémie" },
        { label: "Hyperleucocytose", value: "Hyperleucocytose" },
        { label: "Anémie", value: "Anémie" },
        { label: "Cytolyse hépatique", value: "Cytolyse hépatique" },
        { label: "Thrombocytopénie", value: "Thrombocytopénie" },
      ];
      const Ophtalmologiques = [
        { label: "Trouble visuel", value: "Trouble visuel" },
        { label: "Uvéite", value: "Uvéite" },
        { label: "Conjonctivite", value: "Conjonctivite" },
        { label: "Hémorragie sous conjontivale", value: "Hémorragie sous conjontivale" },
      ];
      var {id,values} = props
      var idf = `${id}Type_E_I`
      var idf2 = `${id}Description_E_I`
  const varreturn = (value) => {
  if (value === 'Systemiques')
  {return Systemiques}
  else if (value === 'Neurologiques')
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
  else if (value === 'Biologiques')
  {return Biologiques}
  else if (value === 'Ophtalmologiques')
  {return Ophtalmologiques}
  }
  
    return(
<FlexBox>
        <Field
            isMulti={true}
             component={SelectField}
             name={`Type_E_I`}
          options={Type_E_I}
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
            }):null}
</FlexBox>
    )
}

export default Auto5;