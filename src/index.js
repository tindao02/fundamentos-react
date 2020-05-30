import ReactDom from 'react-dom'
import React from 'react'

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = 'Olá mundo!'

ReactDom.render
(
    <i> 
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3}/>
    </i>, 
    document.getElementById('root')
)