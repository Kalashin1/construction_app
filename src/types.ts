export type UserRoleType =
  | "admin"
  | "contractor"
  | "executor"
  | "employee"
  | "shop";

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
  creator: ReferrerType;
}

export type Address = {
  street: string;
  zip: string;
  province: string;
};

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
  name: "painting" | "plumbing" | "electricity";
  color: TradeColorEnum;
}

export type NumberRangesType = "DRAFT" | "INVOICE";

export type NumberRanges = {
  prefix: string;
  nextNumber: number;
  type: NumberRangesType;
};

export type LogoUrl = {
  logo: string;
  icon: string;
  invoiceLogo: string;
};
// 650d6002aa58b8332aac7f02

export type UserDocument = {
  name: string;
  fileUrl: string;
  uploadedAt: string;
  status: string;
};

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
  CertificateOfClearanceFromTheCollectiveSocialInsuranceFund: string;
  ProofOfOccupationalSafetyTraining: string;
  EmployeeList: string;
  TrainingAndInstructionCertificates: string;
  InstallerIDCard: string;
  ProofOfExpertiseAccordingToTRGS: string;
};

export const UserDocumentsKeys = [
  "BusinessRegistration",
  "MasterScertificate",
  "CommercialRegisterExtract",
  "Craftscroll",
  "CertificateOfExistenceBusinessLiability",
  "CertificateOfExemptionAccording",
  "CertificateInTaxMatters",
  "MinimumWageProof",
  "GlobalMinimumWageCertificate",
  "CertificareOfSafetyFromTheBG",
  "CertificateOfClearanceOfHealthInsuranceAndSocialSecurity",
  "SalesTaxIdentification",
  "Letterhead",
  "A1Certificate",
  "CertificateOfClearanceFromTheCollectiveSocialInsuranceFund",
  "ProofOfOccupationalSafetyTraining",
  "EmployeeList",
  "TrainingAndInstructionCertificates",
  "InstallerIDCard",
  "ProofOfExpertiseAccordingToTRGS",
] as const;

export interface INotification {
  _id: string;
  user_id: string;
  shortText: string;
  isRead: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface PositionInterface {
  _id: string;
  shortText: string;
  crowd: string;
  units: string;
  price: number;
  trade: string;
  longText: string;
  external_id: string;
  createdAt?: string;
  updatedAt: string;
  contractor?: string;
  tradeName?: string;
}

export const CONTRACT_STATUS = [
  "GENERATED",
  "ACCEPTED",
  "REJECTED",
  "TERMINATED",
];

export interface Contract {
  contractor: User;
  executor: User;
  generatedAt: string;
  trade: TradeInterface;
  _id: string;
  status: (typeof CONTRACT_STATUS)[number];
  terminatedAt: number;
  acceptedAt: number;
  positions: Array<PositionInterface>;
}

export type ProjectPositionObject = {
  [key: string]: {
    positions: ProjectPositions[];
    billed: false;
    executor: string;
    name: string;
    contract?: string;
    id: string;
    accepted: boolean;
  };
};

export type ExtraProjectPositionSuper = {
  createdAt: number;
  createdBy: {
    _id: string;
    role: UserRoleType;
  };
  acceptedBy?: {
    _id: string;
    role: UserRoleType;
  };
  id: string;
  acceptedAt?: number;
  positions: ProjectPositionObject;
};

export interface IProject {
  _id: string;
  contractor: string;
  executors: string[];
  status: (typeof PROJECT_STATUS)[number];
  positions: ProjectPositionObject;
  shortagePositions: ProjectPositionObject;
  extraPositions: ExtraProjectPositionSuper[];
  createdAt: string;
  dueDate: string;
  updatedAt: string;
  external_id: string;
  building: Building;
  client: string;
  rentalStatus: string;
  construction_manager: Pick<User, "email" | "phone"> & { name: string };
  commissioned_by: Pick<User, "email" | "phone"> & { name: string };
  careTaker: Pick<User, "email" | "phone"> & { name: string };
  construction_started: number;
  paused_at: number;
  billingDetails: string;
  completed_at: number;
  canceled_at: number;
  sheduleByTrade: TradeSchedule[];
}

type TradeSchedule = {
  string: string;
};

export const PROJECT_STATUS = [
  "CREATED",
  "ASSIGNED",
  "PAUSED",
  "COMPLETED",
  "NOT-FEASIBLE",
  "CANCELED",
];

export type createProjectParam = {
  contractor_id: string;
  positions: ProjectPositions[];
  dueDate: string;
  external_id: string;
  client: string;
  building: Building;
  commissioned_by: Pick<User, "email" | "phone"> & { name: string };
  billingDetails: string;
  rentalStatus: string;
  careTaker: Pick<User, "email" | "phone"> & { name: string };
};

export type ProjectPositions = {
  status: string;
  billed: boolean;
  comment?: string;
  section?: string;
  documentURL?: string;
  position?: number;
  executor?: string;
} & Partial<PositionInterface>;

export type Building = {
  address: string;
  location: string;
  description: string;
  notes: string;
};

export const INVOICE_STATUS = [
  "REQUESTED",
  "ACCEPTED",
  "DECLINED",
  "BILLED",
] as const;

export interface Draft {
  project: IProject;
  owner: User;
  reciepient: User;
  status: (typeof INVOICE_STATUS)[number];
  _id: string;
  createdAt: string;
  amount: number;
  positions: ProjectPositions[];
  number: number;
  updatedAt: string;
}

export type CreateDraftParam = {
  project: string;
  user_id: string;
  reciepient: string;
  status: (typeof INVOICE_STATUS)[number];
  amount: number;
  positions: string[];
};

export interface InvoiceInterface {
  _id: string;
  external_id: string;
  draft: Draft;
  createdAt?: string;
  updatedAt?: string;
  status: (typeof INVOICE_STATUS)[number];
  owner: User;
  type: "PROJECT" | "SHOP";
  receiver: User;
}

export interface InvoicePayload {
  external_id: string;
  draft: string;
  owner: string;
  receiver: string;
}

export interface Message {
  _id?: string;
  content: string;
  assetUrl?: string;
  owner_id: string;
  reciever_id: string[];
  project_id: string;
  createdAt?: string;
  position_id?: string;
  trade_id?: string;
  parentMessage?: string;
  status: (typeof MESSAGE_STATUS)[number];
}

export const MESSAGE_STATUS = ["SENT", "DELIVERED", "READ", "DELETED"] as const;

export interface Product {
  _id?: string;
  name: string;
  imageUrls?: string[];
  external_id: string;
  shop: string;
  price: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  category: TradeInterface;
  subCategory?: PositionInterface;
}

export type CreateProductParam = {
  shop: string;
  price: string;
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  external_id: string;
};

export const PROJECT_POSITION_STATUS = [
  "IN-PROGRESS",
  "COMPLETED",
  "NOT-FEASIBLE",
] as const;
export const PROJECT_POSITION_TEXT = [
  "Completed",
  "In Progress",
  "Not Feasible",
] as const;

export type InteractWithAddendumPayload = {
  project_id: string;
  user_id: string;
  addendum_id: string;
  action: "ACCEPT" | "REJECT";
};
