import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffect = () => {
    const [num, setNum] = useState(0);
    useEffect(() => {
        alert('I am Use effect')
    }, []
    )

    const btnClicked = () => {
        console.log('Clicked');
        setNum(num + 1);
    }
    return (<>
    <button onClick={btnClicked}>Click Me {num}</button>
    </>);
}
 
export default UseEffect;