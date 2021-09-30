import express from "express";
import { DatabaseConnection } from "./database/connection";
import { env } from "./env";
import { routes } from "./routes";

async function bootstrap() {
  try {
    const connection = new DatabaseConnection();

    await connection.connect();

    const app = express();

    app.use(express.json());
    app.use("/api", routes);
    app.listen(env.port, () => console.log("running on port:", env.port));
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
