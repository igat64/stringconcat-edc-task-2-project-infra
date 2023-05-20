import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }],
  },
  testPathIgnorePatterns: ['dist'],
  coverageThreshold: {
    global: {
      lines: 40,
    },
  },
};

export default config;
