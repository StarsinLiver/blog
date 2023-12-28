import IEveryOne from "../types/dto/IEveryOne";
import http from "../utils/http-common";

// 전체 조회
const getAll = () => {
  return http.get<IEveryOne>(
    `/everyone`)
};

const EveryOneService = {
  getAll,
};

export default EveryOneService;
