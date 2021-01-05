import { Request, Response } from "express";
import { recognize } from 'tesseract.js';
import Image from '../models/Image';
import ImageView from '../views/image_view';
import path from 'path';

export default {
  async index(req: Request, res: Response): Promise<void> {
    const { lang } = req.body;
    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return {
        originalName: image.originalname,
        path: image.filename
      }
    });
    await recognize(
      path.join(__dirname, '..', '..', 'uploads', images[0].path),
      lang
    ).then(({ data: { text } }) => {
      const image: Image = {
        originalName: images[0].originalName,
        text: text,
        path: images[0].path
      }
      return res.status(200).json(ImageView.render(image));
    })
  }
}