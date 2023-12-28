import React, { useEffect, useState } from "react";
import IProjects from "../../types/IProjects";
import IProjectImages from "../../types/IProjectImages";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProjectsService from "../../services/ProjectsService";

function Projects() {
  const { pid }: any = useParams();

  // Todo : 프로젝트들 들고오기
  const getAllProjects = () => {
    ProjectsService.getProjects(pid)
      .then((response: any) => {
        const { projects, projectImagesList } = response.data;
        setProjects(projects);
        setProjectImages(projectImagesList);
        // console.log(response.data);
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const initialProjects: IProjects = {
    pid: null,
    description: "",
    frontName: "",
    backendName: "",
    dbmsName: "",
    publishName: "",
    webUrl: "",
  };

  const navigate = useNavigate();
  const [projects, setProjects] = useState<IProjects>(initialProjects);
  const [projectImages, setProjectImages] = useState<Array<IProjectImages>>([]);

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setProjects({ ...projects, [name]: value });
    // console.log(projects);
  };

  const update = () => {
    let data = {
      pid: projects.pid,
      description: projects.description,
      frontName: projects.frontName,
      backendName: projects.backendName,
      dbmsName: projects.dbmsName,
      publishName: projects.publishName,
      webUrl: projects.webUrl,
    };
    ProjectsService.update(pid, data)
      .then((response: any) => {
        navigate("/admin");
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  const remove = () => {
    ProjectsService.deleteFile(pid)
      .then((respsonse: any) => {
        navigate("/admin");
      })
      .catch((e: Error) => {
        // console.log(e);
      });
  };

  return (
    <>
      <Header name="이곳은 프로젝트 추가 공간입니다." />
      <div
        className="container mt-5"
        style={{ width: "600px", marginTop: "0px", paddingTop: "0px" }}
      >
        {/* 이미지 공간 */}
        <div>
          {/* <!-- 진행 프로젝트 --> */}
          <aside
            id="testimonials"
            className="scrollto text-center"
            data-enllax-ratio=".2"
            style={{ margin: "0px", padding: "0px" }}
          >
            <div className="row clearfix">
              <div className="section-heading">
                <h3>PROJECTS</h3>
                <h2 className="section-title">메인 이미지</h2>
              </div>
              {/* <!--User Testimonial--> */}
              <div className="testimonial classic">
                <img
                  src={projectImages && projectImages[0]?.projectsImgUrl}
                  alt="User"
                />
              </div>
              <Link to={`/projectImages/${projectImages[0]?.uuid}`}>
                메인 이미지 수정
              </Link>
              {/* <!-- End of Testimonial--> */}
            </div>
          </aside>
          {/* <!-- Gallery --> */}
          <aside
            id="gallery"
            className="row text-center scrollto clearfix"
            data-featherlight-gallery
            data-featherlight-filter="a"
            style={{ padding: "0px" }}
          >
            {" "}
            <div className="section-heading">
              <h3>GALLERY</h3>
              <h2 className="section-title">썸네일 이미지 수정</h2>
              <p>이미지를 누르면 수정화면으로 넘어갑니다.</p>
            </div>
            {projectImages &&
              projectImages
                .filter((value, index) => index > 0)
                .map((value, index) => (
                  <div key={index} className="col-3 ">
                    <Link
                      to={`/projectImages/${value.uuid}`}
                      data-featherlight="image"
                      className="wow fadeIn"
                      data-wow-delay="1.1s"
                    >
                      <img src={value.projectsImgUrl} alt="Landing Page" />
                    </Link>
                  </div>
                ))}
          </aside>
          {/* <!--End of Gallery--> */}
        </div>
        {/* 이미지 공간 끝 */}

        {/* text box 시작 */}
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              설명
            </label>
            <textarea
              className="form-control"
              onChange={onChangeInput}
              id="exampleFormControlTextarea1"
              name="description"
              value={projects.description}
              rows={3}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Front Tool
            </label>
            <input
              type="text"
              onChange={onChangeInput}
              className="form-control"
              value={projects.frontName}
              id="exampleFormControlInput1"
              name="frontName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Backend Tool
            </label>
            <input
              type="email"
              value={projects.backendName}
              onChange={onChangeInput}
              className="form-control"
              id="exampleFormControlInput1"
              name="backendName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              DBMS Tool
            </label>
            <input
              type="email"
              onChange={onChangeInput}
              className="form-control"
              value={projects.dbmsName}
              id="exampleFormControlInput1"
              name="dbmsName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Publish Tool
            </label>
            <input
              type="email"
              onChange={onChangeInput}
              className="form-control"
              value={projects.publishName}
              id="exampleFormControlInput1"
              name="publishName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Web URL
            </label>
            <input
              type="email"
              onChange={onChangeInput}
              value={projects.webUrl}
              className="form-control"
              id="exampleFormControlInput1"
              name="webUrl"
            />
          </div>
        </div>
        {/* text box 종료 */}

        <button type="button" className="btn btn-success me-3" onClick={update}>
          수정하기
        </button>
        <button type="button" className="btn btn-danger me-3" onClick={remove}>
          삭제하기
        </button>
        <Link to={"/admin"} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default Projects;
