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
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/Contador'
import Mega from './components/Mega/Mega'

export default () =>
(
    <div className="App">
        <h1>Fundamento React</h1>

        <div className='Cards'>
            
            <Card titulo="#13 - Mega" color='#0000FF'>
                <Mega/>
            </Card>
            
            <Card titulo="#12 - Contador" color='#424242'>
                <Contador numeroInicial={10}/>
            </Card>
            
            <Card titulo="#11 - Componente Controlado (Input)" color='#E45F56'>
                <Input/>
            </Card>
            
            <Card titulo="#10 - Comunicação Indireta" color='#8BAD39'>
                <IndiretaPai/>
            </Card>

            <Card titulo="#09 - Comunicação direta" color='#59323C'>
                <DiretaPai/>
            </Card>

            <Card titulo="#08 - Renderização condicional" color='#982395'>
                <ParOuImpar numero={21}/><br/>
                <UsuarioInfo usuario={ {nome:'Fernando'} } /> <br/>
                <UsuarioInfo usuario={{}} /><br/>
                <UsuarioInfo/>
            </Card>

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