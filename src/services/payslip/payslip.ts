import AxoisApi from "../../api";
import { APIS } from "../../api/api";

export const getPayslips = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.PAYSLIP.GET_PAYSLIP}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPayslip = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.PAYSLIP.GET_SINGLE_PAYSLIP(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
