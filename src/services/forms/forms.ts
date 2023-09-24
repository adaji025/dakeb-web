import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getForms = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.FORMS.GET_FORMS}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getForm = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.FORMS.GET_SINGLE_FORM(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
