import { PhoneModule } from '@/core/types';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createPhoneModule = (locale: 'km' | 'en'): PhoneModule => {
  const localeData = locale === 'km' ? km : en;

  const generateNumber = (format: string): string => {
    return format.replace(/#/g, () => Math.floor(Math.random() * 10).toString());
  };

  return {
    mobile: () => {
      const prefix = localeData.phone.prefixes[Math.floor(Math.random() * localeData.phone.prefixes.length)];
      const format = localeData.phone.formats[Math.floor(Math.random() * localeData.phone.formats.length)];
      return prefix + generateNumber(format);
    }
  };
}; 