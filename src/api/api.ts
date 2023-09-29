const api: string = import.meta.env.VITE_APP_API!;

export const APIS = {
  AUTH: {
    LOGIN: `${api}/auth/login`,
  },
  USERS: {
    ADD_USER: `${api}/user`,
    GET_USERS: `${api}/user`,
    SINGLE_USER: (id: string) => `${api}/user/${id}`,
  },
  FORMS: {
    GET_FORMS: `${api}/form`,
    GET_SINGLE_FORM: (id: string) => `${api}/form/${id}`,
  },
  DEPARTMENTS: {
    ADD_DEPARTMENT: `${api}/department`,
    GET_DEPARTMENT: `${api}/department`,
    SINGLE_DEPARTMENT: (id: string) => `${api}/department/${id}`,
  },
  ROLE: {
    GET_ROLES: `${api}/role`,
    SINGLE_ROLE: (id: string) => `${api}/role/${id}`
  },
  POSITION: {
    GET_POSITION: `${api}/position`,
    SINGLE_POSITION:(id: string) => `${api}/position/${id}`,
  },
  PAYSLIP: {
    GET_PAYSLIP: `${api}/payslip`,
    GET_SINGLE_PAYSLIP: (id: string) => `${api}/payslip/${id}`,
  },
  REPORTS: {
    GET_REPORT: `${api}/report`,
    GET_SINGLE_REPORT: (id: string) => `${api}/report/${id}`,
  },
  HUNTER: {
    GET_HUNTERS: `${api}/hunter`,
  },
  PERMISSION: `${api}/permission`,
};
