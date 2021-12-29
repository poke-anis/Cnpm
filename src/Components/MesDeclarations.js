import React, { useState,useEffect } from 'react'
import axiosConfig from "./axios"
import styled from 'styled-components'
import { InputText,InputRadio,InputDate,InputSelect,InputFile } from './Declarations/FormikInputs';
import {Card,Badge ,Button,Col} from 'react-bootstrap'
import FormJaune from './MesDeclarations/FormJaune'
import FormBleue from './MesDeclarations/FormBleue'
import FormParme from './MesDeclarations/FormParme'
import FormRose from './MesDeclarations/FormPink'
import FormVerte from './MesDeclarations/FormVerte'
import FormOrange from './MesDeclarations/FormOrange'
import FormBlanche from './MesDeclarations/FormBlanche'
import FormCoronavirus from './MesDeclarations/FormCoronavirus'
import Filtre from './Filtre'
import PaginationPage from './Pagination'
import Switch from "react-switch";

const Content = styled.div`
display:flex;
justify-content:center;
padding: 50px;
width: 100%;

`




const containerDeclarations=(props) =>{

  const {token_key,TypeExecrice,UserType} = props.cookie
return(
  <Content>
  {UserType === 'Cnpm' ?
  <MesDeclarationsCnpm TypeExecrice={TypeExecrice}/>
  
  :UserType === 'Mods'?
 <MesDeclarations cookie={{token_key,UserType}}/>
  
  :null}
  
  
  
  
        
  </Content>)
}

const MesDeclarationsCnpm = (props) =>{
  const [changement,setChangement] = useState(false)
  const {token_key,TypeExecrice} = props
  const [decla,setDecla] = useState([])
    const [currentPage,setCurrentPage]= useState(1)
    const [declanum,setDeclanum]= useState(0)
 
    const [clicked,setClicked] = useState(false)

    const nextpage = (pageNumber) => {

        setCurrentPage(pageNumber)

      getDecla(pageNumber);

    }
    const getDecla = (currentPage) => {

     axiosConfig.get(`/secure/getfichestype?pagination=${'5'}&page=${currentPage}&typeOfFiches=${TypeExecrice}`)
      .then(res => {
        setDecla(res.data);
        })
        
    }
    const getDeclacount = () => {

     axiosConfig.get(`/secure/getfichestypenbr?typeOfFiches=${TypeExecrice}`)
      .then(res => {
        setDeclanum(res.data);
        })
        getDecla(currentPage)
    }
 
    const tenChange = (pageNumber, isposOrneg) => {
      var finalPage;
      if (isposOrneg > 0) //+10 clicked
        finalPage = pageNumber + 10;
      else //-10 clicked
        finalPage = pageNumber - 10;
        setCurrentPage(finalPage)

      getDecla(finalPage);
    }
    let numberOfPages = 0;
    if (declanum % 5 === 0)
      numberOfPages = Math.floor(declanum / 5);
    else
      numberOfPages = Math.floor(declanum / 5) + 1;

      const ThemeColor = (props) =>{
        if (props == undefined) {
          return "Fiche de déclaration ";
        } else if (props === "Jaune") {
          return "primary";
        } else if (props === "Bleue") {
          return "secondary"
        } else if (props === "Blanche") {
          return "danger"
        } else if (props === "Parme") {
          return "success"
        } else if (props === "Verte") {
          return "warning"
        } else if (props === "Rose") {
          return "info"
        } else if (props === "Orange") {
          return "light"
        } else if (props === "Coronavirus") {
          return "danger";
        }
      }
      const typeOfFiches = (props) => {
        if (props === undefined) {
          return "Fiche de déclaration ";
        } else if (props === "Jaune") {
          return "Fiche de Pharmacovigilance";
        } else if (props === "Bleue") {
          return "Fiche de Matériovigilance";
        } else if (props === "Blanche") {
          return "Fiche de Vaccinovigilance";
        } else if (props === "Parme") {
          return "Fiche de Réactovigilance";
        } else if (props === "Verte") {
          return "Fiche de Phytovigilance";
        } else if (props === "Rose") {
          return "Fiche de Cosmétovigilance";
        } else if (props === "Orange") {
          return "Fiche Compléments alimentaires";
        } else if (props === "Coronavirus") {
          return "Fiche de déclaration coronavirus";
        }
      };
  const changestatus = (id,status,key)=>{
  
   axiosConfig.put(`/modfichesData/${id}?status=${status}`)
    .then(res => {
 
      })

      const change = setTimeout(() => {
        setChangement(!changement);
      }, 200);}
      const handleClick = (e,props,key) => {
        e.preventDefault();
        
        setClicked({[props]:key})  }
        useEffect(() => {
          getDeclacount()
        
        }, [])
return(
  <div>
           <Col md={9} className="g-0" >
    {decla.length !== 0  ? decla.map((val,key)=>{
          var date =new Date(val.DateAdded)
  return(
    
       <Card key={key} style={{marginBottom: '20px',marginTop: '20px',width:'100%'}}>
        <Card.Header style={{width:'100%',display:'flex'}}>{date.toLocaleString()}<Badge pill bg={ThemeColor(val.typeOfFiches)} style={{marginLeft:'auto',color: 'black',lineHeight: '2'}}> {typeOfFiches(val.typeOfFiches)}</Badge></Card.Header>
        <Card.Body style={{display:"flex",flexWrap:"wrap",justifyContent:'space-between'}}>
          <Card.Title style={{width:"100%"}} >{val.Cases.Nom} {val.Cases.Prenom}</Card.Title>
          <Switch onChange={()=>changestatus(val._id,!val.status,key)} checked={val.status} />

          <Button variant="secondary"  onClick={(e)=>{handleClick(e,val.typeOfFiches,key)}}>Afficher</Button>
        </Card.Body>
      </Card> )
    }) :null}
</Col>

  {
    declanum > 5 &&
    <PaginationPage
      pages={numberOfPages}
      nextPage={nextpage}
      currentPage={currentPage}
      
      tenChange={tenChange}
    >
    </PaginationPage>
 }
 </div>
)


}

