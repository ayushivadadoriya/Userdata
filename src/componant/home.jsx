/* eslint-disable react-hooks/rules-of-hooks */
import React  from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { deleteData, removeData } from '../store/slice';

function home() {
    const navigate =useNavigate();
    const users =useSelector((state)=>state.users)
    const dispatch=useDispatch()

    const handledelete=(id)=>{
      dispatch(deleteData({id:id}))
    }

  return (
    <>
      <div className='home-layout'>
        <h1>Admin panel</h1>
        <button className='add-btn' onClick={()=>{navigate('/addprofile')}}> +Add user</button>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {users.map((user,index)=>(
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button className='edit-btn' onClick={()=>{navigate(`/updateprofile/${user.id}`)}}>Update</button>
                <button className='delete-btn' onClick={()=>handledelete(user.id)}>delete</button>
                </td>
              </tr>
            ))}
                
            </tbody>
        </table>
        {
          users.length > 0 && (<button className='delete-all' onClick={()=>dispatch(removeData())}>Delete All</button>)
        }
        
      </div>
    </>
  )
}

export default home
