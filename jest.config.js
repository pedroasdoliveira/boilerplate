/* eslint-disable prettier/prettier */
module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
