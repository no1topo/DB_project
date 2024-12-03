import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function THome(){
    let navigate = useNavigate();
    const [pills, setPills] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const fetchData = async () => {
        try {
            
            const response = await axios.get('http://localhost:5000/api/teacher/user_data');
           // console.log('First Course ID:', response_couse.data[0]?.Course_ID);
            setPills(response.data);
            localStorage.setItem('pills', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchProfileImage = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user/profile-image', {
                responseType: 'arraybuffer', // To handle binary data
            });
            const base64Image = btoa(
                new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            setProfileImage(`data:image/jpeg;base64,${base64Image}`);
        } catch (error) {
            console.error('Error fetching profile image:', error);
        }
    };


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return alert('Please select a file first.');

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            await axios.post('http://localhost:5000/api/user/upload-profile-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Image uploaded successfully.');
            fetchProfileImage(); // Refresh the profile image
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image. Please try again.');
        }
    };



    useEffect(() => {
        fetchData();
        fetchProfileImage();
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
                                <span class= "HelloMr">Hello Mr,    </span><span class= "Name">{pills.length > 0 && pills[0] ? pills[0].Instructor_Name : "Loading..."}</span>  <img src={profileImage ?profileImage:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"} width="40" height="40" class="rounded-circle"></img>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a onClick={()=>NavTHome()} class="dropdown-item" href="#">My Profile</a>
                                <div>

                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                    <button onClick={handleUpload}>Upload</button>

                                </div>
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
                                                        <p><b>Instructor ID:</b> {pills.length > 0 && pills[0] ? pills[0].Instructor_ID : "Loading..."}</p>
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