const MesDeclarations =(props)=>{

  const [changement,setChangement] = useState(false)

  const {token_key,TypeExecrice,UserType} = props.cookie
  const [decla,setDecla] = useState([])
    const [currentPage,setCurrentPage]= useState(1)
    const [declanum,setDeclanum]= useState(0)
 
    const [clicked,setClicked] = useState(false)

    const nextpage = (pageNumber) => {

        setCurrentPage(pageNumber)

      getDecla(pageNumber);

    }
    const getDecla = (currentPage) => {

     axiosConfig.get(`/secure/getfichesData?pagination=${'5'}&page=${currentPage}`)
      .then(res => {
        console.log(res.data)
        setDecla(res.data);
        })
        
    }
    const getDeclacount = () => {

     axiosConfig.get(`/secure/getfichesnbr`)
      .then(res => {
        console.log(res.data)
        setDeclanum(res.data);
        })
        getDecla(currentPage)
    }
 
    const tenChange = (pageNumber, isposOrneg) => {
      var finalPage;
      if (isposOrneg > 0) //+10 clicked
        finalPage = pageNumber + 10;
      else //-10 clicked
        finalPage = pageNumber - 10;
        setCurrentPage(finalPage)

      getDecla(finalPage);
    }
    let numberOfPages = 0;
    if (declanum % 5 === 0)
      numberOfPages = Math.floor(declanum / 5);
    else
      numberOfPages = Math.floor(declanum / 5) + 1;


    const CompRender = (props) => {
      if (props === undefined) {
        
        return "Fiche de déclaration ";
      } else if (Object.keys(props)[0]=== "Jaune") {
        return <FormJaune decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Bleue") {
        return <FormBleue decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Blanche") {
        return <FormBlanche decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Parme") {
        return <FormParme decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Verte") {
        return <FormVerte decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Rose") {
        return <FormRose decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Orange") {
        return <FormOrange decla={decla[Object.values(props)[0]]}/>;
      } else if (Object.keys(props)[0] === "Coronavirus") {
        return <FormCoronavirus decla={decla[Object.values(props)[0]]}/>;
      }
    };
    
useEffect(() => {
  getDeclacount()


}, [changement])

    return(   
        <div style={{width:'80%',display:"flex",flexDirection:"column",alignItems:"center"}}>
          {
  clicked === false ?null:<Button onClick={()=>{setClicked(false)}}>Retour</Button>
  }


{
  clicked === false ?<Filtre setClicked={setClicked} decla={decla} changement={changement} setChangement={setChangement}/>:CompRender(clicked)
  }

  {
    declanum > 5 && clicked === false&&
    <PaginationPage
    
      pages={numberOfPages}
      nextPage={nextpage}
      currentPage={currentPage}
      
      tenChange={tenChange}
    >
    </PaginationPage>
 }

</div>
    )

}




export default containerDeclarations;