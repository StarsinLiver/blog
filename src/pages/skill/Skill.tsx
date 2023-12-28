import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import ISkillFile from "../../types/ISkillFile";
import SkillFileService from "../../services/SkillFileService";

function Skill() {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const initialSkillFile: ISkillFile = {
    uuid: null, // 기본키(범용적으로 유일한 값을 만들어주는 값)
    fileTitle: "", // 제목
    fileName: "",
    fileUrl: "", // 파일 다운로드 URL
  };
  const [skillFile, setSkillFile] = useState<ISkillFile>(initialSkillFile);
  //   todo: 현재 선택한 파일을 저장할 배열변수
  const [selectedFiles, setSelectedFiles] = useState<FileList>();
  const [previewImage, setPreviewImage] = useState<string | undefined | any>(
    skillFile.fileUrl
  );

  const get = (uuid: any) => {
    SkillFileService.getSkillFile(uuid)
      .then((response: any) => {
        setSkillFile(response.data);
        setPreviewImage(response.data.fileUrl);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo : 함수 정의
  // todo: input 태그에 수동 바인딩
  const onChangeInput = (event: any) => {
    const { name, value } = event.target; // 화면값
    setSkillFile({ ...skillFile, [name]: value }); // 변수저장
  };

  // todo : 파일 선택상자에서 이미지 선택시 실행되는 함수
  // 파일 선택상자 html 태그 : <input type="file" />
  const selectFile = (event: any) => {
    // 화면에서 이미지 선택시 저장된 객체 : event.target.files
    // 변수명 as 타입명 : 개발자가 변수가 무조건 특정타입이라고 보증함
    //                   (타입스크립트에서 체크 안함)
    setSelectedFiles(event.target.files as FileList);
  };

  const update = () => { 
    let currentFile = selectedFiles?.[0];
    SkillFileService.update(skillFile , currentFile)
    .then((response : any) => {
      navigate("/admin")
    })
    .catch((e : Error) => {
      console.log(e);
    })
   }

   const remove = () => { 
    SkillFileService.deleteFile(uuid)
    .then((response : any) => {
      navigate("/admin")
    })
    .catch((e : Error) => {
      console.log(e);
    })
    }

  useEffect(() => {
    if (uuid) get(uuid);
  }, []);

  return (
    <>
      <Header name="이곳은 기술 스택 추가 공간입니다." />
      <div className="container mt-5" style={{ width: "500px" }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            제목
          </label>
          <input
            type="email"
            value={skillFile.fileTitle}
            onChange={onChangeInput}
            className="form-control"
            id="exampleFormControlInput1"
            name="fileTitle"
          />
        </div>
        <hr />
        <h4>💾이미지 업로드</h4>

        <div className="mb-3 col-md-12">
          <a href="#">이전 이미지</a>
          <img
            src={previewImage}
            className="card-img-top"
            alt="미리보기"
            style={{
              width: "360px",
              height: "200.14px",
              borderRadius: "10px",
            }}
          />
        </div>

        <div className="input-group mb-3">
          {/* upload 선택상자/버튼 start */}
          <input
            type="file"
            className="form-control mb-3"
            id="inputGroupFile02"
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
          {/* <!-- 이미지내용 입력 박스 끝 --> */}
        </div>
        <button type="button" className="btn btn-success me-3" onClick={update}>
          수정 하기
        </button>
        <button type="button" className="btn btn-danger me-3" onClick={remove}>
          삭제 하기
        </button>
        <Link to={"/admin"} type="button" className="btn btn-light">
          뒤로 가기
        </Link>
      </div>
    </>
  );
}

export default Skill;
