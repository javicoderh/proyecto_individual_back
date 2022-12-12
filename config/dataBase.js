import  { Sequelize } from "sequelize";
import * as dotenv from "dotenv"
dotenv.config();

const db = new Sequelize ( 
process.env.PGDATABASE,
process.env.PGUSER,
process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: false,
  port: process.env.PGPORT,
  define: {
    timestamps: false,
    },
});


export default db;
