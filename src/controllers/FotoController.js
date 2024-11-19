import multer from 'multer';
import multerConfig from '../config/multer';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { tutor_id } = req.body;
        const foto = await Foto.create({ originalname, filename, tutor_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Tutor não existe'],
        });
      }
    });
  }
}

export default new FotoController();
