/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addData } from '../store/slice'
import { useNavigate } from 'react-router-dom'

function profile() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const dispatch=useDispatch();
  const users =useSelector((state)=>state.users);
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newid=users.length >0 ? users[users.length - 1].id+1 : 1
    dispatch(addData({id:newid, name ,email}));
    navigate('/home')
  }

  return (
    <>
        <div className='profile-layout'>
        <form onSubmit={handleSubmit}>
            <h1>Add details</h1>
            <div className='input'>
                <label>Name:</label>
                <input type='text' onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='input'>
                <label>email:</label>
                <input type='email'onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <button type='submit' className='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default profile
