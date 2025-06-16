import { Faker, FakerOptions, Locale } from './types';
import { createNameModule } from '@/modules/name';
import { createPhoneModule } from '@/modules/phone';
import { createDateModule } from '@/modules/date';
import { createEmailModule } from '@/modules/email';
import { createPasswordModule } from '@/modules/password';
import { createAddressModule } from '@/modules/address';
import { createCompanyModule } from '@/modules/company';
import { createInternetModule } from '@/modules/internet';
import { createFinanceModule } from '@/modules/finance';

/**
 * Creates a new faker instance with the specified locale
 * @param options - Configuration options for the faker instance
 * @returns A new faker instance
 */
export const createFaker = (options: FakerOptions = {}): Faker => {
  const locale = options.locale || 'km';

  return {
    name: createNameModule(locale),
    phone: createPhoneModule(locale),
    date: createDateModule(locale),
    email: createEmailModule(locale),
    password: createPasswordModule(locale),
    address: createAddressModule(locale),
    company: createCompanyModule(locale),
    internet: createInternetModule(locale),
    finance: createFinanceModule(locale)
  };
}; 