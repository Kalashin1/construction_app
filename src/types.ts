export type UserRoleType = "admin" | "contractor" | "executor" | "employee";

export interface User {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  role: UserRoleType;
  avatar: string;
  bankDetails: UserBankDetails[]|UserBankDetails;
  billingDetails: BillingDetails;
}

export type UserBankDetails = {
  bank: string;
  iban: string;
  bic: string;
}

export type BillingDetails = {
  taxNumber: string;
  taxId: string;
  cashDiscount: string;
  discountPeriod: string;
  paymentDeadline: string;
}

// 650d6002aa58b8332aac7f02