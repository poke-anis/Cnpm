import React, { useState, useEffect, useRef } from "react";
import axiosConfig from "./axios";
import styled from "styled-components";
import { FaPrint,FaRegTimesCircle } from "react-icons/fa";
import { useReactToPrint, ReactToPrint } from "react-to-print";
import { Card, Badge, Button, Col,ProgressBar } from "react-bootstrap";

import FormJaune from "./MesDeclarations/FormJaune";
import FormPatient from "./MesDeclarations/FormPatient";
import FormBleue from "./MesDeclarations/FormBleue";
import FormParme from "./MesDeclarations/FormParme";
import FormRose from "./MesDeclarations/FormPink";
import FormVerte from "./MesDeclarations/FormVerte";
import FormOrange from "./MesDeclarations/FormOrange";
import FormBlanche from "./MesDeclarations/FormBlanche";
import FormCoronavirus from "./MesDeclarations/FormCoronavirus";
import PaginationPage from "./Pagination";
import Switch from "react-switch";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";

import "./Switch.css";

const components = {
  DropdownIndicator: null,
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

var optionstime = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};



const CardDeclarations = (props) => {
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
  const ThemeColor = (props) => {
    if (props === undefined) {
      return "Fiche de déclaration ";
    } else if (props === "Jaune") {
      return "yellow";
    } else if (props === "Bleue") {
      return "blue";
    } else if (props === "Blanche") {
      return "blanche";
    } else if (props === "Parme") {
      return "parme";
    } else if (props === "Verte") {
      return "vert";
    } else if (props === "Rose") {
      return "rose";
    } else if (props === "Orange") {
      return "orange";
    } else if (props === "Coronavirus") {
      return "blanche";
    } else if (props === "Patient") {
      return "blanche";
    }
  };
  const changestatus = (id, status, status_Type, Email, Username) => {
    if (status_Type === null) {
      axiosConfig
        .put(`/secure/modfichesData/${id}?status=${status}`)
        .then((res) => {});
      const change = setTimeout(() => {
        setChangement(!changement);
      }, 200);
      if (Email && status) {
        Swal.fire({
          title: "Chargement",

          showSpinner: true,
        })
          .then(Swal.showLoading())
          .then(
            axiosConfig
              .post(
                `/send/?name=Cnpm&email=${Email}&messageHtml=Cnpm`
              )
              .then((response) => {
                if (response.data.msg === "success") {
                  Swal.fire("Success!", "Message envoyé", "success");
                } else if (response.data.msg === "fail") {
                  Swal.fire("Error!", "Veuillez ressayer", "error");
                }
              })
          );
      }
    } else {
      axiosConfig
        .put(
          `/secure/modfichesData/${id}?status=${status}&status_Type=${status_Type}`
        )
        .then((res) => {});
      const change = setTimeout(() => {
        setChangement(!changement);
      }, 100);

      if (status_Type =="En cours" && status){
        axiosConfig
        .post(
          `/send/?name=Cnpm&email=${Email}&messageHtml=CnpmStatus`
        )
        .then((response) => {
          if (response.data.msg === "success") {
            Swal.fire("Success!", "Message envoyé", "success");
          } else if (response.data.msg === "fail") {
            Swal.fire("Error!", "Veuillez ressayer", "error");
          }
        })
  
  
  
      }
    }



  };

  const {
    decla,
    handleClick,
    HandlePrint,
    changement,
    setChangement,
    CompRender,
    print,
    progress,
    deleteFiche
  } = props;
  return (

      <Col md={10} className="g-0">
        {decla.length !== 0
          ? decla.map((val, key) => {
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
                    {date.toLocaleString("fr-FR", optionstime)}
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
                      {val.id}
                    </Card.Title>

                    {/*           <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => componentRef.current}
      /> */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
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

                      <select
                        disabled={val.status === true ? false : true}
                        style={{ marginTop: "5px" }}
                        onChange={(el) =>
                          changestatus(val._id, val.status, el.target.value,val.creator.Email)
                        }
                        value={val.status_Type}
                        id={"Statut"}
                      >
                        {["", "En cours", "Traité"].map((content, key) => {
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
{/*                     <Button
                      onClick={(e) => {
                        deleteFiche(val._id);
                      }}
                    >
                      <FaRegTimesCircle/>
                    </Button> */}
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
          : <ProgressBar animated now={progress} />}
        {print ? (
          <div style={{ display: "none" }}>{CompRender(print)}</div>
        ) : null}
      </Col>

  );
};

const Paginations = (props) => {
  const { declanum, clicked, numberOfPages, nextpage, currentPage, tenChange ,fiveChange,threeChange} =
    props.data;
  return (
    declanum > 5 &&
    clicked === false && (
      <PaginationPage
        pages={numberOfPages}
        nextPage={nextpage}
        currentPage={currentPage}
        tenChange={tenChange}
        fiveChange={fiveChange}
        threeChange={threeChange}
      ></PaginationPage>
    )
  );
};

const containerDeclarations = (props) => {
  const { token_key, TypeExecrice, UserType } = props.cookie;
  return (
    <Content>
      <MesDeclarations
        cookie={{ token_key, UserType }}
        TypeExecrice={TypeExecrice}
      />
    </Content>
  );
};

const MesDeclarations = (props, isMulti) => {
  const [print, setPrint] = useState(false);

  const { TypeExecrice, cookie } = props;
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedValueToSend, setSelectedValueToSend] = useState([]);
  const [selectedValueEtat, setSelectedValueEtat] = useState("");
  const [selectedValueEtatToSend, setSelectedValueEtatToSend] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [selectedValueSearch, setSelectedValueSearch] = useState("");
  const [selectedValueSearchToSend, setSelectedValueSearchToSend] = useState(
    []
  );

  const Etat = [
    { label: "Non Vu", value: "false" },
    { label: "Vu", value: "true" },
    { label: "Traité", value: "Traité" },
    { label: "En cours", value: "En cours" },
  ];

  const DeclaTypes = [
    { label: "Fiche de Pharmacovigilance", value: "Jaune" },
    { label: "Fiche de Matériovigilance", value: "Bleue" },
    { label: "Fiche de Vaccinovigilance", value: "Blanche" },
    { label: "Fiche de Réactovigilance", value: "Parme" },
    { label: "Fiche de Phytovigilance", value: "Verte" },
    { label: "Fiche de Cosmétovigilance", value: "Rose" },
    { label: "Fiche Compléments alimentaires", value: "Orange" },
    { label: "Fiche de déclaration coronavirus", value: "Coronavirus" },
    { label: "Fiche de déclaration Patient", value: "Patient" },
  ];
  const [changement, setChangement] = useState(false);

  const [decla, setDecla] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [declanum, setDeclanum] = useState(0);
  const [progress,setProgress] = useState(0)
  const [clicked, setClicked] = useState(false);

  const nextpage = (pageNumber) => {
    setCurrentPage(pageNumber);

    getDecla(pageNumber);
  };
  const getDecla = (currentPage) => {
    if (cookie.UserType === "Cnpm") {
      axiosConfig
        .get(
          `/secure/getfichestype?pagination=${"5"}&page=${currentPage}&typeOfFiches=[${TypeExecrice.map(
            (el) => `"${el}"`
          )}]&status=[${selectedValueEtatToSend.map(
            (el) => `"${el}"`
          )}]&search="${selectedValueSearchToSend}"`
        ,{
          onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted);
          }})
        .then((res) => {
          setDecla(res.data);
        });
    } else {
      axiosConfig
        .get(
          `/secure/getfichestype?pagination=${"5"}&page=${currentPage}&typeOfFiches=[${selectedValueToSend.map(
            (el) => `"${el}"`
          )}]&status=[${selectedValueEtatToSend.map(
            (el) => `"${el}"`
          )}]&search="${selectedValueSearchToSend}"`
        ,{
          onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted);
          }})
        .then((res) => {
          setDecla(res.data);
        });
    }
  };
  const getDeclacount = () => {
    if (cookie.UserType === "Cnpm") {
      axiosConfig
        .get(
          `/secure/getfichestypenbr?typeOfFiches=[${TypeExecrice.map(
            (el) => `"${el}"`
          )}]&status=[${selectedValueEtatToSend.map(
            (el) => `"${el}"`
          )}]&search="${selectedValueSearchToSend}"`
        )
        .then((res) => {
          setDeclanum(res.data);
          if (res.data % 5 === 0) setNumberOfPages(Math.floor(res.data / 5));
          else {
            setNumberOfPages(Math.floor(res.data / 5) + 1);
          }
        });
      getDecla(currentPage);
    } else {
      axiosConfig
        .get(
          `/secure/getfichestypenbr?typeOfFiches=[${selectedValueToSend.map(
            (el) => `"${el}"`
          )}]&status=[${selectedValueEtatToSend.map(
            (el) => `"${el}"`
          )}]&search="${selectedValueSearchToSend}"`
        )
        .then((res) => {
          setDeclanum(res.data);
          if (res.data % 5 === 0) setNumberOfPages(Math.floor(res.data / 5));
          else {
            setNumberOfPages(Math.floor(res.data / 5) + 1);
          }
        });
      getDecla(currentPage);
    }
  };

  const tenChange = (pageNumber, isposOrneg) => {
    var finalPage;
    if (isposOrneg > 0) finalPage = pageNumber + 10;
    else finalPage = pageNumber - 10;
    setCurrentPage(finalPage);

    getDecla(finalPage);
  };
  const fiveChange = (pageNumber, isposOrneg) => {
    var finalPage;
    if (isposOrneg > 0) finalPage = pageNumber + 5;
    else finalPage = pageNumber - 5;
    setCurrentPage(finalPage);

    getDecla(finalPage);
  };
  const threeChange = (pageNumber, isposOrneg) => {
    var finalPage;
    if (isposOrneg > 0) finalPage = pageNumber + 3;
    else finalPage = pageNumber - 3;
    setCurrentPage(finalPage);

    getDecla(finalPage);
  };
  const CompRender = (props) => {
    if (props === undefined) {
      return "Fiche de déclaration ";
    } else if (Object.keys(props)[0] === "Jaune") {
      return (
        <FormJaune decla={decla[Object.values(props)[0]]} ref={componentRef} />
      );
    } else if (Object.keys(props)[0] === "Bleue") {
      return (
        <FormBleue decla={decla[Object.values(props)[0]]} ref={componentRef} />
      );
    } else if (Object.keys(props)[0] === "Blanche") {
      return (
        <FormBlanche
          decla={decla[Object.values(props)[0]]}
          ref={componentRef}
        />
      );
    } else if (Object.keys(props)[0] === "Parme") {
      return (
        <FormParme decla={decla[Object.values(props)[0]]} ref={componentRef} />
      );
    } else if (Object.keys(props)[0] === "Verte") {
      return (
        <FormVerte decla={decla[Object.values(props)[0]]} ref={componentRef} />
      );
    } else if (Object.keys(props)[0] === "Rose") {
      return (
        <FormRose decla={decla[Object.values(props)[0]]} ref={componentRef} />
      );
    } else if (Object.keys(props)[0] === "Orange") {
      return (
        <FormOrange decla={decla[Object.values(props)[0]]} ref={componentRef} />
      );
    } else if (Object.keys(props)[0] === "Coronavirus") {
      return (
        <FormCoronavirus
          decla={decla[Object.values(props)[0]]}
          ref={componentRef}
        />
      );
    } else if (Object.keys(props)[0] === "Patient") {
      return (
        <FormPatient
          decla={decla[Object.values(props)[0]]}
          ref={componentRef}
        />
      );
    }
  };

  useEffect(() => {
    getDeclacount();
  }, [
    changement,
    selectedValue,
    selectedValueEtatToSend,
    selectedValueSearchToSend,
  ]);

  const onChange = (value) => {
    setSelectedValue(value);
    if (value.length === 0) {
      setSelectedValueToSend([]);
    } else {
      setSelectedValueToSend(value);
    }
  };
  const onChangeEtat = (value) => {
    setSelectedValueEtat(value);
    if (value.length === 0) {
      setSelectedValueEtatToSend([]);
    } else {
      setSelectedValueEtatToSend(value);
    }
  };
  const onChangeSearch = (value) => {
    setSelectedValueSearch(value);
    if (value.length === 0) {
      setSelectedValueSearchToSend([]);
    } else {
      setSelectedValueSearchToSend(value);
    }
  };
  var componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const HandlePrint = (e, props, key) => {
    setPrint({ [props]: key });
    Swal.fire({
      title: "Chargement",

      showSpinner: true,
    })
      .then(Swal.showLoading())
      .then(
         setTimeout(() => {
          handlePrint();
          Swal.close()
        }, 1000)
      )

  };
  const changestatus = (id, status, status_Type, Email, Username) => {
    if (status_Type === null) {
      axiosConfig
        .put(`/secure/modfichesData/${id}?status=${status}`)
        .then((res) => {});
      const change = setTimeout(() => {
        setChangement(!changement);
      }, 200);

      if (Email && status) {
        Swal.fire({
          title: "Chargement",

          showSpinner: true,
        })
          .then(Swal.showLoading())
          .then(
            axiosConfig
              .post(`/send/?name=Cnpm&email=${Email}&messageHtml=Cnpm`)
              .then((response) => {
                if (response.data.msg === "success") {
                  Swal.fire("Success!", "Message envoyé", "success");
                } else if (response.data.msg === "fail") {
                  Swal.fire("Error!", "Veuillez ressayer", "error");
                }
              })
          );
      }
    } else {
      axiosConfig
        .put(
          `/secure/modfichesData/${id}?status=${status}&status_Type=${status_Type}`
        )
        .then((res) => {});
      const change = setTimeout(() => {
        setChangement(!changement);
      }, 100);
      if (status_Type =="En cours" && status){
        axiosConfig
        .post(
          `/send/?name=Cnpm&email=${Email}&messageHtml=CnpmStatus`
        )
        .then((response) => {
          if (response.data.msg === "success") {
            Swal.fire("Success!", "Message envoyé", "success");
          } else if (response.data.msg === "fail") {
            Swal.fire("Error!", "Veuillez ressayer", "error");
          }
        })
  
  
  
      }
    }
  };
  const deleteFiche = (id) => {

      Swal.fire({
        title: 'Êtes-vous sure ?',
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'supprimer!'
      }).then((result) => {
        if (result.isConfirmed) {
            axiosConfig
              .post(`/secure/deletefichesData/${id}`)
              .then((response) => {
                const change = setTimeout(() => {
                  setChangement(!changement);
                }, 200);
                if (response.data.result === "success") {
                  Swal.fire("Success!", "La fiche a été suprimée", "success");
                } else if (response.data.result === "error") {
                  Swal.fire("Error!", "Veuillez ressayer", "error");
                }
              })
            } })
    
      
    
  };
  const handleClick = (e, props, key) => {
    e.preventDefault();

    setClicked({ [props]: key });
  };
  var val = decla[Object.values(clicked)[0]];
  return (
    <div style={{ width: "100%", display: "flex" }}>
      {clicked === false ? (
        <>
          <div
            style={{
              width: "20%",
              paddingTop: "30px",
              backgroundColor: "#272727",
            }}
          >
            <div style={{ color: "white" }}>Filtre:</div>
            {cookie.UserType === "Mods" ? (
              <>
                {" "}
                <div style={{ color: "white" }}>Par Type:</div>
                <CreatableSelect
                  options={DeclaTypes}
                  name="TYPEDEDECLA"
                  onChange={(val) =>
                    isMulti
                      ? onChange(val.map((c) => c.value))
                      : onChange(val.value)
                  }
                  isMulti
                  isClearable
                />
              </>
            ) : null}
            <div style={{ color: "white" }}>Par Etat:</div>
            <CreatableSelect
              options={Etat}
              name="ETAT"
              onChange={(val) =>
                true
                  ? onChangeEtat(val.map((c) => c.value))
                  : onChangeEtat(val.value)
              }
              isMulti
              isClearable
            />
            <div style={{ color: "white" }}>Recherche:</div>
            <CreatableSelect
              components={components}
              placeholder="Introduisez  le(s) mot-clé(s) desirés et appuyez sur entrer"
              name="Search"
              onChange={(val) =>
                true
                  ? onChangeSearch(val.map((c) => c.value))
                  : onChangeSearch(val.value)
              }
              onChangeSearch
              isMulti
              isClearable
            />
          </div>
          <div
      style={{
        flexGrow:"1",
        paddingLeft: "20px",
      }}
    >
          <CardDeclarations
            decla={decla}
            handleClick={handleClick}
            handlePrint={handlePrint}
            HandlePrint={HandlePrint}
            print={print}
            CompRender={CompRender}
            setChangement={setChangement}
            changement={changement}
            progress={progress}
            deleteFiche={deleteFiche}
          />
                <Paginations
        data={{
          declanum,
          clicked,
          numberOfPages,
          nextpage,
          currentPage,
          tenChange,
          fiveChange,
          threeChange,
        }}
      />
      </div>
          {/*           <Filtre
            setClicked={setClicked}
            decla={decla}
            changement={changement}
            setChangement={setChangement}
            selectedValue={selectedValue}
            selectedValueEtat={selectedValueEtat}
          /> */}
        </>
      ) : (
        <>
          <div
            style={{
              height: "100%",
              width: "20%",
              paddingTop: "30px",
              backgroundColor: "#272727",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "30px",
                paddingRight: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  paddingBottom: "10px",
                }}
              >
                <p>Vu :</p>
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
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  paddingBottom: "10px",
                }}
              >
                <p style={{ width: "35%" }}>Etat :</p>
                {val.status === true ? (
                  <select
                    style={{ marginTop: "5px" }}
                    onChange={(el) =>
                      changestatus(val._id, val.status, el.target.value,val.creator.Email)
                    }
                    value={val.status_Type}
                    id={"Statut"}
                  >
                    {["", "En cours", "Traité"].map((content, key) => {
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
                ) : (
                  <p>Le formulaire n'a pas encore été vu</p>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                paddingLeft: "30px",
                paddingRight: "10px",
              }}
            >
              <p>Imprimer :</p>
              <Button
                onClick={(e) => {
                  handlePrint();
                }}
              >
                <FaPrint />
              </Button>
            </div>
          </div>

          {clicked === false ? null : CompRender(clicked)}
          <Button
            onClick={() => {
              setClicked(false);
            }}
            style={{ position: "fixed", top: "350px", right: "20px" }}
          >
            Retour
          </Button>
        </>
      )}

      {/* {
  clicked === false ?null:<Button onClick={()=>{setClicked(false)}} style={{position: "fixed",top: "350px",right: "20px"}}>Retour</Button>
  } */}


    </div>
  );
};

export default containerDeclarations;
