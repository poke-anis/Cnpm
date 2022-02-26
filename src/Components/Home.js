import { Card, Button, Modal,Row,Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axiosConfig from "./axios";
import styled from "styled-components";
import parse from "html-react-parser";
import PaginationPage from './Pagination home'
import logo from '../Assets/logo.png'

const Content = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  border:5px black;
  width: 100%;
  flex-grow : 1;
  background-color:#EAEAEA;
`;

function ModalForm(props) {
  const { values } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {values.titre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{parse(values.description)}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Alertes = (props) => {
  const [cnpmAlertesCount,setCnpmAlertesCount] = useState(0)
  const [cnpmAlertes, setCnpmAlertes] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [valeurmodal, setValeurmodal] = useState({});
  const [currentPage,setCurrentPage]= useState(1)

  const nextpage = (pageNumber) => {

    setCurrentPage(pageNumber)

    getAlertes(pageNumber);

}
const getAlertes = (currentPage) => {
  axiosConfig.get(`/getalertespgn?pagination=${'4'}&page=${currentPage}`).then((res) => {
    setCnpmAlertes(res.data);
  },
  );
    
}
const getAlertescount = () => {

  axiosConfig.get(`/getalertesnbr`)
   .then(res => {

    setCnpmAlertesCount(res.data);
     })
     getAlertes(currentPage)
 }
const tenChange = (pageNumber, isposOrneg) => {
  var finalPage;
  if (isposOrneg > 0) 
    finalPage = pageNumber + 10;
  else 
    finalPage = pageNumber - 10;
    setCurrentPage(finalPage)

    getAlertes(finalPage);
}
let numberOfPages = 0;
if (cnpmAlertesCount % 4 === 0)
  numberOfPages = Math.floor(cnpmAlertesCount / 4);
else
  numberOfPages = Math.floor(cnpmAlertesCount / 4) + 1;

useEffect(() => {
  getAlertescount()
  }, []);

  return(
    <div style={{flexGrow:"1"}}>
        <Row xs={1} md={2} className="g-4">
        {cnpmAlertes.length >= 1 && cnpmAlertes instanceof Array? 

cnpmAlertes.map((elem,ind) =>
<Col  key={ind}>
<Card style={{marginBottom:"10px",marginLeft:"10px",height:"100%"}} >
{elem.image.length >= 1
  ? elem.image.map((el, index) => (
      <Card.Img
        key={index}
        style={{ objectFit: "cover" }}
        variant="top"
        width={100}
        height={100}
        src={`data:${el.mimetype};base64,${el.buffer}`}
      />
    ))
  : <Card.Img

  style={{ objectFit: "cover" }}
  variant="top"
  width={100}
  height={100}
  src={logo}
/>}

<Card.Body >
  <Card.Title  >{elem.titre}</Card.Title>
  <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden"}} >
    {modalShow ? (
      <ModalForm
        key={ind}
        values={valeurmodal}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    ) : null}
{elem.description}
  </Card.Text>
</Card.Body>
<Card.Footer style={{display:"flex",justifyContent:"space-between"}}>
{elem.lien
  ?  <a href={elem.lien} >Source</a> 
  
  : null}
  {" "}
  {elem.creator[0].Nom}
</Card.Footer>
</Card>
</Col>
)
: (
<p>Rien a afficher</p>
)}
</Row>
        

<div style={{display:"flex",justifyContent:"flex-end"}}>
{ cnpmAlertesCount > 4 &&
  <PaginationPage
  
    pages={numberOfPages}
    nextPage={nextpage}
    currentPage={currentPage}
    
    tenChange={tenChange}
  >
  </PaginationPage>}
  </div>
  </div>
)



};


const News = (props) => {
  const [cnpmNewsCount,setCnpmNewsCount] = useState(0)
  const [cnpmNews, setCnpmNews] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [valeurmodal, setValeurmodal] = useState({});
  const [currentPage,setCurrentPage]= useState(1)

  const nextpage = (pageNumber) => {

    setCurrentPage(pageNumber)

    getNews(pageNumber);

}
const getNews = (currentPage) => {
  axiosConfig.get(`/getnewspgn?pagination=${'4'}&page=${currentPage}`).then((res) => {
    setCnpmNews(res.data);
  },
  );
    
}
const getNewscount = () => {

  axiosConfig.get(`/getnewsnbr`)
   .then(res => {

    setCnpmNewsCount(res.data);
     })
     getNews(currentPage)
 }
const tenChange = (pageNumber, isposOrneg) => {
  var finalPage;
  if (isposOrneg > 0) 
    finalPage = pageNumber + 10;
  else 
    finalPage = pageNumber - 10;
    setCurrentPage(finalPage)

    getNews(finalPage);
}
let numberOfPages = 0;
if (cnpmNewsCount % 4 === 0)
  numberOfPages = Math.floor(cnpmNewsCount / 4);
else
  numberOfPages = Math.floor(cnpmNewsCount / 4) + 1;

useEffect(() => {
  getNewscount()
  }, []);

  return(
    <div style={{flexGrow:"1"}} >

<Row xs={1} md={2} className="g-4" >

{cnpmNews.length >= 1 && cnpmNews instanceof Array? 
  
    cnpmNews.map((elem,ind) =>
    <Col key={ind}>
    <Card style={{marginBottom:"10px",marginLeft:"10px",height:"100%"}} >
    {elem.image.length >= 1
      ? elem.image.map((el, index) => (
          <Card.Img
            key={index}
            style={{ objectFit: "cover" }}
            variant="top"
            width={100}
            height={100}
            src={`data:${el.mimetype};base64,${el.buffer}`}
          />
        ))
      : <Card.Img

      style={{ objectFit: "cover" }}
      variant="top"
      width={100}
      height={100}
      src={logo}
    />}

    <Card.Body>
      <Card.Title>{elem.titre}</Card.Title>
      <Card.Text  style={{textOverflow:"ellipsis",overflow: "hidden"}}>
        {modalShow ? (
          <ModalForm
            key={ind}
            values={valeurmodal}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        ) : null}
{elem.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{display:"flex",justifyContent:"space-between"}}>
    {elem.lien
  ?  <a href={elem.lien} >Source</a> 
  
  : null}
  {" "}

      {elem.creator[0].Nom}
    </Card.Footer>
  </Card>
  </Col>
    )

  
 : (
  <p>Rien a afficher</p>
)}
</Row>
<div style={{display:"flex",justifyContent:"flex-end"}}>

{ cnpmNewsCount > 4 &&
  <PaginationPage
  
    pages={numberOfPages}
    nextPage={nextpage}
    currentPage={currentPage}
    
    tenChange={tenChange}
  >
  </PaginationPage>}
</div>
  </div>
)



};



const Home = () => {
 
  return (
    <Content>
      <div style={{width:"50%",height:"100%",paddingLeft:'30px',paddingRight:'30px',borderRight:"1px solid #d8d8d8",display:"flex",flexDirection:"column"}}>
      <h1 style={{ width: "100%", textAlign: "center",borderBottom: "1px solid #d8d8d8", margin:"10px 0 20px" ,lineHeight: "0.1em", paddingTop:"20px"}}> <span style={{background:"#EAEAEA",padding:"0 10px"}}> Alertes</span></h1>
        <Alertes/>
      </div>
      <div style={{width:"50%",height:"100%",paddingLeft:'30px',paddingRight:'30px',borderLeft:"1px solid #d8d8d8",display:"flex",flexDirection:"column"}}>
      <h1 style={{width: "100%", textAlign: "center",borderBottom: "1px solid #d8d8d8", margin:"10px 0 20px" ,lineHeight: "0.1em", paddingTop:"20px"}}><span style={{background:"#EAEAEA",padding:"0 10px"}}>Actualités </span></h1>
        <News/>      
        </div>

    </Content>
  );
};

export default Home;
