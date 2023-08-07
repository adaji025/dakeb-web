import AxoisApi from "../../api";
import { APIS } from "../../api/api";

console.log(APIS)

export const login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.AUTH.LOGIN}`, { email, password })
      .then((res) => {
        resolve(res);
        console.log("res ==>",res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
