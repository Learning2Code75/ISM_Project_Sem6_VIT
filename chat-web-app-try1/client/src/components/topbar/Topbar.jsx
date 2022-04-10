import "./topbar.css";
import {useContext} from 'react';
import {Search,Person,Chat, Notifications} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'

export default function Topbar(){

    const {user} = useContext(AuthContext);
    // console.log(user);

    return (

      <div className = "topbarContainer">
        <div className = "topbarLeft">
          <Link to='/' style={{textDecoration:"none"}}>
            <span className="logo">ISM Project</span>
          </Link>
        </div>

        <div className = "topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder = "Search for username post title" className="searchInput"/>
          </div>
        </div>

        <div className = "topbarRight">
          <div className = "topbarLinks">
            <Link to="/"><span className = "tobarLink">Homepage</span></Link>
            <span className = "tobarLink">Timeline</span>

          </div>

          <div className = "topbarIcons">
            <div className = "topbarIconItem">
              <Person />
              <span className = "topbarIconBadge">1</span>
            </div>
            <Link to="/messenger">
              <div className = "topbarIconItem">
                <Chat />
                <span className = "topbarIconBadge">1</span>
              </div>

            </Link>
            <div className = "topbarIconItem">
              <Notifications />
              <span className = "topbarIconBadge">1</span>
            </div>
          </div>
          <Link  className="uname" to={`/profile/${user.username}`}>
          <span >{user.username} </span>

          <img src={user.profilePicture} alt ="" className = "topbarImg"/>

          </Link>


        </div>


      </div>

    );
}
