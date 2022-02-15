import React, { useState, useEffect, useContext, createContext } from "react";

import { Form, Button, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, useField,FormikProvider } from "formik";
import swal from "sweetalert";

import axiosConfig from "./axios";
import { InputRadio } from "./Declarations/FormikInputs";

var AuthBox = styled.div`
flex-grow : 1;

display:flex;



`

const BigBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 5px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;
const FlexBox2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
  padding: 5px;
`;

const userContext = createContext({ token: null });


const Pro = (props) =>{
  return (
    <Formik
    initialValues={{
      Email: "",
      Password: "",
      Email: "",
      Username: "",
      Nom: "",
      Prenom: "",
      Profession: "",
      Telephone: "",
      Adresse_Professionnelle: "",
      Type_Exercice: "",
      CPassword: "",
      Specifier: "",
      Espace:"Professionnel",
    }}
    validationSchema={
      Yup.object({
        Nom: Yup.string().required("Le nom est requis"),
        Prenom: Yup.string().required("Le Prenom  est requis"),
      Telephone: Yup.number().required( "Le numero de Telephone est requis"),
      Profession: Yup.string().required("La Profession est requise"),
       Specifier: Yup.string().when('Profession', {
         is: "Autre",
         then: Yup.string()
         .required('La Profession est requise'),
         otherwise: Yup.string(),
      }),
      Username: Yup.string().required("La nom d'utilisateur est requis"),
       Email: Yup.string().email("Invalid email address").required("Required"),
       Password: Yup.string().required("Le mot de passe est requis"),
      
      Type_Exercice: Yup.string().required( "Le Type d'execrice est requis"),
      Adresse_Professionnelle: Yup.string().required("L'Adresse Professionnelle est requise"),
      CPassword: Yup.string().oneOf(  [Yup.ref("Password"), null],"Les mots de passe ne correspondent pas"),
    })}
    onSubmit={(values,{ setSubmitting }) => {
      setTimeout(() => {
        props.submitForm(values);
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
    
    }) => 
    (
      
      <div style={{width:"70%"}}>
        <Form onSubmit={handleSubmit}>
          <FlexBox>
            <BigBox>
              <Form.Group md="4" controlId="Nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="Nom"
                  value={values.Nom}
                  onChange={handleChange}
                  isInvalid={!!errors.Nom}
                  isValid={touched.Nom && !errors.Nom}
                />
              </Form.Group>
              <Form.Group md="4" controlId="Prénom">
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
              <Form.Group md="4" controlId="Telephone">
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

              <Form.Group md="6" controlId="Profession">
                <Form.Label>Profession</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  isInvalid={!!errors.Profession}
                  isValid={touched.Profession && !errors.Profession}
                  name="Profession"
                  value={values.Profession}
                  onChange={handleChange}
                >
                  <option></option>
                  <option value="Médecin">Médecin</option>
                  <option value="Pharmacien">Pharmacien</option>
                  <option value="Dentiste">Dentiste</option>
                  <option value="Paramedical">Paramedical</option>
                  <option value="Sage femme">Sage femme</option>
                  <option value="Autre">Autre</option>
                </Form.Select>
                {values.Profession === "Autre" ? (
                  <Form.Group md="4" controlId="Spécifier">
                    <Form.Label>Spécifier</Form.Label>
                    <Form.Control
                      type="text"
                      name="Specifier"
                      value={values.Specifier}
                      onChange={handleChange}
                      isInvalid={!!errors.Specifier}
                      isValid={touched.Specifier && !errors.Specifier}
                    />
                  </Form.Group>
                ) : null}

              </Form.Group>
             
              <Form.Group md="3" controlId="Type_Exercice">
                <Form.Label>Type d'Execrice</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  isInvalid={!!errors.Type_Exercice}
                  isValid={touched.Type_Exercice && !errors.Type_Exercice}
                  name="Type_Exercice"
                  value={values.Type_Exercice}
                  onChange={handleChange}
                >
                  <option></option>
                  <option value="Public">Public</option>
                  <option value="Privé">Privé</option>
                </Form.Select>


              </Form.Group>
              </BigBox>
            <BigBox>
              <Form.Group md="3" controlId="Adresse_Professionnelle">
                <Form.Label>Adresse Professionnelle</Form.Label>
                <Form.Control
                  type="text"
                  name="Adresse_Professionnelle"
                  value={values.Adresse_Professionnelle}
                  onChange={handleChange}
                  isInvalid={!!errors.Adresse_Professionnelle}
                  isValid={touched.Adresse_Professionnelle && !errors.Adresse_Professionnelle}
                />

              </Form.Group>

              <Form.Group md="4" controlId="E-mail">
                <Form.Label>E-mail</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    type="text"
                    
                    aria-describedby="inputGroupPrepend"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    isInvalid={errors.Email}
                    isValid={touched.Email && !errors.Email}
                  />

                </InputGroup>
              </Form.Group>
              <Form.Group md="4" controlId="validationFormikUsername">
                <Form.Label>Nom d'utilisateur</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    variant="primary"
                    type="text"
                   
                    aria-describedby="inputGroupPrepend"
                    name="Username"
                    value={values.Username}
                    onChange={handleChange}
                    isInvalid={errors.Username}
                    isValid={touched.Username && !errors.Username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group md="3" controlId="Password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  
                  name="Password"
                  value={values.Password}
                  onChange={handleChange}
                  isInvalid={!!errors.Password}
                  isValid={touched.Password && !errors.Password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.Password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="CPassword">
                <Form.Label>Confirmer le mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  
                  name="CPassword"
                  value={values.CPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.CPassword}
                  isValid={touched.CPassword && !errors.CPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.CPassword}
                </Form.Control.Feedback>
              </Form.Group> 
            </BigBox>
          </FlexBox>
          <Button style={{margin:'10px'}} type="submit"  >Confirmer</Button>
        </Form>
        </div>
    )}
  </Formik>
  )
}

const GrandPublic = (props) =>{
  return(
    <div style={{width:"70%"}}>
    <Formik
    initialValues={{
      Email: "",
      Nom: "",
      Username: "",
      Prenom: "",
      Telephone: "",
      Password: "",
      CPassword: "",
      Espace:"Grand Public",
    }}
    validationSchema={
      Yup.object({
        Nom: Yup.string().required("Le nom est requis"),
        Prenom: Yup.string().required("Le Prenom  est requis"),
      Telephone: Yup.number().required( "Le numero de Telephone est requis"),
      Username: Yup.string().required("La nom d'utilisateur est requis"),
      Email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      Password: Yup.string().required("Le mot de passe est requis"),
      CPassword: Yup.string().oneOf(
        [Yup.ref("Password"), null],
        "Les mots de passe ne correspondent pas"
      ),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {

        props.submitForm(values);
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
          <FlexBox2>
        
            <Form.Group md="4" controlId="Nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="Nom"
                  value={values.Nom}
                  onChange={handleChange}
                  isInvalid={!!errors.Nom}
                  isValid={touched.Nom && !errors.Nom}
                />
              </Form.Group>
              <Form.Group md="4" controlId="Prénom">
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
              <Form.Group md="4" controlId="Telephone">
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
              <Form.Group md="4" controlId="validationFormikUsername">
                <Form.Label>E-mail</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    variant="primary"
                    type="text"
                    
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
              <Form.Group md="4" controlId="validationFormikUsername">
                <Form.Label>Nom d'utilisateur</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    variant="primary"
                    type="text"
                   
                    aria-describedby="inputGroupPrepend"
                    name="Username"
                    value={values.Username}
                    onChange={handleChange}
                    isInvalid={errors.Username}
                    isValid={touched.Username && !errors.Username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group md="3" controlId="validationFormik05">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  
                  name="Password"
                  value={values.Password}
                  onChange={handleChange}
                  isInvalid={!!errors.Password}
                  isValid={touched.Password && !errors.Password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.Password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationFormik05">
                <Form.Label>Confirmer le mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  
                  name="CPassword"
                  value={values.CPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.CPassword}
                  isValid={touched.CPassword && !errors.CPassword}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.CPassword}
                </Form.Control.Feedback>
              </Form.Group>
 
          </FlexBox2>
          <Button style={{margin:'10px'}} type="submit">Confirmer</Button>
        </Form>
      </div>
    )}
  </Formik>
  </div>
  )
}
function Register(props) {

  const navigate = props.useNavigate()
  const [userType, setuserType] = useState("");
  function submitForm(values) {
    axiosConfig
      .post("/register", values)
      .then((res) => {

        if (res.data.result === "success") {
          localStorage.setItem("token_key", res.data.token);
          swal("Success!", res.data.message, "success").then((value) => {
            navigate("/")
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch((error) => {

        return swal("Error!", error.message, "error");
      });
  }

  return (
    <AuthBox>
      <div style={{width:"30%",height:"100%",borderRight: "1px solid #d8d8d8",paddingLeft:"2%"}}>
      <label htmlFor="Etes vous ?" >
        S'inscrire en tant que :
        <Form.Check
          value={userType}
          label="Professionnel de Santé"
          name="choise"
          id="Pro"
          type="radio"
          onChange={() => {
            setuserType("Pro");
          }}
        />
        <Form.Check
          value={userType}
          label="Grand Public"
          name="choise"
          id="GrandPublic"
          type="radio"
          onChange={() => {
            setuserType("GrandPublic");
          }}
        />
      </label>
      </div>
      {userType === "Pro" ? (
        <Pro submitForm={submitForm} />
      ) : userType === "GrandPublic" ? (
        <GrandPublic submitForm={submitForm} />
      ) : null}
    </AuthBox>
  );
}

export default Register;
