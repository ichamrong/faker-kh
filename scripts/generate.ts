import { createFaker } from '../src';

// Create faker instances for different locales
const khmerFaker = createFaker({ locale: 'km' });
const englishFaker = createFaker({ locale: 'en' });

// Generate some sample data
console.log('Khmer Data:');
console.log('-----------');
console.log('Name:', khmerFaker.name.fullName());
console.log('Phone:', khmerFaker.phone.mobile());
console.log('Birth Date:', khmerFaker.date.birthDate());
console.log('Birth Date (Age 25-35):', khmerFaker.date.birthDate({ minAge: 25, maxAge: 35 }));
console.log('Email:', khmerFaker.email.generate());
console.log('Email (with name):', khmerFaker.email.generate({ 
  firstName: khmerFaker.name.firstName(), 
  lastName: khmerFaker.name.lastName() 
}));
console.log('Password:', khmerFaker.password.generate());
console.log('Password (12 chars, no special):', khmerFaker.password.generate({ length: 12, includeSpecial: false }));

console.log('\nEnglish Data:');
console.log('-------------');
console.log('Name:', englishFaker.name.fullName());
console.log('Phone:', englishFaker.phone.mobile());
console.log('Birth Date:', englishFaker.date.birthDate());
console.log('Birth Date (Age 25-35):', englishFaker.date.birthDate({ minAge: 25, maxAge: 35 }));
console.log('Email:', englishFaker.email.generate());
console.log('Email (with name):', englishFaker.email.generate({ 
  firstName: englishFaker.name.firstName(), 
  lastName: englishFaker.name.lastName() 
}));
console.log('Password:', englishFaker.password.generate());
console.log('Password (12 chars, no special):', englishFaker.password.generate({ length: 12, includeSpecial: false })); 