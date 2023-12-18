export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^components/(.*)$': '<rootDir>/src/components/$1',
      '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
      '^mapper/(.*)$': '<rootDir>/src/mapper/$1',
      '^utils/(.*)$': '<rootDir>/src/utils/$1',
    },
  };
  