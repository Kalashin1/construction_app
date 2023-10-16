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
  executors: User[];
  bankDetails: UserBankDetails[] | UserBankDetails;
  billingDetails: BillingDetails;
  numberRanges: NumberRanges[];
  numberRangesLocal: NumberRanges[];
  position: string;
  standIn: StandIn[];
  trades: TradeInterface[];
  documents: UserDocument[];
  logoUrl: LogoUrl;
  address: Address;
  socialSecurityNumber: string;
  taxIdNumber: string;
}

export type Address = {
  street: string;
  zip: string;
  province: string
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
  position: string;
} & Partial<Pick<User, "first_name" | "last_name" | "phone">>;

export interface TradeInterface {
  _id: string;
  name: 'painting'|'plumbing'|'electricity';
  color: TradeColorEnum;
}

export type NumberRangesType = 'DRAFT' | 'INVOICE';

export type NumberRanges = {
  prefix: string;
  nextNumber: number;
  type: NumberRangesType;
}

export type LogoUrl = {
  logo: string;
  icon: string;
  invoiceLogo: string;
}
// 650d6002aa58b8332aac7f02

export type UserDocument = {
  name: string;
  fileUrl: string;
  uploadedAt: string;
  status: string;
}

export type UserDocuments = {
  BusinessRegistration: string;
  MasterScertificate: string;
  CommercialRegisterExtract: string;
  Craftscroll: string;
  CertificateOfExistenceBusinessLiability: string;
  CertificateOfExemptionAccording: string;
  CertificateInTaxMatters: string;
  MinimumWageProof: string; 
  GlobalMinimumWageCertificate: string;
  CertificareOfSafetyFromTheBG: string;
  CertificateOfClearanceOfHealthInsuranceAndSocialSecurity: string;
  SalesTaxIdentification: string;
  Letterhead: string;
  A1Certificate: string;
  CertificateOfClearanceFromTheCollectiveSocialInsuranceFund: string
  ProofOfOccupationalSafetyTraining: string;
  EmployeeList: string;
  TrainingAndInstructionCertificates: string;  
  InstallerIDCard: string;
  ProofOfExpertiseAccordingToTRGS: string;
}

export const UserDocumentsKeys = [
  'BusinessRegistration',
  "MasterScertificate",
  "CommercialRegisterExtract",
  "Craftscroll",
  "CertificateOfExistenceBusinessLiability",
  "CertificateOfExemptionAccording",
  "CertificateInTaxMatters",
  "MinimumWageProof" ,
  "GlobalMinimumWageCertificate",
  "CertificareOfSafetyFromTheBG",
  "CertificateOfClearanceOfHealthInsuranceAndSocialSecurity",
  "SalesTaxIdentification",
  "Letterhead",
  "A1Certificate",
  "CertificateOfClearanceFromTheCollectiveSocialInsuranceFund",
  "ProofOfOccupationalSafetyTraining",
  "EmployeeList",
  "TrainingAndInstructionCertificates"  ,
  "InstallerIDCard",
  "ProofOfExpertiseAccordingToTRGS",
] as const

export interface INotification {
  _id: string;
  user_id: string;
  shortText: string;
  isRead: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
}