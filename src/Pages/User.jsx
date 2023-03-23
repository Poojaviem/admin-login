
import React, { useState } from 'react';
import {  addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase';

import {toast } from 'react-toastify';

function User  (inputs)  {
  const [data ,setData]=useState({})
    const [email ,setEmail] = useState()
    const [name ,setName] = useState()
    const [age ,setAge] = useState()
    const [address ,setAddress] = useState()
    const [date,setDate] = useState()
    const [phone,setPhone] = useState()
    const [day,setDay] = useState()
    const [message,setMessage] = useState() 


    const handleInput =(e)=>{
      const id =e.target.id;
      const value = e.target.value;

      setData({...data ,[id]:value})
    }
    console.log(setData)
    
  const handleAdd =async(e)=>{
    e.preventDefault()
    try{
      const res = await addDoc(collection(db, "users",), {
        name: "abc",
        age:"21",
        email:"abc@gmail.com",
        address:"rajwada",
        phone:"7894561230",
        date:"2/2/2023",
        day:"123456789",
        message:"fff",
  
        
      });
      
    }
    

     catch(err){
      toast.error('something went wrong', {
        position: toast.POSITION.TOP_CENTER
    });

     }
  }
   
    

    
  return (
    <div className='box'>
    <form className='form-box' onSubmit={handleAdd}>
        <input type="email" placeholder='Email'value={email}  onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
        <input type="phone" placeholder='Mobile no' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>

        <input type="age" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} /><br/>
        <input type="address" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} /><br/>
        <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)} /><br/>

        
        <input type="day" placeholder='Day' value={day} onChange={(e)=>setDay(e.target.value)}/><br/>

         <input type="message" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/> 

         {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}   
                  />
                </div>
              ))}   */}
        <button className='btn' type='submit' >Submit</button>
        
    </form>
    </div>
  )
}

export default User