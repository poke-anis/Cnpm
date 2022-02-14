import { useState } from "react";

import {   
  Form,Button } from 'react-bootstrap'
import styled from 'styled-components'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useCookies } from 'react-cookie'
import axiosConfig from "./axios"
import swal from "sweetalert";
import { useParams } from "react-router-dom";

var AuthBox = styled.div`
flex-grow : 1;
text-align: left;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`



function PasswordChange(props) 
{
  const navigate = props.useNavigate()
const {useParams}= props
const token = useParams()
  let submitForm = (values, history) => {
    axiosConfig
      .post(`/reset?resetPasswordToken=${token.token}`, values)
      .then(res => {
        if (res.data.result === "success") {
          swal("Success!", res.data.message, "success").then(value => {
            navigate("/Seconnecter")
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
      initialValues={{ Password: "",CPassword:"" }}
      validationSchema={Yup.object({
        Password: Yup.string().required("Le mot de passe est requis"),
        CPassword: Yup.string().oneOf(
          [Yup.ref("Password"), null],
          "Les mots de passe ne correspondent pas"
        ),
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <label>Nouveau mot de passe</label>
            <Form.Control
            name="Password"
              type="Password"
              placeholder="Identifiant"
              value={values.Password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCPassword">
            <label>Confirmer le mot de passe</label>
            <Form.Control
            name="CPassword"
              type="Password"
              placeholder="Identifiant"
              value={values.CPassword}
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

export default PasswordChange;