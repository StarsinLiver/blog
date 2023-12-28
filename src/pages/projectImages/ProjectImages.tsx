import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import IProjectImages from "../../types/IProjectImages";
import ProjectImagesService from './../../services/ProjectImagesService';

function ProjectImages() {
  const { uuid }: any = useParams();
  const navigate = useNavigate();

  const initialProjectImages: IProjectImages = {
    uuid: null,
    fileName: "",
    projectsImgData: null,
    projectsImgUrl: "",
    pid: 0,
  };

  const [projectImages, setProjectImages] =
    useState<IProjectImages>(initialProjectImages);
  //   todo: 현재 선택한 파일을 저장할 배열변수
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>();
  const [showImages, setShowImages] = useState<string>();

  const get = (uuid: any) => {
    ProjectImagesService.getProjects(uuid)
      .then((response: any) => {
        setProjectImages(response.data);
        // console.log(response.data);
      })
      .catch((e: Error) => console.log(e));
  };

  useEffect(() => {
    if (uuid) get(uuid);
  }, []);

  // todo : 파일 선택상자에서 이미지 선택시 실행되는 함수
  // 파일 선택상자 html 태그 : <input type="file" />
  const selectFile = (event: any) => {
    // 화면에서 이미지 선택시 저장된 객체 : event.target.files
    // 변수명 as 타입명 : 개발자가 변수가 무조건 특정타입이라고 보증함
    //                   (타입스크립트에서 체크 안함)
    setSelectedFiles(null);
    setSelectedFiles(event.target.files as FileList);
    const imageLists = event.target.files;
    const currentImageUrl = URL.createObjectURL(imageLists[0]);
    setShowImages(currentImageUrl);
  };

  const update = () => { 
    ProjectImagesService.update(projectImages , selectedFiles?.[0])
    .then((response : any) => {
      navigate(-1);
    })
    .catch((e : Error) => {
      console.log(e);
    })
   }

  return (
    <>
      <Header name="이곳은 프로젝트 이미지 수정 공간입니다." />
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
                <h2 className="section-title">이미지 교체</h2>
              </div>
              {/* <!--User Testimonial--> */}
              <div className="testimonial classic">
                <h4>현재 이미지</h4>
              <img
                    src={projectImages && projectImages.projectsImgUrl}
                    alt="User"
                  />
                                  
                {
                  showImages &&<><h1>↧</h1> <img src={showImages}/></>
                }
                <hr />
                <h4>💾이미지 업로드</h4>
                <input
                    type="file"
                    className="form-control mb-3"
                    id="inputGroupFile02"
                    onChange={selectFile}
                  />
                <div className="input-group mb-3">
                  {/* upload 선택상자/버튼 start */}{" "}

                </div>
                {/* upload 선택상자/버튼 end */}
              </div>
              {/* <!-- End of Testimonial--> */}
            </div>
          </aside>
        </div>
        {/* 이미지 공간 끝 */}

        <button type="button" className="btn btn-success me-3" onClick={update}>
          수정하기
        </button>
        <Link to={"/admin"} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default ProjectImages;
