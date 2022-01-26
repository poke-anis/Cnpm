
import React, { useRef,useState } from 'react'
import './Switch.css';
import {Card,Badge ,Button,Col,Row} from 'react-bootstrap'
import axiosConfig from "./axios"
import './Button.css'
import Switch from "react-switch";
import { FaPrint,FaPlus,FaRegTimesCircle } from "react-icons/fa";
import { useReactToPrint,ReactToPrint } from 'react-to-print';
import FormJaune from './MesDeclarations/FormJaune'
import FormBleue from './MesDeclarations/FormBleue'
import FormParme from './MesDeclarations/FormParme'
import FormRose from './MesDeclarations/FormPink'
import FormVerte from './MesDeclarations/FormVerte'
import FormOrange from './MesDeclarations/FormOrange'
import FormBlanche from './MesDeclarations/FormBlanche'
import FormCoronavirus from './MesDeclarations/FormCoronavirus'


var optionstime = {year: "numeric", month: "long", day: "numeric",hour:"numeric",minute:"numeric"};

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
  const [print,setPrint] = useState(false)
  
    const {setClicked,decla,setChangement,changement,selectedValue,selectedValueEtat} = props

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
  } else if (props === "Patient") {
    return "blanche";
  }
}
  const changestatus = (id,status,status_Type,Email,Username)=>{
 
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
 
    })
    const change = setTimeout(() => {
      setChangement(!changement);
    }, 100)
}

  }

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
      return (
        <div
          style={{
            width: "65%",

            
            paddingLeft: "20px",
          }}
        >
          {/*         <CreatableSelect
         options={DeclaTypes} 
      name="Search"
      onChange={(val) =>
        isMulti ? onChange(val.map((c) => c.value)) : onChange(val.value)
      }
      isMulti
      isClearable
    /> */}
          <Col md={10} className="g-0">
            {decla.length !== 0
              ? decla
                //   .filter((singledecla) =>
                //     selectedValue == ""
                //       ? singledecla
                //       : selectedValue.some((val) =>
                //           val.includes(singledecla.typeOfFiches)
                //         )
                //       ? singledecla
                //       : null
                //   ).filter((singledecla) =>
                //   selectedValueEtat == ""
                //     ? singledecla
                //     : selectedValueEtat.some((val) =>
                //         val.includes(singledecla.status_Type||singledecla.status)
                //       )
                //     ? singledecla
                //     : null
                // )
                  .map((val, key) => {
                    var date = new Date(val.DateAdded);
                    return (
                      <Card
                        key={key}
                        style={{
                          marginBottom: "20px",
                          marginTop: "20px",
                          width: "100%",
                          height: "15%",
                        }}
                      >
                        <Card.Header style={{ width: "100%", display: "flex" }}>
                          {date.toLocaleString("fr-FR",optionstime)}
                          <Badge
                            pill
                            bg={ThemeColor(val.typeOfFiches)}
                            style={{
                              marginLeft: "auto",
                              color: "black",
                              lineHeight: "2",
                            }}
                          >
                            {" "}
                            {typeOfFiches(val.typeOfFiches)}
                          </Badge>
                        </Card.Header>
                        <Card.Body
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                          }}
                        >
                          <Card.Title>
                            {val.Cases.Nom} {val.Cases.Prenom}
                          </Card.Title>

                          {/*           <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => componentRef.current}
      /> */}
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <div style={{ display: "flex" }}>
                              <Switch
                                onChange={() =>
                                  changestatus(
                                    val._id,
                                    !val.status,
                                    null,
                                    val.creator.Email,
                                    val.creator.Username
                                  )
                                }
                                checked={val.status}
                              />
                              <p>Vu</p>
                            </div>
                            {val.status === true ? (
                              <select
                                style={{ marginTop: "5px" }}
                                onChange={(el) =>
                                  changestatus(
                                    val._id,
                                    val.status,
                                    el.target.value
                                  )
                                }
                                value={val.status_Type}
                                id={"Statut"}
                              >
                                {["","En cours", "Traité"].map((content, key) => {
                                  return (
                                    <option
                                      name={`${content}`}
                                      value={`${content}`}
                                      key={key}
                                    >
                                      {`${content}`}
                                    </option>
                                  );
                                })}
                              </select>
                            ) : null}
                          </div>
                        </Card.Body>
                        <Card.Footer
                          style={{
                             display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "flex-start", 
                          }}
                        >
                          <Button
                            variant="secondary"
                            style={{ height: "40px" }}
                            onClick={(e) => {
                              handleClick(e, val.typeOfFiches, key);
                            }}
                          >
                            Afficher
                          </Button>
                          <Button
                            onClick={(e) => {
                              HandlePrint(e, val.typeOfFiches, key);
                            }}
                          >
                            <FaPrint />
                          </Button>
                        </Card.Footer>
                      </Card>
                    );
                  })
              : null}
            {print ? (
              <div style={{ display: "none" }}>{CompRender(print)}</div>
            ) : null}
          </Col>
        </div>
      );
}


export default Filtre;