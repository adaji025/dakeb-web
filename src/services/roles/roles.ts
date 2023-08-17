import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getRoles = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.ROLE.GET_ROLES}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};