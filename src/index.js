import ReactDom from 'react-dom'
import React from 'react'

import './index.css'

import Primeiro from './components/basicos/Primeiro'

const tag = 'Olá mundo!'

ReactDom.render
(
    <i> 
        <Primeiro></Primeiro>
    </i>, 
    document.getElementById('root')
)