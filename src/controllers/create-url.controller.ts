import { Request, Response } from "express";
import { URLModel, URLModelFields, URLModelType } from "../database/models";
import { env } from "../env";
import { makeResponse, makeUrl } from "./__utils";

export class CreateUrlController {
  public async create(
    request: Request<any, any, RequestBody>,
    response: Response
  ): Promise<Response> {
    const { url: original_url, name: short_name } = request.body;

    try {
      const doc = new URLModel({
        original_url,
        short_name,
      });
      const shortener = await doc.save();

      const data = makeResponse(this.applyURL(shortener.toObject()));

      return response.status(201).json(data);
    } catch (error: any) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }

  private applyURL(payload: URLModelFields) {
    return {
      ...payload,
      redirect_url: makeUrl(payload.short_name),
    };
  }
}

type RequestBody = {
  url: string;
  name: string;
};
