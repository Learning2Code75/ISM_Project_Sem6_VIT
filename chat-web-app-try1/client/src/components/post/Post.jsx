import './post.css'
import {MoreVert} from '@material-ui/icons';


export default function Post(){
  return(


    <div className = "post">
      <div className = "postWrapper">
        <div className = "postTop">
          <div className = "postTopLeft">
            <img className = "postProfileImg" alt="" src=""/>
            <span className = "postUsername"> Name 1 </span>
            <span className = "postDate"> 5 min ago </span>
          </div>


          <div className = "postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className = "postCenter">
          <span className= "postText">Post Text </span>
          <img src = "" alt = "" className = "postImg" />
        </div>

        <div className = "postBottom">
          <div className = "postBottomLeft">
            <span className = "likeIcon">LIKE</span>
            <span className = "postLikeCounter">789 likes</span>
          </div>

          <div className = "postBottomRight">
            <span className = "postCommentText">9 comments</span>
          </div>

        </div>

      </div>
    </div>
  );
}
