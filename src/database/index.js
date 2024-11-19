import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Foto from '../models/Foto';
import Tutor from '../models/Tutor';

const models = [Tutor, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
