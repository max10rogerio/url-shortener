import express from "express";
import {
  CreateUrlController,
  ListAllController,
  RedirectUrlController,
} from "./controllers";

export const routes = express.Router();

const createUrlController = new CreateUrlController();
const redirectUrlController = new RedirectUrlController();
const listAllController = new ListAllController();

routes.get("/", (req, res) => listAllController.list(req, res));
routes.post("/", (req, res) => createUrlController.create(req, res));
routes.get("/:url_shortner", (req, res) =>
  redirectUrlController.redirect(req, res)
);
