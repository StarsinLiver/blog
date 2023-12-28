// FileDbService : axios 공통 CRUD 함수
// axios 공통함수 : 벡엔드 연동

import http from "../utils/http-common";
import IProjects from "./../types/IProjects";

// 전체 조회 (페이징 없음)
const getAllProjects = (): Promise<any> => {
  return http.get("/projects");
};

// 상세 조회(pid)
const getProjects = (pid: any): Promise<any> => {
  return http.get(`/projects/get/${pid}`);
};

// 저장함수
// uploadProjects : 제목 + 타이틀(내용) 속성 가진 객체
// fileDb       : 실제 이미지(첨부파일)
// FormData 객체를 이용해서 백엔드로 전송
const upload = (uploadProjects: IProjects, currentFiles: FileList | null): Promise<any> => {
  const formData = new FormData();
  formData.append("description", uploadProjects.description);
  formData.append("frontName", uploadProjects.frontName);
  formData.append("backendName", uploadProjects.backendName);
  formData.append("dbmsName", uploadProjects.dbmsName);
  formData.append("publishName", uploadProjects.publishName);
  formData.append("webUrl", uploadProjects.webUrl);
  
  if (currentFiles) {
    for (let i = 0; i < currentFiles.length; i++) {
      formData.append("currentFiles", currentFiles[i]);
    }
  }

  return http.post("/projects/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


// 수정함수
// 1) FormData 객체 사용
// 2) headers: {"Content-Type": "multipart/form-data"}
const update = (pid : number , data : IProjects)=> {
  return http.put(`/project/${pid}` , data);
};

// 삭제함수(기본키 : pid)
const deleteFile = (pid: any): Promise<any> => {
  return http.delete(`/projects/deletion/${pid}`);
};

const ProjectsService = {
  getAllProjects,
  getProjects, // 상세조회
  upload, // 저장
  update, // 수정
  deleteFile, // 삭제
};

export default ProjectsService;
