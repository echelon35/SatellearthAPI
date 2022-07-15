import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'
import Continent from './Continent';

/**
 * [Ville] model on db (by SequelizeORM)
 */

interface PaysAttributes {
  id: number;
  namefr: string;
  nameus: string;
  trigramme: string;
  iso3166: string;
  population: number;
  superficie: number;
  geom: any;
  wikilink: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
//What came from User
export interface PaysInput extends Optional<PaysAttributes, 'id' > {}
//What give to User
export interface PaysOutput extends Required<PaysAttributes> {}

//TypeScript class
class Pays extends Model<PaysAttributes,PaysInput> implements PaysAttributes {
    public id!: number;
    public namefr!: string;
    public nameus!: string;
    public trigramme!: string;
    public iso3166!: string;
    public population!: number;
    public superficie!: number;
    public geom!: any;
    public wikilink!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

//Sequelize class
Pays.init({
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
    },
    trigramme: {
        type: DataTypes.STRING(3)
    },
    iso3166: {
        type: DataTypes.STRING(2)
    },
    population: {
        type: DataTypes.INTEGER
    },
    superficie: {
        type: DataTypes.DOUBLE
    },
    geom: {
        type: DataTypes.GEOMETRY
    },
    wikilink: {
        type: DataTypes.STRING
    }
},
{
    timestamps: true,
    tableName: "Pays",
    sequelize: sequelizeConnection,
    paranoid: false
})

/**
 * Associations
 */

//ONE [Pays] has ONE [Continent]
Pays.belongsTo(Continent, { targetKey: 'id' });
//ONE [Continent] has MANY [Pays]
Continent.hasMany(Pays, { sourceKey: 'id' });

export default Pays;