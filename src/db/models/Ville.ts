import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'
import Pays from './Pays';

interface VilleAttributes {
  id: number;
  namefr: string;
  longitude: number;
  latitude: number;
  population: number;
  timezone: string;
  altitude: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface VilleInput extends Optional<VilleAttributes, 'id' > {}
export interface VilleOutput extends Required<VilleAttributes> {}

class Ville extends Model<VilleAttributes,VilleInput> implements VilleAttributes {
    public id!: number;
    public namefr!: string;
    public longitude!: number;
    public latitude!: number;
    public population!: number;
    public timezone!: string;
    public altitude!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Ville.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    namefr: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.DOUBLE
    },
    latitude: {
        type: DataTypes.DOUBLE
    },
    population: {
        type: DataTypes.INTEGER
    },
    timezone: {
        type: DataTypes.STRING
    },
    altitude: {
        type: DataTypes.STRING
    }
},
{
    timestamps: true,
    tableName: "Villes",
    sequelize: sequelizeConnection,
    paranoid: false
})

Ville.belongsTo(Pays, { foreignKey: 'PaysId' });
Pays.hasMany(Ville, { foreignKey: 'PaysId' });

export default Ville;