import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const userLogin = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.AUTH.LOGIN}`, { email, password })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
