import { Request, Response } from "express";
import { URLModel } from "../database/models";

export class RedirectUrlController {
  public async redirect(req: Request<RequestParams, any, any>, res: Response) {
    try {
      const shortUrl = req.params.url_shortner;

      const doc = await URLModel.findOne({
        short_name: shortUrl,
      });

      if (!doc) throw new Error("Link not found.");

      doc.used_times += 1;

      await doc.save();

      return res.status(301).redirect(doc.original_url);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

type RequestParams = {
  url_shortner: string;
};
