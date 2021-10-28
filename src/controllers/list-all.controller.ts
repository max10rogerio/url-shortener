import { Request, Response } from "express";
import { URLModel } from "../database/models";
import { makeResponse, makeUrl } from "./__utils";

export class ListAllController {
  public async list(_: Request, res: Response) {
    const docs = await URLModel.find();

    const adaptedDocs = docs.map((doc) => ({
      original_url: doc.original_url,
      short_url: makeUrl(doc.short_name),
      used_times: doc.used_times,
    }));

    return res.json(makeResponse(adaptedDocs));
  }
}
