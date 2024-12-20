import { config } from '../general';

describe('Config Module', () => {
    beforeAll(() => {
        process.env.DB_HOST = 'localhost';
        process.env.DB_PORT = '5432';
        process.env.DB_USERNAME = 'test_user';
        process.env.DB_PASSWORD = 'test_password';
        process.env.DB_DATABASE = 'test_database';
        process.env.PORT = '4000';
    });

    it('should load environment variables correctly', () => {
        expect(config.dbHost).toBe('localhost');
        expect(config.dbPort).toBe(5432); 
        expect(config.dbUsername).toBe('test_user');
        expect(config.dbPassword).toBe('test_password');
        expect(config.dbDatabase).toBe('test_database');
        expect(config.port).toBe('4000');
    });

    it('should use default port if PORT is not defined', () => {
        delete process.env.PORT;
        const { config: defaultConfig } = require('../config');
        expect(defaultConfig.port).toBe(3000);
    });

    it('should handle missing DB_PORT gracefully', () => {
        delete process.env.DB_PORT;
        const { config: defaultConfig } = require('../config');
        expect(defaultConfig.dbPort).toBe(5432);
    });
});
