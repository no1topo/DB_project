import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";

export default function THome(){
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
                            <p class="FontLeftBar">Marks Report</p>
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
                                <h4>Teacher Profile  | Home
                                </h4>
                                <br></br>
                                <div class="container-fluid">
                                    {/* University Information */}
                                    <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h5 class = "fa fa-university HomeHeaderText"> University Information</h5>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="row">
                                                    <div class="col-md-2"></div>
                                                    <div class="col-md-10">
                                                        <p><b>Instructor ID:</b> 22K-5024</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-md-4">
                                                <p><b>Campus:</b> Karachi</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p><b>Status:</b> Current</p>
                                            </div>
                                        </div>
                                        <br></br>
                                    </div>
                                    {/* Personal Information */}
                                    <br></br>
                                    <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h5 class = "fa fa-id-badge HomeHeaderText"> Personal Information</h5>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="row">
                                                    <div class="col-md-2"></div>
                                                    <div class="col-md-10">
                                                        <p><b>Name:</b> Hadi</p>
                                                        <p><b>Gender:</b> Male</p>
                                                        <p><b>Email:</b> k225024@nu.edu.pk</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-md-4">
                                                <p><b>DOB:</b>  9/6/2002</p>
                                                <p><b>CNIC:</b> 42000-2232150-3</p>
                                                <p><b>Mobile No:</b> 0331-3678902</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p><b>Blood Group:</b> 0</p>
                                                <p><b>Nationality: </b> Pakistani</p>
                                            </div>
                                        </div>
                                        <br></br>
                                    </div>
                                    {/* Contact Information */}
                                    <br></br>
                                    <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h5 class = "fa fa-mobile HomeHeaderText"> Contact Information</h5>
                                        </div>
                                        <br></br>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-md-2"></div>
                                                    <div class="col-md-10">
                                                        <h4><b>Permanent:</b></h4>
                                                        <p><b>Address:</b> Nazimbad No 2 2A-6/2A Karachi</p>
                                                        <p><b>City:</b> Karachi</p>
                                                        <p><b>Country:</b> Pakistan</p>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div class="col-md-6">
                                            <h4><b>Current:</b></h4>
                                            <p><b>Address:</b> Nazimbad No 2 2A-6/2A Karachi</p>
                                            <p><b>City:</b> Karachi</p>
                                            <p><b>Country:</b> Pakistan</p>
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

