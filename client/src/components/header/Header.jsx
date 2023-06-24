import  './header.css'
import { useEffect, useState } from 'react';
import axios from "axios"
// import './sidebar.css'
import { Link } from 'react-router-dom'

function Header() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getcats = async () => {
      const res = await axios.get("http://localhost:4000/api/cat")
      console.log(res.data)
      setCats(res.data)
    }
    getcats();
  }, [])

  return (
    <>
    <div className="bigWrapper">

   
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>Experience The New World Of</span>
        <span className='headerTitleLg'> Blogs </span>
      </div>
          <img className='headerImg' src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      {/* <div className="banner--fadeBottom" /> */}
          

    </div>
    <div className="wrapper">
             <div className="sidebarItem">
                <span className="sidebarTitle">CATeG0RIES</span>
                <ul className='sidebarList'>
                    {cats.map((c) => (
                        // <Link className='link' to={`/?cat=${c.name}`} >
                            <a className='link' href={`/?cat=${c.name}`}>
                                <li className='sidebarListItem'>{c.name}</li>
                          </a>
                        
                        // </Link>
                    ))}
                </ul>
            </div>
          </div>
      </div>
    </>
  )
}

export default Header
