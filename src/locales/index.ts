import { Locale, LocaleData } from '@/core/types';
import { km } from './km';
import { en } from './en';

const locales: Record<Locale, LocaleData> = {
  km,
  en
};

export function getLocaleData(locale: Locale = 'km'): LocaleData {
  return locales[locale] || locales.km;
}

export { km, en }; 