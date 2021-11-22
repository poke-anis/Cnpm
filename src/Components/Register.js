import React, { useState, useEffect,useContext,createContext } from 'react'
import { Form,Button,InputGroup } from 'react-bootstrap'
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
function Register(props) 
{
    function submitForm(values, history) {
        axios
          .post("http://192.168.43.156:9000/register", values)
          .then(res => {
            console.log(res)
            if (res.data.result === "success") {
              localStorage.setItem("token_key", res.data.token);
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
      initialValues={{
        Email: "",
        Password: "",
        Nom_Utilisateur: "",
        Nom: "",
        Prenom: "",
        Proffesion: "",
        Telephone: "",
        Adresse_Professionnelle: "",
      }}
      validationSchema={Yup.object({
        Email: Yup.string().email("Invalid email address").required("Required"),
        Password: Yup.string().required("Le mot de passe est requis"),
        Nom_Utilisateur: Yup.string().required("Le nom d'utilisateur est requis"),
        Proffesion: Yup.string().required("La proffesion est requise"),
        Nom: Yup.string().required("Le nom est requis"),
        Prenom: Yup.string().required("Le Prenom  est requis"),
        Telephone: Yup.string().required("Le numero de Telephone est requis"),
        Type_Execrice: Yup.string().required("Type d'execrice est requis"),
        Adresse_Professionnelle: Yup.string().required(
          "L'Adresse_Professionnelle est requise"
        ),
        Cpassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Both password need to be the same"
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          submitForm(values, props.history);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <div className="login">
          <Form  onSubmit={handleSubmit}>
            <Form.Group md="4" controlId="validationFormik01">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="Nom"
                value={values.Nom}
                onChange={handleChange}
                isValid={touched.Nom && !errors.Nom}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  md="4" controlId="validationFormik02">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="Prenom"
                value={values.Prenom}
                onChange={handleChange}
                isInvalid={!!errors.Prenom}
                isValid={touched.Prenom && !errors.Prenom}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationFormikUsername">
              <Form.Label>Nom d'Utilisateur</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nom_Utilisateur"
                  aria-describedby="inputGroupPrepend"
                  name="Nom_Utilisateur"
                  value={values.Nom_Utilisateur}
                  onChange={handleChange}
                  isInvalid={!!errors.Nom_Utilisateur}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.Nom_Utilisateur}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group md="6" controlId="validationFormik03">
              <Form.Label>Proffesion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Proffesion"
                name="Proffesion"
                value={values.Proffesion}
                onChange={handleChange}
                isInvalid={!!errors.Proffesion}
              />

              <Form.Control.Feedback type="invalid">
                {errors.Proffesion}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      )}
    </Formik>
  </AuthBox>
);
}

export default Register;