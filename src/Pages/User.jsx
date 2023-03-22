
import React, { useState } from 'react';
// import {toast } from 'react-toastify';

function User() {
    const [email ,setEmail] = useState()
    const [name ,setName] = useState()
    const [age ,setAge] = useState()
    const [address ,setAddress] = useState()
    const [date,setDate] = useState()
    const [aadhar,setAadhar] = useState()
    const [message,setMessage] = useState() 

  const handleChange =()=>{
     
  }
    

    
  return (
    <div className='box'>
    <form className='form-box' onChange={handleChange}>
        <input type="email" placeholder='Email'value={email}  onChange={(e)=>setEmail(e.target.value)} required/><br/>
        <input type="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} required/><br/>
        <input type="age" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} required/><br/>
        <input type="address" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} required/><br/>
        <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)} required/><br/>

        
        <input type="aadhar" placeholder='Aadhar no' value={aadhar} onChange={(e)=>setAadhar(e.target.value)}/><br/>
         <textarea type="message" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>      
        <button className='btn' type='submit' >Submit</button>
        
    </form>
    </div>
  )
}

export default User