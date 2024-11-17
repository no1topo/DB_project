import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";

export default function Marks(){
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
                                    <div>
                                        <h2>Student Marks</h2>
                                        <ul class="nav nav-pills">
                                            <li class="nav-item">
                                            <a class="nav-link active" data-toggle="pill" href="#home">CL2005</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-toggle="pill" href="#menu1">CL2006</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-toggle="pill" href="#menu2">CL2007</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-toggle="pill" href="#menu3">CL2008</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-toggle="pill" href="#menu4">CL3004</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-toggle="pill" href="#menu5">CL3009</a>
                                            </li>
                                        </ul>
                                        
                                        <div class="tab-content">
                                            <div id="home" class="tab-pane fade show active">
                                                <h3>CL2005</h3>
                                                {/* ///////////////collapsible box////////////////////// */}
                                                <div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Assignment
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Assignment #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Quiz
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Quiz #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Sessional-I
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFour">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Sessional-II
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Final Exam
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Final Exam #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Grand Total
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">100</th>
                                                                            <td>86</td>
                                                                            <td>67</td>
                                                                            <td>17</td>
                                                                            <td>50</td>
                                                                            <td>92</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////// */}
                                            </div>
                                            <div id="menu1" class="tab-pane fade">
                                                <h3>CL2006</h3>
                                                    {/* ///////////////collapsible box////////////////////// */}
                                                <div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Assignment
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Assignment #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Quiz
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Quiz #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Sessional-I
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFour">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Sessional-II
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Final Exam
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Final Exam #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Grand Total
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">100</th>
                                                                            <td>86</td>
                                                                            <td>67</td>
                                                                            <td>17</td>
                                                                            <td>50</td>
                                                                            <td>92</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////// */}
                                            </div>
                                            <div id="menu2" class="tab-pane fade">
                                                <h3>CL2007</h3>
                                                <div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Assignment
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Assignment #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Quiz
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Quiz #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Sessional-I
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFour">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Sessional-II
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Final Exam
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Final Exam #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Grand Total
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">100</th>
                                                                            <td>86</td>
                                                                            <td>67</td>
                                                                            <td>17</td>
                                                                            <td>50</td>
                                                                            <td>92</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////// */}
                                            </div>
                                            <div id="menu3" class="tab-pane fade">
                                                <h3>CL2008</h3>
                                                <div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Assignment
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Assignment #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Quiz
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Quiz #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Sessional-I
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFour">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Sessional-II
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Final Exam
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Final Exam #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Grand Total
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">100</th>
                                                                            <td>86</td>
                                                                            <td>67</td>
                                                                            <td>17</td>
                                                                            <td>50</td>
                                                                            <td>92</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////// */}
                                            </div>
                                            <div id="menu4" class="tab-pane fade">
                                                <h3>CL3004</h3>
                                                <div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Assignment
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Assignment #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Quiz
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Quiz #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Sessional-I
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFour">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Sessional-II
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Final Exam
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Final Exam #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Grand Total
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">100</th>
                                                                            <td>86</td>
                                                                            <td>67</td>
                                                                            <td>17</td>
                                                                            <td>50</td>
                                                                            <td>92</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////// */}
                                            </div>
                                            <div id="menu5" class="tab-pane fade">
                                                <h3>CL3009</h3>
                                                <div>
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="card">
                                                        <div class="card-header" id="headingOne">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Assignment
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Assignment #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingTwo">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Quiz
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Quiz #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingThree">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Sessional-I
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFour">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                Sessional-II
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Sessional I #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingFive">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Final Exam
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Final Exam #</th>
                                                                            <th scope="col">Weightage</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">1</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">2</th>
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <th scope="row">3</th>   
                                                                            <td>5</td>
                                                                            <td>3</td>
                                                                            <td>10</td>
                                                                            <td>6</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="card">
                                                        <div class="card-header" id="headingSix">
                                                            <h4 class="mb-0">
                                                            <a class="btn btn-link collapsed" data-toggle="collapse" data-bs-parent="#accordionExample" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Grand Total
                                                            </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <table class="table table-hover">
                                                                        <thead class="TableHeader">
                                                                            <tr>
                                                                            <th scope="col">Total Marks</th>
                                                                            <th scope="col">Obtained Marks</th>
                                                                            <th scope="col">Average</th>
                                                                            <th scope="col">Standard Deviation</th>
                                                                            <th scope="col">Minimum</th>
                                                                            <th scope="col">Maximum</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <th scope="row">100</th>
                                                                            <td>86</td>
                                                                            <td>67</td>
                                                                            <td>17</td>
                                                                            <td>50</td>
                                                                            <td>92</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////// */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* ////////////////////////// */}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

