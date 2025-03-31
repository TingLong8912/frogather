import express from 'express'
import cors from 'cors'
import apiRountes from "./routes/api";
import dotenv from 'dotenv-defaults'
import db from "./db";
import routes from './routes';
import Record from './models/Record';
import FrogDB from './models/FrogDB';
import { records, frogs } from "./data/index.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());

// DEVELOPMENT
if (process.env.NODE_ENV === "development") app.use(cors());
// PRODUCTION
if (process.env.NODE_ENV === "production"){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"))
  });
}

/* ROUTES */
app.use('/', routes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4000;
db.connect();
/* ADD DATA ONE TIME */
// Record.insertMany(records);
// FrogDB.insertMany(frogs);

console.log("Server is listening on port 4000");

app.listen(PORT, () => {console.log(`Server is up on port ${PORT}.`)});
