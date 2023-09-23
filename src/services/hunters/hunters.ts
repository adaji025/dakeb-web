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
