import React, { useEffect } from 'react';
import Main from './pages/Main';
import Footer from './components/Footer';
import './assets/css/style.css'
import './assets/css/namari-color.css'
import './assets/css/style2.css'
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import AddEducation from './pages/education/AddEducation';
import Education from './pages/education/Education';
import AddSkill from './pages/skill/AddSkill';
import Skill from './pages/skill/Skill';
import AddProjects from './pages/projects/AddProjects';
import Projects from './pages/projects/Projects';
import ProjectImages from './pages/projectImages/ProjectImages';
import MyProfile from './pages/my-profile/MyProfile';


function App() {
  return (
    <>
      {/* <!-- Preloader --> */}
      {/* <div id="preloader">
        <div id="status" className="la-ball-triangle-path">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* <!--End of Preloader--> */}

      {/* page-border start */}
      <div
        className="page-border"
        data-wow-duration="0.7s"
        data-wow-delay="0.2s"
      >
        <div
          className="top-border wow fadeInDown animated"
          style={{ visibility: "visible", animationName: "fadeInDown" }}
        ></div>
        <div
          className="right-border wow fadeInRight animated"
          style={{ visibility: "visible", animationName: "fadeInRight" }}
        ></div>
        <div
          className="bottom-border wow fadeInUp animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        ></div>
        <div
          className="left-border wow fadeInLeft animated"
          style={{ visibility: "visible", animationName: "fadeInLeft" }}
        ></div>
      </div>
      
      {/* page-border end */}
      <div id="wrapper">
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/admin' element={<Admin />}/>

          {/* 마이 프로필 */}
          <Route path='/my-profile' element={<MyProfile/>}/>

          {/* 학력 */}
          <Route path='/add-education' element={<AddEducation />}/>
          <Route path='/education/:eid' element={<Education/>}/>

          {/* 기술 스택 */}
          <Route path='/add-skill' element={<AddSkill/>}/>
          <Route path='skill/:uuid' element={<Skill/>}/>

          {/* 프로젝트 */}
          <Route path='/add-projects' element={<AddProjects/>}/>
          <Route path='/projects/:pid' element={<Projects/>}/>

          {/* 프로젝트 이미지 */}
          <Route path='/projectImages/:uuid' element={<ProjectImages/>}/>
          
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
