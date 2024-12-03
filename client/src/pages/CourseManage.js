import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function CourseManage(){
    let navigate = useNavigate();
    const [pills, setPills] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/teacher/coursemanage');
            setPills(response.data);
            localStorage.setItem('pills', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async (e, courseId) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state
        try {
            const response = await axios.post('http://localhost:5000/api/teacher/courseaccpet', {
                courseId, 
            });
            await fetchData();
            console.log(`Server Response:`, response.data);
            
        } catch (error) {
            console.error('Error withdrawing from course:', error);
            
        } finally{
            setIsLoading(false); // Reset loading state
        }
    };
    
    const renderCourseTabs = () => {
        return pills.map((course, index) => (
            <tr key={course.Course_ID}>
                <th scope="row">{index + 1}</th>
                <td>{course.Course_ID}</td>
                <td>{course.Course_Name}</td>
                <td>
                    <button
                        onClick={(event) => handleSubmit(event, course.Course_ID)}
                        disabled={isLoading}
                        className="btn"
                        id="SignInSmall"
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </td>
            </tr>
        ));
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
    }, [pills]);




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
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        </div>
                        <div class="col-md-11">
                        <div class="container-fluid">
                                    <h4>Course Registration | 
                                    </h4>
                                    <br></br>
                                    <div class="HomeTextBox">
                                        <div class = "HomeHeaderBox">
                                            <h5 class = "fa fa-list-alt HomeHeaderText"> Course Registration</h5>
                                        </div>
                                        <br></br>
                                        {/* TABLE */}
                                        <div class="table-responsive">
                                                    <table class="table">
                                                        <table class="table table-hover">
                                                            <thead class="TableHeader">
                                                                <tr>
                                                                <th scope="col">S.No</th>
                                                                <th scope="col">Code</th>
                                                                <th scope="col">Course Name</th>
                                                                <th scope="col">Register</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {renderCourseTabs()}
                                                            </tbody>
                                                        </table>
                                                    </table>
                                                </div>
                                        {/* ///// */}
                                        <br></br>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

