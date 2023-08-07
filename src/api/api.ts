const api: string = import.meta.env.VITE_APP_API!;

export const APIS = {
    AUTH: {
        LOGIN: `${api}/auth/login`,
    },
    USERS: {
        ADD_USER: `${api}/user`,
        GET_USER: `${api}/users`,
        SINGLE_USER: (id: string) => `${api}/user/${id}`,
    },
    FORMS: {},
    DEPARTMENTS: {},
    ROLE: {},
    POSITION: {},
    PAYSLIP: {},
    REPORT: {},
    HUNTER: {},
};
