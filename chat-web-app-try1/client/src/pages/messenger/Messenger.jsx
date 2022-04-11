import './messenger.css'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import {AuthContext} from '../../context/AuthContext'
import {useContext,useState,useEffect} from 'react'
import axios from 'axios';

export default function Messenger(){

  const [conversations, setConversations] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(()=>{
    // http://localhost:8800/api/conversations/6252bba23acb143e4d8632cb
    const getConversations = async()=>{
      try{
        const res = await axios.get(`/conversations/${user._id}`);
        // console.log(res);
        setConversations(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getConversations();
  },[user._id])

  return(
    <>
    <Topbar />
    <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {conversations.map(c=>(
              <Conversation key={c._id} c={c} currUser={user} />
            ))}
          </div>
        </div>

        <div className ="chatBox">
          <div className="chatBoxWrapper">

            <div className="chatBoxTop">
              <Message />
              <Message />
              <Message own />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message own/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message own/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />

              <Message own/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />

              <Message own/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />


            </div>
            <div className="chatBoxBottom">
              <input placeholder="Enter message to be sent" className = "chatMessageInput"  />
              <button className="chatSubmitButton">Send</button>
            </div>



          </div>
        </div>

        <div className = "chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>

          </div>
        </div>

    </div>
    </>
  );
}
