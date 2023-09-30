import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getHunters = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.HUNTER.GET_HUNTERS}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const addHunters = (values: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.HUNTER.GET_HUNTERS}`, values)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteHunter = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.delete(`${APIS.HUNTER.SINGLE_HUNTERS(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
