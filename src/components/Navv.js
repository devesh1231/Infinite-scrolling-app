import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
function Navv() {
  
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout =()=>{
   localStorage.clear();
   navigate("/login");
  }

  return (
    <div>
    <Nav className="justify-content-end" activeKey="/home" >
      {auth ? (
        <>
          <Nav.Item>
            <Nav.Link to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={logout} to="/login">
              Logout
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        /* Placeholder for the code block when `auth` is false */
        <Nav.Item>
          <Nav.Link to="/login">Login</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  </div>


  );
}

export default Navv;
