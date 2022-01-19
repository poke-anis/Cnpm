import React, { useState, useEffect } from 'react'
import { Formik,Field } from 'formik';
import {
    Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { InputText,InputCheck,InputNumber,InputRadio,InputSelect } from './Declarations/FormikInputs';
import styled from 'styled-components'
import axiosConfig from "./axios"
import cookie ,{ useCookies } from 'react-cookie'
import * as Yup from "yup";
import swal from "sweetalert";
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
  const [modificationPass,setModificationPass] = useState(false)
const {Espace} = props
  const [infos, setInfos] = useState()
  const id = cookies['id']

  useEffect(() => {

    axiosConfig.get(`infos/${id}`)
      .then(function (res) {
 
        setInfos(res.data)
      })
  }

// setFieldValue('Prenom',infos.Prenom)
// setFieldValue('Profession',infos.Profession)
// setFieldValue('Telephone',infos.Telephone)
// setFieldValue('Adresse_Professionnelle',infos.Adresse_Professionnelle)
// setFieldValue('Type_Exercice',infos.Type_Exercice)

    , []);
   


return (
  infos?
  <Formik
    initialValues={infos}
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
      Email: Yup.string().email("Invalid email address").required("Required"),
      
      Password: Yup.string().when("modificationPass", {
        is: (modificationPass) === true,
        then: Yup.string().required("Le mot de passe est requis"),
        otherwise: Yup.string(),
      }),
      Type_Exercice: Yup.string().required("Le Type d'execrice est requis"),
      Adresse_Professionnelle: Yup.string().required(
        "L'adresse professionnelle est requise"
      ),
      CPassword: Yup.string().when("modificationPass", {
        is: (modificationPass) =>true,
        then: Yup.string().oneOf(
          [Yup.ref("Password"), null],
          "Les mots de passe ne correspondent pas"
        ),
        otherwise: Yup.string(),
      }),

    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        axiosConfig
        .post(`/update/${id}`, values)
        .then((res) => {
  
          if (res.data.result === "success") {
            localStorage.setItem("token_key", res.data.token);
            swal("Success!", res.data.message, "success").then((value) => {
              setModification(false)
              setModificationPass(false)
            });
          } else if (res.data.result === "error") {
            swal("Error!", res.data.message, "error");
          }
        })
        .catch((error) => {
  
          return swal("Error!", error.message, "error");
        });
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
      setFieldValue,
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
                type="text"
                name="Nom"
                onChange={handleChange}
                onSubmit={(e)=> setFieldValue('Nom',infos.Nom)}
                  value={infos.Nom}
                  readOnly={modification === true ? false : true}
                  
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
                                  type="text"
                                  name="Prenom"
                                  onChange={handleChange}

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
                                  type="text"
                                  name="Telephone"
                                  onChange={handleChange}

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
                                  onChange={handleChange}
                                  type="text"
                                  name="Email"
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
                    {modification ?
                                        <Form.Select
                                        onChange={handleChange}

                                        name="Profession"
                                        readOnly={modification === true ? false : true}
                                        defaultValue={infos.Profession}
                                      >
                                    <option></option>
                                    <option value="Médecin">Médecin</option>
                                    <option value="Pharmacien">Pharmacien</option>
                                    <option value="Dentiste">Dentiste</option>
                                    <option value="Paramedical">Paramedical</option>
                                    <option value="Sage femme">Sage femme</option>
                                    <option value="Autre">Autre</option>
                                    </Form.Select> :
                                    <Form.Control

                                    readOnly={true}
                                    defaultValue={infos.Profession}
                                  />}

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
                  {modification ?
                                                      
                                                      <Form.Select
                                                      onChange={handleChange}
                                                      name="Type_Exercice"
                                                          readOnly={modification === true ? false : true}
                                                          defaultValue={infos.Type_Exercice}
                                                        >
                  <option></option>
                  <option value="Public">Public</option>
                  <option value="Privé">Privé</option>
                                                      </Form.Select>:
                    <Form.Control

                      readOnly={modification === true ? false : true}
                      defaultValue={infos.Type_Exercice}
                    />}
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
                                      onChange={handleChange}
                                      name="Adresse_Professionnelle"

                      readOnly={modification === true ? false : true}
                      defaultValue={infos.Adresse_Professionnelle}
                    />
                  </Col>
                </Form.Group>
                {modificationPass == true ?<div>
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
                                      onChange={handleChange}
                                      type="password"
                                      name="Password"
                      readOnly={modificationPass === true ? false : true}
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
                                      onChange={handleChange}
                                      type="password"
                                      name="CPassword"
                      readOnly={modificationPass === true ? false : true}
                      defaultValue={infos.CPassword}
                    />
                  </Col>
                </Form.Group>

                </div>:null}
                {modification?
         <Button style={{margin:'10px'}} onClick={()=>setModification(false)} >Annuler</Button>
                                :modificationPass === false ? <Button style={{margin:'10px'}} onClick={()=>setModification(true)} >Modifier les informations</Button>
                              :null}
                {modificationPass?
         <Button style={{margin:'10px'}} onClick={()=>setModificationPass(false)} >Annuler</Button>
                                : modification === false?<Button style={{margin:'10px'}} onClick={()=>setModificationPass(true)} >Modifier le mot de passe</Button>
                              :null}
              </>   
            ) : null}
            {modification || modificationPass?
          <Button style={{margin:'10px'}} type="submit"  onClick={()=>console.log(errors)
          }>Confirmer</Button>:null}
          </Form>
        ) : null}
      </User>
    )}
  </Formik>: "Veuillez patienter"
);
}


export default Notificateur;