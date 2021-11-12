import React, { useState, useEffect } from 'react'
import FormJaune from './FormJaune'
import FormBleue from './FormBleue'
import FormBlanche from './FormBlanche'
import FormParme from './FormParme'

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
        <FormJaune/>:
        Tab === 'Rose'?
        <FormJaune/>:
        Tab === 'Orange'?
        <FormJaune/>:
        Tab === 'Coronavirus'?
        <FormJaune/>:null}
        </div>
        
        )
}

export default FormContent;