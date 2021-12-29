
import React, { useState } from 'react'

import './Switch.css';
import {Card,Badge ,Button,Col,Row} from 'react-bootstrap'
import axiosConfig from "./axios"
import './Button.css'
import Switch from "react-switch";
import { InputText,InputRadio,InputDate,InputSelect,InputFile } from './Declarations/FormikInputs';

const mailContent=" Votre formulaire est en cours de traitement par la Cnpm"
// const Switch = ({ isOn, handleToggle,nbr }) => {
//   console.log(nbr)
//   return (
//     <div key={nbr} id={`${nbr}`}>
//       <input
        
//         checked={isOn}
//         onChange={handleToggle}
//         className="react-switch-checkbox"
//         id={`react-switch-new`}
//         type="checkbox"
//       />
//       <label
      
//       style={{ background: isOn && '#06D6A0' }}
//         className="react-switch-label"
//         htmlFor={`react-switch-new`}
//       >
//         <span className={`react-switch-button`} />
//       </label>
//     </div>
//   );
// };

const Filtre = (props,isMulti) =>{
    const {setClicked,decla,setChangement,changement,selectedValue} = props

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
    const handleClick = (e,props,key) => {
      e.preventDefault();
      
      setClicked({[props]:key})  }
    


const ThemeColor = (props) =>{
  if (props === undefined) {
    return "Fiche de déclaration ";
  } else if (props === "Jaune") {
    return "yellow";
  } else if (props === "Bleue") {
    return "blue"
  } else if (props === "Blanche") {
    return "blanche"
  } else if (props === "Parme") {
    return "parme"
  } else if (props === "Verte") {
    return "vert"
  } else if (props === "Rose") {
    return "rose"
  } else if (props === "Orange") {
    return "orange"
  } else if (props === "Coronavirus") {
    return "blanche";
  }
}
  const changestatus = (id,status,status_Type,Email,Username)=>{
    console.log(Email)
if(status_Type === null){
  axiosConfig.put(`/secure/modfichesData/${id}?status=${status}`)
  .then(res => {
    })
    const change = setTimeout(() => {
      setChangement(!changement);
    }, 200) 
    if(Email && status){
      axiosConfig.post(`/send/?name=Cnpm&email=${Email}&messageHtml=Bonjour%0D%0A${Username}%0D%0A${mailContent}`)
      .then((response)=>{
        if (response.data.msg === 'success'){
            alert("Email sent, awesome!");
           
        }else if(response.data.msg === 'fail'){
            alert("Oops, something went wrong. Try again")
        }
        })
    }

}else{
  axiosConfig.put(`/secure/modfichesData/${id}?status=${status}&status_Type=${status_Type}`)
  .then(res => {
    console.log(res)
    })
    const change = setTimeout(() => {
      setChangement(!changement);
    }, 100)
}

  }
      return(
       <div  style={{width:'65%',height: '100%',display:'flex',flexDirection:'column',paddingLeft:"20px"}}>
         
{/*         <CreatableSelect
         options={DeclaTypes} 
      name="Search"
      onChange={(val) =>
        isMulti ? onChange(val.map((c) => c.value)) : onChange(val.value)
      }
      isMulti
      isClearable
    /> */}
       <Col md={10} className="g-0" >
    {decla.length !== 0  ? decla.filter((singledecla)=> selectedValue == "" ?singledecla:
    selectedValue.some((val)=>val.includes(singledecla.typeOfFiches))? singledecla :
      null).map((val,key)=>{
        
          var date =new Date(val.DateAdded)
  return(
     
       <Card key={key} style={{marginBottom: '20px',marginTop: '20px',width:'100%',height:"22%"}}>
        <Card.Header style={{width:'100%',display:'flex'}}>{date.toLocaleString()}<Badge pill bg={ThemeColor(val.typeOfFiches)} style={{marginLeft:'auto',color: 'black',lineHeight: '2'}}> {typeOfFiches(val.typeOfFiches)}</Badge></Card.Header>
        <Card.Body style={{display:"flex",flexWrap:"wrap",justifyContent:'space-between',alignItems:"flex-start"}}>
          <Card.Title style={{width:"100%"}}>{val.Cases.Nom} {val.Cases.Prenom}</Card.Title>
          <Button variant="secondary" style={{height:"40px"}} onClick={(e)=>{handleClick(e,val.typeOfFiches,key)}}>Afficher</Button>
<div style={{display:"flex",flexDirection:'column'}}>
  <div style={{display:"flex"}}>
<Switch onChange={()=>changestatus(val._id,!val.status,null,val.creator.Email,val.creator.Username)} checked={val.status} />
<p>Vu</p>
</div>
      {val.status === true?<select style={{marginTop:"5px"}} onChange={(el)=>changestatus(val._id,val.status,el.target.value)} value={val.status_Type} id={"Statut"}>
          {["En cours","Traité"].map((content, key) => {
            return (
              <option name={`${content}`} value={`${content}`} key={key}>
                {`${content}`}
              </option>
            );
          })}
        </select> :null}</div>
      
       

        </Card.Body>
      </Card> 
    
      )
    }) :null}
</Col>
</div>
  
    )
}


export default Filtre;