import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const addUser = (data: any) => {
  return new Promise<void>((resolve, reject) => {
    AxoisApi.post(`${APIS.USERS.ADD_USER}`, data)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.USERS.GET_USERS}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const getUser = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.USERS.SINGLE_USER(id)}`)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateUser = (id: string, value: {}) => {
  return new Promise((resolve, reject) => {
    AxoisApi.put(`${APIS.USERS.SINGLE_USER(id)}`, value)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const deleteUser = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.delete(`${APIS.USERS.SINGLE_USER(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
