import React from 'react';

export default (props) =>
{
    const { min, max } = props;
    return(
        <>
            {parseInt(Math.random() * (max+1 - min)) + min}
        </>
    )
}