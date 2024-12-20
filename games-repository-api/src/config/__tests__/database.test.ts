import { Sequelize } from 'sequelize-typescript';
import { config } from '../general';
import Person from '../../models/Person';


jest.mock('sequelize-typescript', () => {
  return {
    Sequelize: jest.fn().mockImplementation(() => {
      return {
        authenticate: jest.fn().mockResolvedValue('Connection established'),
      };
    }),
  };
});

describe('Database connection', () => {
  it('should create a Sequelize instance with the correct configuration', async () => {
    const { dbHost, dbPort, dbUsername, dbPassword, dbDatabase } = config;

    const instance = new Sequelize({
      dialect: 'postgres',
      host: dbHost,
      port: dbPort,
      username: dbUsername,
      password: dbPassword,
      database: dbDatabase,
      models: [Person], 
      logging: false,
    });

    expect(Sequelize).toHaveBeenCalledWith(
      expect.objectContaining({
        dialect: 'postgres',
        host: dbHost,
        port: dbPort,
        username: dbUsername,
        password: dbPassword,
        database: dbDatabase,
        models: [Person],
        logging: false,
      })
    );

    await expect(instance.authenticate()).resolves.toBe('Connection established');
  });
});
