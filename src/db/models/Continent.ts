import { DataTypes,Model, Optional } from "sequelize/types";
import sequelizeConnection from "../db.config";
/**
 * [Continent] model on db (by SequelizeORM)
 */

interface ContinentAttributes {
  id: number;
  namefr: string;
  nameus: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
//What came from User
export interface ContinentInput extends Optional<ContinentAttributes, 'id'> {}
//What give to User
export interface ContinentOutput extends Required<ContinentAttributes> {}

//Typescript class
class Continent extends Model<ContinentAttributes,ContinentInput> implements ContinentAttributes {
    public id!: number;
    public namefr!: string;
    public nameus!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

}

//Sequelize class
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
    paranoid: true //Avoid to definitely delete records (property deletedAt)
})

/**
 * Here is the associations with [Continent]
 */

export default Continent;