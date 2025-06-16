import {createFaker} from './core/fakerFactory';

// Create and export a default instance with Khmer locale
export const faker = createFaker();

// Export types
export * from './core/types';

// Export factory function
export { createFaker } from './core/fakerFactory';

// Export modules
export * from './modules/name';
export * from './modules/phone';
export * from './modules/date';
export * from './modules/email';
export * from './modules/password';
export * from './modules/address';
export * from './modules/company';
export * from './modules/internet';
export * from './modules/finance';
