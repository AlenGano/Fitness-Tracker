import { config as dotenvConfig } from "dotenv";
import mongoose from "mongoose";
import { log } from "mercedlogger";

let connections = new Map();

export default class Connection {
  static async open(db) {
    try {
      if (!connections.get(db)) {
        dotenvConfig();

        const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER } = process.env;
        const DATABASE_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.g3txzk6.mongodb.net`;

        await mongoose.connect(DATABASE_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          maxPoolSize: 50,
          socketTimeoutMS: 2500,
          dbName: db,
        });

        connections.set(db, mongoose.connection);

        mongoose.connection
          .on("open", () => log.green("DATABASE STATE", "Connection Open"))
          .on("close", () => log.magenta("DATABASE STATE", "Connection Closed"))
          .on("error", (error) => log.red("DATABASE STATE", error));

        return mongoose.connection;
      } else {
        return connections.get(db);
      }
    } catch (error) {
      log.red("DATABASE STATE", error);
      throw error;
    }
  }

  static async close(connection) {
    try {
      await connection.close();
      log.magenta("DATABASE STATE", "Connection Closed");
    } catch (error) {
      log.red("DATABASE STATE", error);
      throw error;
    }
  }
}
