import { Field,FastField } from 'formik';
import styled from 'styled-components'
import {
  Form, Button, InputGroup } from "react-bootstrap";
import { MdAddAPhoto } from "react-icons/md";

const Inputstyled = styled(Field)`
margin:5px;
`

const Box = styled.div`
display: flex;
flex-direction: column;
`

const InputText =(props) =>{

    const {name,formik,id,maxlength} = props
    return (
        <Box>

<Form.Group  md="4" controlId="validationCustom01">
<Form.Label>{name}</Form.Label>
    <Form.Control maxlength={maxlength} required name={id} as={FastField} type="text"  onChange={formik.handleChange}/>

    </Form.Group>
        </Box>
        )
}

const InputNumber =(props) =>{

    const {name,formik,id} = props
    return (
        <Box>
    <label>{name}</label>
    <Form.Control  name={id} as={Field} type="number"  onChange={formik.handleChange}/>
        </Box>
        )
}

const InputCheck =(props) =>{
    const {name,formik,checkContent,id} = props

    return (
        <Box>
            <label>{name}
            
                {checkContent.map((content,index) =>{
                return(
                    <div key={index}>
<Form.Check  id={`${id}`} label={`${content}`} name={`${id}`} key={index} as={Field} type="checkbox" value={`${content}`} onChange={formik.handleChange}/>



    
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
<Form.Check  id={`${id}`} label={`${content}`} name={`${id}`} key={index} as={Field} type="radio" value={`${content}`} onChange={formik.handleChange}/>



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
                {formik.values[id] === "Oui" && id === 'Prise_C_M'? (
          <InputText name="Lequel ?:" id="Lequel" formik={formik} />
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
        ) : null}
        {formik.values[id] === "Décès" ? (
          <InputDate name="Date de décès :" id="Date_D_D" formik={formik} />
        ) : null}
                {formik.values[id] === "Décès" ? (
          <InputSelect name="Autopsie effectuée:" id="Autopsie_E" options={["","Oui", "Non", "Inconnu"]}
          formik={formik} />
        ) : null}
                {formik.values["Sequelles"] === "Oui" && id === "Sequelles" ? (
          <InputText name="Types de séquelle :" id="Types_D_S"
          formik={formik} />
        ) : null}
        {formik.values[id] === "Oui" && id === 'Fabriquant_I_P'? (
          <InputDate name="Quand ?:" id="Date_Fabriquant_I_P" formik={formik} />
        ) : null}

      </label>
    </Box>
  );
};

const InputDate = (props) => {

  const { name, formik, id } = props;
  return (
    <Box>

      <label>{name}</label>
    <Form.Control  name={id} as={Field} type="date" placeholder={id} onChange={formik.handleChange}/>
    </Box>
  );
};

const InputSelect = (props) => {
  const { name, formik, id, options } = props;

  return (
    <Box>
      <label htmlFor={`${id}`}>
        {name}
        <Form.Select onChange={formik.handleChange} id={id}>
          {options.map((content, index) => {
            return (
              <option name={`${content}`} value={`${content}`} key={index}>
                {`${content}`}
              </option>
            );
          })}
        </Form.Select>
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

  const { name, formik, id ,onFileChange} = props;
  return (
    <Box>
       <label>{name}
       {/* <Button  >  
    <MdAddAPhoto style={{height:"20px",width:'20px'}}/></Button> */}
    <Form.Control   name={id} id={id} type="file" onChange={onFileChange} />

    </label>
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



