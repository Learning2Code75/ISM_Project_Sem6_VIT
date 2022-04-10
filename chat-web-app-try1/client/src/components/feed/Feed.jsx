import './feed.css';
import {useState,useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
// import {Posts} from '../../dummyData'

export default function Feed({username}){

  const [posts,setPosts] = useState([]);
console.log(username)
  useEffect(()=>{
    // console.log("feed rendered")
    const fetchPosts = async ()=>{
      let res;
      // username
      // ? await axios.get(`posts/profile/${username}`)
      // : await axios.get("posts/timeline/624c4f290f081890e6a1f5bb")
      // console.log(res);

      if(username){
        res = await axios.get("/posts/profile/"+username);
      }else{
        res = await axios.get("posts/timeline/624c4f290f081890e6a1f5bb")
      }

      setPosts(res.data)
    }
    fetchPosts();
  },[username])

  return(
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(p=>(
          <Post key ={p._id} post={p} />
        ))}

      </div>
    </div>

  );
}
