# Faker-KH

A TypeScript library for generating fake data with Khmer localization. This library provides a comprehensive set of tools for generating realistic fake data, with a focus on Khmer language and culture.

## Features

- 🌍 Multi-locale support (Khmer and English)
- 👤 Name generation (first names, last names, full names)
- 📱 Phone number generation with locale-specific formats
- 📅 Date generation with locale-specific formats
- 📧 Email generation with customizable domains
- 🔑 Password generation with configurable options
- 🎯 TypeScript support with full type definitions
- 🧪 Comprehensive test coverage

## Installation

```bash
npm install @faker-kh/core
# or
yarn add @faker-kh/core
# or
pnpm add @faker-kh/core
```

## Usage

```typescript
import { createFaker } from '@faker-kh/core';

// Create a faker instance with Khmer locale (default)
const khmerFaker = createFaker();

// Create a faker instance with English locale
const englishFaker = createFaker({ locale: 'en' });

// Generate names
console.log(khmerFaker.name.firstName());  // e.g., "សុខ"
console.log(khmerFaker.name.lastName());   // e.g., "វណ្ណា"
console.log(khmerFaker.name.fullName());   // e.g., "សុខ វណ្ណា"

// Generate phone numbers
console.log(khmerFaker.phone.mobile());    // e.g., "0123456789"

// Generate birth dates
console.log(khmerFaker.date.birthDate());  // e.g., "01/01/1990"
console.log(khmerFaker.date.birthDate({ minAge: 25, maxAge: 35 }));  // Custom age range

// Generate emails
console.log(khmerFaker.email.generate());  // e.g., "john.doe@gmail.com"
console.log(khmerFaker.email.generate({    // With specific name
  firstName: "John",
  lastName: "Doe"
}));

// Generate passwords
console.log(khmerFaker.password.generate());  // e.g., "Kj9#mP2$"
console.log(khmerFaker.password.generate({    // Custom options
  length: 12,
  includeSpecial: false
}));
```

## API Reference

### Faker Instance

The `createFaker` function returns an instance with the following methods:

#### Name Generation
- `name.firstName()`: Generate a random first name
- `name.lastName()`: Generate a random last name
- `name.fullName()`: Generate a random full name

#### Phone Number Generation
- `phone.mobile()`: Generate a random mobile number

#### Date Generation
- `date.birthDate(options?)`: Generate a random birth date
  - `options.minAge`: Minimum age (default: 18)
  - `options.maxAge`: Maximum age (default: 80)

#### Email Generation
- `email.generate(options?)`: Generate a random email address
  - `options.firstName`: Custom first name
  - `options.lastName`: Custom last name

#### Password Generation
- `password.generate(options?)`: Generate a random password
  - `options.length`: Password length (default: random between 8-16)
  - `options.includeSpecial`: Include special characters (default: true)

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the library
pnpm build

# Run in development mode
pnpm dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.