import React, { useContext } from 'react'
import {   
  Form,Button } from 'react-bootstrap'
import styled from 'styled-components'
import * as Yup from 'yup';
import { Formik } from 'formik';
import swal from "sweetalert";
import { useCookies } from 'react-cookie'
import axiosConfig from "./axios"
var AuthBox = styled.div`

text-align: left;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`



function Authentication(props) 
{
  const [cookies, setCookie, removeCookie] = useCookies('token_key');

  const { isloged, setIsloged } = useContext(props.userContext)
  const navigate = props.useNavigate()
  function onLogin(token,id,UserType,TypeExecrice) {
    setCookie('token_key', token, { path: '/' });
    setCookie('id', id, { path: '/' });
    setCookie('UserType', UserType, { path: '/' });
    setIsloged(UserType)
  };
  let submitForm = (values, history) => {
    axiosConfig
      .post("/login", values)
      .then(res => {

        if (res.data.result === "success") {
          onLogin(res.data.token,res.data.id,res.data.UserType,res.data.TypeExecrice)
          swal("Success!", res.data.message, "success").then(value => {
            navigate("/Profile")
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
      initialValues={{ Email: "", Password: "" }}
      validationSchema={Yup.object({
        Email: Yup.string().email("Invalid email address").required("Required"),
        Password: Yup.string().required("Password is required"),
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
            <label>Email</label>
            <Form.Control
            name="Email"
              type="text"
              placeholder="Identifiant"
              value={values.Email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <label>Mot de passe</label>
            <Form.Control
            name="Password"
              type="password"
              placeholder="Mot de passe"
              value={values.Password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Rester connecté" />
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

export default Authentication;