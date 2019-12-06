module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    testPathIgnorePatterns: ['e2e', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    // transform: {
    //     '^.+\\.(ts|js|tsx|jsx|html)$': 'ts-jest'
    // },
    //resolver: '@nrwl/jest/plugins/resolver',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: 'coverage',
    //setupFilesAfterEnv: ['<rootDir>/setupTests.js']

}