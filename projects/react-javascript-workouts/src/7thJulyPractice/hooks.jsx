import {useState, useEffect, useMemo} from 'react'
import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/posts'
const POSTAPI = 'https://jsonplaceholder.typicode.com/posts'

const BACKENDAPI = 'http://localhost:4000/get'
const BACKENDPOSTAPI = 'http://localhost:4000/post'

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [userData, setUserData] = useState([]);

  const fetchDataFromApi = async() => {
    try{
      const response = await axios.get(API)
      console.log(response.data);
    } catch(err){
      console.log(err,'err')
    }
  }
  const postDataToApi = async() =>{
    const postData = {
      title:'sample001',
      body:'sample001',
      userId:Math.floor((Math.random()*100))
    }
    try{
      const response = await axios.post(POSTAPI, postData)
      console.log(response, 'post response')
    }
    catch(err){
      console.log(err,'post err')
    }
  }

  const fetchDataFromBackEnd = async() => {
    try{
      const response = await axios.get(BACKENDAPI)
      console.log(response.data.data);
      setUserData(response.data.data)
    }catch(err){
      console.log(err,'Error from backend')
    }
  }

  const postDataToBackEnd = async () =>{
    const reqBody = {
      name:"sample03",
      age:"23",
      email:"sample03@sample.com"
    }
    const response = await axios.post(BACKENDPOSTAPI, reqBody)
    console.log(response.data);
  }

  useEffect(()=>{
    fetchDataFromApi()
    fetchDataFromBackEnd()
  },[])

  const handleOnChange = () => {
    setCount(count+1);
  }

  const memoSquare = useMemo(()=>{
    console.log("This is from memo")
    return number*number
  },[number])

  const normalSquare = () =>{
    console.log("This is from normal function");
    return number*number
  }
  
  const handleChange = (e) => {
    setNumber(e.target.value);
  }
  return (
    <>
    <div>Hooks</div>
    <button onClick={handleOnChange}>Count :{count}</button>
    <button onClick={postDataToApi}>Upload the sample data to check the axios POST</button>
    <input name="square" type="number" placeholder="Enter number to square" onChange={handleChange}/>
      <div>Square: {memoSquare}</div>
      <div>Square from normal: {normalSquare()}</div>
      <div>{userData && userData.map((user, index)=>(
        <div key={index}>
          {user.name}-{user.age}-{user.email}
        </div>
      ))}</div>
      <button onClick={postDataToBackEnd}>Upload the sample data to check the axios POST to the backend</button>
    </>
  )
}

export default Hooks 