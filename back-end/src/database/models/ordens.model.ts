import { DataTypes, Model } from 'sequelize';
import db from '.';

class Ordens extends Model {
  public id!: number;
  public dataAbertura!: Date;
  public problemaRelatado!: string;
  public colaboradorId!: number; 
  public clienteId!: number; 
}

Ordens.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    dataAbertura: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    problemaRelatado: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    // Fazer a associação com os outros models
    colaboradorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    clienteId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize: db,
    tableName: 'os',
    // Removes createdAt and updatedAt timestamps to the model
    timestamps: false,
    // Converts all camelCased columns to snake_case
    underscored: true,
  },
);

export default Ordens;