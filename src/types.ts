export type UserRoleType = "admin" | "contractor" | "executor" | "employee";

export type TradeColorEnum =
  | "blue-500"
  | "red-500"
  | "yellow-500"
  | "green-500"
  | "orange-500"
  | "purple-500";

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
  employees: ReferrerType[];
  bankDetails: UserBankDetails[] | UserBankDetails;
  billingDetails: BillingDetails;
  numberRanges: NumberRanges[];
  numberRangesLocal: NumberRanges[];
  standIn: StandIn[]
}

export type UserBankDetails = {
  bank: string;
  iban: string;
  bic: string;
};

export type BillingDetails = {
  taxNumber: string;
  taxId: string;
  cashDiscount: string;
  discountPeriod: string;
  paymentDeadline: string;
};

export type ReferrerType = {
  role: string;
  id: string;
  _id?: string;
  email: string;
} & Partial<
  Pick<User, "first_name" | "last_name" | "phone" | "username" | "avatar">
>;

export type StandIn = {
  role: "employee";
  _id: string;
  email: string;
  id: string;
} & Partial<Pick<User, "first_name" | "last_name">>;

export interface TradeInterface {
  _id: string;
  name: string;
  color: TradeColorEnum;
}

export type NumberRangesType = 'DRAFT' | 'INVOICE';

export type NumberRanges = {
  prefix: string;
  nextNumber: number;
  type: NumberRangesType;
}


// 650d6002aa58b8332aac7f02
