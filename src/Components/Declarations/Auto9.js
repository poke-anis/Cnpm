import React from 'react'
import {Field} from 'formik';
import styled from 'styled-components'
import SelectField from './React-select'

const FlexBox = styled.div`
display: flex;
flex-direction:column;

width : 100%;

`

const Auto9 =(props)=>{
    const Description_D_L_R = [
        { label: "Au point d'injection", value: "Point_I" },
        { label: "Signes généraux", value: "Signes_généraux" },
        { label: "Infection", value: "Infection"},
        { label: "Neurologiques", value: "Neurologiques"},
        { label: "Digestifs", value: "Digestifs"},
        { label: "Cœur et vaisseaux sanguins", value: "Cœur_et_vaisseaux_sanguins"},
        { label: "Respiratoires", value: "Respiratoires"},
        { label: "Allergiques", value: "Allergiques"},
        { label: "Sphére ORL", value: "Sphere_ORL"},
        { label: "Biologiques", value: "Biologiques"},
        { label: "Musculo-squelettique", value: "Musculo_squelettique"},
        { label: "Ophtalmologiques", value: "Ophtalmologiques"},
        { label: "Autres", value: "Autres"},
      ];
      const Point_I = [
        { label: "Douleurs au point d'injection", value: "Douleurs au point d'injection" },
        { label: "Réactions locales /Rougeur/induration", value: "Réactions locales /Rougeur/induration" },
        { label: "Abcès au point d'injection", value: "Abcès au point d'injection"},
      ];
      const Signes_généraux = [
        { label: "Fièvre > 38,5°C", value: "Fièvre > 38,5°C" },
        { label: "Fatigue", value: "Fatigue" },
        { label: "Douleur articulaire", value: "Douleur articulaire"},
        { label: "Courbature", value: "Courbature"},
        { label: "Frissons", value: "Frissons"},
        { label: "Bouffées de chaleur", value: "Bouffées de chaleur"},
        { label: "Douleur musculaire", value: "Douleur musculaire"},
        { label: "Sueurs", value: "Sueurs"},
        { label: "Perte d'appétit", value: "Perte d'appétit"},
        { label: "Ganglions sous la peau", value: "Ganglions sous la peau"},
        { label: "Malaise", value: "Malaise"},
        { label: "Perte d'equilibre", value: "Perte d'equilibre"},
      ];
      const Infection = [
        { label: "Signes de la grippe", value: "Signes de la grippe" },
      ];
      const Neurologiques = [
        { label: "Vertige", value: "Vertige" },
        { label: "Maux de tete/ migraine ", value: "Maux de tete/ migraine " },
        { label: "Guillain Barré", value: "Guillain Barré" },
        { label: "Faiblesse musculaire", value: "Faiblesse musculaire" },
        { label: "fourmillements", value: "fourmillements" },
        { label: "Convulsion", value: "Convulsion" },
        { label: "Trouble de la conscience/ lipothymie", value: "Trouble de la conscience/ lipothymie" },
        { label: "Douleur radicualire", value: "Douleur radicualire" },
        { label: "Crise de panique", value: "Crise de panique" },
        { label: "Détérioration de la fonction cérébrale", value: "Détérioration de la fonction cérébrale" },
        { label: "Troubles du langage", value: "Troubles du langage" },
        { label: "Diminution de la force musculaire", value: "Diminution de la force musculaire" },
        { label: "Confusion", value: "Confusion" },
        { label: "Troubles du sommeil", value: "Troubles du sommeil" },
        { label: "Paralysie temporaire", value: "Paralysie temporaire" },
        { label: "Maux de tête avec vision double", value: "Maux de tête avec vision double" },
        { label: "Troubles de la sensation thermique", value: "Troubles de la sensation thermique" },
      ];
      const Digestifs = [
        { label: "Nausées", value: "Nausées" },
        { label: "Vomissements", value: "Vomissements" },
        { label: "Diarrhées", value: "Diarrhées" },
        { label: "Douleurs abdominales", value: "Douleurs abdominales" },
        { label: "Gout amère", value: "Gout amère" },
        { label: "Hémorragie digestive", value: "Hémorragie digestive" },
        { label: "Difficultés à avaler", value: "Difficultés à avaler" },
      ];
      const Cœur_et_vaisseaux_sanguins = [
        { label: "Pic hypertensif", value: "Pic hypertensif" },
        { label: "Tachycardie/ Palpitations", value: "Tachycardie/ Palpitations" },
        { label: "Chute de la tension artérielle", value: "Chute de la tension artérielle" },
        { label: "Pincement de la tension artérielle/ déséquilibre tensionel", value: "Pincement de la tension artérielle/ déséquilibre tensionel" },
        { label: "Trouble du rythme cardiaque", value: "Trouble du rythme cardiaque" },
        { label: "Jambes lourdes", value: "Jambes lourdes" },
        { label: "Accident Vasculaire Cérébral", value: "Accident Vasculaire Cérébral" },
        { label: "Saignement", value: "Saignement" },
        { label: "Douleurs thoraciques", value: "Douleurs thoraciques" },
        { label: "Douleurs thoraciques violentes", value: "Douleurs thoraciques violentes" },
        { label: "Embolie pulmonaire", value: "Embolie pulmonaire" },
        { label: "Accident ischemique transitoire", value: "Accident ischemique transitoire" },
      ];
      const Respiratoires = [
        { label: "Toux", value: "Toux" },
        { label: "Dyspnée /Gène respiratoire/oppression thoracique", value: "Dyspnée /Gène respiratoire/oppression thoracique" },
        { label: "Essoufflements", value: "Essoufflements" },
        { label: "Atteintes pulmonaires", value: "Atteintes pulmonaires" },
        { label: "Douleur thoracique", value: "Douleur thoracique" },
        { label: "Crise d'asthme", value: "Crise d'asthme" },
        { label: "Crépitation / OAP", value: "Crépitation / OAP" },
      ];
      const Allergiques = [
        { label: "Urticaire", value: "Urticaire" },
        { label: "Oedeme facial/angio-oedeme/bouffissure du visage", value: "Oedeme facial/angio-oedeme/bouffissure du visage" },
        { label: "Eruption cutanée érythémateuse", value: "Eruption cutanée érythémateuse" },
        { label: "Boutons ou plaques rouges sur la peau", value: "Boutons ou plaques rouges sur la peau" },
        { label: "Réaction allergique/ Gonflement rapide de la peau et des muqueuses au niveau de la tête et du cou", value: "Réaction allergique/ Gonflement rapide de la peau et des muqueuses au niveau de la tête et du cou" },
        { label: "Oedeme des extrémités", value: "Oedeme des extrémités" },
        { label: "Rougeur du visage", value: "Rougeur du visage" },
        { label: "Picotement laryngé", value: "Picotement laryngé" },
      ];
      const Sphere_ORL = [
        { label: "Maux de gorge", value: "Maux de gorge" },
        { label: "Ecoulement nasal/rhinorrhées", value: "Ecoulement nasal/rhinorrhées" },
        { label: "Sécheresse buccale", value: "Sécheresse buccale" },
        { label: "Troubles du sommeil", value: "Troubles du sommeil" },
        { label: "Inflammation de la gorge", value: "Inflammation de la gorge" },
        { label: "Eternuement", value: "Eternuement" },
        { label: "Enrouement", value: "Enrouement" },
        { label: "Rhinite", value: "Rhinite" },
        { label: "Angine", value: "Angine" },
        { label: "Troubles du goût", value: "Troubles du goût" },
        { label: "Saignement nasal", value: "Saignement nasal" },
        { label: "Otalgie / otite", value: "Otalgie / otite" },
      ];
      const Biologiques = [
        { label: "Hypoglycémie", value: "Hypoglycémie" },
        { label: "Hyperglycémie", value: "Hyperglycémie" },
        { label: "Taux élevé des globules blancs", value: "Taux élevé des globules blancs" },
        { label: "Anémie", value: "Anémie" },
        { label: "Marqueurs du foie élevé", value: "Marqueurs du foie élevé" },
        { label: "Diminution du taux des plaquettes sanguin", value: "Diminution du taux des plaquettes sanguin" },
      ];
      const Musculo_squelettique = [
        { label: "Douleur lombaire", value: "Douleur lombaire" },
        { label: "Douleur musculaire", value: "Douleur musculaire" },
        { label: "Douleur du membre superieur  /lourdeur du membre sup/Douleur sous l'aisselle/douleur de l'épaule", value: "Douleur du membre superieur  /lourdeur du membre sup/Douleur sous l'aisselle/douleur de l'épaule" },
        { label: "Douleur dorsale", value: "Douleur dorsale" },

      ];
      const Ophtalmologiques = [
        { label: "Trouble visuel", value: "Trouble visuel" },
        { label: "inflamation de l'oeil", value: "inflamation de l'oeil" },
        { label: "Conjonctivite", value: "Conjonctivite" },
        { label: "Hémorragie sous conjontivale", value: "Hémorragie sous conjontivale" },
      ];
      var {id,formik,onFileChange,values} = props
      var idf = `${id}Description_D_L_R`
  
  const varreturn = (value) => {
  if (value === 'Point_I') {
      return Point_I
  }
  else if (value === 'Signes_généraux')
  {return Signes_généraux}
  else if (value === 'Infection')
  {return Infection}
  else if (value === 'Neurologiques')
  {return Neurologiques}
  else if (value === 'Digestifs')
  {return Digestifs}
  else if (value === 'Cœur_et_vaisseaux_sanguins')
  {return Cœur_et_vaisseaux_sanguins}
  else if (value === 'Respiratoires')
  {return Respiratoires}
  else if (value === 'Allergiques')
  {return Allergiques}
  else if (value === 'Sphere_ORL')
  {return Sphere_ORL}
  else if (value === 'Biologiques')
  {return Biologiques}
  else if (value === 'Musculo_squelettique')
  {return Musculo_squelettique}
  else if (value === 'Ophtalmologiques')
  {return Ophtalmologiques}
  }
  const namereturn = (value) => {
    if (value === 'Point_I') {
    return "Au point d'injection"
    }
    else if (value === 'Signes_généraux')
    {return 'Signes généraux'}
    else if (value === 'Infection')
    {return 'Infection'}
    else if (value === 'Neurologiques')
    {return 'Neurologiques'}
    else if (value === 'Digestifs')
    {return 'Digestifs'}
    else if (value === 'Cœur_et_vaisseaux_sanguins')
    {return 'Cœur et vaisseaux sanguins'}
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
    return(
<FlexBox>
        <Field
        isMulti={true}
             component={SelectField}
             name={idf}
          options={Description_D_L_R}
        />
                {values
          ? 
          values.map((word,key) => {
              return (
                <label htmlFor={word} key={key}>
                  {namereturn(word)}
                  <Field
                  isMulti={true}
                    options={varreturn(word)}
                    component={SelectField}
                    name={`${idf}.${word}`}
                  />
                </label>
              );
            }):

/* formik.values.Description_D_L_R.filter(word.value === 'Point_I')?
<label htmlFor="Point_I">Au point d'injection
        <Field
             component={SelectField}
             name={`Point_I`}
          options={Point_I}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Systemiques')?
<label htmlFor="Systemiques">Systemiques
        <Field
             component={SelectField}
             name={`Systemiques`}
          options={Systemiques}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Infection')?
<label htmlFor="Infection">Infection
        <Field
             component={SelectField}
             name={`Infection`}
          options={Infection}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Neurologiques')?
<label htmlFor="Neurologiques">Neurologiques
        <Field
             component={SelectField}
             name={`Neurologiques`}
          options={Neurologiques}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Digestifs')?
<label htmlFor="Digestifs">Digestifs
        <Field
             component={SelectField}
             name={`Digestifs`}
          options={Digestifs}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Cœur_et_vaisseaux_sanguins')?
<label htmlFor="Cœur_et_vaisseaux_sanguins">Cœur_et_vaisseaux_sanguins
        <Field
             component={SelectField}
             name={`Cœur_et_vaisseaux_sanguins`}
          options={Cœur_et_vaisseaux_sanguins}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Respiratoires')?
<label htmlFor="Respiratoires">Respiratoires
        <Field
             component={SelectField}
             name={`Respiratoires`}
          options={Respiratoires}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Allergiques')?
<label htmlFor="Allergiques">Allergiques
        <Field
             component={SelectField}
             name={`Allergiques`}
          options={Allergiques}
        />
                {formik.values.Allergiques.filter(word.value === 'Réaction allergique/ anaphylactique/ oedeme de quinck ')?
        <InputCheck name=":" 
id="Reaction_A_A_O"
checkContent={[">3jours","au-delà de l'articulation la plus proche"]} 
formik={formik}
 />:null}
        </label>:
        formik.values.Description_D_L_R.filter(word.value === 'Sphere_ORL')?
<label htmlFor="Sphere_ORL">Sphere_ORL
        <Field
             component={SelectField}
             name={`Sphere_ORL`}
          options={Sphere_ORL}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Biologiques')?
<label htmlFor="Biologiques">Biologiques
        <Field
             component={SelectField}
             name={`Biologiques`}
          options={Biologiques}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Musculo_squelettique')?
<label htmlFor="Musculo_squelettique">Musculo_squelettique
        <Field
             component={SelectField}
             name={`Musculo_squelettique`}
          options={Musculo_squelettique}
        /></label>:
        formik.values.Description_D_L_R.filter(word.value === 'Ophtalmologiques') ?
<label htmlFor="Ophtalmologiques">Ophtalmologiques
        <Field
             component={SelectField}
             name={`Ophtalmologiques`}
          options={Ophtalmologiques}
        /></label> */null}
</FlexBox>
    )
}

export default Auto9;