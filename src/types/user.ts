export interface UserState {
    message: string
    token: string
    user: UserType
  }
  
  export interface UserType {
    _id: string
    name: string
    email: string
    department: string
    position: string
    role: string
    salary: string
    phonenumber: number
  }