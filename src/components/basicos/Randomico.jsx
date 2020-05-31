import React from 'react';

export default (props) =>
{
    const { min, max } = props;
    return(
        <p>
            {parseInt(Math.random() * (max+1 - min)) + min}
        </p>
    )
}