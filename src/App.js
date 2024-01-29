import './App.css';
// import React, { useNavigate } from 'react';
// import FinalExamApi from './examComponent/FinalExam_api.jsx';
import LoginPage from './loginComponent/LoginPage';
import ProfilePage from './profileComponrnt/ProfilePage';
import LogIn from './loginComponent/LogIn';
import DrivingAssessment from './examComponent/DrivingAssessment.jsx'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './examComponent/Results'
// import Header from './Header.jsx';

function App() {

  return (
    <div className="App">


      <div>
      <LoginPage />
      <LogIn />
      <ProfilePage />
      <DrivingAssessment/>
      <Results/>
      </div>
    </div>
  );
}
export default App;
// <FinalExamApi/>



// App.js

// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './loginComponent/LoginPage';
// import LogIn from './loginComponent/LogIn';
// import ProfilePage from './profileComponent/ProfilePage';
// import DrivingAssessment from './examComponent/DrivingAssessment';
// import Results from './examComponent/Results';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/driving-assessment" element={<DrivingAssessment />} />
//           <Route path="/results" element={<Results />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
