import { EmailModule } from '@/core/types';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createEmailModule = (locale: 'km' | 'en'): EmailModule => {
  const localeData = locale === 'km' ? km : en;

  const generateRandomString = (length: number): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  return {
    generate: (options?: { firstName?: string; lastName?: string }) => {
      const firstName = options?.firstName?.toLowerCase() ?? generateRandomString(8);
      const lastName = options?.lastName?.toLowerCase() ?? generateRandomString(8);
      const separator = localeData.email.separators[Math.floor(Math.random() * localeData.email.separators.length)];
      const domain = localeData.email.domains[Math.floor(Math.random() * localeData.email.domains.length)];
      
      return `${firstName}${separator}${lastName}@${domain}`;
    }
  };
}; 