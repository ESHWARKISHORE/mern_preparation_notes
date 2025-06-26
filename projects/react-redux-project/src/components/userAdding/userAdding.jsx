import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../feature/user/userSlice'

const UserAdding = () => {
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        name:"",
        email:"",
        age:0
    })
    const handleChange = (e) =>{
        const {name, value} = e.target
        setUser((currentData)=>({
            ...currentData,
            [name]: value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addUser({...user}))
        setUser({name:"", age:0, email:""})
    }
  return (
      <div>
      <h3>UserAdding</h3>
      <form onSubmit= {handleSubmit} >
            <input name="name" value={user.name} type="text" onChange={handleChange} placeholder='Name' required/>
            <input name="email" value={user.email} type="email" onChange={handleChange} placeholder='Email' required />
            <input name="age" value={user.age} type="number" onChange={handleChange} placeholder='Age' required />
        <button>Submit</button>
      </form>
      </div>
  )
}

export default UserAdding