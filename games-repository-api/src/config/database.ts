// database.ts
import { Sequelize } from 'sequelize-typescript';
import { config } from './general'; 

const { dbHost, dbPort, dbUsername, dbPassword, dbDatabase } = config;

// Nos conectamos a la base de datos usando las variables de configuración
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: dbHost,           
    port: dbPort,           
    username: dbUsername,   
    password: dbPassword,   
    database: dbDatabase,   
    models: [__dirname + '/models'],
    logging: false,
});

export default sequelize;