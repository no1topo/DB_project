import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CourseReg from './pages/CourseReg';
import Attendance from './pages/Attendance';
import Feedback from './pages/Feedback';
import Challan from './pages/Challan';
import Transcript from './pages/Transcript';
import Withdraw from './pages/Withdraw';
import Marks from './pages/Marks';
import ChangePassword from './pages/ChangePassword';
import Thome from './pages/Thome';
import MarksDistribution from './pages/MarksDistribution';
import MarksReport from './pages/MarksReport';
import AttendanceManage from './pages/AttendanceManage';
import FeedbackManage from './pages/FeedbackManage';
import CourseManage from './pages/CourseManage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <Router>
          <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/CourseReg" element={<CourseReg />} />
                <Route path="/Attendance" element={<Attendance />} />
                <Route path="/Challan" element={<Challan />} />
                <Route path="/Marks" element={<Marks />} />
                <Route path="/Transcript" element={<Transcript />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/Withdraw" element={<Withdraw />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/THome" element={<Thome />} />
                <Route path="/MarksDistribution" element={<MarksDistribution />} />
                <Route path="/MarksReport" element={<MarksReport />} />
                <Route path="/AttendanceManage" element={<AttendanceManage />} />
                <Route path="/FeedbackManage" element={<FeedbackManage />} />
                <Route path="/CourseManage" element={<CourseManage />} />
          </Routes>
    </Router>
    
  </React.StrictMode>
);


