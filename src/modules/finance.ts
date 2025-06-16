import { FinanceModule } from '@/core/types';
import { randomItem, randomNumber } from '@/utils/random';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createFinanceModule = (locale: 'km' | 'en'): FinanceModule => {
  const localeData = locale === 'km' ? km : en;

  return {
    bankName: () => randomItem(localeData.finance.bankNames),
    accountType: () => randomItem(localeData.finance.accountTypes),
    currency: () => randomItem(localeData.finance.currencies),
    accountNumber: () => {
      const length = randomNumber(8, 12);
      return Array.from({ length }, () => randomNumber(0, 9)).join('');
    },
    creditCardNumber: () => {
      const length = 16;
      const number = Array.from({ length }, () => randomNumber(0, 9)).join('');
      // Add spaces every 4 digits for better readability
      return number.replace(/(\d{4})/g, '$1 ').trim();
    }
  };
}; 