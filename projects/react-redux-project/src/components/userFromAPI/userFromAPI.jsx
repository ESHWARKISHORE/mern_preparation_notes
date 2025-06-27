import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../../feature/userFromAPI/userFromAPI";
import ReusableTable from "../common/reusableTable";

const UserFromAPI = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(fetchUser())
    }
    const userFromAPI = useSelector((state) => state.userFromAPI.usersFromAPI)
    return (
        <div><h3>UserFromAPI</h3><button onClick={handleClick}>Click here to fetch user data from an API</button><ReusableTable tableData={userFromAPI} /></div>
    )
}

export default UserFromAPI