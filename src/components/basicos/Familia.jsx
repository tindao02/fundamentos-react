import React from 'react';

import FamiliaMembro from './FamiliaMembro'

export default (props) =>
{
    return(
        <div>
            <FamiliaMembro nome='Tindão' sobrenome={props.sobrenome}/>
            <FamiliaMembro nome='Pedro' {...props}/>
            <FamiliaMembro nome='Ana' sobrenome='Ferreira'/>
        </div>
    );
}