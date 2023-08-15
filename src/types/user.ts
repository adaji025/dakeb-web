export interface UserState {
    message: string
    token: string
    user: UserType
  }
  
  export type UserType = {
    _id: string;
    name: string;
    email: string;
    salary: string;
    phonenumber: number;
    department: string;
    createdAt: string;
    position: string;
    role: string;
    password: string;
    __v: number;
    usertype?: string;
  }