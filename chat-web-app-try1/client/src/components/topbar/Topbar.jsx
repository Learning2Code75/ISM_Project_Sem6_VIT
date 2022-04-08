import "./topbar.css";
import {Search,Person,Chat, Notifications} from '@material-ui/icons';
import {Link} from 'react-router-dom';
export default function Topbar(){
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
            <span className = "tobarLink">Homepage</span>
            <span className = "tobarLink">Timeline</span>
          </div>

          <div className = "topbarIcons">
            <div className = "topbarIconItem">
              <Person />
              <span className = "topbarIconBadge">1</span>
            </div>
            <div className = "topbarIconItem">
              <Chat />
              <span className = "topbarIconBadge">1</span>
            </div>
            <div className = "topbarIconItem">
              <Notifications />
              <span className = "topbarIconBadge">1</span>
            </div>
          </div>
          <img src="" alt ="" className = "topbarImg"/>


        </div>


      </div>

    );
}
