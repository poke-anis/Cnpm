// import React, { useRef, useState } from "react";
// import "./Switch.css";
// import { Card, Badge, Button, Col, Row } from "react-bootstrap";
// import axiosConfig from "./axios";

// import Switch from "react-switch";
// import { FaPrint } from "react-icons/fa";
// import { useReactToPrint, ReactToPrint } from "react-to-print";
// import FormJaune from "./MesDeclarations/FormJaune";
// import FormBleue from "./MesDeclarations/FormBleue";
// import FormParme from "./MesDeclarations/FormParme";
// import FormRose from "./MesDeclarations/FormPink";
// import FormVerte from "./MesDeclarations/FormVerte";
// import FormOrange from "./MesDeclarations/FormOrange";
// import FormBlanche from "./MesDeclarations/FormBlanche";
// import FormCoronavirus from "./MesDeclarations/FormCoronavirus";
// import Swal from "sweetalert2";
// import FormPatient from "./MesDeclarations/FormPatient";

// var optionstime = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
// };




// const Filtre = (props, isMulti) => {
//   const [print, setPrint] = useState(false);

//   const {
//     setClicked,
//     decla,
//     setChangement,
//     changement,
//     selectedValue,
//     selectedValueEtat,
//   } = props;





//   const changestatus = (id, status, status_Type, Email, Username) => {
//     if (status_Type === null) {
//       axiosConfig
//         .put(`/secure/modfichesData/${id}?status=${status}`)
//         .then((res) => {});
//       const change = setTimeout(() => {
//         setChangement(!changement);
//       }, 200);
//       if (Email && status) {
//         Swal.fire({
//           title: "Chargement",

//           showSpinner: true,
//         })
//           .then(Swal.showLoading())
//           .then(
//             axiosConfig
//               .post(`/send/?name=Cnpm&email=${Email}&messageHtml=Cnpm`)
//               .then((response) => {
//                 if (response.data.msg === "success") {
//                   Swal.fire("Success!", "Message envoy??", "success");
//                 } else if (response.data.msg === "fail") {
//                   Swal.fire("Error!", "Veuillez ressayer", "error");
//                 }
//               })
//           );
//       }
//     } else {
//       axiosConfig
//         .put(
//           `/secure/modfichesData/${id}?status=${status}&status_Type=${status_Type}`
//         )
//         .then((res) => {});
//       const change = setTimeout(() => {
//         setChangement(!changement);
//       }, 100);
//     }
//   };

//   const componentRef = useRef();
//   const CompRender = (props) => {
//     if (props === undefined) {
//       return "Fiche de d??claration ";
//     } else if (Object.keys(props)[0] === "Jaune") {
//       return (
//         <FormJaune decla={decla[Object.values(props)[0]]} ref={componentRef} />
//       );
//     } else if (Object.keys(props)[0] === "Bleue") {
//       return (
//         <FormBleue decla={decla[Object.values(props)[0]]} ref={componentRef} />
//       );
//     } else if (Object.keys(props)[0] === "Blanche") {
//       return (
//         <FormBlanche
//           decla={decla[Object.values(props)[0]]}
//           ref={componentRef}
//         />
//       );
//     } else if (Object.keys(props)[0] === "Parme") {
//       return (
//         <FormParme decla={decla[Object.values(props)[0]]} ref={componentRef} />
//       );
//     } else if (Object.keys(props)[0] === "Verte") {
//       return (
//         <FormVerte decla={decla[Object.values(props)[0]]} ref={componentRef} />
//       );
//     } else if (Object.keys(props)[0] === "Rose") {
//       return (
//         <FormRose decla={decla[Object.values(props)[0]]} ref={componentRef} />
//       );
//     } else if (Object.keys(props)[0] === "Orange") {
//       return (
//         <FormOrange decla={decla[Object.values(props)[0]]} ref={componentRef} />
//       );
//     } else if (Object.keys(props)[0] === "Coronavirus") {
//       return (
//         <FormCoronavirus
//           decla={decla[Object.values(props)[0]]}
//           ref={componentRef}
//         />
//       );
//     }else if (Object.keys(props)[0] === "Patient") {
//       return (
//         <FormPatient
//           decla={decla[Object.values(props)[0]]}
//           ref={componentRef}
//         />
//       );
//     }
//   };

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });
//   const HandlePrint = (e, props, key) => {
//     setPrint({ [props]: key });
//     const change = setTimeout(() => {
//       handlePrint();
//     }, 300);
//   };
//   return (
//     <div
//       style={{
//         width: "65%",

//         paddingLeft: "20px",
//       }}
//     >

//       <Col md={10} className="g-0">
//         {decla.length !== 0
//           ? decla.map((val, key) => {
//               var date = new Date(val.DateAdded);
//               return (
//                 <Card
//                   key={key}
//                   style={{
//                     marginBottom: "20px",
//                     marginTop: "20px",
//                     width: "100%",
//                     height: "15%",
//                   }}
//                 >
//                   <Card.Header style={{ width: "100%", display: "flex" }}>
//                     {date.toLocaleString("fr-FR", optionstime)}
//                     <Badge
//                       pill
//                       bg={ThemeColor(val.typeOfFiches)}
//                       style={{
//                         marginLeft: "auto",
//                         color: "black",
//                         lineHeight: "2",
//                       }}
//                     >
//                       {" "}
//                       {typeOfFiches(val.typeOfFiches)}
//                     </Badge>
//                   </Card.Header>
//                   <Card.Body
//                     style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <Card.Title>
//                       {val.Cases.Nom} {val.Cases.Prenom}
//                     </Card.Title>

//                     {/*           <ReactToPrint
//         trigger={() => <Button>Print this out!</Button>}
//         content={() => componentRef.current}
//       /> */}
//                     <div style={{ display: "flex", flexDirection: "column" }}>
//                       <div style={{ display: "flex" }}>
//                         <Switch
//                           onChange={() =>
//                             changestatus(
//                               val._id,
//                               !val.status,
//                               null,
//                               val.creator.Email,
//                               val.creator.Username
//                             )
//                           }
//                           checked={val.status}
//                         />
//                         <p>Vu</p>
//                       </div>

//                       <select
//                         disabled={val.status === true ? false : true}
//                         style={{ marginTop: "5px" }}
//                         onChange={(el) =>
//                           changestatus(val._id, val.status, el.target.value)
//                         }
//                         value={val.status_Type}
//                         id={"Statut"}
//                       >
//                         {["", "En cours", "Trait??"].map((content, key) => {
//                           return (
//                             <option
//                               name={`${content}`}
//                               value={`${content}`}
//                               key={key}
//                             >
//                               {`${content}`}
//                             </option>
//                           );
//                         })}
//                       </select>
//                     </div>
//                   </Card.Body>
//                   <Card.Footer
//                     style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <Button
//                       variant="secondary"
//                       style={{ height: "40px" }}
//                       onClick={(e) => {
//                         handleClick(e, val.typeOfFiches, key);
//                       }}
//                     >
//                       Afficher
//                     </Button>
//                     <Button
//                       onClick={(e) => {
//                         HandlePrint(e, val.typeOfFiches, key);
//                       }}
//                     >
//                       <FaPrint />
//                     </Button>
//                   </Card.Footer>
//                 </Card>
//               );
//             })
//           : null}
//         {print ? (
//           <div style={{ display: "none" }}>{CompRender(print)}</div>
//         ) : null}
//       </Col>
//     </div>
//   );
// };

