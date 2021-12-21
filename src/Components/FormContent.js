import React from 'react'
import FormJaune from './Declarations/FormJaune'
import FormBleue from './Declarations/FormBleue'
import FormBlanche from './Declarations/FormBlanche'
import FormParme from './Declarations/FormParme'
import FormPink from './Declarations/FormPink'
import FormVerte from './Declarations/FormVerte'
import FormOrange from './Declarations/FormOrange'

import FormCoronavirus from './Declarations/FormCoronavirus'


const FormContent = (props) =>{
    const {Tab,DeclarationsType} = props
    return(

        <div>
        {Tab === 'Jaune' ?
        <FormJaune/>:
        Tab === 'Bleue'?
        <FormBleue/>:
        Tab === 'Blanche'?
        <FormBlanche/>:
        Tab === 'Parme'?
        <FormParme/>:
        Tab === 'Verte'?
        <FormVerte/>:
        Tab === 'Rose'?
        <FormPink/>:
        Tab === 'Orange'?
        <FormOrange/>:
        Tab === 'Coronavirus'?
        <FormCoronavirus/>:null}
        </div>
        
        )
}

export default FormContent;