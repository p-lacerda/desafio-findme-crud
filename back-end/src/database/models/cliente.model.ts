import { DataTypes, Model } from 'sequelize';
import db from '.';

class Cliente extends Model {
  public id!: number;
  public name!: string;
}

Cliente.init(
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
  },
  {
    sequelize: db,
    tableName: 'clientes',
    // Removes createdAt and updatedAt timestamps to the model
    timestamps: false,
    // Converts all camelCased columns to snake_case
    underscored: true,
  },
);

export default Cliente;