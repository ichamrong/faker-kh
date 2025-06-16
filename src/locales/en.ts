import { LocaleData } from '@/core/types';

export const en: LocaleData = {
  name: {
    firstNames: [
      // A
      'Adam', 'Alex', 'Alice', 'Amy', 'Andrew', 'Anna', 'Anthony', 'Ashley',
      // B
      'Benjamin', 'Brandon', 'Brian', 'Brittany', 'Bruce',
      // C
      'Catherine', 'Charles', 'Christopher', 'Cynthia',
      // D
      'Daniel', 'David', 'Diana', 'Donald', 'Donna',
      // E
      'Edward', 'Elizabeth', 'Emily', 'Emma', 'Eric',
      // F
      'Frank', 'Fred', 'Frederick',
      // G
      'George', 'Gregory',
      // H
      'Harry', 'Helen', 'Henry',
      // I
      'Irene', 'Isaac',
      // J
      'Jack', 'James', 'Jane', 'Janet', 'Jason', 'Jeffrey', 'Jennifer', 'Jessica', 'John', 'Joseph',
      // K
      'Karen', 'Kathleen', 'Kenneth', 'Kevin', 'Kimberly',
      // L
      'Laura', 'Lawrence', 'Linda', 'Lisa',
      // M
      'Margaret', 'Mark', 'Mary', 'Matthew', 'Michael', 'Michelle',
      // N
      'Nancy', 'Nicole',
      // O
      'Olivia', 'Oliver',
      // P
      'Patricia', 'Paul', 'Peter', 'Philip',
      // R
      'Rachel', 'Rebecca', 'Richard', 'Robert', 'Ronald',
      // S
      'Samuel', 'Sarah', 'Scott', 'Sharon', 'Steven', 'Susan',
      // T
      'Thomas', 'Timothy',
      // W
      'Walter', 'William'
    ],
    lastNames: [
      // A
      'Adams', 'Allen', 'Anderson',
      // B
      'Baker', 'Barnes', 'Bell', 'Bennett', 'Brown',
      // C
      'Campbell', 'Carter', 'Clark', 'Collins', 'Cook',
      // D
      'Davis', 'Edwards', 'Evans',
      // F
      'Fisher', 'Foster',
      // G
      'Garcia', 'Gray', 'Green',
      // H
      'Hall', 'Harris', 'Hill', 'Howard', 'Hughes',
      // J
      'Jackson', 'James', 'Johnson', 'Jones',
      // K
      'Kelly', 'King',
      // L
      'Lee', 'Lewis', 'Lopez',
      // M
      'Martin', 'Miller', 'Moore', 'Morris', 'Murphy',
      // P
      'Parker', 'Patterson', 'Phillips', 'Powell',
      // R
      'Reed', 'Richardson', 'Roberts', 'Robinson', 'Ross',
      // S
      'Scott', 'Smith', 'Stewart',
      // T
      'Taylor', 'Thomas', 'Thompson', 'Turner',
      // W
      'Walker', 'Ward', 'Watson', 'White', 'Williams', 'Wilson', 'Wood', 'Wright',
      // Y
      'Young'
    ]
  },
  phone: {
    prefixes: ['010', '011', '012', '015', '016', '017', '018', '092', '096', '097'],
    formats: ['### ### ###', '#### ####', '### ####']
  },
  date: {
    formats: ['MM/DD/YYYY', 'YYYY-MM-DD', 'MMMM DD, YYYY'],
    minAge: 18,
    maxAge: 80
  },
  email: {
    domains: ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'],
    separators: ['.', '_', '']
  },
  password: {
    minLength: 8,
    maxLength: 16,
    specialChars: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=']
  },
  address: {
    streets: [
      'Main Street',
      'Broadway',
      'Park Avenue',
      'Fifth Avenue',
      'Wall Street',
      'Market Street',
      'Oxford Street',
      'Regent Street',
      'Michigan Avenue',
      'Rodeo Drive'
    ],
    cities: [
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Phoenix',
      'Philadelphia',
      'San Antonio',
      'San Diego',
      'Dallas',
      'San Jose'
    ],
    provinces: [
      'New York',
      'California',
      'Illinois',
      'Texas',
      'Arizona',
      'Pennsylvania',
      'Florida',
      'Ohio',
      'Georgia',
      'North Carolina'
    ],
    postalCodes: ['10001', '90001', '60601', '77001', '85001', '19101', '78201', '92101', '75201', '95101'],
    streetTypes: ['Street', 'Avenue', 'Boulevard', 'Road', 'Lane', 'Drive', 'Court', 'Place', 'Terrace', 'Way']
  },
  company: {
    names: [
      'Tech Solutions Inc.',
      'Global Innovations Ltd.',
      'Digital Dynamics Corp.',
      'Future Systems LLC',
      'Smart Technologies Co.',
      'Advanced Computing Group',
      'Innovative Solutions Ltd.',
      'Next Generation Systems',
      'Elite Tech Services',
      'Premier Digital Solutions'
    ],
    types: ['Inc.', 'Ltd.', 'Corp.', 'LLC', 'Co.', 'Group', 'Services', 'Solutions', 'Systems', 'Technologies'],
    positions: [
      'CEO',
      'CTO',
      'CFO',
      'COO',
      'VP of Operations',
      'VP of Technology',
      'VP of Finance',
      'VP of Marketing',
      'VP of Sales',
      'VP of Human Resources'
    ],
    industries: [
      'Technology',
      'Finance',
      'Healthcare',
      'Manufacturing',
      'Retail',
      'Education',
      'Energy',
      'Transportation',
      'Construction',
      'Entertainment'
    ]
  },
  internet: {
    domains: ['example', 'test', 'demo', 'sample', 'local', 'dev', 'staging', 'prod', 'beta', 'alpha'],
    tlds: ['.com', '.org', '.net', '.edu', '.gov', '.io', '.co', '.info', '.biz', '.app'],
    protocols: ['http', 'https', 'ftp', 'sftp', 'ws', 'wss']
  },
  finance: {
    bankNames: [
      'Chase Bank',
      'Bank of America',
      'Wells Fargo',
      'Citibank',
      'Goldman Sachs',
      'Morgan Stanley',
      'HSBC',
      'Barclays',
      'Deutsche Bank',
      'UBS'
    ],
    accountTypes: ['Checking', 'Savings', 'Business', 'Investment', 'Retirement', 'Student', 'Joint', 'Trust'],
    currencies: ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'CAD', 'AUD', 'CHF', 'SGD', 'HKD']
  }
}; 