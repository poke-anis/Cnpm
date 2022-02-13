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
justify-content:space-around;`

const Logo =styled.img`
object-fit: contain;
@media ${device.mobileS} {
    max-width: 150px;
  }
  @media ${device.mobileM} {
    max-width: 160px;
  }
  @media ${device.mobileL} {
    max-width: 170px;
  }
  @media ${device.tablet} {
    max-width: 180px;
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
            <h4>              
                REPUBLIQUE ALGERIENNE DEMOCRATIQUE ET POPULAIRE 
                MINISTERE DE LA SANTE 
            </h4>
            <h5>
                Centre National de Pharmacovigilance et de Matériovigilance
                Professeur ABDELKADER HELALI
            </h5>
            </div>
            </Titre>

                
        </Bar>

    )
}

export default EnTete;