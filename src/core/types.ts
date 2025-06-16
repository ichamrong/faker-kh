/**
 * Interface defining the shape of locale-specific data
 */
export interface LocaleData {
  name: {
    firstNames: string[];
    lastNames: string[];
  };
  phone: {
    prefixes: string[];
    formats: string[];
  };
  date: {
    formats: string[];
    minAge: number;
    maxAge: number;
  };
  email: {
    domains: string[];
    separators: string[];
  };
  password: {
    minLength: number;
    maxLength: number;
    specialChars: string[];
  };
  address: {
    streets: string[];
    cities: string[];
    provinces: string[];
    postalCodes: string[];
    streetTypes: string[];
  };
  company: {
    names: string[];
    types: string[];
    positions: string[];
    industries: string[];
  };
  internet: {
    domains: string[];
    tlds: string[];
    protocols: string[];
  };
  finance: {
    bankNames: string[];
    accountTypes: string[];
    currencies: string[];
  };
}

/**
 * Available locale codes
 */
export type Locale = 'km' | 'en';

/**
 * Configuration options for creating a faker instance
 */
export interface FakerOptions {
  locale?: Locale;
}

/**
 * Module interfaces
 */
export interface NameModule {
  firstName: () => string;
  lastName: () => string;
  fullName: () => string;
}

export interface PhoneModule {
  mobile: () => string;
}

export interface DateModule {
  birthDate: (options?: { minAge?: number; maxAge?: number }) => string;
}

export interface EmailModule {
  generate: (options?: { firstName?: string; lastName?: string }) => string;
}

export interface PasswordModule {
  generate: (options?: { length?: number; includeSpecial?: boolean }) => string;
}

export interface AddressModule {
  street: () => string;
  city: () => string;
  province: () => string;
  postalCode: () => string;
  fullAddress: () => string;
}

export interface CompanyModule {
  name: () => string;
  type: () => string;
  position: () => string;
  industry: () => string;
  fullCompany: () => string;
}

export interface InternetModule {
  url: () => string;
  domain: () => string;
  tld: () => string;
  protocol: () => string;
  username: () => string;
}

export interface FinanceModule {
  bankName: () => string;
  accountType: () => string;
  currency: () => string;
  accountNumber: () => string;
  creditCardNumber: () => string;
}

/**
 * Interface for the complete faker instance
 */
export interface Faker {
  name: NameModule;
  phone: PhoneModule;
  date: DateModule;
  email: EmailModule;
  password: PasswordModule;
  address: AddressModule;
  company: CompanyModule;
  internet: InternetModule;
  finance: FinanceModule;
} 