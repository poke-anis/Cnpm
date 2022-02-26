import React from 'react'
import {Field} from 'formik';

import styled from 'styled-components'

import SelectField from './React-select'

const FlexBox = styled.div`
display: flex;
flex-direction:column;

width : 100%;

`

const Auto10 =(props)=>{
    const Type_Evolution = [
        { label: "Guérison", value: "Guérison" },
        { label: "Sujet non encore rétabli", value: "Sujet non encore rétabli" },
        { label: "Décès", value: "Décès en relation avec la prise du médicament"},
        { label: "Inconnue", value: "Inconnue"},
      ];
      const Guérison = [
        { label: "En cours", value: "En cours" },
        { label: "Sans séquelles", value: "Sans séquelles" },
        { label: "Avec séquelles", value: "Avec séquelles"},
      ];
      const Décès = [
        { label: "Oui", value: "Oui" },
        { label: "Non", value: "Non" },
        { label: "Inconnue", value: "Inconnue" },

      ];
      var {id,values} = props
      var idf = `${id}Type_Evolution`
      var idf2 = `${id}Description_Evolution`
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
             name={`Type_Evolution`}
          options={Type_Evolution}
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
                    name={`${idf2}`}
                  />
                </label>
              );
            }):null}
</FlexBox>
    )
}

export default Auto10;