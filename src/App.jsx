import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Randomico from './components/basicos/Randomico'

export default () =>
(
    <div id="app">
        <h1>Fundamento React</h1>
        Randomico: <Randomico min={5} max={10}/>
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
);