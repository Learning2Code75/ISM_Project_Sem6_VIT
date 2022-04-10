import React from 'react';
import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/Online';

export default function Rightbar({user}){

  const HomeRightbar = ()=>{
    return (
      <>
      <h4 className = "rightbarTitle">
        Online Friends
      </h4>

      <ul className = "rightbarFriendList">
        {Users.map(u=>(
          <Online key={u.id} user = {u} />
        ))}
      </ul>
      </>

    );
  }
  const ProfileRightbar = ()=>{
    console.log(user)
    return(
      <>
        <h2 className="rightbarTitle">User Information</h2>
        <div className = "rightbarInfo">
          <div className = "rightbarInfoItem">
            <span className = "rightbarInfoKey">City:</span>
            <span className = "rightbarInfoValue">{user.username}</span>
          </div>
          <div className = "rightbarInfoItem">
            <span className = "rightbarInfoKey">From:</span>
            <span className = "rightbarInfoValue">{user.email}</span>
          </div>

        </div>
        <h2 className="rightbarTitle">User Followings</h2>
        <div className = "rightbarFollowings">
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
          <div className = "rightbarFollowing">
            <img className="rightbarFollowingImg" src="" alt="" />
            <span calssName="rightbarFollowingName">John C</span>
          </div>
        </div>

      </>
    )
  }
  return(
    <div className="rightbar">
      <div className = "rightbarWrapper">
{
  user? <ProfileRightbar /> : <HomeRightbar/>
}



      </div>
    </div>
  );
}
