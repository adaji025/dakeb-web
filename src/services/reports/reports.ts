import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getReports = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.REPORTS.GET_REPORT}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getReport = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.REPORTS.GET_SINGLE_REPORT(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
