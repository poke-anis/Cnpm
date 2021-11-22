import React, { useState, useEffect } from 'react'
import FormJaune from './FormJaune'
import FormBleue from './FormBleue'
import FormBlanche from './FormBlanche'
import FormParme from './FormParme'
import FormPink from './FormPink'
import FormVerte from './FormVerte'
import FormOrange from './FormOrange'
import Notificateur from './Notificateur'
const FormContent = (props) =>{
    const {Tab} = props
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
        <FormJaune/>:null}
        </div>
        
        )
}

export default FormContent;