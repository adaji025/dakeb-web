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
        GET_FORMS: `${api}/form`
    },
    DEPARTMENTS: {
        ADD_DEPARTMENT:  `${api}/department`,
        GET_DEPARTMENT: `${api}/department`,
        SINGLE_DEPARTMENT: (id: string) => `${api}/department/${id}`,
    },
    ROLE: {
        GET_ROLES: `${api}/role`
    },
    POSITION: {
        GET_POSITION: `${api}/position`
    },
    PAYSLIP: {},
    REPORTS: {
        GET_REPORT: `${api}/report`,
    },
    HUNTER: {},
    PERMISSION: `${api}/permission`
};
