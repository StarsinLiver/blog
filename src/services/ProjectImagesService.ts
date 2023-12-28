// FileDbService : axios 공통 CRUD 함수
// axios 공통함수 : 벡엔드 연동

import IProjectImages from "../types/IProjectImages";
import http from "../utils/http-common";
import IProjects from "./../types/IProjects";


// 상세 조회(pid)
const getProjects = (pid: any): Promise<any> => {
  return http.get(`/project-images/get/${pid}`);
};


// 수정함수
// 1) FormData 객체 사용
// 2) headers: {"Content-Type": "multipart/form-data"}
const update = (
  uploadProjectImages: IProjectImages,
  currentFile: any
): Promise<any> => {
  console.log("update() parameter ; ", uploadProjectImages);
  let formData = new FormData();
  formData.append("pid", uploadProjectImages.pid as any);
  formData.append("currentFile", currentFile);
  return http.put(`/project-images/${uploadProjectImages.uuid}`, formData, {
    headers: {
      // headers : 문서종류
      "Content-Type": "multipart/form-data", // 첨부파일 형태로 보낸다.
    },
  });
};

// 삭제함수(기본키 : pid)
const deleteFile = (pid: any): Promise<any> => {
  return http.delete(`//project-images/deletion/${pid}`);
};

const ProjectImagesService = {
  getProjects, // 상세조회
  update, // 수정
  deleteFile, // 삭제
};

export default ProjectImagesService;
