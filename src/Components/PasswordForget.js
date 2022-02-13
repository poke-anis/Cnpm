import { useState } from "react";

import {   
  Form,Button } from 'react-bootstrap'
import styled from 'styled-components'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useCookies } from 'react-cookie'
import axiosConfig from "./axios"
import swal from "sweetalert";

var AuthBox = styled.div`
flex-grow : 1;
text-align: left;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`



function Passwordreset(props) 
{


  let submitForm = (values, history) => {
    axiosConfig
      .post("/forgotPassword", values)
      .then(res => {
        if (res.data.result === "success") {
          swal("Success!", res.data.message, "success").then(value => {
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {

        return swal("Error!", error.message, "error");
      });
  };

return (
  <AuthBox>
    <Formik
      initialValues={{ Email: "" }}
      validationSchema={Yup.object({
        Email: Yup.string().required("Nom d'utilisateur invalide"),
      })}
      onSubmit={(values, { setSubmitting }) => {

        submitForm(values);
        setSubmitting(false);
      }}
    >
    
      {({
        handleSubmit,
        handleChange,
        values,

      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Adresse E-mail</label>
            <Form.Control
            name="Email"
              type="text"
              
              value={values.Email}
              onChange={handleChange}
            />
          </Form.Group>


          <Button variant="primary" type="submit">
            Entrer
          </Button>
        </Form>
      )}
    </Formik>
  </AuthBox>
);
}

export default Passwordreset;