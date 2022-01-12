import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.png'

const Bar = styled.header`

text-align: center;
padding-top: 5px;
`

const  Titre = styled.div`
display: flex;
flex-direction: row;
justify-content:space-around;`


const EnTete = ()=>{
    return (
        <Bar>
            <Titre>
            <img src={logo} alt="logo"/>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h4>              
                REPUBLIQUE ALGERIENNE DEMOCRATIQUE ET POPULAIRE 
                MINISTERE DE LA SANTE, DE LA POPULATION ET DE LA REFORME HOSPITALIERE 
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