import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import {
    Form,
  Row,
  Col,
} from "react-bootstrap";
import { InputText,InputCheck,InputNumber,InputRadio,InputSelect } from './Declarations/FormikInputs';
import styled from 'styled-components'
import axiosConfig from "./axios"
import cookie ,{ useCookies } from 'react-cookie'

var User = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
max-width:100%;
`
const Box = styled.div`
display: flex;
flex-direction: column;
width : 45%;
`
const BigBox = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
width : 49%;
border: 2px solid #dee2e6;

`
const Titre = styled.h1`
text-align: center;
border: 3px black solid;

padding:5px;
width:100%;
`
const Inputstyled = styled(Field)`
margin:5px;
`
const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
width : 100%;

`
const Notificateur = () =>{
  const [cookies, setCookie, removeCookie] = useCookies('token_key');

  const [infos, setInfos] = useState()
  const id = cookies['id']
  useEffect(() => {

    axiosConfig.get(`infos/${id}`)
      .then(function (res) {
 
        setInfos(res.data)
      })
  }
    , []);


return(
<User>
    <Titre style={{width:'50%'}}>
    Information du Notificateur
    </Titre>
    {infos ?   
      <Form className="container-fluid" style={{width:'60%'}}>
  <Form.Group as={Row}  controlId="Nom" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
    Nom
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Nom} />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  controlId="Prenom" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
      Prenom
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Prenom} />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  controlId="Telephone" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
      Telephone
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Telephone} />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  controlId="Email" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
      Email
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Email} />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  controlId="Profession" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
      Profession
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Profession} />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  controlId="Type d’exercice" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
    Type d’exercice 
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Type_Execrice} />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  controlId="Adresse Professionnelle" style={{padding:'10px 5px'}}>
    <Form.Label column sm="2" lg="3">
      Adresse Professionnelle
    </Form.Label>
    <Col sm="9">
      <Form.Control  readOnly defaultValue={infos.Adresse_Professionnelle} />
    </Col>
  </Form.Group>
  </Form>
:null}
</User>
)

}


export default Notificateur;