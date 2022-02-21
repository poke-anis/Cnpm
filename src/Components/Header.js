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
`

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
            <h5>              
                REPUBLIQUE ALGERIENNE DEMOCRATIQUE ET POPULAIRE 
                
            </h5>
            <h5>MINISTERE DE LA SANTE</h5>
            <h6>
                Centre National de Pharmacovigilance et de Matériovigilance
                Professeur ABDELKADER HELALI
            </h6>
            </div>
            </Titre>

                
        </Bar>

    )
}

export default EnTete;