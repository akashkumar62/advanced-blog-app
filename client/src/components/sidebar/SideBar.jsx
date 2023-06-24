import { useEffect,useState } from 'react';
import axios from "axios"
import './sidebar.css'
import { Link } from 'react-router-dom'


function SideBar() {

    const [cats,setCats]=useState([]);

    useEffect(()=>{
      const getcats= async()=>{
          const res = await axios.get("http://localhost:4000/api/cat")
          console.log(res.data)
          setCats(res.data)
      }
      getcats();
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img className='sidebarImg' src="https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
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
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar
