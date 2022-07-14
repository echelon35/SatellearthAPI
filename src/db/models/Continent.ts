import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'

interface ContinentAttributes {
  id: number;
  namefr: string;
  nameus: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface ContinentInput extends Optional<ContinentAttributes, 'id' > {}
export interface ContinentOutput extends Required<ContinentAttributes> {}

class Continent extends Model<ContinentAttributes,ContinentInput> implements ContinentAttributes {
    public id!: number;
    public namefr!: string;
    public nameus!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Continent.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    namefr: {
        type: DataTypes.STRING
    },
    nameus: {
        type: DataTypes.STRING
    }
},
{
    timestamps: true,
    tableName: "Continents",
    sequelize: sequelizeConnection,
    paranoid: false
})

export default Continent;