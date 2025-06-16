import { AddressModule } from '@/core/types';
import { randomItem, randomNumber } from '@/utils/random';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createAddressModule = (locale: 'km' | 'en'): AddressModule => {
  const localeData = locale === 'km' ? km : en;

  return {
    street: () => {
      const street = randomItem(localeData.address.streets);
      const streetType = randomItem(localeData.address.streetTypes);
      const number = randomNumber(1, 9999);
      return `${number} ${street} ${streetType}`;
    },
    city: () => randomItem(localeData.address.cities),
    province: () => randomItem(localeData.address.provinces),
    postalCode: () => randomItem(localeData.address.postalCodes),
    fullAddress: () => {
      const street = randomItem(localeData.address.streets);
      const streetType = randomItem(localeData.address.streetTypes);
      const number = randomNumber(1, 9999);
      const city = randomItem(localeData.address.cities);
      const province = randomItem(localeData.address.provinces);
      const postalCode = randomItem(localeData.address.postalCodes);
      return `${number} ${street} ${streetType}, ${city}, ${province} ${postalCode}`;
    }
  };
}; 