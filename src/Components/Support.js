import { Modal, Button, Form } from "react-bootstrap";
import axiosConfig from "./axios";
import React, { useState} from "react";
import Swal from 'sweetalert2'
function Support(props) {
    const [email,setEmail]=useState("")
    const [mailContent,setmailContent]=useState("")
    const handleemailchange =(e)=>{

        setEmail(e.target.value)
        
    }
    const handlemailContentchange =(e)=>{
        setmailContent(e.target.value)
    }
  const submitMail = (e) => {
    Swal.fire({

        title: 'Chargement',

        showSpinner: true
        
      }).then(Swal.showLoading())
      .then(
        
        axiosConfig
        .post(`/send/?name=${email}&email=cnpm@lfb-services.com&messageHtml=${mailContent}`)
        .then((response) => {
          if (response.data.msg === "success") {
            Swal.fire("Success!", 'Message envoyé', "success")
          } else if (response.data.msg === "fail") {
            Swal.fire("Error!", "Veuillez ressayer", "error");
          }
        })
      )
      
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Form.Group className="mb-3" controlId="email">

              <Form.Control name="email" type="email" placeholder="Votre adresse Mail" onChange={(e)=> handleemailchange(e) }/>
            </Form.Group>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="mailContent">
    <Form.Control name="mailContent" type="textarea" placeholder="Description du probleme" value={mailContent} onChange={(e)=> handlemailContentchange(e) } />
  </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitMail}>Envoyer</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Support;
