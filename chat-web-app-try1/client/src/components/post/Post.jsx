import {useState,useEffect} from 'react'
import axios from 'axios'
import './post.css'
import {MoreVert} from '@material-ui/icons';
// import {Users} from '../../dummyData'
import {Link} from 'react-router-dom';
import {format} from 'timeago.js'


export default function Post({post}){
  console.log(post)

  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user,setUser] = useState({});
  useEffect(()=>{
    // console.log("feed rendered")
    const fetchUser = async ()=>{
      // http://localhost:8800/api/users/624c4acddc743f8df8a931ac
      const res = await axios.get(`/users?userId=${post.userId}`)
      // console.log(res);
      setUser(res.data)
    }
    fetchUser();
    },[post.userId])

  const likeHandler = ()=>{
    setLike(isLiked? like-1 : like+1);
    setIsLiked(!isLiked);
  }


  return(


    <div className = "post">
      <div className = "postWrapper">
        <div className = "postTop">
          <div className = "postTopLeft">
          <Link to={`profile/${user.username}`}>
            <img className = "postProfileImg" alt="" src={user.profilePicture}/>
          </Link>
            <span className = "postUsername"> {user.username} </span>
            <span className = "postDate"> {format(post.createdAt)} </span>
          </div>


          <div className = "postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className = "postCenter">
          <span className= "postText">{post?.desc} </span>
          <img src = {post.img} alt = "" className = "postImg" />
        </div>

        <div className = "postBottom">
          <div className = "postBottomLeft">
            <span className = "likeIcon" onClick={likeHandler}>LIKE</span>
            <span className = "postLikeCounter">{like} likes</span>
          </div>

          <div className = "postBottomRight">
            <span className = "postCommentText">{post.comment} comments</span>
          </div>

        </div>

      </div>
    </div>
  );
}
