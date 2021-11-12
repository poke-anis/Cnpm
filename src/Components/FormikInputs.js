import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import styled from 'styled-components'

const Inputstyled = styled(Field)`
margin:5px;
`

const Box = styled.div`
display: flex;
flex-direction: column;
width : 50%;
`

const InputText =(props) =>{
    const {name,formik,id} = props
    return (
        <Box>
            <label htmlFor={id}>{name}</label>
            <Inputstyled
            id={id}
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
            id={id}
            name={id}
            type="number"
            onChange={formik.handleChange}
        />
        </Box>
        )
}

const InputCheck =(props) =>{
    const {name,formik,checkContent,id} = props
    console.log(checkContent)
    return (
        
            <label htmlFor={`${id}`} >{name}
            
                {checkContent.map((content,index) =>{
                return(
                    <div>
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
        
        
    )
}


const InputRadio =(props) =>{
    const {name,formik,id,radioContent} = props
    return (
        
            <label htmlFor={`${id}`}>{name}
            {radioContent.map((content,index) =>{
                return(
                    <div>
            <Inputstyled
            id={`${id}`}
            name={`${id}`}
            type="radio"
            value={`${content}`}
            onChange={formik.handleChange}
            />{`${content}`}
                        </div>

            )
        })}
        </label>
        )
}

export {
    InputText,
    InputNumber,
    InputCheck,
    InputRadio,
}



