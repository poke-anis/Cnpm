import React, { useState } from 'react'
import styled from 'styled-components'


const Bar = styled.footer`
background-color:#034EA2;
color : white;
font-size: 0.7rem;

`

const  Titre = styled.div`
display: flex;
align-items: center;
justify-content:space-around;`


const BasDePage = (props)=>{
    const {setModalShow}= props
    return (
        <Bar>
            <Titre>
            <div>Cnpm 2022</div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:"20%"}}>
            <div onClick={()=>setModalShow(true)}>En cas de problème technique avec le site veuillez nous contacter en cliquant ici </div>
            </div>
            </Titre>

                
        </Bar>

    )
}

export default BasDePage;