import React, { useState, useEffect, useContext, createContext } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import swal from "sweetalert";
import cookie from "react-cookies";
import axios from "axios";
var AuthBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 50px;
`;
const Box = styled.div`
display: flex;
flex-direction: column;
width : 45%;
`
const BigBox = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
width : 40%;
padding : 5px;

`
const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
width : 100%;

`

const userContext = createContext({ token: null });
function Register(props) {
  function submitForm(values, history) {
    axios
      .post("http://192.168.43.156:9000/register", values)
      .then((res) => {
        console.log(res);
        if (res.data.result === "success") {
          localStorage.setItem("token_key", res.data.token);
          swal("Success!", res.data.message, "success").then((value) => {
            history.push("/");
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch((error) => {
        console.log(error);
        return swal("Error!", error.message, "error");
      });
  }
  return (
    <AuthBox>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
          Email: "",
          Nom: "",
          Prenom: "",
          Proffesion: "",
          Telephone: "",
          Adresse_Professionnelle: "",
          Type_Execrice:"",
          CPassword:"",
          Specifier:"",
        }}
        validationSchema={Yup.object({
          Email: Yup.string().email("Invalid email address").required("Required"),
          Password: Yup.string().required("Le mot de passe est requis"),
          Email: Yup.string().required("Le nom d'utilisateur est requis"),
          Proffesion: Yup.string().matches(/[^(Autre)]/,"La proffesion est requise").required("La proffesion est requise"),
          Specifier: Yup.string().required("La proffesion est requise"),
          Nom: Yup.string().required("Le nom est requis"),
          Prenom: Yup.string().required("Le Prenom  est requis"),
          Type_Execrice: Yup.string().required("Le Type d'execrice est requis"),
          Telephone: Yup.number().required("Le numero de Telephone est requis"),
          Adresse_Professionnelle: Yup.string().required("L'Adresse Professionnelle est requise"),
          CPassword: Yup.string().oneOf([Yup.ref("Password"), null],"Les mots de passe ne correspondent pas"),
        })}
        onSubmit={(values, { setSubmitting }) => {

          console.log(values);
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
            <Form onSubmit={handleSubmit}>
              <FlexBox>
              <BigBox>
              <Form.Group md="4" controlId="validationFormik01">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="Nom"
                  value={values.Nom}
                  onChange={handleChange}
                  isValid={touched.Nom && !errors.Nom}
                />
              </Form.Group>
              <Form.Group md="4" controlId="validationFormik02">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="Prenom"
                  value={values.Prenom}
                  onChange={handleChange}
                  isInvalid={!!errors.Prenom}
                  isValid={touched.Prenom && !errors.Prenom}
                />

              </Form.Group>
              <Form.Group md="4" controlId="validationFormik02">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="text"
                  name="Telephone"
                  value={values.Telephone}
                  onChange={handleChange}
                  isInvalid={!!errors.Telephone}
                  isValid={touched.Telephone && !errors.Telephone}
                />

              </Form.Group>


              <Form.Group md="6" controlId="validationFormik03">
                <Form.Label>Proffesion</Form.Label>
                <Form.Select aria-label="Default select example"
                  isInvalid={!!errors.Proffesion}
                  isValid={touched.Proffesion && !errors.Proffesion}
                  name="Proffesion"
                  value={values.Proffesion}
                  onChange={handleChange} >
  <option></option>
  <option value="Médecin">Médecin</option>
  <option value="Pharmacien">Pharmacien</option>
  <option value="Dentiste">Dentiste</option>
  <option value="Paramedical">Paramedical</option>
  <option value="Sage femme">Sage femme</option>
  <option value="Autre">Autre</option>
</Form.Select>
{values.Proffesion === "Autre"?
              <Form.Group md="4" controlId="validationFormik02">
              <Form.Label>Spécifier</Form.Label>
              <Form.Control
                type="text"
                name="Specifier"
                value={values.Specifier}
                onChange={handleChange}
                isInvalid={!!errors.Specifier}
                isValid={touched.Specifier && !errors.Specifier}
              />

            </Form.Group>:null}
                <Form.Control.Feedback type="invalid">
                  {errors.Proffesion || errors.Specifier}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationFormik04">
                <Form.Label>Type d'Execrice</Form.Label>

<Form.Select aria-label="Default select example"
                  isInvalid={!!errors.Type_Execrice}
                  isValid={touched.Type_Execrice && !errors.Type_Execrice}
                  name="Type_Execrice"
                  value={values.Type_Execrice}
                  onChange={handleChange} >
  <option></option>
  <option value="Public">Public</option>
  <option value="Privé">Privé</option>
</Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.Type_Execrice}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationFormik05">
                <Form.Label>Adresse Professionnelle</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adresse_Professionnelle"
                  name="Adresse_Professionnelle"
                  value={values.Adresse_Professionnelle}
                  onChange={handleChange}
                  isInvalid={!!errors.Adresse_Professionnelle}
                  isValid={
                    touched.Adresse_Professionnelle &&
                    !errors.Adresse_Professionnelle
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {errors.Adresse_Professionnelle}
                </Form.Control.Feedback>
              </Form.Group>
              </BigBox>
              <BigBox>
                
              <Form.Group md="4" controlId="validationFormikUsername">
                <Form.Label>E-mail</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    isInvalid={errors.Email}
                    isValid={touched.Email && !errors.Email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group md="3" controlId="validationFormik05">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mot de passe"
                  name="Password"
                  value={values.Password}
                  onChange={handleChange}
                  isInvalid={!!errors.Password}
                  isValid={
                    touched.Password &&
                    !errors.Password
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {errors.Password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationFormik05">
                <Form.Label>Confirmer le mot de passe</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Confirmer le Mot de passe"
                  name="CPassword"
                  value={values.CPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.CPassword}
                  isValid={
                    touched.CPassword &&
                    !errors.CPassword
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {errors.CPassword}
                </Form.Control.Feedback>
              </Form.Group>
              </BigBox>
              </FlexBox>
              <Button type="submit">Confirmer</Button>
            </Form>
          </div>
        )}
      </Formik>
    </AuthBox>
  );
}

export default Register;
