import React from 'react'
import { useSelector } from 'react-redux'
import ReusableTable from '../common/reusableTable'
import { useDispatch } from 'react-redux'
import { clearUser, deleteUser } from '../../feature/user/userSlice'

const DisplayingUser = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user.users)
    const handleDeleteButton = (data) => {
        dispatch(deleteUser(data.email))
    }
    const handleClearUser =()=>{
        dispatch(clearUser());
    }
  return (
    <div><h3>Displaying The User</h3>
    <ReusableTable tableData={user} isDeleteButton={true} handleDeleteButton={handleDeleteButton}/>
    <button onClick={handleClearUser}>Clear the users from redux</button>
    {/* <table>
    <thead>
        <tr>
            <th>User Name</th>
            <th>User EmailId</th>
            <th>User Age</th>
        </tr>
    </thead>
    <tbody>
        {user.map((userData, index)=>(
            <tr key={index}>
            <td>{userData.name}</td>
                <td>{userData.email}</td>
                <td>{userData.age}</td>
            </tr>
        ))}
    </tbody>
    </table> */}
    </div>
  )
}

export default DisplayingUser