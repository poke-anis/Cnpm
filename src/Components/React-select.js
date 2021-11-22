import Select from 'react-select';
import { useField } from 'formik';
import CreatableSelect , { useCreatable } from 'react-select/creatable';
export default function SelectField(props) {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);
  const onChange = (value) => {
    console.log(value)
    setValue(value);
  };

  return <CreatableSelect {...props}  onChange={onChange}  isMulti isClearable/>;
}