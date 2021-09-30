import { Request, Response } from "express";

export class CreateUrlController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.send("pong");
  }
}
