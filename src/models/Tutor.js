import Sequelize, { Model } from 'sequelize';

export default class Tutor extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [11, 11],
          msg: 'O telefone deve ter exatamente 11 caracteres.',
        },
      },
    }, {
      sequelize,
      tableName: 'tutores',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'tutor_id' });
  }
}
