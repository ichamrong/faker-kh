import { NameModule } from '@/core/types';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createNameModule = (locale: 'km' | 'en'): NameModule => {
  const localeData = locale === 'km' ? km : en;

  return {
    firstName: () => {
      const names = localeData.name.firstNames;
      return names[Math.floor(Math.random() * names.length)];
    },
    lastName: () => {
      const names = localeData.name.lastNames;
      return names[Math.floor(Math.random() * names.length)];
    },
    fullName: () => {
      return `${createNameModule(locale).firstName()} ${createNameModule(locale).lastName()}`;
    }
  };
}; 