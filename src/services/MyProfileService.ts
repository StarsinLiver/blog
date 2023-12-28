
import IMyProfile from "../types/IMyProfile";
import http from "../utils/http-common";

// 상세 조회
const get = (mid: any) => {
  return http.get<IMyProfile>(`/my-profile/${mid}`)
};

// 수정함수
const update = (mid:any, data:IMyProfile) => {
  return http.put<any>(`/my-profile/${mid}`, data)
};

const MyProfileService = {
  get,
  update,
};

export default MyProfileService;
