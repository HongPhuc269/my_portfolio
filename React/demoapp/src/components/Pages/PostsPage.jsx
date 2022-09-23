import React, { PureComponent, useCallback, useEffect, useState } from 'react'
import "../Header/Header.css";
import background from "../../assets/images/bg-post.jpg";
import axios from 'axios';
import { CONFIG, END_POINT } from '../../config/config';
import "../Content/Content.css";
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const PostsPage = () => {
    const myStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: 300
    };
    const [posts, setPosts] = useState([]);
    const [postSearch, setPostSearch] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        let didCancel = false;
        axios.get(CONFIG.baseURL + END_POINT.listPost)
            .then(response => {
                if (!didCancel) {
                    setLoading(false);
                    setPosts(response.data);
                    console.log(response.data);
                }
            }).catch(() => {
                if (!didCancel) {
                    setLoading(false);
                    setError("API went wrong");
                }
            })
        return () => {
            didCancel = true;
        }
    }, [])


    const handleSearchChange = useCallback(evt => {
        setPostSearch(evt.target.value);
    }, []);

    if (loading) {
        return <div>Loading</div>
    }

    let idList = [];
    posts.map(post => {
        idList.push(post.id)
    })
    const checkLogin = (item) => {
        return `./${item.id}`;
    }
    return (<>
        <div className="header" style={myStyle}>
            <div className="text-content">
                <h1 className="me">Posts</h1>
            </div>
        </div>

        {posts.map((item, index) => (
            <div class="main-content">
                <div class="list">
                    <div class="post" key={index}>
                        {/* <a class="title" onClick={() => {navigate(`/posts/${post.id}`)}}>{post.title}</a> */}
                        <Link to={checkLogin(item)} state={{ currentIndex: index, listID: idList }}>
                            {item.title}
                        </Link>
                        {console.log(index)}
                        <div class="preview">{item.description}</div>
                        <div class="more">`Poster by {item.author.username} on {item.author.birthDate}`</div>
                    </div>
                </div>
                <Button onClick={() => axios.delete(`http://localhost:8080/posts/${item.id}`, { headers: { 'Content-Type': 'application/json' } })
                    .then(response => {
                        window.location.reload();
                    })}>Delete</Button>
            </div>
        )
        )}
        <div class="button">
            <button>View all posts</button>
        </div>
    </>);

}
export default PostsPage;