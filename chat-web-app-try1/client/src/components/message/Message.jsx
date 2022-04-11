import "./message.css"



export default function Message({own}){
  return(
    <div className={`message ${own?"own":""}`}>
      <div className="messageTop">
        <img src="" alt="" className="messageImg"/>
        <p className={`messageText ${own?"own":""}`}> first message  </p>

      </div>
      <div className="messageBottom">
        1 hr ago
      </div>


    </div>
  )
}
