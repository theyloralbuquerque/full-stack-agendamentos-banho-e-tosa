import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Theylor',
      sobrenome: 'Albuquerque',
      email: 'theylor@gmail.com',
      idade: 25,
      peso: 82,
      altura: 1.77,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
