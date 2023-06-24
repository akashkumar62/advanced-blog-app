import './topbar.css'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../../context/Context";
function TopBar() {
  const { user,dispatch } = useContext(Context);
  const PF = "http://localhost:4000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='top'>
      <div className="topLeft">
   


        <a
          href="https://github.com/akashkumar62"
          target="_blank"
         
        >
          <i className="topIcon  fa-brands fa-github" ></i>
        </a>

        <a
          href="https://twitter.com/Akashchristia14?t=9Up6s6QBlBlx2D26YiijWQ&s=09"
          target="_blank"
         
        >
          <i className="topIcon fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com/akashhh_o07?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
        
        >


          <i className="topIcon fa-brands fa-instagram"></i>
        </a>

      </div>
      <div className="topCenter">
        <ul className='topList'>
          <li className=' topListItem'>

          
              <a className='link' href="/">HOME</a>
           
            
          </li>
          {/* <li className=' topListItem'> <Link className='link' to="/">ABOUT</Link></li> */}
          {/* <li className=' topListItem'> <Link className='link' to="/">CONTACT</Link></li> */}
          <li className=' topListItem'> <Link className='link' to="/write">WRITE</Link></li>
          <li className=' topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">

        {
          user ? (
            <Link to="/settings">
              <img loading='lazy' className='topImg' src={PF + user.profilePic} alt="" />
            </Link>
          
          ) :
            (
              <ul className='topList'>
                <li className='topListItem'>
                  <Link className='link' to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className='topListItem'>
                  <Link className='link' to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )

        }
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  )
}

export default TopBar


// {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> </> ) */}