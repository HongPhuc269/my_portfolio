import React, { Component, useState,useEffect } from 'react'
import "../Header/Header.css";
import "../Content/Content.css";
import pic from "./01.png";
import { useLocation, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { CONFIG, END_POINT } from '../../config/config';
import Button from 'react-bootstrap/esm/Button';
const PostPage = () => {
    const location = useLocation()
    console.log(location)
    const {currentIndex, listID} = location?.state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [post, setPost] = useState({
        id: null,
        title: null,
        authorname: null,
        description: null
    });

    const myStyle = {
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        height: 300
    };

    const { postId } = useParams();
    const [ postIdSearch, setPostIdSearch ] = useState(postId);
    


    console.log(CONFIG.baseURL + END_POINT.listPost + `${postIdSearch}`);
    console.log(`CONFIG.baseURL + END_POINT.listPost + ${postIdSearch}`);
    useEffect(() => {
        let didCancel = false;
        axios.get(CONFIG.baseURL + END_POINT.listPost + `${postIdSearch}`)
            .then((response) => { 
                console.log("response: " , response);
                if(!didCancel){
                    console.log("set new state")
                    setLoading(false);  
                    setPost({
                        id: response.data.id,
                        title: response.data.title,
                        authorname: response.data.author.username,
                        description: response.data.description
                    })
                }
            })
            .catch(() => {
                if (!didCancel) {
                    setLoading(false);
                    setError("Something went wrong")
                }
            });
            // return () => {
            //     console.log("clean up effect");
            //     didCancel = true;
            //   }
    },[postIdSearch]);

    
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPostIdSearch(postId);
    }, 0);
    return () => {
      clearTimeout(timeout);
    }
  }, [postId]);

  
    console.log("post: ",post)
    let length = listID.length;    
   const getPreviousButton = () => {
    if(currentIndex <= 0)
 {
    return null;
     }
     return (
        <Link to={`/posts/${listID[currentIndex - 1]}`}
        state={{currentIndex: currentIndex - 1, listID: listID}}>
      <Button variant="outline-primary">Previous</Button>
  </Link>
     )
   } 

   const getNextButton = () => {
    if(currentIndex >= length - 1)
 {
    return null;
     }
     return (
        <Link to={`/posts/${listID[currentIndex + 1]}`}
        state={{currentIndex: currentIndex + 1, listID: listID}}>
      <Button variant="outline-primary" style={{float: 'right'}}>Next</Button>
  </Link>
     )
   } 
   console.log(currentIndex)
   console.log(length)
    return (<>
    
       <div className="header" style={myStyle}>
            <div className="text-content">
                <h1 className="me">New Posts</h1>
            </div>
        </div>
        <div >
            <h1>ID:{postIdSearch}</h1>
            <div>Title: {post.title}</div>
            <div>AuthorName: {post.authorname}</div>
            <div>Description: {post.description}</div>
        </div>
        <div className="buttonWrapper">
        {getPreviousButton()}
        {getNextButton()}            
        </div>
    </>);
}
export default PostPage;