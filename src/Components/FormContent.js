import React from 'react'
import FormJaune from './Declarations/FormJaune'
import FormBleue from './Declarations/FormBleue'
import FormBlanche from './Declarations/FormBlanche'
import FormParme from './Declarations/FormParme'
import FormPink from './Declarations/FormPink'
import FormVerte from './Declarations/FormVerte'
import FormOrange from './Declarations/FormOrange'

import FormPatientFr from './Declarations/FormPatientFr'
import FormCoronavirus from './Declarations/FormCoronavirus'


const FormContent = (props) =>{
    
    const {Tab,userID} = props
    return(

        <>
        {Tab === 'Jaune' ?
        <FormJaune userID={userID} />:
        Tab === 'Bleue'?
        <FormBleue userID={userID}/>:
        Tab === 'Blanche'?
        <FormBlanche userID={userID}/>:
        Tab === 'Parme'?
        <FormParme userID={userID}/>:
        Tab === 'Verte'?
        <FormVerte userID={userID}/>:
        Tab === 'Rose'?
        <FormPink userID={userID}/>:
        Tab === 'Orange'?
        <FormOrange userID={userID}/>:
        Tab === 'PatientFr'?
        <FormPatientFr userID={userID}/>:
        Tab === 'Coronavirus'?
        <FormCoronavirus userID={userID}/>:null}
        </>
        
        )
}

export default FormContent;