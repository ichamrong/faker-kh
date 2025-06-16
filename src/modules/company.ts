import { CompanyModule } from '@/core/types';
import { randomItem, randomNumber } from '@/utils/random';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createCompanyModule = (locale: 'km' | 'en'): CompanyModule => {
  const localeData = locale === 'km' ? km : en;

  return {
    name: () => {
      const companyName = randomItem(localeData.company.names);
      const companyType = randomItem(localeData.company.types);
      return `${companyName} ${companyType}`;
    },
    type: () => randomItem(localeData.company.types),
    position: () => randomItem(localeData.company.positions),
    industry: () => randomItem(localeData.company.industries),
    fullCompany: () => {
      const companyName = randomItem(localeData.company.names);
      const companyType = randomItem(localeData.company.types);
      const industry = randomItem(localeData.company.industries);
      const foundedYear = randomNumber(1900, new Date().getFullYear());
      return `${companyName} ${companyType} - ${industry} (Founded ${foundedYear})`;
    }
  };
}; 