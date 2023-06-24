import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";

function App() {
   const { user } = useContext(Context);
  
  return (
    
     
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user?<Home/> : <Login /> } />
          <Route path="/write" element={user? <Write /> : <Register/>} />
          <Route path="/settings" element={user? <Setting /> : <Register/>} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    

    // <Router>
    //   <TopBar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/register">{user ? <Home /> : <Register />}</Route>
    //     <Route path="/login">{user ? <Home /> : <Login />}</Route>
    //     <Route path="/write">{user ? <Write /> : <Register />}</Route>
    //     <Route path="/settings">{user ? <Setting /> : <Register />}</Route>
    //     <Route path="/post/:postId">
    //       <Single />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
