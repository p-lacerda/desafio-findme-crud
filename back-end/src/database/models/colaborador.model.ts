import { DataTypes, Model } from 'sequelize';
import db from '.';

class Colaborador extends Model {
  public id!: number;
  public name!: string;
}

Colaborador.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    senha: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'colaboradores',
    // Removes createdAt and updatedAt timestamps to the model
    timestamps: false,
    // Converts all camelCased columns to snake_case
    underscored: true,
  },
);

export default Colaborador;