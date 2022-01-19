import React, { useState,useEffect,useRef } from 'react'
import axiosConfig from "./axios"
import styled from 'styled-components'
import { FaPrint,FaPlus,FaRegTimesCircle } from "react-icons/fa";
import { useReactToPrint,ReactToPrint } from 'react-to-print';
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
import CreatableSelect  from 'react-select/creatable';
const Content = styled.div`
display:flex;
justify-content:center;
width: 100%;
height: 100vmax;
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
  const [print,setPrint] = useState(false)
  const [changement,setChangement] = useState(false)
  const {token_key,TypeExecrice} = props
  console.log(TypeExecrice)
  const [decla,setDecla] = useState([])
    const [currentPage,setCurrentPage]= useState(1)
    const [declanum,setDeclanum]= useState(0)
 
    const [clicked,setClicked] = useState(false)

    const nextpage = (pageNumber) => {

        setCurrentPage(pageNumber)

      getDecla(pageNumber);

    }
    const getDecla = (currentPage) => {

     axiosConfig.get(`/secure/getfichestype?pagination=${'5'}&page=${currentPage}&typeOfFiches=[${TypeExecrice.map((el)=>`"${el}"`)}]`)
      .then(res => {
        setDecla(res.data);
        })
        
    }
    const getDeclacount = () => {

     axiosConfig.get(`/secure/getfichestypenbr?typeOfFiches=[${TypeExecrice.map((el)=>`"${el}"`)}]`)
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
        } else if (props === "Patient") {
          return "blanche";
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
        } else if (props === "Patient") {
          return "Fiche de déclaration Patient";
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
        const componentRef = useRef();
        const CompRender = (props) => {
          if (props === undefined) {
            
            return "Fiche de déclaration ";
          } else if (Object.keys(props)[0]=== "Jaune") {
            return <FormJaune  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Bleue") {
            return <FormBleue  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Blanche") {
            return <FormBlanche  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Parme") {
            return <FormParme  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Verte") {
            return <FormVerte  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Rose") {
            return <FormRose  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Orange") {
            return <FormOrange  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          } else if (Object.keys(props)[0] === "Coronavirus") {
            return <FormCoronavirus  decla={decla[Object.values(props)[0]]} ref={componentRef}/>;
          }
        };
        
        const handlePrint = useReactToPrint({
    
          content: () => componentRef.current,
        })
        const HandlePrint = (e,props,key) => {
      setPrint({[props]:key})
           const change = setTimeout(() => {

          handlePrint()},300) 
        } 
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

        </Card.Body>
        <Card.Footer style={{display:"flex",flexWrap:"wrap",justifyContent:'space-between',alignItems:"flex-start"}}>
        <Button variant="secondary" style={{height:"40px"}} onClick={(e)=>{handleClick(e,val.typeOfFiches,key)}}>Afficher</Button>
          <Button onClick={(e)=>{HandlePrint(e,val.typeOfFiches,key)}}><FaPrint/></Button> 
        </Card.Footer>
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

const MesDeclarations =(props,isMulti)=>{
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedValueToSend, setSelectedValueToSend] = useState([]);
  const [selectedValueEtat ,setSelectedValueEtat] = useState("")
  const [selectedValueEtatToSend ,setSelectedValueEtatToSend] = useState([])
  const [numberOfPages ,setNumberOfPages] = useState(0)

  const Etat =[
    { label: "Non Vu", value: 'false' },
    { label: "Vu", value: 'true' },
    { label: "Traité", value: "Traité" },
    { label: "En cours", value: "En cours" },

  ]

  const DeclaTypes = [
    { label: "Fiche de Pharmacovigilance", value: "Jaune" },
    { label: "Fiche de Matériovigilance", value: "Bleue" },
    { label: "Fiche de Vaccinovigilance", value: "Blanche" },
    { label: "Fiche de Réactovigilance", value: "Parme" },
    { label: "Fiche de Phytovigilance", value: "Verte" },
    { label: "Fiche de Cosmétovigilance", value: "Rose" },
    { label: "Fiche Compléments alimentaires", value: "Orange" },
    { label: "Fiche de déclaration coronavirus", value: "Coronavirus" },
  ];
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

     axiosConfig.get(`/secure/getfichestype?pagination=${'5'}&page=${currentPage}&typeOfFiches=[${selectedValueToSend.map((el)=>`"${el}"`)}]&status=[${selectedValueEtatToSend.map((el)=>`"${el}"`)}]`)
      .then(res => {
     
        setDecla(res.data);
        })
        
    }
    const getDeclacount = () => {

     axiosConfig.get(`/secure/getfichestypenbr?typeOfFiches=[${selectedValueToSend.map((el)=>`"${el}"`)}]&status=[${selectedValueEtatToSend.map((el)=>`"${el}"`)}]`)
      .then(res => {

        setDeclanum(res.data);
        if (res.data % 5 === 0)
        setNumberOfPages(Math.floor(res.data / 5))
      else
      {setNumberOfPages(Math.floor(res.data / 5) + 1)}
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

}, [changement,selectedValue,selectedValueEtatToSend])

const onChange = (value) => {
  setSelectedValue(value)
  if(value.length === 0)
  {
    setSelectedValueToSend([])
  }
  else{
    setSelectedValueToSend(value)
  }

};
const onChangeEtat = (value) => {
  setSelectedValueEtat(value)
  if(value.length === 0)
  {
    setSelectedValueEtatToSend([])
  }
  else{
    setSelectedValueEtatToSend(value)
  }


};

    return(   
        <div style={{width:'100%',height:"100%",display:"flex",flexWrap:"wrap"}}>
                  
                  {
  clicked === false ?
  <div style={{height:"100%",width:"20%",paddingTop:"30px",backgroundColor: "#272727"}} >
    <div style={{color:"white"}}>Filtre:</div>
    <div style={{color:"white"}}>Par Type:</div>
  <CreatableSelect
  options={DeclaTypes} 
name="TYPEDEDECLA"
onChange={(val) =>
 isMulti ? onChange(val.map((c) => c.value)) : onChange(val.value)
}
isMulti
isClearable

/>
<div style={{color:"white"}}>Par Etat:</div>
<CreatableSelect
  options={Etat} 
name="ETAT"
onChange={(val) =>
 true ? onChangeEtat(val.map((c) => c.value)) : onChangeEtat(val.value)
}
isMulti
isClearable

/>
</div>:null
  }

{
  clicked === false ?null:<Button onClick={()=>{setClicked(false)}} style={{position: "fixed",top: "350px",right: "20px"}}>Retour</Button>
  }
{
  clicked === false ?<Filtre setClicked={setClicked} decla={decla} changement={changement} setChangement={setChangement} selectedValue={selectedValue} selectedValueEtat={selectedValueEtat}/>:CompRender(clicked)
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