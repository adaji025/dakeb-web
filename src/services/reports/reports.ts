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
    AxoisApi.get(`${APIS.REPORTS.SINGLE_REPORT(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteReport = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.delete(`${APIS.REPORTS.SINGLE_REPORT(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addReports = (id:string, values: {}) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.REPORTS.SINGLE_REPORT(id)}`, values)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
