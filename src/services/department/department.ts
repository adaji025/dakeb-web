import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const addDepartments = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.DEPARTMENTS.GET_DEPARTMENT}`, data)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const getDepartments = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.DEPARTMENTS.GET_DEPARTMENT}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const getDepartment = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.DEPARTMENTS.SINGLE_DEPARTMENT(id)}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const updateDepartment = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.put(`${APIS.DEPARTMENTS.SINGLE_DEPARTMENT(id)}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const deleteDepartment = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.delete(`${APIS.DEPARTMENTS.SINGLE_DEPARTMENT(id)}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
