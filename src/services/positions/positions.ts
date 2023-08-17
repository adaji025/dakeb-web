import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getPositions = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.POSITION.GET_POSITION}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};