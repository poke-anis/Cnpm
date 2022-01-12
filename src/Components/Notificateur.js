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
const Notificateur = (props) =>{
  const [cookies, setCookie, removeCookie] = useCookies('token_key');
  const [modification,setModification] = useState(false)
const {Espace} = props
  const [infos, setInfos] = useState()
  const id = cookies['id']
  useEffect(() => {

    axiosConfig.get(`infos/${id}`)
      .then(function (res) {
 
        setInfos(res.data)
      })
  }
    , []);


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
      Espace: "Professionnel",
    }}
    validationSchema={Yup.object({
      Nom: Yup.string().required("Le nom est requis"),
      Prenom: Yup.string().required("Le Prenom  est requis"),
      Telephone: Yup.number().required("Le numero de Telephone est requis"),
      Profession: Yup.string().required("La Profession est requise"),
      Specifier: Yup.string().when("Profession", {
        is: "Autre",
        then: Yup.string().required("La Profession est requise"),
        otherwise: Yup.string(),
      }),
      Username: Yup.string().required("La nom d'utilisateur est requis"),
      Email: Yup.string().email("Invalid email address").required("Required"),
      Password: Yup.string().required("Le mot de passe est requis"),

      Type_Exercice: Yup.string().required("Le Type d'execrice est requis"),
      Adresse_Professionnelle: Yup.string().required(
        "L'Adresse Professionnelle est requise"
      ),
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
      <User>
        <Titre style={{ width: "50%" }}>Information du Notificateur</Titre>
        {infos ? (
          <Form
            onSubmit={handleSubmit}
            className="container-fluid"
            style={{ width: "60%" }}
          >
            <Form.Group
            value={values.Nom}
              as={Row}
              controlId="Nom"
              style={{ padding: "10px 5px" }}
            >
              <Form.Label column sm="2" lg="3">
                Nom
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  readOnly={modification === true ? false : true}
                  defaultValue={infos.Nom}
                />
              </Col>
            </Form.Group>
            <Form.Group
            
              as={Row}
              controlId="Prenom"
              style={{ padding: "10px 5px" }}
            >
              <Form.Label column sm="2" lg="3">
                Prenom
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  readOnly={modification === true ? false : true}
                  defaultValue={infos.Prenom}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Telephone"
              style={{ padding: "10px 5px" }}
            >
              <Form.Label column sm="2" lg="3">
                Telephone
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  readOnly={modification === true ? false : true}
                  defaultValue={infos.Telephone}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="Email"
              style={{ padding: "10px 5px" }}
            >
              <Form.Label column sm="2" lg="3">
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  readOnly={modification === true ? false : true}
                  defaultValue={infos.Email}
                />
              </Col>
            </Form.Group>
            {Espace === "Professionnel" ? (
              <>
                <Form.Group
                  as={Row}
                  controlId="Profession"
                  style={{ padding: "10px 5px" }}
                >
                  <Form.Label column sm="2" lg="3">
                    Profession
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      readOnly={modification === true ? false : true}
                      defaultValue={infos.Profession}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  controlId="Type d’exercice"
                  style={{ padding: "10px 5px" }}
                >
                  <Form.Label column sm="2" lg="3">
                    Type d’exercice
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      readOnly={modification === true ? false : true}
                      defaultValue={infos.Type_Exercice}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="Adresse Professionnelle"
                  style={{ padding: "10px 5px" }}
                >
                  <Form.Label column sm="2" lg="3">
                    Adresse Professionnelle
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      readOnly={modification === true ? false : true}
                      defaultValue={infos.Adresse_Professionnelle}
                    />
                  </Col>
                </Form.Group>
                {modification == true ?<div>
                  <Form.Group
                  as={Row}
                  controlId="Password"
                  style={{ padding: "10px 5px" }}
                >
                  <Form.Label column sm="2" lg="3">
                    Mot de passe
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      readOnly={modification === true ? false : true}
                      defaultValue={infos.Password}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  controlId="Confirmer le mot de passe"
                  style={{ padding: "10px 5px" }}
                >
                  <Form.Label column sm="2" lg="3">
                    Confirmer le mot de passe
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      readOnly={modification === true ? false : true}
                      defaultValue={infos.CPassword}
                    />
                  </Col>
                </Form.Group>

                </div>:null}
              </>
            ) : null}
          </Form>
        ) : null}
      </User>
    )}
  </Formik>
);
}


export default Notificateur;