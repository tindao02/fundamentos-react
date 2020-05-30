import ReactDom from 'react-dom'
import React from 'react'

import './index.css'

const tag = 'Olá mundo!'

ReactDom.render
(
    <i>Olá React
       {tag}
    </i>, 
    document.getElementById('root')
)