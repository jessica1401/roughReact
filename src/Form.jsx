import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [inputFields, setInputFiels] = useState({
        fName: '',
        lName: '',
        email: ''
    });

    const changeInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setInputFiels((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const submit = (event) => {
        event.preventDefault();
        console.log('Submitted')
    }
    return (<>
    <h1>Hello {inputFields.fName} {inputFields.lName}</h1>
    <p>{inputFields.email}</p>
    <form onSubmit={submit}>
    <input name='fName' onChange={changeInput} value={inputFields.fName} type="text" placeholder="Enter Your First name"></input><br /><br />
    <input name='lName' onChange={changeInput} value={inputFields.lNmae} type="text" placeholder="Enter Your Last name"></input><br /><br />
    <input name='email' onChange={changeInput} value={inputFields.email} type="Email" placeholder="Enter Your Email"></input><br /><br />
    <button type='submit'>Submit</button>
    </form>
    </>);
}
 
export default Form;