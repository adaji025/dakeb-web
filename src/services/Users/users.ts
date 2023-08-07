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
