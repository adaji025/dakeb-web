export interface FormsTypes {
  createdBy: CreatedBy
  _id: string
  name: string
  description: string
  status: string
  fields: Field[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface CreatedBy {
  name: string
  department: string
  position: string
}

export interface Field {
  name: string
  type: string
  _id: string
}
