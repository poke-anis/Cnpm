import React, { useState, useEffect,useContext,createContext } from 'react'
import { Form,Button } from 'react-bootstrap'
import styled from 'styled-components'
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import swal from "sweetalert";
import cookie from 'react-cookies'
import axios from "axios"
var AuthBox = styled.div`
grid-column-start:2;
grid-column-end:3;
grid-row-start:3;
grid-row-end:4;
text-align: left;
display:flex;
flex-direction:column;
justify-content:space-around;
padding-top:100px;
`


const userContext = createContext({token:null});
function Authentication() 
{

  const { isloged, setIsloged } = useContext(userContext)
  function onLogin(token) {
    cookie.save('token_key', token, { path: '/' })
    setIsloged({ token: cookie.load('token_key') })
  };
  let submitForm = (values, history) => {
    axios
      .post("http://192.168.1.38:3001/login", values)
      .then(res => {
        console.log(res)
        if (res.data.result === "success") {
          onLogin(res.data.token)
          swal("Success!", res.data.message, "success").then(value => {
            history.push("/");
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        console.log(error);
        return swal("Error!", error.message, "error");
      });
  };

return (
    <AuthBox>
        <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        submitForm(values,);
        setSubmitting(false);
      }}
    >
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Identifiant</Form.Label>
    <Form.Control type="email" placeholder="Identifiant" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Mot de passe" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Rester connecté" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Entrer
  </Button>
</Form>
</Formik>

</AuthBox>
    )
}

export default Authentication;