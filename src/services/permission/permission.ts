import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getPermission = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.PERMISSION}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
