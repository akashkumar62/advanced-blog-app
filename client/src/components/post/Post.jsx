import { Link } from 'react-router-dom'
import './post.css'

function Post({post}) {
  
  const PF = "http://localhost:4000/images/";

  return (
    <div className='post'>
      {post.photo && <img loading='lazy' className='postImg' src={PF+ post.photo} alt="" />}

          <div className="postInfo">
            <div className="postCats">
              {
                // post.categories.map((c)=>(

            <a className='link' href={`/?cat=${post.categories}`}>
              <span className='postCat'>{post.categories}</span>
                </a>
              
                // ))
              }
                
            </div>
        <Link to={`/post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title}</span>
            </Link>
         
            <hr />
            <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="postDesc">
            {post.desc}
          </p>
    </div>
  )
}

export default Post
