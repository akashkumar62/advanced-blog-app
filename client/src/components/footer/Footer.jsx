import React from "react";
import "./footer.css";


const Footer = () => {
 const email = 'xiome555@gmail.com';
 return (
  <footer className="footer">
   <div className="footer-container">
    <div className="item1">
     <i className="email fa-solid fa-envelope"></i>
     <a className="email" href={`mailto:${email}`}>{email}</a>
    </div>

    <div className="item2">
     {/* <span style={{ paddingRight: 5 }}>Copyright </span> */}
     <i className="lauda fa-solid fa-at"></i>
     {/* <span style={{ paddingLeft: 5 }}>
      {new Date().getFullYear()} Akash Pvt. Ltd. All Rights
      Reserved.
     </span> */}
     <span className="lauda" >
      Developed By Akash
     </span>
  
    </div>
    <a
     href="https://github.com/akashkumar62"
     target="_blank"
     className="item5"
    >
     <i className="topIcon  fa-brands fa-github" ></i>
    </a>
   
    <a
     href="https://twitter.com/Akashchristia14?t=9Up6s6QBlBlx2D26YiijWQ&s=09"
     target="_blank"
     className="item5"
    >
     <i className="topIcon fa-brands fa-twitter"></i>
    </a>
    <a
     href="https://instagram.com/akashhh_o07?igshid=MzNlNGNkZWQ4Mg=="
     target="_blank"
     className="item5"
    >


     <i className="topIcon fa-brands fa-instagram"></i>
    </a>
   
   </div>
  </footer>
 );
};

export default Footer;