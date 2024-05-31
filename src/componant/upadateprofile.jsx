/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editData } from '../store/slice';

function upadateprofile() {

  const {id} =useParams();
  const users =useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const existinguser=users.filter(f=>f.id == id);
  const {name , email }=existinguser[0]
  
  const [editedname , setEditedname]=useState(name)
  const [editedemail , setEditedemail]=useState(email)

  const handleeditsubmit=(e)=>{
    e.preventDefault();
    dispatch(editData({
      id:id,
      name:editedname,
      email:editedemail
    }))
    navigate('/home')
  }

  return (
    <>
      <div className='profile-layout'>
        <form onSubmit={handleeditsubmit}>
            <h1>Update details</h1>
            <div className='input'>
                <label>Name:</label>
                <input type='text' value={editedname} onChange={(e)=>setEditedname(e.target.value)}></input>
            </div>
            <div className='input'>
                <label>email:</label>
                <input type='email' value={editedemail} onChange={(e)=>setEditedemail(e.target.value)}></input>
            </div>
            <button type='submit' className='submit'>Update</button>
        </form>
      </div>
    </>
  )
}

export default upadateprofile
