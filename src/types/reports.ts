export type ReportTypes = {
    submittedBy: SubmittedBy
    _id: string
    reportdetails: string
    category: string
    priority: string
    status: boolean
    sentTo: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export type SubmittedBy = {
    name: string
    department: string
    position: string
    email: string
  }