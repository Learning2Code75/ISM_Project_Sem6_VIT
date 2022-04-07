import "./share.css";
import {PermMedia,Label,Room , EmojiEmotions} from "@material-ui/icons"


export default function Share(){
  return(

    <div className = "share">
      <div className = "shareWrapper">


        <div className = "shareTop">
          <img className = "shareProfileImg" src="" alt=""  />
          <input placeholder="type something , let others know" type = "text" className = "shareInput" />
        </div>
        <hr className = "shareHr" />


        <div className = "shareBottom">
          <div className = "shareOptions">

            <div className = "shareOption">
              <PermMedia  className = "shareIcon" />
              <span className = "shareOptionText"> Photo or video </span>
            </div>

            <div className = "shareOption">
              <Label className = "shareIcon" />
              <span className = "shareOptionText"> Tag </span>
            </div>

            <div className = "shareOption">
              <Room className = "shareIcon" />
              <span className = "shareOptionText"> Location </span>
            </div>

            <div className = "shareOption">
              <EmojiEmotions className = "shareIcon" />
              <span className = "shareOptionText"> Feelings </span>
            </div>

          </div>
          <button className = "shareButton">Share</button>

        </div>


      </div>

    </div>
  );
}
