import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";

export default function Challan(){
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
                                <h4>Challan  | 
                                </h4>
                                <br></br>
                                {/* ////////////////////////////Transcript Upper info row//////////////////////////// */}
                                <div class="HomeTextBox">
                                    <div class = "HomeHeaderBox">
                                        <h5 class = "fa fa-money HomeHeaderText"> Challan Details</h5>
                                    </div>
                                    <br></br>
                                    {/* TABLE */}
                                    <div class="table-responsive">
                                                <table class="table">
                                                    <table class="table table-hover">
                                                        <thead class="TableHeader">
                                                            <tr>
                                                            <th scope="col">S No</th>
                                                            <th scope="col">Semester</th>
                                                            <th scope="col">Challan No</th>
                                                            <th scope="col">Instrument Type</th>
                                                            <th scope="col">Instrument No</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Due Date</th>	
                                                            <th scope="col">Payment Date</th>
                                                            <th scope="col">Entered By</th>
                                                            <th scope="col">Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th scope="row">1</th>
                                                            <td>Fall 2024</td>
                                                            <td>124247274</td>
                                                            <td>Paid Bank Challan</td>
                                                            <td>124247274</td>
                                                            <td>162,500</td>
                                                            <td>10-Sep-24</td>
                                                            <td>5-Sep-24</td>
                                                            <td>FBL</td>
                                                            <td><button class='btn' id='SignInSmall'>Posted</button></td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">2</th>
                                                            <td>Fall 2024</td>
                                                            <td>124247274</td>
                                                            <td>Paid Bank Challan</td>
                                                            <td>124247274</td>
                                                            <td>162,500</td>
                                                            <td>10-Sep-24</td>
                                                            <td>5-Sep-24</td>
                                                            <td>FBL</td>
                                                            <td><button class='btn' id='SignInSmall'>Posted</button></td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">3</th>   
                                                            <td>Fall 2024</td>
                                                            <td>124247274</td>
                                                            <td>Paid Bank Challan</td>
                                                            <td>124247274</td>
                                                            <td>162,500</td>
                                                            <td>10-Sep-24</td>
                                                            <td>5-Sep-24</td>
                                                            <td>FBL</td>
                                                            <td><button class='btn' id='SignInSmall'>Posted</button></td>
                                                            </tr>
                                                            <tr>
                                                            <th scope="row">4</th>
                                                            <td>Fall 2024</td>
                                                            <td>124247274</td>
                                                            <td>Paid Bank Challan</td>
                                                            <td>124247274</td>
                                                            <td>162,500</td>
                                                            <td>10-Sep-24</td>
                                                            <td>5-Sep-24</td>
                                                            <td>FBL</td>
                                                            <td><button class='btn' id='SignInSmall'>Posted</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </table>
                                            </div>
                                    {/* ///// */}
                                    <br></br>
                                </div>
                                <br></br>
                                <p><b>Fee can be paid using any one of the following methods:</b><br></br>
                                <b>1. Via bank account using kuickpay payment gateway.</b><br></br>
                                <br></br>
                                <b>Step 1:</b> Sign in to your Internet Banking, Mobile Banking or visit an ATM machine<br></br>
                                <br></br>
                                <b>Step 2:</b> Select Bill Payment / Payments and then select ‘kuickpay’ from given categories<br></br>
                                <br></br>
                                <b>Step 3:</b> Enter the voucher or invoice number & continue. Make sure to enter Institution ID as prefix (mentioned on challan)<br></br>
                                <br></br>
                                <b>Step 4:</b> Confirm your voucher details and proceed to payment. Payment alerts will be received accordingly.<br></br>
                                <br></br>
                                <b>*Customers of following Banks can avail Kuickpay service</b><br></br>
                                    Allied Bank, Askari Bank, Bank Al Habib, Bank Alfalah, Bank Islami, Bank of Punjab, Dubai Islamic Bank, Faysal Bank, First Women Bank, Habib Metro Bank, Habib Bank Limited, JS Bank, MCB Bank, MCB Islamic Bank, Meezan Bank, National Bank, NRSP Bank, SAMBA Bank, Soneri bank, Summit Bank, UBL and Keenu App.<br></br>
                                    <br></br>
                                    <b>*Easy paisa and JazzCash can also be used for payment via kuickpay.<br></br>
                                    (Transaction Limit apply)<br></br>
                                    <br></br>
                                    For further clarification, please visit: <a href='#'>https://app.kuickpay.com/PaymentsBillPayment</a><br></br>
                                    2. Print the challan form and then visit any nearest Faysal bank branch for cash deposit.</b><br></br></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

