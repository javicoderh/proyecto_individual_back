import Router from "./routes/routes.js";
import express from "express";
import db from "./config/dataBase.js";
import cors from "cors"
import * as dotenv from "dotenv"

const app = express();
app.use(express.json())

const PORT = process.env.PORT;

app.use(cors());

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:');
}

app.use(Router);
app.listen(PORT, () => {
console.log('this seems like logic but it is magic on port:5000')
})
