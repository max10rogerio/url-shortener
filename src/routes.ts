import express from "express";
import { CreateUrlController } from "./controllers";

export const routes = express.Router();

const createUrlController = new CreateUrlController();

routes.get("/", (req, res) => createUrlController.create);
