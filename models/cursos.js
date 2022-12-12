import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";

const { DataTypes} = Sequelize;

const Cursos = db.define('cursos', {

id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
},
nombre: {
type: DataTypes.STRING
},
descripcion: {
type: DataTypes.STRING
},
img: {
 type: DataTypes.STRING
 }},{
tableName: 'cursos'
});

 export default Cursos