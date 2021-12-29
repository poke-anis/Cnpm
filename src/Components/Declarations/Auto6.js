import React from 'react'
import {Field} from 'formik';

import styled from 'styled-components'

import SelectField from './React-select'

const FlexBox = styled.div`
display: flex;
flex-direction:column;

width : 100%;

`

const Auto6 =(props)=>{
    const Evolution = [
        { label: "Guérison", value: "Guérison" },
        { label: "Sujet non encore rétabli", value: "Sujet non encore rétabli" },
        { label: "Décès", value: "Décès"},
        { label: "Inconnue", value: "Inconnue"},
      ];
      const Guérison = [
        { label: "En cours", value: "En cours" },
        { label: "Sans séquelles", value: "Sans séquelles" },
        { label: "Avec séquelles", value: "Avec séquelles"},
      ];
      const Décès = [
        { label: "dû à l'effet ", value: "dû à l'effet " },
        { label: "auquel l'effet a pu y contribuer", value: "auquel l'effet a pu y contribuer" },
        { label: "sans rapport avec l'effet", value: "sans rapport avec l'effet" },

      ];
      var {id,formik,onFileChange,values} = props
      var idf = `${id}Evolution`
  
  const varreturn = (value) => {
  if (value === 'Guérison')
  {return Guérison}
  else if (value === 'Décès')
  {return Décès}
}
  
    return(
<FlexBox>
        <Field
             component={SelectField}
             name={`Evolution`}
          options={Evolution}
        />
        {values
          ? 
          values.map((word,key) => {

              return (
                <label htmlFor={word} key={key}>
                  {word}
                  <Field
                    options={varreturn(word)}
                    component={SelectField}
                    name={`${idf}.${word}`}
                  />
                </label>
              );
            }):

/* formik.values.Evolution.filter(word.value === 'Guérison')?
<label htmlFor="Guérison">Guérison
        <Field
             component={SelectField}
             name={`Guérison`}
          options={Guérison}
        /></label>:
        formik.values.Evolution.filter(word.value === 'Décès')?
<label htmlFor="Décès">Décès
        <Field
             component={SelectField}
             name={`Décès`}
          options={Décès}
        /></label> */null}
</FlexBox>
    )
}

export default Auto6;