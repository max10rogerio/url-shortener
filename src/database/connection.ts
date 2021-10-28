import mongoose from "mongoose";
import { env } from "../env";

export class DatabaseConnection {
  public async connect() {
    await mongoose.connect(env.mongo_uri);

    console.log("database connected");
  }
}
