import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Timetable(){
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
            const response = await axios.get('http://localhost:5000/api/timetable');
            //console.log(pills[0].label);
            setData(response.data);
            console.log(response.data);
            // console.log(data.filter(data => data.Course_ID));
            const response_day = await axios.get('http://localhost:5000/api/timetable/days');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
            setPills(response_day.data);
            console.log(response_day.data);
            localStorage.setItem('pills', JSON.stringify(response_day.data));
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderAttendanceTabs = () => {
        
        return pills.map((courseId, index) => {
            // Filter attendance data for the current course ID
            const courseAttendance = data.filter(
                (record) => record.Day === courseId.Day
            );
    
            return (
                <div id={`menu${index + 1}`} className="tab-pane fade" key={index}>
                    
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="TableHeader">
                                <tr>
                                    <th scope="col">S.NO</th>
                                    <th scope="col">Instructor Name</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">End Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseAttendance.map((record, i) => (
                                    <tr key={i}>

                                        <td>{i+1}</td>
                                        <td>{record.Instructor_Name}</td>
                                        <td>{record.Course_Name}</td>
                                        <td>{record.Start_time}</td>
                                        <td>{record.End_time}</td>
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
                                <h4>Timetable  |</h4>
                                <br></br><br></br>
                                {/* ///////////////////////////////////////Registered Courses///////////////////////////////////////// */}
                                    <h2>Timetable</h2>
                                        <div>
                                        <ul class="nav nav-pills">     
                                        {pills.map((data,index)=>(           
                                            <li class="nav-item" key={index}>
                                            <a class="nav-link" data-toggle="pill" href={`#menu${index + 1}`}>
                                                <b>{data.Day}</b></a>
                                            </li>
                                        ))}      
                                        </ul>
                                        <div class="tab-content">  
                                        {renderAttendanceTabs()}
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

