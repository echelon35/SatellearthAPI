import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'

interface VilleAttributes {
  id: number;

  createdAt?: Date;
  updatedAt?: Date;
}
export interface VilleInput extends Optional<VilleAttributes, 'id' > {}
export interface VilleOuput extends Required<VilleAttributes> {}

class Ville extends Model<VilleAttributes,VilleInput> implements VilleAttributes {
    public id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Ville.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
},
{
    timestamps: true,
    tableName: "Villes",
    sequelize: sequelizeConnection,
    paranoid: false
})

export default Ville;