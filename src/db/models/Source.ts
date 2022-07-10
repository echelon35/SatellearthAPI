import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'

interface SourceAttributes {
  id: number;
  name: string;
  adresse: string;
  icone: Text;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface SourceInput extends Optional<SourceAttributes, 'id' > {}
export interface SourceOutput extends Required<SourceAttributes> {}

class Source extends Model<SourceAttributes,SourceInput> implements SourceAttributes {
    public id!: number;
    public adresse!: string;
    public name!: string;
    public icone!: Text;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

}

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