import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Attendance(){
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [stdid, setstdid] = useState('');
    const [pills, setPills] = useState([]);
    
    const get_id_student = async () =>{
        
        try {
            const response = await axios.get('http://localhost:5000/api/id');
            setstdid(response.data[0].Username);
            // console.log(response.data[0].Username);
        } catch (error) {
            console.error('Error fetching string:', error);
        }


    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/data');
            //console.log(pills[0].label);
            setData(response.data);
            //console.log(response.data);
            // console.log(data.filter(data => data.Course_ID));
            const response_couse = await axios.get('http://localhost:5000/api/data/couse');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
            setPills(response_couse.data);
            localStorage.setItem('pills', JSON.stringify(response_couse.data));
            pills[1]={Course_ID:'CS-401', ID:1};
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderAttendanceTabs = () => {
        
        return pills.map((courseId, index) => {
            // Filter attendance data for the current course ID
            const courseAttendance = data.filter(
                (record) => record.Course_ID === courseId.Course_ID
            );
    
            return (
                <div id={`menu${index + 1}`} className="tab-pane fade" key={index}>
                    <h3>{courseId.Course_ID}</h3>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="TableHeader">
                                <tr>
                                    <th scope="col">Lecture No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Presence</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseAttendance.map((record, i) => (
                                    <tr key={i}>

                                        <td>{i+1}</td>
                                        <td>{record.Lecture_Date}</td>
                                        <td>{record.Duration}</td>
                                        <td>{record.Status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        });
    };
    
    useEffect(() => {
        get_id_student();
        fetchData();
    }, []);

    useEffect(() => {
    }, [pills]);
    


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
                        <div class="col-md-1 text-center leftBar leftBarAttendance" >
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
                                    <h2>Registered Courses</h2>
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
                                        <a class="nav-link" data-toggle="pill" href="#menu3">CL3004</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#menu3">CL3009</a>
                                        </li>
                                    </ul>
                                    
                                    <div class="tab-content">
                                        <div id="home" class="tab-pane fade show active">
                                            <h3>CL2005</h3>
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
                                                        {data.map(data=>(
                                                                <tr>
                                                                    <td>{data.SNo}</td>
                                                                    <td>{data.Lecture_Date}</td>
                                                                    <td>{data.Duration}</td>
                                                                    <td>{data.Status}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="menu1" class="tab-pane fade">
                                        <h3>CL2005</h3>
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
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="menu2" class="tab-pane fade">
                                        <h3>CL2005</h3>
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
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                        </div>
                                        <div id="menu3" class="tab-pane fade">
                                        <h3>CL2005</h3>
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
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
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

