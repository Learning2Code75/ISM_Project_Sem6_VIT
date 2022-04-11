import './conversation.css'
import {useState} from 'react'
export default function Conversation({c,currUser}){
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const friendId = conversation.member.find(m=>m === currUser)
  },[])

  return (
    <div className = "conversation">
      <img className="conversationImg" src ="" alt = "" />
      <span className = "conversationName"> </span>
    </div>
  )
}
