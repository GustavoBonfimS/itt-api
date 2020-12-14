import { Request, Response } from "express";
import { recognize } from 'tesseract.js';
import path from 'path';

export default {
  async index(req: Request, res: Response) {
    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    });
    await recognize(
      path.join(__dirname, '..', '..', 'uploads', images[0].path),
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      return res.status(200).json(text);
    })
  }
}