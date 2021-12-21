import {Card,Button} from "react-bootstrap";
import React, { useState, useEffect, createContext } from "react";
import axiosConfig from "./axios";
import styled from "styled-components";

const Content = styled.div`
display:flex;
justify-content:space-between;
padding: 50px;
width: 100%;

`

const Home = () => {
  const [cnpmAlertes, setCnpmAlertes] = useState([]);

  useEffect(() => {
    axiosConfig.get(`/getalertes/`).then((res) => {
      setCnpmAlertes(res.data);
    });
    console.log(cnpmAlertes)
  }, []);

  return (
    <Content>
        {cnpmAlertes.length !==0 ?cnpmAlertes.map((el,index) =>
      <Card style={{ width: "18rem" }} key={index}>
          {el.image? el.image.map((el,index)=><Card.Img key={index} variant="top" width={100}
                        height={100} src={`data:${el.mimetype};base64,${el.buffer}`} />):null}
      
      <Card.Body>
        <Card.Title>{el.titre}</Card.Title>
        <Card.Text>
        {el.description}
        </Card.Text>
        {el.link ?<Button variant="primary">test</Button>:null}
        
      </Card.Body>
    </Card>
        ):null}

    </Content>
  );
};

export default Home;