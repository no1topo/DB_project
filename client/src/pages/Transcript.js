import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";

export default function Transcript(){
    let navigate = useNavigate();
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
                        </div>
                        <div class="col-md-11">
                            <div class="container-fluid">
                                <h4>Transcript  | 
                                </h4>
                                <br></br>
                                {/* ////////////////////////////Transcript Upper info row//////////////////////////// */}
                                <div class="HomeTextBox">
                                    <br></br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row">
                                                <div class="col-md-2"></div>
                                                <div class="col-md-10">
                                                    <p><b>Roll No:</b> 22K-5024</p>
                                                </div>
                                            </div>  
                                        </div>
                                        <div class="col-md-4">
                                            <p><b>Degree:</b> BS(CS) (Robotics & Automation)</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p><b>Batch:</b> Fall 2022</p>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                                {/* ////////////////////// Transcipt///////////////////////*/}
                                {/* ////////////////////first row////////////////////// */}
                                <br></br>
                                <div class="HomeTextBox">
                                    <br></br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                     {/* /////////////////////////////// second row///////////////////*/}
                                     <hr></hr>
                                     <br></br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* /////////////////////////third row//////////////////////// */}
                                    <hr></hr>
                                     <br></br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* /////////////////////////////fourth row///////////////// */}
                                    <hr></hr>
                                     <br></br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="row">
                                                <div class="col-md-2">
                                                    <p><b>Fall 2022 </b></p>
                                                </div>
                                                <div class="col-md-5">

                                                </div>
                                                <div class="col-md-5 text-right">
                                                    <span>Cr. Att:14   Cr. Ernd:14   CGPA:3.38   SGPA:3.38</span>
                                                </div>
                                            </div>
                                        <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Course Name</th>
                                                            <th scope="col">Section</th>
                                                            <th scope="col">CrdHrs</th>
                                                            <th scope="col">Grade</th>
                                                            <th scope="col">Points</th>
                                                            <th scope="col">Type</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Introduction to Information and Communication Technology</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>   
                                                            <td>Programming Fundamentals - Lab</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">CL1000</th>
                                                            <td>Programming Fundamentals</td>
                                                            <td>BSR-1C</td>
                                                            <td>1</td>
                                                            <td>B</td>
                                                            <td>3</td>
                                                            <td>Core</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>   
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

