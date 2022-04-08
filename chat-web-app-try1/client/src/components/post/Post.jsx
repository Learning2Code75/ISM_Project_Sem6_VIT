import './post.css'
import {MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData'


export default function Post({post}){
  console.log(post)

  return(


    <div className = "post">
      <div className = "postWrapper">
        <div className = "postTop">
          <div className = "postTopLeft">
            <img className = "postProfileImg" alt="" src={Users.filter(u=>u.id === post.userId)[0].profilePicture}/>
            <span className = "postUsername"> {Users.filter(u=>u.id === post.userId)[0].username} </span>
            <span className = "postDate"> {post.date} </span>
          </div>


          <div className = "postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className = "postCenter">
          <span className= "postText">{post?.desc} </span>
          <img src = "" alt = "" className = "postImg" />
        </div>

        <div className = "postBottom">
          <div className = "postBottomLeft">
            <span className = "likeIcon">LIKE</span>
            <span className = "postLikeCounter">{post.like} likes</span>
          </div>

          <div className = "postBottomRight">
            <span className = "postCommentText">{post.comment} comments</span>
          </div>

        </div>

      </div>
    </div>
  );
}
