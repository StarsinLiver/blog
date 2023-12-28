import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import EducationService from "../services/EducationService";
import IEducation from "../types/IEducation";
import SkillFileService from "../services/SkillFileService";
import ISkillFile from "../types/ISkillFile";
import initMain from "../assets/js/site";
import ProjectsService from "../services/ProjectsService";
import IProjectsDto from "../types/dto/IProjectsDto";
import IMyProfile from "../types/IMyProfile";
import MyProfileService from "../services/MyProfileService";

function Admin() {
  let [education, setEducation] = useState<Array<IEducation>>([]);
  let [skillFiles, setSkillFiles] = useState<Array<ISkillFile>>([]);
  let [projects, setProjects] = useState<Array<IProjectsDto>>([]);
  let [projectNumber, setProjectNumber] = useState<number>(0);
  let [myProfile, setMyProfile] = useState<IMyProfile>();

  const onClickProjectNumber = (number: number) => {
    setProjectNumber(number);
  };

  const getMyProfile = () => {
    MyProfileService.get(1)
      .then((response: any) => setMyProfile(response.data))
      .catch((e: Error) => console.log(e));
  };

  // Todo : Education 의 전체조회
  const getAllEducation = () => {
    EducationService.getAll()
      .then((response: any) => {
        setEducation(response.data);
        // console.log(response.data);
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  // Todo : Skill 의 전체조회
  const getAllSkill = () => {
    SkillFileService.getAllSkillFiles()
      .then((response: any) => {
        setSkillFiles(response.data);
        // console.log(response.data);
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  // Todo : 프로젝트들 들고오기
  const getAllProjects = () => {
    ProjectsService.getAllProjects()
      .then((response: any) => {
        setProjects(response.data);
        // console.log(response.data);
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };
  useEffect(() => {
    initMain();
    getMyProfile();
    getAllEducation();
    getAllSkill();
    getAllProjects();
  }, []);
  return (
    <>
      <Header />
      {/* <!--Main Content Area--> */}
      <main id="content">
        {" "}
        {/* <!--자신 소개글 --> */}
        <div id="services" className="scrollto clearfix  wow fadeInUp">
          <div className="row no-padding-bottom clearfix">
            {/* <!--Content Left Side--> */}
            <div className="col-3">
              {/* <!--User Testimonial--> */}
              <blockquote className="testimonial text-right bigtest">
                <q>{myProfile?.phrase}</q>
                <footer>{myProfile?.phraseAuthor}</footer>
              </blockquote>
              {/* <!-- End of Testimonial--> */}
            </div>
            {/* <!--End Content Left Side--> */}

            {/* <!--Content of the Right Side--> */}
            <div className="col-3">
              <div className="section-heading">
              <Link to={"/my-profile"}> 프로필 수정 </Link>
                <h3>MY PROFILE</h3>
                <h2 className="section-title">{myProfile?.title}</h2>
                <p className="section-subtitle">
                  {myProfile?.smallTitle}
                </p>
              </div>
              <p className="mt-3">
                {myProfile?.description}
              </p>
              <p style={{ whiteSpace: "pre" }} className="mt-5">
                이메일 : {myProfile?.email} <br />
                전화번호 : {myProfile?.phone} <br />
                거주지 : {myProfile?.location} <br />
                블로그 :{" "}
                <a href={`${myProfile?.blogLink}`}>
                {myProfile?.blog}
                </a>
              </p>
              {/* <!-- Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) --> */}
              {/* <a
                href="#"
                data-videoid="4A4O7SP5fa0"
                data-videosite="youtube"
                className="button video link-lightbox"
              >
                WATCH VIDEO <i className="fa fa-play" aria-hidden="true"></i>
              </a> */}
            </div>
            {/* <!--End Content Right Side--> */}

            <div className="col-3">
              <img src={require("../assets/images/main.jpg")} alt="Dancer" />
            </div>
          </div>
        </div>
        {/* <!--End of 자신 소개글--> */}

        {/* EDUCATION */}
        <section id="education" className="education scrollto">
          <div className="container">
            <div className="education-horizontal-timeline">
              <div className="section-heading">
                <h3>EDUCATION</h3>
                <h2 className="section-title">학력</h2>
                <Link to={"/add-education"}> 학력 추가 </Link>
                <p className="section-subtitle"></p>
              </div>
              <div className="row" style={{ padding: "0px" }}>
                {education &&
                  education.map((value: any) => (
                    <>
                      <div className="col-sm-4  wow fadeInUp">
                        <div className="single-horizontal-timeline">
                          <div className="experience-time">
                            <h2>{value.time}</h2>
                            <h3>{value.title}</h3>
                          </div>
                          {/* <!--/.experience-time--> */}
                          <div className="timeline-horizontal-border">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                            <span className="single-timeline-horizontal"></span>
                          </div>
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">{value.shortTitle}</h4>
                              <h5>{value.location}</h5>
                              <p className="description">{value.description}</p>
                              <Link to={`/education/${value.eid}`}>
                                수정하기
                              </Link>
                            </div>
                            {/* <!--/.timeline-content--> */}
                          </div>
                          {/* <!--/.timeline--> */}
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </section>
        {/* End of Education */}
        {/* <!-- 대표적인 기술들 --> */}
        <section id="about" className="introduction scrollto">
          <div className="row clearfix">
            <div className="col-3">
              <div className="section-heading">
                <h3>REPRESENTATIVE</h3>
                <h2 className="section-title">대표적인 기술들</h2>
                <p className="section-subtitle">
                  오른쪽 화면에 보이시는 4가지 기술들은
                  <br />
                  저의 대표적인 기술을 소개하는 화면입니다.
                </p>
              </div>
            </div>

            <div className="col-2-3">
              {/* <!--Icon Block--> */}
              <div
                className="col-2 icon-block icon-top wow fadeInUp"
                data-wow-delay="0.1s"
              >
                {/* <!--Icon--> */}
                <div className="icon">
                  <img src={require("../assets/images/gif/html5.gif")} />
                </div>
                {/* <!--Icon Block Description--> */}
                <div className="icon-block-description">
                  <h4>HTML5 &amp; CSS3</h4>
                  <p>
                    텍스트, 이미지, 링크 등 여러 요소를 다루고 표시할 수 있는 웹
                    문서 제작 언어인 HTML을 이해하고 다룰 수 있습니다.
                  </p>
                </div>
              </div>
              {/* <!--End of Icon Block--> */}

              {/* <!--Icon Block--> */}
              <div
                className="col-2 icon-block icon-top wow fadeInUp"
                data-wow-delay="0.3s"
              >
                {/* <!--Icon--> */}
                <div className="icon">
                  <img src={require("../assets/images/gif/java-cup.gif")} />
                </div>
                {/* <!--Icon Block Description--> */}
                <div className="icon-block-description">
                  <h4>Java</h4>
                  <p>
                    자바는 SUN 에서 개발한 객체지향 언어로 가정용 단말기에
                    적용하려는 목적으로 1992년에 만든 'oak'언어 에서
                    비롯되었습니다.
                  </p>
                </div>
              </div>
              {/* <!--End of Icon Block--> */}

              {/* <!--Icon Block--> */}
              <div
                className="col-2 icon-block icon-top wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* <!--Icon--> */}
                <div className="icon">
                  <img src={require("../assets/images/gif/react-logo.gif")} />
                </div>
                {/* <!--Icon Block Description--> */}
                <div className="icon-block-description">
                  <h4>React</h4>
                  <p>
                    React는 사용자 인터페이스를 빌드할 수 있는 JavaScript
                    라이브러리입니다. 사용자가 원하는 코드를 작성하면 React가
                    선언된 코드를 받아들인 후 모든 JavaScript/DOM 단계를
                    수행하여 원하는 결과를 얻을 수 있습니다.
                  </p>
                </div>
              </div>
              {/* <!--End of Icon Block--> */}

              {/* <!--Icon Block--> */}
              <div
                className="col-2 icon-block icon-top wow fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* <!--Icon--> */}
                <div className="icon">
                  <img src={require("../assets/images/gif/database.gif")} />
                </div>
                {/* <!--Icon Block Description--> */}
                <div className="icon-block-description">
                  <h4>Oracle RDBMS</h4>
                  <p>
                    오라클 데이터베이스(Oracle Database 또는 Oracle RDBMS)는
                    미국 오라클(Oracle)사에서 판매하는 관계형 데이터베이스 관리
                    시스템입니다.
                  </p>
                </div>
              </div>
              {/* <!--End of Icon Block--> */}
            </div>
          </div>
        </section>
        {/* <!--End of 대표적인 기술들 --> */}
        {/* <!-- 기술 스택 --> */}
        <section id="clients" className="scrollto clearfix">
          <div className="row clearfix">
            <div className="col-3">
              <div className="section-heading">
                <h3>skill</h3>
                <h2 className="section-title">기술 스택</h2>
                <Link
                  to={"/add-skill"}
                  style={{
                    color: "#D2B356",
                    textAlign: "left",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  기술 스택 추가{" "}
                </Link>
                <p className="section-subtitle">
                  오른쪽 화면에 보이시는 것들은 <br />
                  제가 가진 기술 스택에 대한 정보 화면입니다.
                </p>
              </div>
            </div>

            {/* 기술 스택 사진 이미지 : png 파일 */}
            <div className="col-2-3 ">
              {skillFiles &&
                skillFiles.map((value: any) => (
                  <a className="col-3  wow fadeInUp">
                    <img src={value.fileUrl} alt="Company" />
                    <div className="client-overlay">
                      <span>
                        {value.fileTitle} <br />{" "}
                        <Link to={`/skill/${value.uuid}`}>편집하기</Link>
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </section>
        {/* <!-- End of 기술 스택 --> */}
        {/* <!-- 진행 프로젝트 --> */}
        <aside
          id="testimonials"
          className="scrollto text-center"
          data-enllax-ratio=".2"
        >
          <div className="row clearfix">
            <div className="section-heading">
              <h3>PROJECTS</h3>
              <h2 className="section-title">진행 프로젝트</h2>
              <Link
                to={"/add-projects"}
                style={{
                  color: "#D2B356",
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                {" "}
                프로젝트 추가{" "}
              </Link>
            </div>
            {/* <!--User Testimonial--> */}
            {projects &&
              projects.map((value: any, index: any) => (
                <blockquote className="col-3 testimonial classic" key={index}>
                  <img src={value.projectImages[0].projectsImgUrl} alt="User" />
                  <q>{value.projects.description}</q>
                  <br />
                  <p
                    className="text-left"
                    style={{ marginLeft: "80px", whiteSpace: "pre" }}
                  >
                    FRONT : {value.projects.frontName} <br />
                    BACK-END : {value.projects.backendName} <br />
                    DBMS : {value.projects.dbmsName} <br />
                    PUBLISH : {value.projects.publishName}
                  </p>
                  <footer>
                    {" "}
                    <a
                      href="#gallery"
                      onClick={() => onClickProjectNumber(index)}
                    >
                      간략한 이미지 보기
                    </a>{" "}
                  </footer>
                  <footer>
                    <p>웹 보러가기</p>
                    <a
                      href={value.projects.webUrl}
                      style={{ fontSize: "20px" }}
                    >
                      go Web{" "}
                    </a>
                  </footer>
                  <footer>
                    <Link
                      to={`/projects/${value.projects?.pid}`}
                      style={{ fontSize: "20px" }}
                    >
                      수정하기
                    </Link>
                  </footer>
                </blockquote>
              ))}
            {/* <!-- End of Testimonial--> */}
          </div>
        </aside>
        {/* <!--End of 진행 프로젝트 --> */}
        {/* <!-- Gallery --> */}
        <aside
          id="gallery"
          className="row text-center scrollto clearfix"
          data-featherlight-gallery
          data-featherlight-filter="a"
        >
          <div className="section-heading">
            <h3>PROJECTS</h3>
            <h2 className="section-title">프로젝트 이미지들</h2>
          </div>
          {projects &&
            projects[projectNumber]?.projectImages
              .map((value: any) => (
                <a
                  href={value.projectsImgUrl}
                  data-featherlight="image"
                  className="col-3 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <img src={value.projectsImgUrl} alt="Landing Page" />
                </a>
              ))
              .filter((value, index) => index > 0)}
        </aside>
        {/* <!--End of Gallery--> */}
      </main>
      {/* <!--End Main Content Area--> */}
    </>
  );
}

export default Admin;
