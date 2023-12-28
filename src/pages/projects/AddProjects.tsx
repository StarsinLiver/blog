import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import IProjects from "../../types/IProjects";
import IProjectImages from "../../types/IProjectImages";
import initMain from "../../assets/js/site";
import ProjectsService from "../../services/ProjectsService";

function AddProjects() {
  const initialProjects: IProjects = {
    pid: null,
    description: "",
    frontName: "",
    backendName: "",
    dbmsName: "",
    publishName: "",
    webUrl: "",
  };

  const initialProjectImages: IProjectImages = {
    uuid: null,
    fileName: "",
    projectsImgData: null,
    projectsImgUrl: "",
    pid: 0,
  };

  const navigate = useNavigate();
  const [projects, setProjects] = useState<IProjects>(initialProjects);
  const [projectImages, setProjectImages] =
    useState<IProjectImages>(initialProjectImages);
  //   todo: 현재 선택한 파일을 저장할 배열변수
  const [selectedFiles, setSelectedFiles] = useState<FileList>();
  const [showImages, setShowImages] = useState([]);

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setProjects({ ...projects, [name]: value });
    // console.log(projects);
  };

  // todo : 파일 선택상자에서 이미지 선택시 실행되는 함수
  // 파일 선택상자 html 태그 : <input type="file" />
  const selectFile = (event: any) => {
    // 화면에서 이미지 선택시 저장된 객체 : event.target.files
    // 변수명 as 타입명 : 개발자가 변수가 무조건 특정타입이라고 보증함
    //                   (타입스크립트에서 체크 안함)
    setSelectedFiles(event.target.files as FileList);

    // console.log(selectedFiles);

    // Todo : 이미지 미리보기 형식
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      (imageUrlLists as any).push(currentImageUrl);
    }

    // if (imageUrlLists.length > 7) {
    //   imageUrlLists = imageUrlLists.slice(0, 7);
    // }
    setShowImages(imageUrlLists);
  };

  const upload = () => {
    if (selectedFiles) {
      ProjectsService.upload(projects, selectedFiles)
        .then((response: any) => {
          navigate("/admin");
        })
        .catch((error: Error) => {
          // console.log(error);
        });
    }
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
                <img src={showImages[0]} alt="User" />
              </div>
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
              <h2 className="section-title">여러 이미지들</h2>
            </div>
            {showImages
              .filter((value, index) => index > 0)
              .map((image, id) => (
                <div key={id} className="col-3 ">
                  <a
                    href={image}
                    data-featherlight="image"
                    className="wow fadeIn"
                    data-wow-delay="1.1s"
                  >
                    <img src={image} alt="Landing Page" />
                  </a>
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
              className="form-control"
              id="exampleFormControlInput1"
              name="webUrl"
            />
          </div>
          <hr />
          <h4>💾이미지 업로드 (7개만 지정해주세요)</h4>
          <div className="input-group mb-3">
            {/* upload 선택상자/버튼 start */}
            <input
              type="file"
              className="form-control mb-3"
              id="inputGroupFile02"
              multiple
              onChange={selectFile}
            />
          </div>
          {/* upload 선택상자/버튼 end */}
          <div>
            {/* 이미지를 업로드하지 않은 경우 메시지 출력 */}
            {!selectedFiles && (
              <div className="alert alert-warning wow fadeInUp" role="alert">
                🚨이미지 업로드는 필수입니다.
              </div>
            )}
          </div>
        </div>
        {/* text box 종료 */}

        <button type="button" className="btn btn-success me-3" onClick={upload}>
          추가하기
        </button>
        <Link to={"/admin"} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default AddProjects;
