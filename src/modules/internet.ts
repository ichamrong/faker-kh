import { InternetModule } from '@/core/types';
import { randomItem, randomNumber } from '@/utils/random';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createInternetModule = (locale: 'km' | 'en'): InternetModule => {
  const localeData = locale === 'km' ? km : en;

  return {
    url: () => {
      const protocol = randomItem(localeData.internet.protocols);
      const domain = randomItem(localeData.internet.domains);
      const tld = randomItem(localeData.internet.tlds);
      return `${protocol}://${domain}${tld}`;
    },
    domain: () => randomItem(localeData.internet.domains),
    tld: () => randomItem(localeData.internet.tlds),
    protocol: () => randomItem(localeData.internet.protocols),
    username: () => {
      const adjectives = ['cool', 'smart', 'happy', 'lucky', 'brave', 'wise', 'kind', 'bold', 'calm', 'wild'];
      const nouns = ['user', 'guy', 'girl', 'star', 'hero', 'ninja', 'master', 'pro', 'dev', 'coder'];
      const number = randomNumber(100, 999);
      return `${randomItem(adjectives)}_${randomItem(nouns)}${number}`;
    }
  };
}; 