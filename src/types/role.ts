export type RolesType = {
    _id: string
    name: string
    description: string
    permissions: Permission[]
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export type Permission = {
    name: string
    actions: string[]
    _id: string
  }
  