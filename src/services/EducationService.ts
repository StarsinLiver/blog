
import IEducation from "../types/IEducation";
import http from "../utils/http-common";
// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = () => {
  return http.get<Array<IEducation>>(
    `/education`)
};

// 상세 조회
const get = (eid: any) => {
  return http.get<IEducation>(`/education/${eid}`)
};

// 저장함수
const create = (data:IEducation) => {
  return http.post<IEducation>("/education", data)
};

// 수정함수
const update = (eid:any, data:IEducation) => {
  return http.put<any>(`/education/${eid}`, data)
};

// 삭제함수
const remove = (eid: any) => {
  return http.delete<any>(
    `/education/${eid}`
  );
};

const EducationService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default EducationService;
