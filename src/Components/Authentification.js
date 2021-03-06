import React, { useContext} from 'react'
import {   
  Form,Button } from 'react-bootstrap'
import styled from 'styled-components'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useCookies } from 'react-cookie'
import axiosConfig from "./axios"
import swal from "sweetalert";
import {  Link } from "react-router-dom";

var AuthBox = styled.div`
flex-grow : 1;
text-align: left;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`

function onLogin(token,id,UserType,Espace,setCookie,setIsloged) {
  setCookie('token_key', token, { path: '/' });
  setCookie('id', id, { path: '/' });
  setCookie('UserType', UserType, { path: '/' });
  setCookie('Espace', Espace, { path: '/' });
  setIsloged(UserType)
};

function Authentication(props) 
{
  const [cookies, setCookie, removeCookie] = useCookies('token_key');

  const { isloged, setIsloged } = useContext(props.userContext)
  const navigate = props.useNavigate()

  let submitForm = (values, history) => {
    axiosConfig
      .post("/login", values)
      .then(res => {

        if (res.data.result === "success") {
          
          onLogin(res.data.token,res.data.id,res.data.UserType,res.data.Espace,setCookie,setIsloged)
          swal("Success!", res.data.message, "success").then(value => {
            const change = setTimeout(() => {
              window.location.reload(false)
            }, 400);
            navigate("/")

           
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
      initialValues={{ Username: "", Password: "" }}
      validationSchema={Yup.object({
        Username: Yup.string().required("Nom d'utilisateur invalide"),
        Password: Yup.string().required("Le mot de passe est requis"),
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
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <label>Nom d'utilisateur</label>
            <Form.Control
            name="Username"
              type="text"
              placeholder="Identifiant"
              value={values.Username}
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
{/*           <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Rester connect??" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Entrer
          </Button>
        </Form>
      )}
    </Formik>
    <Link to="/PasswordForget">Mot de passe Oubli??</Link>
  </AuthBox>
);
}

export default Authentication;