import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/routes.js";
import morgan from "morgan";
import ArticlesAccessor from "../api/db_accessors/workout_accesor.js"

const app = express();






app.set("view engine", "ejs");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use("/", router);







export default app;