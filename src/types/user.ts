export interface UserState {
    message: string
    token: string
    user: UserType
  }
  
  export type UserType = {
    role: Role
  _id: string
  name: string
  email: string
  salary: string
  phonenumber: number
  department: string
  position: string
  createdAt: string
  updatedAt: string
  __v: number
}
  
export type Role = {
  id: string
  name: string
}