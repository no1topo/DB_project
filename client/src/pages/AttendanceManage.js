import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";

export default function AttendanceManage(){
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
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        </div>
                        <div class="col-md-11">
                        <div class="container-fluid">
                                <h4>Attendance  |</h4>
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
                                <div>
                                    <h2>Teaching Courses</h2>
                                    <ul class="nav nav-pills">
                                        <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#menu1">CL2005 Section BCS-5M</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#menu2">CL2006 Section BCS-5M</a>
                                        </li>
                                        <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter Date Here"></input>
                                            <button className='btn' id='SignInSmall'>Enter</button>
                                        </div>
                                        </form>
                                    </ul>
                                    
                                    <div class="tab-content">
                                        <div id="menu1" class="tab-pane fade">
                                            <h3>CL2005 Section BCS-5M</h3>
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Student ID</th>
                                                            <th scope="col">Student Name</th>
                                                            <th scope="col">11/23/2024</th>
                                                            <th scope="col">12/23/2024</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>22k5024</td>
                                                                <td>Hadi</td>
                                                                <td>
                                                                <form>
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" placeholder="-" id="AttendanceStatus"></input>
                                                                    </div>
                                                                </form>
                                                                {/* <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        -
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <button class="dropdown-item">A</button>
                                                                        <button class="dropdown-item">P</button>
                                                                    </div>
                                                                    </div> */}
                                                                </td>
                                                                <td>
                                                                <form>
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" placeholder="-" id="AttendanceStatus"></input>
                                                                    </div>
                                                                </form>
                                                                </td>
                                                                </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        {/* sadasdad */}
                                        <div id="menu2" class="tab-pane fade">
                                            <h3>CL2006 Section BCS-5M</h3>
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Lecture No</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Duration</th>
                                                            <th scope="col">Presence</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        {/* sadasdasd */}
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

