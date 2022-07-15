import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'

/**
 * [Source] model on db (by SequelizeORM)
 */

interface SourceAttributes {
  id: number;
  name: string;
  adresse: string;
  icone: Text;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
//What came from user
export interface SourceInput extends Optional<SourceAttributes, 'id' > {}
//What give to user
export interface SourceOutput extends Required<SourceAttributes> {}

//Typescript class
class Source extends Model<SourceAttributes,SourceInput> implements SourceAttributes {
    public id!: number;
    public adresse!: string;
    public name!: string;
    public icone!: Text;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

}

//Sequelize class
Source.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    adresse: {
        type: DataTypes.STRING
    },
    icone: {
        type: DataTypes.TEXT
    }
},
{
    timestamps: true,
    tableName: "Sources",
    sequelize: sequelizeConnection,
    paranoid: true //Avoid to definitely delete records (property deletedAt)
})

export default Source;