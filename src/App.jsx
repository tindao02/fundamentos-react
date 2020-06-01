import React from 'react';

import './App.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Randomico from './components/basicos/Randomico'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'

export default () =>
(
    <div className="App">
        <h1>Fundamento React</h1>

        <div className='Cards'>
            
            <Card titulo="#07 - Repetição Produtos" color='#10C818'>
                <ListaProdutos/>
            </Card>

            <Card titulo="#06 - Repetição" color='#00C8F8'>
                <ListaAlunos/>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color='#FF4C65'>
                <Familia sobrenome='Morais'>
                    <FamiliaMembro nome='Tindão' />
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Ana' />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color='#FA6900'>
                Randomico: <Randomico min={5} max={10}/>
            </Card>

            <Card titulo="#03 - Fragmento" color='#E94C6F'>
                <Fragmento />
            </Card>
            
            <Card titulo="#02 - Componente Com parâmetros" color='#E8B71A'>
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color='#588C73'>
                <Primeiro/>
            </Card>
        </div>
    </div>
);