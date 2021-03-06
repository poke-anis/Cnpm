import React, { useState,useEffect,useRef } from 'react'
import axiosConfig from "./axios"
import styled from 'styled-components'
import { FaEdit,FaPlus,FaRegTimesCircle } from "react-icons/fa";

import { Field,useFormik,FormikProvider,useField } from 'formik';

import {Button,Figure,Form,Row,Nav,Table,Tab,Modal} from 'react-bootstrap'

import SelectField from './React-select'
import { useCookies } from 'react-cookie'
import parse from 'html-react-parser';
import * as Yup from "yup";

const Content = styled.div`
flex-grow : 1;
padding: 50px;
`



function ModalForm(props) {
  const [field, meta, helpers] = useField('description');
  const {formik} = props
  const config = {
    buttons: ['preview','|',"bold", "italic", "link", "unlink", "underline", "source"],
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
}
const editor = useRef(null)
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Description (100 caractères max)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group  controlId="description">
   <Form.Control maxLength="100" onChange={formik.handleChange} value={formik.values.description} name="description" as="textarea" />
</Form.Group>  
{/* <div>{parse(formik.values.description)}
</div> */}


{/* <JoditEditor
          
          value={formik.values.description}
        
          onBlur={(el)=>{helpers.setTouched(el)}}
          onChange={(el)=>{helpers.setValue(el)}}
  /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

  </div>
  );
}



const UserManagment = (props) => {
  const [changement,setChangement] = useState(false)
  
  const [cnpmUsers,setCnpmUsers] = useState([])
  const validationSchema  = Yup.object({
    Username: Yup.string().required("Le nom d'utilisateur est requis"),

  })
  const  formik = useFormik({
    initialValues: {
      Username: '',
      Nom: ''},
      validationSchema,

    onSubmit: values => {
      axiosConfig.post(`/Create/`,values)
      .then(res => {
          setCnpmUsers([...cnpmUsers,res.data]);
        })
        const change = setTimeout(() => {
          setChangement(!changement);
        }, 200);
 
    }
  
  })

  var Type_Exercice = [
    { label: "Pharmacovigilance", value: "Jaune" },
    { label: "Matériovigilance", value: "Bleue" },
    { label: "Vaccinovigilance", value: "Blanche"},
    { label: "Coronavirus", value: "Coronavirus"},
    { label: "Réactovigilance", value: "Parme"},
    { label: "Cosmétovigilance", value: "Rose"},
    { label: "Phytovigilance", value: "Verte"},
    { label: "Complèment alimentaire", value: "Orange"},
    { label: "Patient", value: "Patient"},
  ]; 
    

const handledelete = (props)=>{

  axiosConfig.put(`/Modify/${props}?typeofmodification=delete`)
  .then(res => {
    

    })

    const change = setTimeout(() => {
      setChangement(!changement);
    }, 200);

}
    useEffect(() => {
        axiosConfig.get(`/infosCnpm/`)
        .then(res => {
          
            setCnpmUsers(res.data);
          
          })


    },[changement])


    const typeOffonctions = (props) => {
      if (props === undefined) {
        return " ";
      } else if (props === "Jaune") {
        return "Pharmacovigilance";
      } else if (props === "Bleue") {
        return "Matériovigilance";
      } else if (props === "Blanche") {
        return "Vaccinovigilance";
      } else if (props === "Parme") {
        return "Réactovigilance";
      } else if (props === "Verte") {
        return "Phytovigilance";
      } else if (props === "Rose") {
        return "Cosmétovigilance";
      } else if (props === "Orange") {
        return "Compléments alimentaires";
      } else if (props === "Coronavirus") {
        return "Coronavirus";
      } else if (props === "Patient") {
        return "Patient";
      }
    };


return(
  <form onSubmit={formik.handleSubmit}>
          <FormikProvider value={formik}>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nom d'utilisateur</th>
      <th>Nom</th>
      <th>Mot de passe</th>
      <th>Fonction(s)</th>
      <th>Options</th>
    </tr>
  </thead>

  <tbody>
{cnpmUsers.length !== 0 ?
  cnpmUsers.map((el,key)=>{
    return(
          <tr key={key}>
          <th>{key+1}</th>
          <th> {el.Username}</th>
          <th>{el.Nom}</th>
          <th></th>
          <th>{el.Type_Exercice.map((ele,index)=> typeOffonctions(ele)+',')}</th>
          <th ><Button  variant="secondary" onClick={()=>handledelete(el._id)} style={{width:'100%',display:'flex',justifyContent:'center'}}><FaRegTimesCircle/></Button></th>
        </tr>)
  })
 :null}

<tr>
    <th>+</th>
    <th style={{padding:"15px"}}><Form.Group as={Row}  controlId="Username">
   <Form.Control   onChange={formik.handleChange} name="Username" type="text"  />
   {formik.errors.Username}

</Form.Group></th>
<th style={{padding:"15px"}}><Form.Group as={Row}  controlId="Nom">
   <Form.Control  onChange={formik.handleChange} name="Nom" type="text"  />
</Form.Group></th>
<th style={{padding:"15px"}}><Form.Group as={Row}  controlId="Password">
   <Form.Control  onChange={formik.handleChange} name="Password" type="text"  />
</Form.Group></th>
<th style={{padding:"15px"}}><Field  isMulti={true} component={SelectField}  name='Type_Exercice' options={Type_Exercice} /></th>
<th style={{padding:"15px"}}><Button  variant="secondary" type="submit" onSubmit={formik.handleSubmit} style={{width:'100%',display:'flex',justifyContent:'center'}}><FaPlus /></Button></th>
</tr>
</tbody>
  </Table>
  </FormikProvider>
  </form>
)
}

const Alert = (props) => {
  var [files, setFiles] = useState([]);
  const [changement,setChangement] = useState(false)
  const [modalShow, setModalShow] = React.useState(false);
  const [cookies] = useCookies('token_key');
    const [cnpmAlertes,setCnpmAlertes] = useState('')
    const validationSchema  = Yup.object({
      titre: Yup.string().required("Le Titre est requis"),

    })
      const  formik = useFormik({
        
    initialValues: {
      titre: '',
      lien:'',
      description: ''},
      validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      formData.append("body", JSON.stringify(values));
      files.forEach((el, index) => {
        formData.append(`${el.file_id}`, el.uploaded_file.file);
      });

      axiosConfig.post(`/postalerte/${cookies.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        setCnpmAlertes([...cnpmAlertes,res.data]);
        
        
        })
        
        const change = setTimeout(() => {
          setChangement(!changement);
        }, 200);
    }
  
  })

  const handledelete = (props)=>{

    axiosConfig.put(`/Modifyalertes/${props}?typeofmodification=delete`)
    .then(res => {
      
      
      })
      const change = setTimeout(() => {
        setChangement(!changement);
      }, 200);
      
  }
  var onFileChange = (event, name) => {
    event.preventDefault();

    let id = event.target.id;

    let file = event.target.files[0];
    setFiles([...files, { file_id: id, uploaded_file: { file } }]);

  };
    useEffect(() => {
        axiosConfig.get(`/getalertes/`)
        .then(res => {
            setCnpmAlertes(res.data);


          })

    },[changement])

return(

  <form onSubmit={formik.handleSubmit}>
          <FormikProvider value={formik}>
<Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>Nom de l'Alerte</th>
      <th>Lien</th>
      <th>Description</th>
      <th>Image</th>
      <th>Createur</th>
      <th>Options</th>
    </tr>
  </thead>

  <tbody>
{ cnpmAlertes && cnpmAlertes.length !== 0 ?
  cnpmAlertes.map((el,key)=>{
    return(
          <tr key={key}>
          <th>{key+1}</th>
          <th>{el.titre}</th>
          <th><a href={el.lien} >{el.lien}</a></th>
          <th>{parse(el.description)}</th>
          <th>{el.image? el.image.map((el,index)=><Figure key={index}>
                      <Figure.Image
                        width={100}
                        style={{objectFit: 'contain'}}
                        alt="rafraichir la page"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>):null}</th> 
          <th>{el.creator[0].Nom}</th>
          <th ><Button  variant="secondary" onClick={()=>handledelete(el._id)} style={{width:'100%',display:'flex',justifyContent:'center'}}><FaRegTimesCircle/></Button></th>
        </tr>)
  })
 :null}

<tr>
    <th>+</th>

<th style={{padding:"15px",maxWidth:'100px'}}> <Form.Group as={Row}  controlId="titre">
   <Form.Control   onChange={formik.handleChange} name="titre" type="text" />
   {formik.errors.titre}
</Form.Group></th>
<th style={{padding:"15px",maxWidth:'100px'}}> <Form.Group as={Row}  controlId="lien">
   <Form.Control   onChange={formik.handleChange} name="lien" type="text" />
   {formik.errors.lien}
</Form.Group></th>
<th style={{padding:"15px",maxWidth:'400px'}}><div style={{overflowX:'auto',margin:'0em'}}></div><Button variant="secondary" style={{width:'100%',display:'flex',justifyContent:'center'}} onClick={() => setModalShow(true)}>
<FaEdit/>
      </Button>
      </th>
      <th style={{padding:"15px",maxWidth:'100px'}}>
          <Form.Control  id={`Photo_Alerte`} type="file" onChange={onFileChange}/></th>
      <th></th>
<th style={{padding:"15px"}}><Button  type="submit" variant="secondary" onSubmit={formik.handleSubmit} style={{width:'100%',display:'flex',justifyContent:'center'}}><FaPlus /></Button></th>
</tr>
</tbody>
  </Table>
  <ModalForm
  formik={formik}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </FormikProvider>
  </form>
)
}
const News = (props) => {
  var [files, setFiles] = useState([]);
  const [changement,setChangement] = useState(false)
  const [modalShow, setModalShow] = React.useState(false);
  const [cookies] = useCookies('token_key');
    const [cnpmNews,setCnpmNews] = useState('')
    const validationSchema  = Yup.object({
      titre: Yup.string().required("Le Titre est requis"),
  
    })
      const  formik = useFormik({
    initialValues: {
      titre: '',
      lien: '',
      description: ''},
      validationSchema,

    onSubmit: values => {
      const formData = new FormData();
      formData.append("body", JSON.stringify(values));
      files.forEach((el, index) => {
        formData.append(`${el.file_id}`, el.uploaded_file.file);
      });

      axiosConfig.post(`/postnews/${cookies.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        setCnpmNews([...cnpmNews,res.data]);
        
        
        })
        
        const change = setTimeout(() => {
          setChangement(!changement);
        }, 200);
    }
  
  })

  const handledelete = (props)=>{

    axiosConfig.put(`/Modifynews/${props}?typeofmodification=delete`)
    .then(res => {
      
      
      })
      const change = setTimeout(() => {
        setChangement(!changement);
      }, 200);
      
  }
  var onFileChange = (event, name) => {
    event.preventDefault();

    let id = event.target.id;

    let file = event.target.files[0];
    setFiles([...files, { file_id: id, uploaded_file: { file } }]);

  };
    useEffect(() => {
        axiosConfig.get(`/getnews/`)
        .then(res => {
            setCnpmNews(res.data);
          })
          

    },[changement])

return(

  <form onSubmit={formik.handleSubmit}>
          <FormikProvider value={formik}>
<Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>Nom de l'Actualité</th>
      <th>Lien</th>
      <th>Description</th>
      <th>Image</th>
      <th>Createur</th>
      <th>Options</th>
    </tr>
  </thead>

  <tbody>
{ cnpmNews && cnpmNews.length !== 0 ?
  cnpmNews.map((el,key)=>{
    return(
          <tr key={key}>
          <th>{key+1}</th>
          <th>{el.titre}</th>
          <th><a href={el.lien} >{el.lien}</a></th>
          <th>{parse(el.description)}</th>
          <th>{el.image? el.image.map((el,index)=><Figure key={index}>
                      <Figure.Image
                        width={100}
                        style={{objectFit: 'contain'}}
                        alt="171x180"
                        src={`data:${el.mimetype};base64,${el.buffer}`}
                      />
                    </Figure>):null}</th> 
          <th>{el.creator[0].Nom}</th>
          <th ><Button  variant="secondary" onClick={()=>handledelete(el._id)} style={{width:'100%',display:'flex',justifyContent:'center'}}><FaRegTimesCircle/></Button></th>
        </tr>)
  })
 :null}

<tr>
    <th>+</th>

<th style={{padding:"15px",maxWidth:'100px'}}> <Form.Group as={Row}  controlId="titre">
   <Form.Control   onChange={formik.handleChange} name="titre" type="text" />
   {formik.errors.titre}

</Form.Group></th>
<th style={{padding:"15px",maxWidth:'100px'}}> <Form.Group as={Row}  controlId="lien">
   <Form.Control   onChange={formik.handleChange} name="lien" type="text" />
   {formik.errors.lien}
</Form.Group></th>

<th style={{padding:"15px",maxWidth:'400px'}}><div style={{overflowX:'auto',margin:'0em'}}></div><Button variant="secondary" style={{width:'100%',display:'flex',justifyContent:'center'}} onClick={() => setModalShow(true)}>
<FaEdit/>
      </Button>
      </th>
      <th style={{padding:"15px",maxWidth:'100px'}}>
          <Form.Control  id={`Photo_Alerte`} type="file" onChange={onFileChange}/></th>
      <th></th>
<th style={{padding:"15px"}}><Button  type="submit" variant="secondary" onSubmit={formik.handleSubmit} style={{width:'100%',display:'flex',justifyContent:'center'}}><FaPlus /></Button></th>
</tr>
</tbody>
  </Table>
  <ModalForm
  formik={formik}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </FormikProvider>
  </form>
)
}


const Mods =(props)=>{
    const {UserType} = props.cookie
    

    return (
      <Content>
        <Tab.Container id="left-tabs-example" defaultActiveKey={UserType === "Mods" ?"UserManagment":"Alert"}>
          {UserType === "Mods" ? (
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="UserManagment">
                  Gestion des utilisateurs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Alert">Gestion des Alertes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="News">Gestion de l'actualité</Nav.Link>
              </Nav.Item>
            </Nav>
          ) : (
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="Alert">Gestion des Alertes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="News">Gestion de l'actualité</Nav.Link>
              </Nav.Item>
            </Nav>
          )}

          <Tab.Content>
          {UserType === "Mods" ?           <Tab.Pane eventKey="UserManagment">
              <UserManagment className="UserManagment" />
            </Tab.Pane>:null}

            <Tab.Pane eventKey="Alert">
              <Alert className="Alert" />
            </Tab.Pane>
            <Tab.Pane eventKey="News">
              <News className="News" />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Content>
    );

}
export default Mods;