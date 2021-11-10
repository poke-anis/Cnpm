import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.png'

const Bar = styled.header`
grid-column-start:1;
grid-column-end:4;
grid-row-start:1;
grid-row-end:2;
text-align: center;
padding-top: 30px;
height:100%;`

const  Titre = styled.div`
display: flex;
flex-direction: row;
justify-content:space-around;`

const Title1 = styled.h4`
`

const EnTete = ()=>{
    const [Connected ,setConnected] = useState(true)
    return (
        <Bar>
            <Titre>
            <img src={logo}/>
            <div>
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