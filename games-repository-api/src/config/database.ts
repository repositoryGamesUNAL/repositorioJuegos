// database.ts
import { Sequelize } from 'sequelize-typescript';
import { config } from './general'; 

// Nos conectamos a la base de datos usando las variables de configuración
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.dbHost,           
    port: config.dbPort,           
    username: config.dbUsername,   
    password: config.dbPassword,   
    database: config.dbDatabase,   
    models: [__dirname + '/models'],
    logging: false,
});

export default sequelize;