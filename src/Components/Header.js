import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.png'
import {device} from '../MediaQuery'
const Bar = styled.header`
text-align: center;
padding-top: 5px;
`

const  Titre = styled.div`
display: flex;
flex-direction: row;
justify-content:space-around;
@media ${device.mobileS} {
    font-size: 2.5vw;
  }

  @media ${device.tablet} {
    font-size: 2vw;
  
  }
  @media ${device.laptop} {
    font-size: 2.2vw;
  }
  @media ${device.desktop} {
    font-size: 2vw;
  }`

const Logo =styled.img`
object-fit: contain;
@media ${device.mobileS} {
    max-width: 100px;
  }
  @media ${device.mobileM} {
    max-width: 120px;
  }
  @media ${device.mobileL} {
    max-width: 140px;
  }
  @media ${device.tablet} {
    max-width: 160px;
  }
  @media ${device.laptop} {
    max-width: 190px;
  }
  @media ${device.desktop} {
    max-width: 200px;
  }
`

const EnTete = ()=>{
    return (
        <Bar>
            <Titre>
            <Logo src={logo} alt="logo"/>
            <div  style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <p>              
                REPUBLIQUE ALGERIENNE DEMOCRATIQUE ET POPULAIRE 
                MINISTERE DE LA SANTE 
            </p>
            <p>
                Centre National de Pharmacovigilance et de Matériovigilance
                Professeur ABDELKADER HELALI
            </p>
            </div>
            </Titre>

                
        </Bar>

    )
}

export default EnTete;