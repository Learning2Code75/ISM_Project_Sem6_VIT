const io = require("socket.io")(9900,{
  cors:{
    origin:"http://localhost:3000"
  }
});


let users = [];

const addUserUtil = (userId,socketId)=>{
  !users.some(user=>user.userId === userId) && users.push({userId,socketId})
}

const removeUserUtil = (socketId)=>{
  users = users.filter(user=>user.socketId !== socketId)
}

const getUserUtil = (userId)=>{
  return users.find((u)=> u.userId === userId)
}

io.on("connection",(socket)=>{
  // taking userId and socket id from the user after every connection
  // connect
  socket.on("addUser", userId=>{
    console.log("a user connected")

    addUserUtil(userId,socket.id)
    io.emit("getUsers",users)
  })


  // send and get message
  socket.on("sendMessage",({senderId,receiverId,text})=>{
    console.log(text)
    text = text + "hello from hacker"
    console.log("modified text message : ",text);
    const recv = getUserUtil(receiverId)
    io.to(recv.socketId).emit("getMessage",{
      senderId,// sender id
      text
    })

  })


  // disconnect
  socket.on("disconnect",()=>{
    console.log("a user disconnected")
    removeUserUtil(socket.id)
    io.emit("getUsers",users)
  })


})
