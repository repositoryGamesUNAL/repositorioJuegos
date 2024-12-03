import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

//Nos conectamos a una base de datos publica provicional
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),  
    username: process.env.DB_USERNAME,  
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_DATABASE,  
    //models: [Person], Se puede colocar un array de modelos importandolos directamente
    models: [__dirname + '../models'],
    logging: false,
});

export default sequelize;