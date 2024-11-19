import Foto from '../models/Foto';
import Tutor from '../models/Tutor';

class TutorController {
  async index(req, res) {
    const tutores = await Tutor.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'telefone'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(tutores);
  }

  async create(req, res) {
    try {
      const tutor = await Tutor.create(req.body);

      return res.json(tutor);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.messsage),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const tutor = await Tutor.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!tutor) {
        return res.status(400).json({
          errors: ['Tutor não existe'],
        });
      }

      return res.json(tutor);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messsage),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const tutor = await Tutor.findByPk(id);

      if (!tutor) {
        return res.status(400).json({
          errors: ['Tutor não existe'],
        });
      }

      const tutorAtualizado = await tutor.update(req.body);

      return res.json(tutorAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messsage),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const tutor = await Tutor.findByPk(id);

      if (!tutor) {
        return res.status(400).json({
          errors: ['Tutor não existe'],
        });
      }

      await tutor.destroy();

      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messsage),
      });
    }
  }
}

export default new TutorController();
