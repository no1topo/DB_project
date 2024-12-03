import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Marks(){
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [pills, setPills] = useState([]);
    const [avg, setAvg] = useState([]);
    const [min, setMin] = useState([]);
    const [max, setMax] = useState([]);
    const [std, setStd] = useState([]);


    function updating_avg() {
        const avgMap = new Map(
            avg.map((item) => [`${item.Course_ID}-${item.Question_No}`, item.round])
        );
        for (let index = 0; index < data.length; index++) {
            const compositeKey = `${data[index].Course_ID}-${data[index].Question_No}`;
            if (avgMap.has(compositeKey)) {
                data[index].average = avgMap.get(compositeKey);
            }
        }
    }

    function updating_min() {
        const avgMap = new Map(
            min.map((item) => [`${item.Course_ID}-${item.Question_No}`, item.min])
        );
        for (let index = 0; index < data.length; index++) {
            const compositeKey = `${data[index].Course_ID}-${data[index].Question_No}`;
            if (avgMap.has(compositeKey)) {
                data[index].min = avgMap.get(compositeKey);
            }
        }
        
    }

    function updating_max() {
        const avgMap = new Map(
            max.map((item) => [`${item.Course_ID}-${item.Question_No}`, item.max])
        );
        for (let index = 0; index < data.length; index++) {
            const compositeKey = `${data[index].Course_ID}-${data[index].Question_No}`;
            if (avgMap.has(compositeKey)) {
                data[index].max = avgMap.get(compositeKey);
            }
        }
    }

    function updating_std() {
        const avgMap = new Map(
            std.map((item) => [`${item.Course_ID}-${item.Question_No}`, item.round])
        );
        for (let index = 0; index < data.length; index++) {
            const compositeKey = `${data[index].Course_ID}-${data[index].Question_No}`;
            if (avgMap.has(compositeKey)) {
                data[index].std = avgMap.get(compositeKey);
            }
        }
    }


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Marks');
            setData(response.data);
            
            // console.log(response.data);
            // console.log(data.filter(data => data.Course_ID));
            const response_couse = await axios.get('http://localhost:5000/api/data/couse');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
            setPills(response_couse.data);
            localStorage.setItem('pills', JSON.stringify(response_couse.data));

            const response_avg = await axios.get('http://localhost:5000/api/Marks/avg');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
            
            setAvg(response_avg.data);
            localStorage.setItem('avg', JSON.stringify(response_avg.data));

            const response_min = await axios.get('http://localhost:5000/api/Marks/min');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
           
           setMin(response_min.data);
            localStorage.setItem('min', JSON.stringify(response_min.data));

            const response_max = await axios.get('http://localhost:5000/api/Marks/max');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
           
           setMax(response_max.data);
            localStorage.setItem('max', JSON.stringify(response_max.data));

            const response_std = await axios.get('http://localhost:5000/api/Marks/stddev');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
           
           setStd(response_std.data);
            localStorage.setItem('std', JSON.stringify(response_std.data));
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const rendereverything = () =>{

        return pills.map((couseid,index)=>{
            const cousemarks = data.filter(
                (record) => record.Course_ID === couseid.Course_ID
            );
        return(
            <div id={`menu${index + 1}`} class="tab-pane fade active">
            
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
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="card-body">
                                            
                        <div class="table-responsive" key={index}>
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
                                            {cousemarks.map((record, i)=>(
                                                <tr key ={i}>
                                                <th scope="row">{record.Evaluation_ID===1?record.Question_No:null}</th>
                                                <td>{record.Evaluation_ID===1?record.Weightage:null}</td>
                                                <td>{record.Evaluation_ID===1?record.Obtained_Marks:null}</td>
                                                <td>{record.Evaluation_ID===1?record.Total_Marks:null}</td>
                                                <td>{record.Evaluation_ID===1?record.average:null}</td>
                                                <td>{record.Evaluation_ID===1?record.std:null}</td>
                                                <td>{record.Evaluation_ID===1?record.min:null}</td>
                                                <td>{record.Evaluation_ID===1?record.max:null}</td>
                                                </tr>
                                            ))}
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
                                            {cousemarks.map((record, i)=>(
                                                <tr key ={i}>
                                                <th scope="row">{record.Evaluation_ID===2?record.Question_No:null}</th>
                                                <td>{record.Evaluation_ID===2?record.Weightage:null}</td>
                                                <td>{record.Evaluation_ID===2?record.Obtained_Marks:null}</td>
                                                <td>{record.Evaluation_ID===2?record.Total_Marks:null}</td>
                                                <td>{record.Evaluation_ID===2?record.average:null}</td>
                                                <td>{record.Evaluation_ID===2?record.std:null}</td>
                                                <td>{record.Evaluation_ID===2?record.min:null}</td>
                                                <td>{record.Evaluation_ID===2?record.max:null}</td>
                                                </tr>
                                            ))}
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
                                            {cousemarks.map((record, i)=>(
                                                <tr key ={i}>
                                                <th scope="row">{record.Evaluation_ID===3?record.Question_No:null}</th>
                                                <td>{record.Evaluation_ID===3?record.Weightage:null}</td>
                                                <td>{record.Evaluation_ID===3?record.Obtained_Marks:null}</td>
                                                <td>{record.Evaluation_ID===3?record.Total_Marks:null}</td>
                                                <td>{record.Evaluation_ID===3?record.average:null}</td>
                                                <td>{record.Evaluation_ID===3?record.std:null}</td>
                                                <td>{record.Evaluation_ID===3?record.min:null}</td>
                                                <td>{record.Evaluation_ID===3?record.max:null}</td>
                                                </tr>
                                            ))}
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
                                            {cousemarks.map((record, i)=>(
                                                <tr key ={i}>
                                                <th scope="row">{record.Evaluation_ID===4?record.Question_No:null}</th>
                                                <td>{record.Evaluation_ID===4?record.Weightage:null}</td>
                                                <td>{record.Evaluation_ID===4?record.Obtained_Marks:null}</td>
                                                <td>{record.Evaluation_ID===4?record.Total_Marks:null}</td>
                                                <td>{record.Evaluation_ID===4?record.average:null}</td>
                                                <td>{record.Evaluation_ID===4?record.std:null}</td>
                                                <td>{record.Evaluation_ID===4?record.min:null}</td>
                                                <td>{record.Evaluation_ID===4?record.max:null}</td>
                                                </tr>
                                            ))}
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
                                            {cousemarks.map((record, i)=>(
                                                <tr key ={i}>
                                                <th scope="row">{record.Evaluation_ID===5?record.Question_No:null}</th>
                                                <td>{record.Evaluation_ID===5?record.Weightage:null}</td>
                                                <td>{record.Evaluation_ID===5?record.Obtained_Marks:null}</td>
                                                <td>{record.Evaluation_ID===5?record.Total_Marks:null}</td>
                                                <td>{record.Evaluation_ID===5?record.average:null}</td>
                                                <td>{record.Evaluation_ID===5?record.std:null}</td>
                                                <td>{record.Evaluation_ID===5?record.min:null}</td>
                                                <td>{record.Evaluation_ID===5?record.max:null}</td>
                                                </tr>
                                            ))}
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
            );
        });
    };


    useEffect(() => {
        fetchData();
        
    }, []);

    useEffect(() => {
        updating_avg();
        updating_min();
        updating_max();
        updating_std();
    }, [pills,min,max,avg,std]);


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
                                        {pills.map((data,index)=>(           
                                            <li class="nav-item" key={index}>
                                            <a class="nav-link" data-toggle="pill" href={`#menu${index + 1}`}>
                                                <b>{data.Course_ID}</b></a>
                                            </li>
                                        ))}  
                                        </ul>
                                        
                                        <div class="tab-content">
                                        {rendereverything()}
                                        
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

