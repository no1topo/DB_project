import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function MarksReport(){
    let navigate = useNavigate();
    const [Course_name, setCourse_name] = useState('');
    const [course_code, setCourse_code] = useState('');
    const [hours,setHours] = useState('');
    const [message,setMessage] = useState('');
    
    const Add_course = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/add_course/register',{
            Course_name,
            course_code});
            
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error Occurred')
        }
    }

    const Remove_course = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/remove_course/register',{
            Course_name,
            course_code,
            });
            
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error Occurred');
        }
    }


    const NavLogin = () => {
          navigate('/');
    };
    const NavTHome = () => {
        navigate('/THome');
    };
    const NavMarksDistribution = () => {
        navigate('/MarksDistribution');
    };
    const NavMarksReport = () => {
        navigate('/MarksReport');
    };
    const NavAttendanceManage = () => {
        navigate('/AttendanceManage');
    };
    const NavFeedbackManage = () => {
        navigate('/FeedbackManage');
    };
    const NavCourseManage = () => {
        navigate('/CourseManage');
    };
    const NavChangePassword = () => {
        navigate('/ChangePassword');
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
                                <a onClick={()=>NavTHome()} class="dropdown-item" href="#">My Profile</a>
                                <a onClick={()=>NavChangePassword()} class="dropdown-item" href="#">Change Password</a>
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
                            <a class="leftBarButtons" href="#" onClick={()=>NavTHome()}><span class="fa fa-home HomeIcon">
                            </span>
                            <p class="FontLeftBar">Home</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavCourseManage()}><span class="fa fa-list-alt HomeIcon">
                            </span>
                            <p class="FontLeftBar">Manage Courses</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavAttendanceManage()}><span class="fa fa-id-card-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Manage Attendance</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavMarksDistribution()}><span class="fa fa fa-pencil-square-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Distribute Marks</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavMarksReport()}><span class="fa fa-newspaper-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">Open Courses</p>
                            </a>
                            <br></br>
                            <a class="leftBarButtons" href="#" onClick={()=>NavFeedbackManage()}><span class="fa fa-file-text-o HomeIcon">
                            </span>
                            <p class="FontLeftBar">View Feedback</p>
                            </a>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        </div>
                        <div class="col-md-11">
                        <div class="container-fluid">
                                <h4>Manage Courses  | 
                                </h4>
                                <br></br>
                                <div class="container-fluid">
                                    {/* University Information */}
                                    <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h5 class = "fa fa-newspaper-o HomeHeaderText"> Manage Course</h5>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-md-4"></div>
                                            <div class="col-md-4">
                                            <form>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Course Name</label>
                                                <input value={Course_name} onChange={(e)=> setCourse_name(e.target.value)} type="text" class="form-control" placeholder="e.g. Database Systems"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Enter Course Code</label>
                                                <input value={course_code} onChange={(e)=> setCourse_code(e.target.value)} type="text" class="form-control"  placeholder="e.g. CS-101"></input>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Enter Course Credits</label>
                                                <input value={hours} onChange={(e)=> setHours(e.target.value)} type="text" class="form-control" placeholder="1 to 3"></input>
                                            </div>
                                            <button onClick={Add_course} type="submit" class="btn btn-primary" id="SignIn">Add Course</button>
                                            <button onClick={Remove_course} type="submit" class="btn btn-primary" id="SignInRed">Remove Course</button>
                                            </form>
                                            </div>
                                            <div class="col-md-4">
                                                <br></br>
                                                
                                            </div>
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

