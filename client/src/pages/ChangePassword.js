import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ChangePassword(){
    let navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [oldpassword, setOldpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(password,oldpassword);
        if (password!=newpassword) {
            alert('Password and new Password can not be different');
        } else {
            try {
                const response = await axios.post('http://localhost:5000/api/change_pass', {
                    password,
                    oldpassword,
                });
                console.log(response.message);
            } catch (error) {
                
            }
        }
    };








    const NavLogin = () => {
          navigate('/');
    };
    const NavHome = () => {
        navigate('/Home');
    };
    const NavCourseReg = () => {
        navigate('/CourseReg');
    };
    const NavAttendance = () => {
        navigate('/Attendance');
    };
    const NavMarks = () => {
        navigate('/Marks');
    };
    const NavTranscript = () => {
        navigate('/Transcript');
    };
    const NavChallan = () => {
        navigate('/Challan');
    };
    const NavFeedback = () => {
        navigate('/Feedback');
    };
    const NavWithdraw = () => {
        navigate('/Withdraw');
    };
    const NavTimetable = () => {
        navigate('/Timetable');
    };
    return(
        // __________________________________NAVBAR____________________________________________//       
            <div>
                <nav class="navbar navbar-custom navbar-expand-sm">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar-list-4">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class= "HelloMr">Hello Mr,    </span><span class= "Name">Muhammad Hadi Shahid</span>  <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"></img>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">My Profile</a>
                                <a class="dropdown-item" href="#">Change Password</a>
                                <div class="dropdown-divider"></div>
                                <button onClick={()=>NavLogin()} type="submit" className="btn btn-primary fa fa-power-off" id="SignIn">          Log Out</button>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* //______________________________________BODY___________________________________________// */}
                <div class="container-fluid BodyDiv">
                    <div class="row">
                        <div class="col-md-1 text-center leftBar" >
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavHome()}><span class="fa fa-home HomeIcon">
                            </span>
                            <p class="FontLeftBar">Home</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavCourseReg()}><span class="fa fa-list-alt HomeIcon">
                            </span>
                            <p class="FontLeftBar">Course Registration</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavAttendance()}><span class="fa fa-id-card-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Attendance</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavMarks()}><span class="fa fa fa-pencil-square-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Marks</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavTranscript()}><span class="fa fa-newspaper-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Transcript</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavChallan()}><span class="fa fa-money HomeIcon">
                            </span>
                            <p class="FontLeftBar">Fee Challan</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavFeedback()}><span class="fa fa-file-text-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Course Feedback</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavWithdraw()}><span class="fa fa-file HomeIcon">
                            </span>
                            <p class="FontLeftBar">Course Withdraw</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavTimetable()}><span class="fa fa-calendar HomeIcon">
                            </span>
                            <p class="FontLeftBar">Timetable</p>
                            </a>
                            <br></br>
                        </div>
                        <div class="col-md-11">
                        <div class="container-fluid">
                                <h4>Change Password  | 
                                </h4>
                                <br></br>
                                <div class="container-fluid">
                                    {/* University Information */}
                                    <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h5 class = "fa fa-lock HomeHeaderText"> Change Password</h5>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-md-4"></div>
                                            <div class="col-md-4">
                                            <form>
                                            <div class="form-group">
                                                <label>Old Password</label>
                                                <input type="text" 
                                                class="form-control" 
                                                placeholder="Enter Old password"
                                                value={oldpassword}
                                                onChange={(e) => setOldpassword(e.target.value)}
                                                ></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">New Password</label>
                                                <input type="password" 
                                                class="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                ></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Repeat New Password</label>
                                                <input type="password" 
                                                class="form-control" 
                                                id="exampleInputPassword2" 
                                                placeholder="Password"
                                                value={newpassword}
                                                onChange={(e) => setNewpassword(e.target.value)}
                                                ></input>
                                            </div>
                                            <button 
                                            onClick={(event) => handleSubmit(event)}
                                            type="submit" class="btn btn-primary" id="SignIn">Submit</button>
                                            </form>
                                            </div>
                                            <div class="col-md-4"></div>
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

