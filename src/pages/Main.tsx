import React, { useEffect, useState } from "react";
import initMain from "../assets/js/site";
import EveryOneService from "../services/EveryOneService";
import IEducation from "../types/IEducation";
import ISkillFile from "../types/ISkillFile";
import IProjectsDto from "../types/dto/IProjectsDto";
import { Link } from "react-router-dom";
import IMyProfile from "../types/IMyProfile";

function Main() {
  useEffect(() => {
    initMain();
    getAll();
  }, []);

  let [education, setEducation] = useState<Array<IEducation>>([]);
  let [skillFiles, setSkillFiles] = useState<Array<ISkillFile>>([]);
  let [projects, setProjects] = useState<Array<IProjectsDto>>([]);
  let [projectNumber, setProjectNumber] = useState<number>(0);
  let [myProfile, setMyProfile] = useState<IMyProfile>();

  const onClickProjectNumber = (number: number) => {
    setProjectNumber(number);
  };

  const getAll = () => {
    EveryOneService.getAll()
      .then((response: any) => {
        const { educationList, projectsList, skillFileList , myProfile } = response.data;
        setEducation(educationList);
        setProjects(projectsList);
        setSkillFiles(skillFileList);
        setMyProfile(myProfile);
        // console.log(response.data);
      })
      .catch((e: Error) => console.log(e));
  };
  return (
    <>
      {/* 헤더부분 , 배너부분 */}
      <header
        id="banner"
        className="scrollto clearfix  wow fadeIn"
        data-enllax-ratio=".5"
      >
        <div id="header" className="nav-collapse">
          <div className="row clearfix">
            <div className="col-1">
              {/* <!--Logo--> */}
              <div id="logo">
                <Link to="/">
                {/* <!--Logo that is shown on the banner--> */}
                <img
                  src={require("../assets/images/logo-tinylittlelife.png")}
                  id="banner-logo"
                  alt="Landing Page"
                />
                {/* <!--End of Banner Logo--> */}

                {/* <!--The Logo that is shown on the sticky Navigation Bar--> */}
                <img
                  src={require("../assets/images/logo-tinylittlelife.png")}
                  id="navigation-logo"
                  alt="Landing Page"
                />
                </Link>
                {/* <!--End of Navigation Logo--> */}
              </div>
              {/* <!--End of Logo--> */}

              <aside>
                {/* <!--Social Icons in Header--> */}
                <ul className="social-icons">
                  <li>
                    <a
                      target="_blank"
                      title="Twitter"
                      href="http://www.twitter.com/whitesanchan"
                    >
                      <i className="fa fa-twitter fa-1x"></i>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      title="Instagram"
                      href="http://www.instagram.com/sanha0203"
                    >
                      <i className="fa fa-instagram fa-1x"></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/admin" title="behance">
                      관리
                    </Link>
                  </li>
                </ul>

                {/* <!--End of Social Icons in Header--> */}
              </aside>

              {/* <!--Main Navigation--> */}
              <nav id="nav-main">
                <ul>
                  <li>
                    <a href="#banner">Home</a>
                  </li>
                  <li>
                    <a href="#services">MY PROFILE</a>
                  </li>
                  <li>
                    <a href="#education">EDUCATION</a>
                  </li>
                  <li>
                    <a href="#about">REPRESENTATIVE</a>
                  </li>
                  <li>
                    <a href="#clients">SKILL</a>
                  </li>
                  <li>
                    <a href="#testimonials">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#gallery">GALLARY</a>
                  </li>
                  <li>
                    <a href="#company">COMPANY</a>
                  </li>
                </ul>
              </nav>
              {/* <!--End of Main Navigation--> */}

              <div id="nav-trigger">
                <span></span>
              </div>
              <nav id="nav-mobile"></nav>
            </div>
          </div>
        </div>
        {/* <!--End of Header--> */}

        {/* <!--Banner Content--> */}
        <div id="banner-content" className="row clearfix  wow fadeIn">
          <div className="col-38">
            <div className="section-heading">
              <h1>Backend-Developer</h1>
              <h2 style={{ lineHeight: "30px" }}>
                안녕하세요. <br />
                저는 백엔드 개발자를 지향하는 이산하라고 합니다. <br />
              </h2>
            </div>

            {/* <!--Call to Action--> */}
            <a href="#content" className="button">
              View profile
            </a>
            {/* <!--End Call to Action--> */}
          </div>
        </div>
        {/* <!--End of Row--> */}
      </header>
      {/* 헤더부분 , 배너부분 끝 */}

      {/* <!--Main Content Area--> */}
      <main id="content">
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
        <section id="education" className="education">
          <div className="container">
            <div className="education-horizontal-timeline">
              <div className="section-heading">
                <h3>EDUCATION</h3>
                <h2 className="section-title">학력</h2>
                <p className="section-subtitle"></p>
              </div>
              <div className="row" style={{ paddingTop: "0px" }}>
                {education &&
                  education.map((value, index) => (
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
                          </div>
                          {/* <!--/.timeline-content--> */}
                        </div>
                        {/* <!--/.timeline--> */}
                      </div>
                    </div>
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

            <div className="col-2-3" >
              {/* <!--Icon Block--> */}
              <div style={{height : '250px'}}
                className="col-2 icon-block icon-top wow fadeInUp"
                data-wow-delay="0.1s"
              >
                {/* <!--Icon--> */}
                <div className="icon" >
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
              <div style={{height : '250px'}}
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
                    객체 지향 언어중 하나인 Java 를 사용합니다.
                    클래스, 함수, 생성자, 자료구조 등을 이해하고,
                    다양한 내부 라이브러리를 사용할 수 있습니다.
                  </p>
                </div>
              </div>
              {/* <!--End of Icon Block--> */}

              {/* <!--Icon Block--> */}
              <div style={{height : '250px'}}
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
                    React 구조에 대해 이해하고, 외부 라이브러리 등을 자유로이 사용할 수 있습니다.
                  </p>
                </div>
              </div>
              {/* <!--End of Icon Block--> */}

              {/* <!--Icon Block--> */}
              <div style={{height : '250px'}}
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
                    오라클 데이터베이스(RDBMS)를 이용한 TABLE , SCHEMA, INDEX 등 활용하여 데이터 관리를 효율적으로 사용할 수 있습니다.
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
                <p className="section-subtitle">
                  오른쪽 화면에 보이시는 것들은 <br />
                  제가 가진 기술 스택에 대한 정보 화면입니다.
                </p>
              </div>
            </div>

            {/* 기술 스택 사진 이미지 : png 파일 */}
            <div className="col-2-3">
              {skillFiles &&
                skillFiles.map((value: any, index: number) => (
                  <a className="col-3  wow fadeInUp">
                    <img src={value.fileUrl} alt="Company" />
                    <div className="client-overlay">
                      <span>{value.fileTitle}</span>
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
            </div>

            {/* <!--User Testimonial--> */}
            {projects &&
              projects.map((value: any, index: number) => (
                <blockquote
                  className="col-3 testimonial classic  wow fadeIn"
                  key={index}
                >
                  <img src={value.projectImages[0].projectsImgUrl} alt="User" />
                  <q>{value.projects.description}</q>
                  <br />
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
                  <p
                    className="text-left"
                    style={{ marginLeft: "100px"}}
                  >
                    FRONT : {value.projects.frontName} <br />
                    BACK-END : {value.projects.backendName} <br />
                    DBMS : {value.projects.dbmsName} <br />
                    PUBLISH : {value.projects.publishName}
                  </p>
                  </footer>
                  <footer>
                    {" "}
                    <a
                      href="#gallery"
                      onClick={() => onClickProjectNumber(index)}
                    >
                      간략한 이미지 보기
                    </a>{" "}
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
            <h3>GALLERY</h3>
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

        {/* <!--clients start --> */}
        <section id="company" className="company text-center">
          <div className="section-heading m-0 p-0">
            <h3>COMPANY</h3>
            <h2 className="section-title">Motive Company</h2>
          </div>
          <div className="clients-area  wow fadeIn">
            <div className="container">
              <div className="owl-carousel owl-theme" id="client">
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/company/icons8-맥-os-50.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/company/icons8-facebook-new-50.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/company/instagram.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/company/twitter.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/clients/c5.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/clients/c6.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
                <div className="item">
                  <a href="#">
                    <img
                      src={require("../assets/images/company/naver.png")}
                      alt="brand-image"
                    />
                  </a>
                </div>
                {/* <!--/.item--> */}
              </div>
              {/* <!--/.owl-carousel--> */}
            </div>
            {/* <!--/.container--> */}
          </div>
          {/* <!--/.clients-area--> */}
        </section>
        {/* <!--/.clients--> */}
      </main>
      {/* <!--End Main Content Area--> */}
    </>
  );
}

export default Main;
