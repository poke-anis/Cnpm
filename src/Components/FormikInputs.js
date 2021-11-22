import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import styled from 'styled-components'

const Inputstyled = styled(Field)`
margin:5px;
`

const Box = styled.div`
display: flex;
flex-direction: column;
`

const InputText =(props) =>{
    const {name,formik,id} = props
    return (
        <Box>
            <label htmlFor={id}>{name}</label>
            <Inputstyled
            
            name={id}
            type="text"
            onChange={formik.handleChange}
        />
        </Box>
        )
}

const InputNumber =(props) =>{
    const {name,formik,id} = props
    return (
        <Box>
            <label htmlFor={id}>{name}</label>
            <Inputstyled
            
            name={id}
            type="number"
            onChange={formik.handleChange}
        />
        </Box>
        )
}

const InputCheck =(props) =>{
    const {name,formik,checkContent,id} = props

    return (
        <Box>
            <label htmlFor={`${id}`} >{name}
            
                {checkContent.map((content,index) =>{
                return(
                    <div key={index}>
              <Inputstyled
                name={`${id}`}
                id={`${id}`}
                key={index}
                type="checkbox"
                onChange={formik.handleChange}
                value={`${content}`}
            />{content} 
            </div>
            )
})}
</label>
</Box> 
        
    )
}


const InputRadio = (props) => {
  const { name, formik, id, radioContent, Sexe } = props;

  return (
    <Box>
      <label htmlFor={`${id}`}>
        {name}
        {radioContent.map((content, index) => {
          return (
            <div key={index}>
              <Inputstyled
                id={`${id}`}
                name={`${id}`}
                type="radio"
                value={`${content}`}
                onChange={formik.handleChange}
              />
              {`${content}`}
            </div>
          );
        })}

        {formik.values[id] === "Autre" ? (
          <label htmlFor={id}>
            {`Autre ${name}`}
            <Inputstyled
              id={`${id}Autre`}
              name={`${id}Autre`}
              type="text"
              onChange={formik.handleChange}
            />
          </label>
        ) : null}
        {formik.values[id] === "Feminin" ? (
          <InputRadio
            name="Enceinte :"
            id="Enceinte"
            radioContent={["Oui", "Non"]}
            formik={formik}
          />
        ) : null}
        {formik.values["Enceinte"] === "Oui" && id === "Enceinte" ? (
          <InputDate
            name="Dernière date des règles :"
            id="Derniere_D_R"
            formik={formik}
          />
        ) : (
          console.log(formik.values.id)
        )}
        {formik.values[id] === "Décès" ? (
          <InputDate name="Date de décès :" id="Date_D_D" formik={formik} />
        ) : null}
        {formik.values[id] === "Oui" && id === 'Fabriquant_I_P'? (
          <InputDate name="Quand ?:" id="Quand" formik={formik} />
        ) : null}

      </label>
    </Box>
  );
};

const InputDate = (props) => {
  const { name, formik, id } = props;
  return (
    <Box>
      <label htmlFor={id}>{name}</label>
      <Inputstyled
        
        name={id}
        type="date"
        onChange={formik.handleChange}
      />
    </Box>
  );
};

const InputSelect = (props) => {
  const { name, formik, id, options } = props;
  console.log(formik.values.id)
  return (
    <Box>
      <label htmlFor={`${id}`}>
        {name}
        <select onChange={formik.handleChange} id={id}>
          {options.map((content, index) => {
            return (
              <option name={`${content}`} value={`${content}`} key={index}>
                {`${content}`}
              </option>
            );
          })}
        </select>
        {
        formik.values[id] === "Autre" ? (
          <label htmlFor={id}>
            {`Autre ${name}`}
            <Inputstyled
              id={`${id}Autre`}
              name={`${id}Autre`}
              type="text"
              onChange={formik.handleChange}
            />
          </label>
        ) : (
          null
        )}
        
        {formik.values.Type_I ? (
          <InputText
            name={`${formik.values.Type_I}`}
            id={`${formik.values.Type_I}`}
            formik={formik}
          />
        ) : null}
      </label>
    </Box>
  );
};



const InputFile = (props) => {
  const { name, formik, id } = props;
  return (
    <Box>
      <label htmlFor={id}>{name}</label>
      <Inputstyled
        type="file"
        name={id}
        onChange={(event) => {
          formik.setFieldValue({id}, event.target.files[0]);
        }}
      />
    </Box>
  );
};






export {
    InputText,
    InputNumber,
    InputCheck,
    InputRadio,
    InputDate,
    InputSelect,
    InputFile,
}



