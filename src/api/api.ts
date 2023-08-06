const api: string = import.meta.env.VITE_APP_API!;

export const APIS = {
    AUTH: {
        LOGIN: `${api}/auth/login`,
    },
    USERS: {},
    FORMS: {},
    DEPARTMENTS: {},
    ROLE: {},
    POSITION: {},
    PAYSLIP: {},
    REPORT: {},
    HUNTER: {},
};
