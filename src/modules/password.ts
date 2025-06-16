import { PasswordModule } from '@/core/types';
import { km } from '@/locales/km';
import { en } from '@/locales/en';

export const createPasswordModule = (locale: 'km' | 'en'): PasswordModule => {
  const localeData = locale === 'km' ? km : en;

  const generateRandomString = (length: number, includeSpecial: boolean): string => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = includeSpecial ? localeData.password.specialChars.join('') : '';
    const allChars = lowercase + uppercase + numbers + special;

    let password = '';
    // Ensure at least one of each required character type
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    if (includeSpecial) {
      password += special[Math.floor(Math.random() * special.length)];
    }

    // Fill the rest of the password
    const remainingLength = length - password.length;
    for (let i = 0; i < remainingLength; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  };

  return {
    generate: (options?: { length?: number; includeSpecial?: boolean }) => {
      const length = options?.length ?? 
        Math.floor(Math.random() * (localeData.password.maxLength - localeData.password.minLength + 1)) + 
        localeData.password.minLength;
      const includeSpecial = options?.includeSpecial ?? true;

      return generateRandomString(length, includeSpecial);
    }
  };
}; 