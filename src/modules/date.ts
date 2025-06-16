import { DateModule } from '@/core/types';
import { km } from '@/locales/km';
import { en } from '@/locales/en';
import { format } from 'date-fns';

export const createDateModule = (locale: 'km' | 'en'): DateModule => {
  const localeData = locale === 'km' ? km : en;

  const getRandomDate = (minAge: number, maxAge: number): Date => {
    const today = new Date();
    const minDate = new Date(today.getFullYear() - maxAge, 0, 1);
    const maxDate = new Date(today.getFullYear() - minAge, 11, 31);
    return new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()));
  };

  const formatDate = (date: Date, formatStr: string): string => {
    try {
      return format(date, formatStr);
    } catch (error) {
      // Fallback to ISO format if the format string is invalid
      return date.toISOString().split('T')[0];
    }
  };

  return {
    birthDate: (options?: { minAge?: number; maxAge?: number }) => {
      const minAge = options?.minAge ?? localeData.date.minAge;
      const maxAge = options?.maxAge ?? localeData.date.maxAge;
      const date = getRandomDate(minAge, maxAge);
      const formatStr = localeData.date.formats[Math.floor(Math.random() * localeData.date.formats.length)];
      return formatDate(date, formatStr);
    }
  };
}; 