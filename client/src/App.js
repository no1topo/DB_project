import React,{Fragment, useState} from 'react';
import './App.css';
import logo from '../src/images/Flex.PNG'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function App() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");
  // function handleChange(e) {
  //   setUsername(e.target.value);
  // }
  // function handleChange1(e) {
  //   setPassword(e.target.value);
  // }

  const handleClick = async (e) => {
    // let teacherCondition = 0;
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
          username,
          password,
      });
      // console.log(username,password);
      console.log('Response from server:', response.data.message,response.status,response.message); 
      
      if (response.status===200) {
        navigate('/home');
        
        
      }else if(response.status===201){
        navigate('/Thome');
      }else{
        console.log('Error');
        console.log(username);  
        console.log(password);
      }
      
  } catch (error) {
    console.error('Error during login:', error.response?.data?.message || error.message);
  }};
  


  return (
    <Fragment>
      <div className = "container-fluid">
        <div className="row">
            <div className="col-md-4">
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                <img src={logo} alt=""></img>
                </div>
                <br></br>
                {/* sign in text */}
                <div className="text-center">
                <h1 className="animate-charcter">SIGN UP</h1>
                </div>
                
                   <br></br><br></br>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <form onSubmit={handleClick}>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Roll No</label>
                              <div className="input-group">
                                <div className="input-group-addon" style={{padding: "10px"}}>
                                <span className="fa fa-user-o"></span> 
                            </div>
                              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Roll Number i.e (17I-1234)"></input>
                            </div>
                              <small id="emailHelp" className="form-text text-muted">Roll Number i.e (17I-1234)</small>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <div className="input-group">
                                <div className="input-group-addon" style={{padding: "10px"}} >
                                 <span className="fa fa-lock"></span> 
                                </div>
                              <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                              </div>
                            </div>
                            <br></br><br></br>
                            <div className="text-center">
                            <button /*onClick={()=>handleClick()}*/ type="submit" className="btn btn-primary" id="SignIn">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2">
    
                    </div>
                </div>
                
            </div>
            <div className="col-md-8 text-center" id="test" >
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 className="text-center" style={{color: "white"}}>Welcome to Flex-Student</h1>
                <div className="text-center" style={{color: "white"}}>htmlFor Password related queries contact concerned Academic Officer on <a  style={{color: "white"}} href="Login.html">nu.edu.pk</a></div>
                
            </div>
        </div>
    </div>


    </Fragment>
  );
}


