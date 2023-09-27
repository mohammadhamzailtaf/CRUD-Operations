import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
function UpdateUser() {
//    we would get the records in update page through fetching them by id so we could update them
   const {id} = useParams();
   const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/getuser/" + id)
          .then(result => {
            console.log(result.data); // Add this line
            const userData = result.data[0]; // Assuming the response is an array with a single user object
            setName(userData.name);
            setEmail(userData.email);
            setAge(userData.age);
          })
          .catch(err => console.log(err));
      }, []);
  
const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/update/" + id, { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };
  

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter your Name' className='form-control' 
                value={name}  onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter your Email Address' className='form-control' 
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Age</label>
                <input type="text" placeholder='How Old are you?' className='form-control' 
                value={age} onChange={(e)=> setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
  
</div>
  )
}

export default UpdateUser;
