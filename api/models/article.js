
import mongoose from "mongoose";
import Connection from "../db/connections.js";

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    exercise: { type: String,  required: false },
    weight: { type: Number, required: false },
    
  },
  {
    collection: "FDB",
  }
);

const db = mongoose.connection.useDb("FDB");
const Workout = db.model("Workout", WorkoutSchema);

export default Workout;
