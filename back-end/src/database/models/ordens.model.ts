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
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'data_abertura'
    },
    problemaRelatado: {
      allowNull: false,
      type: DataTypes.TEXT,
      field: 'problema_relatado'
    },
    // Fazer a associação com os outros models
    colaboradorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'colaborador_id'
    },
    clienteId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'cliente_id'
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