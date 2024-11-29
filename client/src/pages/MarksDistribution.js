import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";

export default function MarksDistribution(){
    let navigate = useNavigate();
    
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
                            <br></br>
                        </div>
                        <div class="col-md-11">
                        <div class="container-fluid">
                                <h4>Marks  |</h4>
                                {/* ////////////////////////////////////dropdown button////////////////////////////////////// */}
                                <br></br>
                                <div class="row">
                                    <div class="col-md-5"></div>
                                    <div class="col-md-2">
                                        <div class="dropdown btn">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="SignIn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Fall 2024
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Fall 2024</a>
                                                <a class="dropdown-item" href="#">Summer 2024</a>
                                                <a class="dropdown-item" href="#">Spring 2024</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5"></div>
                                </div>
                                {/* ///////////////////////////////////////Registered Courses///////////////////////////////////////// */}
                                <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h2 class = "fa fa fa-pencil-square-o HomeHeaderText"> Distribute Marks</h2>
                                        </div>
                                        <br></br>
                                    <div style={{padding: "23px"}}>
                                        <div>
                                        <h2 className="animate-charcter" style={{fontSize: "150%"}}>Select Course</h2>
                                        <select className="form-control" id="AtendanceSection">
                                        <option value="">
                                            -- Select Course --
                                        </option>
                                        <option>
                                            CS-101
                                        </option>
                                        </select>
                                        </div>                                 
                                    <div>
                                        <h2 className="animate-charcter" style={{fontSize: "150%"}}>Select Section</h2>
                                        <br></br>
                                        <select
                                            className="form-control"
                                            id="AtendanceSection">
                                            <option value="">
                                            -- Select Section --
                                            </option>                                  
                                            <option>
                                                A-4
                                            </option>
                                        </select>
                                    </div>
                                    {/* Evaluation Type */}
                                        <div>
                                        <h2 className="animate-charcter" style={{fontSize: "150%"}}>Enter Evaluation Type</h2>
                                        <br></br>
                                        <select
                                            className="form-control"
                                            id="AtendanceSection">
                                            <option value="">
                                            -- Select Evaluation --
                                            </option>
                                            <option>
                                                Assignment
                                            </option>
                                        </select>
                                        </div>
                                    {/* Student List */}
                                        <div>
                                        <h2 className="animate-charcter" style={{fontSize: "150%"}}>Set Marks</h2>
                                        <br></br>
                                        <table className="table table-bordered table-hover">
                                            <thead>
                                            <tr id="SignIn">
                                                <th>Student ID</th>
                                                <th>Marks</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr  className='SignIn'>
                                                <td>22k-5024</td>
                                                <td>
                                                    <input 
                                                    id="AtendanceSection"
                                                    type="text"
                                                    className="form-control"></input>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn btn-primary" id="SignIn">
                                            Save Marks
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                {/* ////////////////////////// */}
                                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

