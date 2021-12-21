
import React, { useState } from 'react'
import CreatableSelect  from 'react-select/creatable';
import './Switch.css';
import {Card,Badge ,Button,Col} from 'react-bootstrap'
import axiosConfig from "./axios"
import './Button.css'
import Switch from "react-switch";

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


    const {setClicked,decla,setChangement,changement} =props

    const [selectedValue, setSelectedValue] = useState("");

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
      const onChange = (value) => {
        setSelectedValue(value)
    };
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
  const changestatus = (id,status,key)=>{

    axiosConfig.put(`/modfichesData/${id}?status=${status}`)
    .then(res => {

      })

      const change = setTimeout(() => {
        setChangement(!changement);
      }, 200);
  }
      return(
       <div  style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
         
        <CreatableSelect
         options={DeclaTypes} 
      name="Search"
      onChange={(val) =>
        isMulti ? onChange(val.map((c) => c.value)) : onChange(val.value)
      }
      isMulti
      isClearable
    />
       <Col md={9} className="g-0" >
    {decla.length !== 0  ? decla.filter((singledecla)=> selectedValue == "" ?singledecla:
    selectedValue.some((val)=>val.includes(singledecla.typeOfFiches))? singledecla :
      null).map((val,key)=>{
        
          var date =new Date(val.DateAdded)
  return(
    
       <Card key={key} style={{marginBottom: '20px',marginTop: '20px',width:'100%'}}>
        <Card.Header style={{width:'100%',display:'flex'}}>{date.toLocaleString()}<Badge pill bg={ThemeColor(val.typeOfFiches)} style={{marginLeft:'auto',color: 'black',lineHeight: '2'}}> {typeOfFiches(val.typeOfFiches)}</Badge></Card.Header>
        <Card.Body style={{display:"flex",flexWrap:"wrap",justifyContent:'space-between'}}>
          <Card.Title style={{width:"100%"}}>{val.Cases.Nom} {val.Cases.Prenom}</Card.Title>
          <Button variant="secondary"  onClick={(e)=>{handleClick(e,val.typeOfFiches,key)}}>Afficher</Button>

      <Switch onChange={()=>changestatus(val._id,!val.status,key)} checked={val.status} />
        </Card.Body>
      </Card> )
    }) :null}
</Col>
</div>
  
    )
}


export default Filtre;