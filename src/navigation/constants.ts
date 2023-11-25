export enum SCREENS {
  HOME = '/',
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD ='/reset-password',
  DASHBOARD = '/dashboard',
  PROJECTS = '/projects',
  CONTRACTORS = '/contractors',
  SUPPORT = '/support',
  BILLS = '/bills',
  PERFORMANCE = '/performance',
  REPORTS = '/reports',
  SHORTAGES = '/shortages',
  SHOP = '/shop/:id',
  CREATE_PROJECT ='/create-project',
  OPS_ADMINISTRATION = '/ops',
  DETAIL = '/detail/:id',
  PROFILE = '/profile',
  CONTRACTOR_DETAILS = '/contractor/:id',
  CONTRACTOR_BILLING_DETAILS = '/billing-details/:id',
  USER_DOCUMENTS = '/user-documents/:id',
  CONTACT_PERSON = '/contact-person/:id',
  FRAMEWORKS = '/frameworkd/:id',
  TARGET_SALES = '/target-sales/:id',
  USER_EMPLOYEES = '/user-employee/:id',
  CHAT = '/chat',
  TODO = '/todo',
  APPS = '/apps',
  FILE_MANAGER = '/files',
  MAIL = '/mail',
  KANBAN = '/kanban',
  NUMBER_RANGES = '/number-ranges',
  BILLING_DETAILS = '/billing-details',
  TRADES = '/trades',
  DOCUMENTS = '/documents',
  EMPLOYEES = '/employees',
  CONTRACT = '/contract/:id',
  DRAFT = '/draft/:id',
  ADDENDUM = '/addendum/:project_id',
  ADD_PRODUCT = '/add-product/:shop_id',
  SHOP_PRODUCTS = '/products/:shop_id',
  ADDENDUM_DETAIL = '/addendum-detail/:project_id/:id',
  UPLOAD_MULTIPLE_PRODUCTS = '/products/multiple/:shop_id'
}

export const API_BASE_URL = 

import.meta.env.VITE_API_BASE_URL;

// 'http://localhost:8080'

// 'https://magga-676xiecbma-uc.a.run.app';
// export const CLIENT_BASE_URL = 'http://localhost:8080';