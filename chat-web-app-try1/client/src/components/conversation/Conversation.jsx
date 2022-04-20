import './conversation.css'
import {useState,useEffect} from 'react'
import axios from 'axios';
export default function Conversation({c,currUser}){
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const friendId = c.members.find((m)=>m !== currUser._id)
    console.log(friendId)
    const getUser = async()=>{
      try{
        // const res = await axios(`/users?userId=${friendId}`);
        // console.log(res.data)
        // setUser(res.data)
      }catch(err){
        console.log(err)
      }

    };
    // getUser();
  },[currUser,c])

  return (
    <div className = "conversation">
      <img className="conversationImg" src ={user.profilePicture} alt = "" />
      <span className = "conversationName">{user.username}</span>
    </div>
  )
}
