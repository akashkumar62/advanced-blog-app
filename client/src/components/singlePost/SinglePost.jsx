import { Link, useLocation } from 'react-router-dom'
import './singlePost.css'
import { useEffect, useState ,useContext} from 'react';
import { Context } from "../../context/Context";
import axios from 'axios';


function SinglePost() {
    const PF = "http://localhost:4000/images/";
    const location=useLocation();
    const path=location.pathname.split("/")[2];
  const [posts,setPosts]=useState({})
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
   
    useEffect(()=>{
       const getPosts= async()=>{
           const res = await axios.get("http://localhost:4000/api/posts/"+path)
           setPosts(res.data);
           setTitle(res.data.title);
           setDesc(res.data.desc);
       };
       getPosts()
    },[path])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/posts/${posts._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:4000/api/posts/${posts._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {posts.photo && 
                   ( <img className='singlePostImg' src={PF+posts.photo} alt="" />)
                }


                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {posts.username === user?.username && (
                            <div className="singlePostEdit">
                                <i
                                    className="singlePostIcon far fa-edit"
                                    onClick={() => setUpdateMode(true)}
                                ></i>
                                <i
                                    className="singlePostIcon far fa-trash-alt"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>
                )}
               
               
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                    <Link className='link' to={`/?user=${posts.username}`}>
                            <b>{posts.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(posts.createdAt).toDateString()}</span>
                </div>
               
                {updateMode ? (
                    <textarea
                        className="singlePostDescInput" rows={10} 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    )
}

export default SinglePost
