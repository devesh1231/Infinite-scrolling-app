import React  ,{ useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
  const [user, setUser] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    if(user !== "" && password !==""){
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
   }
    }
    
})

  const collectData =()=>{
    console.warn(user,password);
    if(user !== "" && password !==""){
    localStorage.setItem("user",JSON.stringify({user,password}));
    navigate('/');
    }

  }

  return (
    <div className='login'>
    <h1>Login</h1>
    <div className="input-fiels">
   <input type="text" placeholder='Enter Username ' value = {user} onChange={(e)=>setUser(e.target.value)} required = "req"/>
   <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
   <button type='submit' onClick={collectData}>Submit</button>
   </div>
    </div>
  )
}

export default Login
