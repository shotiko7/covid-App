import React, { useState } from 'react'
import "../Second/Form.css"
import Redirect from '../UI/Redirect'

function Form(props) {
    const [nameValid, setNameValid] = useState(false)
    const [lastValid, setLastValid] = useState(false)
    const [emailvalid, setEmailValid] = useState(false)
    const [numberValid, setNumberValid] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const onName =(e)=>{
        setFirstName(e.target.value)
    }
    const onLast =(e)=>{
        setLastName(e.target.value)
    }
    const onEmail =(e)=>{
        setEmail(e.target.value)
    }
    const onNumber =(e)=>{
        setNumber(e.target.value)
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if(firstName.trim().length >= 2 && lastName.trim().length >= 2 && email.includes('@') && number.trim().length >= 9) {
            
            console.log('hi')
            {props.onClick()}
        }
        if(firstName.trim().length <= 1){
            setNameValid(true)
        } else {
            setNameValid(false)
        }
        if(lastName.trim().length <= 1){
            setLastValid(true)
        } else {
            setLastValid(false)
        }
        if(!email.includes('@')){
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
        if(number.trim().length <= 8){
            setNumberValid(true)
        } else {
            setNumberValid(false)
        }
    }
  return (
    <div className='formdiv'>
        <form className='formdiv' onClick={onSubmit}>
            <input className='input1' value={firstName} onChange={onName} type='text' placeholder='First Name' />
            {nameValid &&<span className='span1'> FirstName must be 2 words or more then! Is required!</span>} 
            <input className='input2' value={lastName} onChange={onLast}  type='text' placeholder='Last Name'/>
            {lastValid &&<span className='span2'> LastName must be 2 words or more then! Is required!</span>} 
            <input className='input3' value={email} onChange={onEmail}  type='email' placeholder='E mail' />
            {emailvalid && <span className='span3'> Email must be email format! Is required!</span>} 
            <input className='input4' value={number} onChange={onNumber}  type='number' placeholder='+ 559 5_ _ _ _ _ _  _ _' />
            {numberValid && <span className='span4'> Number must be Georgian number format, Is required!</span> }
            <Redirect onClick={onSubmit} />
        </form>
    </div>
  )
}

export default Form