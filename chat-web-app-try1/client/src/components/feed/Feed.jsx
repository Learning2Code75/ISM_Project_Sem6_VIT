import './feed.css';
import {useState,useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
// import {Posts} from '../../dummyData'

export default function Feed(){

  const [post,setPosts] = useState([]);

  useEffect(()=>{
    // console.log("feed rendered")
    const fetchPosts = async ()=>{
      const res = await axios.get("/timeline/624c4f290f081890e6a1f5bb")
      console.log(res);
    }
    fetchPosts();
    },[])

  return(
    <div className="feed">

      <div className="feedWrapper">
        <Share />
        {/*Posts.map(p=>(
          <Post key ={p.id} post={p} />
        ))*/}

      </div>
    </div>

  );
}
