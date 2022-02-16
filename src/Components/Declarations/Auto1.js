import React, { } from 'react'
import { Field } from 'formik';
import styled from 'styled-components'
import SelectField from './React-select'

const FlexBox = styled.div`
display: flex;
flex-direction:column;
width : 100%;

`

const Auto1 =(props)=>{
    const Type_D_L_R = [
        { label: "Au point d'injection", value: "Point_I" },
        { label: "Systemiques", value: "Systemiques" },
        { label: "Infectieux", value: "Infectieux"},
        { label: "Neurologiques", value: "Neurologiques"},
        { label: "Digestifs", value: "Digestifs"},
        { label: "Cardio-vasculaires", value: "Cardio_vasculaires"},
        { label: "Respiratoires", value: "Respiratoires"},
        { label: "Allergiques", value: "Allergiques"},
        { label: "Sphére ORL", value: "Sphere_ORL"},
        { label: "Biologiques", value: "Biologiques"},
        { label: "Musculo-squelettique", value: "Musculo_squelettique"},
        { label: "Ophtalmologiques", value: "Ophtalmologiques"},
        { label: "Autres", value: "Autres"},
      ];
      var Point_I = [
        { label: "Douleurs au point d'injection", value: "Douleurs au point d'injection" },
        { label: "Réactions locales /Rougeur/induration", value: "Réactions locales /Rougeur/induration" },
        { label: "Abcès au point d'injection", value: "Abcès au point d'injection"},
      ];
      const Systemiques = [
        { label: "Fièvre > 38,5°C", value: "Fièvre > 38,5°C" },
        { label: "Asthénie", value: "Asthénie" },
        { label: "Arthralgie", value: "Arthralgie"},
        { label: "Courbature", value: "Courbature"},
        { label: "Frissons", value: "Frissons"},
        { label: "Bouffées de chaleur", value: "Bouffées de chaleur"},
        { label: "Douleur musculaire", value: "Douleur musculaire"},
        { label: "Sueurs", value: "Sueurs"},
        { label: "Perte d'appétit", value: "Perte d'appétit"},
        { label: "Adénopathies", value: "Adénopathies"},
        { label: "Lymphadénite", value: "Lymphadénite"},
        { label: "Pleurs incessant", value: "Pleurs incessant"},
        { label: "Malaise", value: "Malaise"},
        { label: "Choc vagal/etat de choc/ syndrome de choc toxique", value: "Choc vagal/etat de choc/ syndrome de choc toxique"},
      ];
      const Infectieux = [
        { label: "Syndrome grippal", value: "Syndrome grippal" },
      ];
      const Neurologiques = [
        { label: "Vertige", value: "Vertige" },
        { label: "Céphalée/ migraine ", value: "Céphalée/ migraine " },
        { label: "Guillain Barré", value: "Guillain Barré" },
        { label: "Paresthésies /fourmillements", value: "Paresthésies /fourmillements" },
        { label: "Convulsion", value: "Convulsion" },
        { label: "Trouble de la conscience/ lipothymie", value: "Trouble de la conscience/ lipothymie" },
        { label: "Névralgies/ Névralgie du V", value: "Névralgies/ Névralgie du V" },
        { label: "Crise de paniqu", value: "Crise de paniqu" },
        { label: "Encéphalopathie", value: "Encéphalopathie" },
        { label: "Aphasie de brocca", value: "Aphasie de brocca" },
        { label: "Hypotonie-hyporeactivité", value: "Hypotonie-hyporeactivité" },
        { label: "Confusion", value: "Confusion" },
        { label: "Insomnie", value: "Insomnie" },
        { label: "Hémiplegie temporaire", value: "Hémiplegie temporaire" },
        { label: "HIC", value: "HIC" },
        { label: "Paresthesie", value: "Paresthesie" },
      ];
      const Digestifs = [
        { label: "Nausées", value: "Nausées" },
        { label: "Vomissements", value: "Vomissements" },
        { label: "Diarrhées", value: "Diarrhées" },
        { label: "Douleurs abdominales", value: "Douleurs abdominales" },
        { label: "Gout amère", value: "Gout amère" },
        { label: "Hémorragie digestive", value: "Hémorragie digestive" },
        { label: "Dysphagie", value: "Dysphagie" },
      ];
      const Cardio_vasculaires = [
        { label: "Pic hypertensif", value: "Pic hypertensif" },
        { label: "Tachycardie/ Palpitations", value: "Tachycardie/ Palpitations" },
        { label: "Hypotension", value: "Hypotension" },
        { label: "Pincement de la tension/ déséquilibre tensionel", value: "Pincement de la tension/ déséquilibre tensionel" },
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
        { label: "Toux", value: "Toux" },
        { label: "Dyspnée /Gène respiratoire/oppression thoracique", value: "Dyspnée /Gène respiratoire/oppression thoracique" },
        { label: "Essoufflements", value: "Essoufflements" },
        { label: "Pneumopathie", value: "Pneumopathie" },
        { label: "Douleur thoracique", value: "Douleur thoracique" },
        { label: "Crise d'asthme", value: "Crise d'asthme" },
        { label: "Crépitation / OAP", value: "Crépitation / OAP" },
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
      const Musculo_squelettique = [
        { label: "Douleur lombaire", value: "Douleur lombaire" },
        { label: "Myalgies", value: "Myalgies" },
        { label: "Douleur du membre superieur  /lourdeur du membre sup/Douleur sous l'aisselle/douleur de l'épaule", value: "Douleur du membre superieur  /lourdeur du membre sup/Douleur sous l'aisselle/douleur de l'épaule" },
        { label: "Douleur dorsale", value: "Douleur dorsale" },

      ];
      const Ophtalmologiques = [
        { label: "Trouble visuel", value: "Trouble visuel" },
        { label: "Uvéite", value: "Uvéite" },
        { label: "Conjonctivite", value: "Conjonctivite" },
        { label: "Hémorragie sous conjontivale", value: "Hémorragie sous conjontivale" },
      ];
    var {id,formik,onFileChange,values} = props
    var idf = `${id}Type_D_L_R`
    var idf2 = `${id}Description_D_L_R`
const varreturn = (value) => {
if (value === "Point_I") {
  return Point_I;
} else if (value === "Systemiques") {
  return Systemiques;
} else if (value === "Infectieux") {
  return Infectieux;
} else if (value === "Neurologiques") {
  return Neurologiques;
} else if (value === "Digestifs") {
  return Digestifs;
} else if (value === "Cardio_vasculaires") {
  return Cardio_vasculaires;
} else if (value === "Respiratoires") {
  return Respiratoires;
} else if (value === "Allergiques") {
  return Allergiques;
} else if (value === "Sphere_ORL") {
  return Sphere_ORL;
} else if (value === "Biologiques") {
  return Biologiques;
} else if (value === "Musculo_squelettique") {
  return Musculo_squelettique;
} else if (value === "Ophtalmologiques") {
  return Ophtalmologiques;
}
}
const namereturn = (value) => {
  if (value === 'Point_I') {
  return "Au point d'injection"
  }
  else if (value === 'Systemiques')
  {return 'Systemiques'}
  else if (value === 'Infectieux')
  {return 'Infectieux'}
  else if (value === 'Neurologiques')
  {return 'Neurologiques'}
  else if (value === 'Digestifs')
  {return 'Digestifs'}
  else if (value === 'Cardio_vasculaires')
  {return 'Cardio vasculaires'}
  else if (value === 'Respiratoires')
  {return 'Respiratoires'}
  else if (value === 'Allergiques')
  {return 'Allergiques'}
  else if (value === 'Sphere_ORL')
  {return 'Sphere ORL'}
  else if (value === 'Biologiques')
  {return 'Biologiques'}
  else if (value === 'Musculo_squelettique')
  {return 'Musculo squelettique'}
  else if (value === 'Ophtalmologiques')
  {return 'Ophtalmologiques'}
  }

    return (
      <FlexBox>
        <Field  isMulti={props.isMulti} component={SelectField}  name={idf} options={Type_D_L_R} />
        { values  && values !== undefined ?
        Object(values).map((word,key) => {
              return (
                <label htmlFor={word} key={key}>
                  {namereturn(word)}
                  <Field
                    options={varreturn(word)}
                    component={SelectField}
                    name={`${idf2}`}
                    isMulti={props.isMulti}
                  />
                </label>
              );
            }):null
}
      </FlexBox>
    );
}

export default Auto1;