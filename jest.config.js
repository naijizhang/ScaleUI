// jest.config.js
export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["js", "ts", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
