import Select from 'react-select';
import { useField } from 'formik';
import React, { useState, useEffect } from 'react'

import CreatableSelect , { useCreatable } from 'react-select/creatable';

export default function SelectField(props) {
  const [selectedValue, setSelectedValue] = useState();
 
  const [field, state, { setValue, setTouched }] = useField(props.field.name);
  
  const onChange = (value) => {

/*     value.forEach(el=>{ setValue([...value,el.value])}) */

setValue(value)

  };

  return <CreatableSelect 
/*   value={ typeof field.value.value  !== "undefined" ? 
    props.options.find(
    (obj ,index) => obj.value === props.field.value[index].value):null} */
  
 {...props}  onChange={onChange}  isMulti isClearable/>;
}
