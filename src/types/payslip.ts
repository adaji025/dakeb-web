export type PayslipTypes = {
  user: User;
  _id: string;
  salary: string;
  bonus: string;
  deductions: string;
  reasonfordeductions: string;
  generatedby: string;
  payperiod: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type User = {
  name: string;
  email: string;
  department: string;
  position: string;
};
