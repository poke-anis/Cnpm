import React, { useState, useEffect } from 'react'
import { useFormik,Field,FormikProvider,FieldArray } from 'formik';
import {Tab,Tabs,TabPane ,TabContent} from 'react-bootstrap'

import styled from 'styled-components'
 
const Box = styled.div`
display: flex;
flex-direction: column;
width : 50%;
`
const Box2 = styled.div`
display: flex;
flex-direction: column;
width : 30%;
`
const Titre = styled.h1`
text-align: center;
border: 3px black solid;
margin:10px;
padding:5px;

`
const Inputstyled = styled(Field)`
margin:5px;
`
const FlexBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
width : 100%;

`