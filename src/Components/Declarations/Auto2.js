import React from 'react'
import { Field} from 'formik';

import styled from 'styled-components'
import SelectField from './React-select'
const FlexBox = styled.div`
display: flex;
flex-direction:column;

width : 100%;

`

const Auto2 =(props)=>{
    const Type_Voie_A = [
        { label: "Orale", value: "Orale" },
        { label: "Intraveineuse", value: "Intraveineuse" },
        { label: "Intramusculaire", value: "Intramusculaire"},
        { label: "Sous-cutanée", value: "Sous-cutanée"},
        { label: "Cutanée", value: "Cutanee"},
        { label: "Rectale", value: "Rectale"},
        { label: "Inhalation", value: "Inhalation"},
        { label: "Nasal", value: "Nasal"},
        { label: "Oculaire", value: "Oculaire"},
        { label: "Auriculaire", value: "Auriculaire"},
        { label: "Vaginale", value: "Vaginale"},

      ];
      const Orale = [
        { label: "Avaler", value: "Avaler" },
        { label: "Croquer", value: "Croquer" },
        { label: "Sublinguale", value: "Sublinguale"},
      ];
      const Intraveineuse = [
        { label: "Directe", value: "Directe" },
        { label: "Lente", value: "Lente" },

      ];
      const Cutanee = [
        { label: "Patch", value: "Patch" },
        { label: "Pommade", value: "Pommade" },
        { label: "Crème", value: "Crème" },
        { label: "Transdermique", value: "Transdermique" },
        { label: "Intradermique", value: "Intradermique" },
      ];
      var {id,formik,onFileChange,values} = props
      var idf = `${id}Type_Voie_A`
      var idf2 = `${id}Description_Voie_A`
  const varreturn = (value) => {
  if (value === 'Orale') {
      return Orale
  }
  else if (value === 'Intraveineuse')
  {return Intraveineuse}
  else if (value === 'Cutanee')
  {return Cutanee}
  }

    return(
<FlexBox>
        <Field
        isMulti={false}
             component={SelectField}
             name={idf}
          options={Type_Voie_A}
        />
        {values
          ? 
          values.map((word,key) => {

              return (
                <label htmlFor={word} key={key}>
                  {word}
                  <Field
                  isMulti={false}
                    options={varreturn(word)}
                    component={SelectField}
                    name={`${idf2}`}
                  />
                </label>
              );
            }):



 /*        {formik.values.Voie_A ?
        formik.values.Voie_A.filter((word)=>word.value === 'Orale')?
<label htmlFor="Orale">Orale
        <Field
             component={SelectField}
             name={`Orale`}
          options={Orale}
        /></label>:
        formik.values.Voie_A.filter((word)=>word.value === 'Intraveineuse')?
<label htmlFor="Intraveineuse">Intraveineuse
        <Field
             component={SelectField}
             name={`Intraveineuse`}
          options={Intraveineuse}
        /></label>:
        formik.values.Voie_A.filter((word)=>word.value === 'Cutanee')?
<label htmlFor="Cutanee">Au point d'injection
        <Field
             component={SelectField}
             name={`Cutanee`}
          options={Cutanee}
        /></label>:null */
        null}
</FlexBox>
    )
}

export default Auto2;