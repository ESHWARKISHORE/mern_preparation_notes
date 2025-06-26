import React from 'react'
import { useSelector } from 'react-redux'
import ReusableTable from '../common/reusableTable'

const DisplayingUser = () => {
    const user = useSelector((state)=> state.user.users)
  return (
    <div><h3>Displaying The User</h3>
    <ReusableTable tableData={user}/>
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