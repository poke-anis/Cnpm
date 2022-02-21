import { useState } from "react";

import {   
  Form,Button } from 'react-bootstrap'
import styled from 'styled-components'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useCookies } from 'react-cookie'
import axiosConfig from "./axios"
import Swal from "sweetalert2";

var AuthBox = styled.div`
flex-grow : 1;
text-align: left;
display:flex;

`



function Passwordreset(props) 
{


  let submitForm = (values, history) => {
    Swal.fire({
      title: "Chargement",
      heightAuto: false,
      showSpinner: true,
    })
      .then(Swal.showLoading())
      .then(
    axiosConfig
      .post("/forgotPassword", values)
      .then(res => {
        if (res.data.result === "success") {
          Swal.fire(
            {
              title: "Success!",
              text: res.data.message,
              heightAuto: false,
              icon: 'success',
            })
        } else if (res.data.result === "error") {
          Swal.fire(            {
            title: "Error!",
            text: res.data.message,
            heightAuto: false,
            icon: 'error',
          }) 
        }
      })
      .catch(error => {

        return Swal.fire("Error!", error.message, "error");
      })
      );
  };

return (
  <AuthBox>
    <div style={{width:"30%",height:"100%",borderRight: "1px solid #d8d8d8",paddingLeft:"4%",paddingRight:"4%",paddingTop:"2%"}}>
    <p>Inserrez votre adresse mail, vous recevrez par la suite un email contenant votre lien de réinitialisation du mot de passe.</p>
    </div>
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
        <Form onSubmit={handleSubmit} style={{paddingLeft:"5%",paddingTop:"2%"}}>
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