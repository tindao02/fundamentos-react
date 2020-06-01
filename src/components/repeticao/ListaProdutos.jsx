import React from 'react';

import './TabelaProdutos.css'

import produtos from './../../data/produtos';

export default (props) =>
{
    const produtosTr = produtos.map((produto, i) => {
        return  <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
                    <td>{produto.id}º</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
    });

    return(
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>NOME</th><th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTr}
                </tbody>
            </table>
        </div>
    );
}