import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'

interface AleaAttributes {
  id: number;
  name: string;
  legend: string;
  disponible: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface AleaInput extends Optional<AleaAttributes, 'id' | 'name' | 'legend'> {}
export interface AleaOuput extends Required<AleaAttributes> {}

class Alea extends Model<AleaAttributes,AleaInput> implements AleaAttributes {
    public id!: number;
    public name!: string;
    public legend!: string;
    public disponible!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

}

Alea.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    legend: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
{
    timestamps: true,
    tableName: "Aleas",
    sequelize: sequelizeConnection,
    paranoid: true //Avoid to definitely delete records (property deletedAt)
})

export default Alea;