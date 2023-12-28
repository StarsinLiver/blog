// FileDbService : axios 공통 CRUD 함수
// axios 공통함수 : 벡엔드 연동

import http from "../utils/http-common";
import ISkillFile from "./../types/ISkillFile";

// 전체 조회 (페이징 없음)
const getAllSkillFiles = (): Promise<any> => {
  return http.get("/skill-file");
};

// 상세 조회(uuid)
const getSkillFile = (uuid: any): Promise<any> => {
  return http.get(`/skill-file/get/${uuid}`);
};

// 저장함수
// uploadSkillFile : 제목 + 타이틀(내용) 속성 가진 객체
// fileDb       : 실제 이미지(첨부파일)
// FormData 객체를 이용해서 백엔드로 전송
const upload = (
  uploadSkillFile: ISkillFile,
  currentFile: any
): Promise<any> => {
  // FormData 객체 생성 : Map 자료구조와 유사(키, 값)
  let formData = new FormData();
  formData.append("fileTitle", uploadSkillFile.fileTitle);
  formData.append("currentFile", currentFile); // 첨부파일
  console.log(formData);
  return http.post("/skill-file/upload", formData, {
    headers: {
      // headers : 문서종류
      "Content-Type": "multipart/form-data", // 첨부파일 형태로 보낸다.
    },
  });
};

// 수정함수
// 1) FormData 객체 사용
// 2) headers: {"Content-Type": "multipart/form-data"}
const update = (
  uploadSkillFile: ISkillFile,
  currentFile: any
): Promise<any> => {
  console.log("update() parameter ; ", uploadSkillFile);
  let formData = new FormData();
  formData.append("fileTitle", uploadSkillFile.fileTitle);
  formData.append("currentFile", currentFile);
  return http.put(`/skill-file/${uploadSkillFile.uuid}`, formData, {
    headers: {
      // headers : 문서종류
      "Content-Type": "multipart/form-data", // 첨부파일 형태로 보낸다.
    },
  });
};

// 삭제함수(기본키 : uuid)
const deleteFile = (uuid: any): Promise<any> => {
  return http.delete(`/skill-file/deletion/${uuid}`);
};

const SkillFileService = {
  getAllSkillFiles,
  getSkillFile, // 상세조회
  upload, // 저장
  update, // 수정
  deleteFile, // 삭제
};

export default SkillFileService;
