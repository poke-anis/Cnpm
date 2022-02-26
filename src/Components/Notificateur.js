import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";

import styled from "styled-components";
import axiosConfig from "./axios";
import  { useCookies } from "react-cookie";
import * as Yup from "yup";
import swal from "sweetalert";
import { motion} from 'framer-motion/dist/framer-motion'

var User = styled.div`
  display: flex;
overflow-x:hidden;
flex-grow : 1;
`;

const Titre = styled(motion.h1)`

  padding: 5px;
  width: 100%;
`;

const FormAnim = styled(motion.div)`
  margin: 5px;
  width: 100%;
border-left: 1px solid #d8d8d8;
`;

const Notificateur = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies("token_key");
  const {Espace,setEspace} = props
  const [update, setupdate] = useState(false);
  const [modification, setModification] = useState(false);
  const [modificationPass, setModificationPass] = useState(false);

  const [infos, setInfos] = useState();
  const id = cookies["id"];


  useEffect(
    () => {

      const change = setTimeout(() => {
      axiosConfig.get(`/secure/infos/${id}`).then(function (res) {
        setInfos({...res.data,number:Math.random()});
        
      }, 200);

      });
    },

  

    [Espace,update]
  );


  return infos ? (
    <Formik
    enableReinitialize
      initialValues={infos}
      validationSchema={Yup.object({
        Nom: Yup.string().required("Le nom est requis"),
        Prenom: Yup.string().required("Le Prenom  est requis"),
        Telephone: Yup.number().required("Le numero de Telephone est requis"),
        Profession: Yup.string().when("Espace",
        { is: "Professionnel",
          then: Yup.string().required("La Profession est requise"),
          otherwise: Yup.string(),
        }),
        Espace: Yup.string().required("L'espace est requis"),
        Specifier: Yup.string().when("Profession", {
          is: "Autre",
          then: Yup.string().required("La Profession est requise"),
          otherwise: Yup.string(),
        }),
        Email: Yup.string().email("Invalid email address").required("Required"),

        Password: Yup.string().when("modificationPass", {
          is: modificationPass === true,
          then: Yup.string().required("Le mot de passe est requis"),
          otherwise: Yup.string(),
        }),
        Type_Exercice: Yup.string().when("Espace",
        { is: "Professionnel",
          then: Yup.string().required("Le Type d'execrice est requis"),
          otherwise: Yup.string(),
        }),
        Adresse_Professionnelle: Yup.string().when("Espace",
        { is: "Professionnel",
        then: Yup.string().required("L'adresse professionnelle est requise"),
        otherwise: Yup.string(),
      }),

        CPassword: Yup.string().when("modificationPass", {
          is: (modificationPass) => true,
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
            .post(`/secure/update/${id}`, values)
            .then((res) => {
              if (res.data.result === "success") {
                
                
                swal("Success!", res.data.message, "success").then((value) => {
                  setModification(false);
                  setModificationPass(false);
                  setEspace(values.Espace)
                  setupdate(!update)
                  
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
          <Titre 
          initial={{ x: -500,opacity: 0 }}
          animate={{ x: 0,opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          style={{ width: "50%" }}>Information du Notificateur</Titre>
          {infos ? (
            <FormAnim
            initial={{y: 1000}}
          animate={{y: 0}}
          transition={{ duration: 2 }}>
            <Form
            
              onSubmit={handleSubmit}
              className="container-fluid"
              style={{ width: "100%" }}
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
                    readOnly={modification === true ? false : true}
                    defaultValue={values.Nom}
                  />
                </Col>
                {errors.Nom}
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
                    defaultValue={values.Prenom}
                  />
                </Col>
                {errors.Prenom}
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
                    defaultValue={values.Telephone}
                  />
                </Col>
                {errors.Telephone}
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
                    defaultValue={values.Email}
                  />
                </Col>
                {errors.Email}
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="Espace"
                style={{ padding: "10px 5px" }}
              >
                <Form.Label column sm="2" lg="3">
                  Espace
                </Form.Label>
                <Col sm="9">
                  {modification ? (
                    <Form.Select
                      onChange={handleChange}
                      name="Espace"
                      readOnly={modification === true ? false : true}
                      defaultValue={values.Espace}
                    >
                      <option value="Professionnel">Professionnel</option>
                      <option value="Grand Public">Grand Public</option>
                    </Form.Select>
                  ) : (
                    <Form.Control readOnly={true} defaultValue={values.Espace} />
                  )}
                </Col>
              </Form.Group>

              {values.Espace === "Professionnel" ? (
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
                      {modification ? (
                        <Form.Select
                          onChange={handleChange}
                          name="Profession"
                          readOnly={modification === true ? false : true}
                          defaultValue={values.Profession}
                        >
                          <option></option>
                          <option value="Médecin">Médecin</option>
                          <option value="Pharmacien">Pharmacien</option>
                          <option value="Dentiste">Dentiste</option>
                          <option value="Paramedical">Paramedical</option>
                          <option value="Sage femme">Sage femme</option>
                          <option value="Autre">Autre</option>
                        </Form.Select>
                      ) : (
                        <Form.Control
                          readOnly={true}
                          defaultValue={values.Profession}
                        />
                      )}
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
                      {modification ? (
                        <Form.Select
                          onChange={handleChange}
                          name="Type_Exercice"
                          readOnly={modification === true ? false : true}
                          defaultValue={values.Type_Exercice}
                        >
                          <option></option>
                          <option value="Public">Public</option>
                          <option value="Privé">Privé</option>
                        </Form.Select>
                      ) : (
                        <Form.Control
                          readOnly={modification === true ? false : true}
                          defaultValue={values.Type_Exercice}
                        />
                      )}
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
                        defaultValue={values.Adresse_Professionnelle}
                      />
                    </Col>
                  </Form.Group>

                  
                </>
              ) : null}
                            {modificationPass === true ? (
                    <div>
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
                            defaultValue={values.Password}
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
                            defaultValue={values.CPassword}
                          />
                        </Col>
                      </Form.Group>
                    </div>
                  ) : null}
              {modification ? (
                    <Button
                      style={{ margin: "10px" }}
                      onClick={() => setModification(false)}
                    >
                      Annuler
                    </Button>
                  ) : modificationPass === false ? (
                    <Button
                      style={{ margin: "10px" }}
                      onClick={() => setModification(true)}
                    >
                      Modifier les informations
                    </Button>
                  ) : null}
                  {modificationPass ? (
                    <Button
                      style={{ margin: "10px" }}
                      onClick={() => setModificationPass(false)}
                    >
                      Annuler
                    </Button>
                  ) : modification === false ? (
                    <Button
                      style={{ margin: "10px" }}
                      onClick={() => setModificationPass(true)}
                    >
                      Modifier le mot de passe
                    </Button>
                  ) : null}
              {modification || modificationPass ? (
                <Button
                  style={{ margin: "10px" }}
                  type="submit"
                  onClick={() =>{}}
                >
                  Confirmer
                </Button>
              ) : null}
            </Form>
            </FormAnim>
          ) : null}
        </User>
      )}
    </Formik>
  ) : (
    <div style={{height:"100%"}}></div>
  );
};

export default Notificateur;
