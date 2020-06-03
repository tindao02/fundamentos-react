import React, {useState} from 'react';

import './Mega.css'

export default (props) =>
{
    function gerarNumeroNaoContido(min, max, array)
    {
        const aleatorio = parseInt(Math.random()*(max +1 - min) + min);
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }

    function gerarNumeros(quant)
    {
        const numeros = Array(quant).fill(0)
                                    .reduce((nums) => {
                                        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                                        console.log([...nums, novoNumero])
                                        return [...nums, novoNumero]
                                    }, [])
                                    .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [quant, setQtde] = useState(props.quant || 6)
    const numerosIniciais = gerarNumeros(quant)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3> {numeros.join(' - ')} </h3>
            <div>
                <label>Quantidade de Números: </label>
                <input type="number"
                       min="1" 
                       max="60"
                       value={quant} 
                       onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                       } }
                />
            </div>
            <button onClick={() => setNumeros(gerarNumeros(quant))}>Gerar Números</button>
        </div>
    );
}