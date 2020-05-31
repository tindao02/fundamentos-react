import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Randomico from './components/basicos/Randomico'
import Card from './components/layout/Card'

export default () =>
(
    <div id="app">
        <h1>Fundamento React</h1>
        <h3>Todo esquerdida é veado</h3>

        <Card titulo="#04 - Desafio Aleatório">
            Randomico: <Randomico min={5} max={10}/>
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>
        
        <Card titulo="#02 - Componente Com parâmetros">
            <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro"
                nota={9.3}
            />
        </Card>
        
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
    </div>
);