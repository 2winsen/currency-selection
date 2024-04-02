// eslint-disable-next-line  no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
