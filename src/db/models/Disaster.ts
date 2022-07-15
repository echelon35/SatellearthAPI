import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'
import Alea from './Alea';
import Source from './Source';
import Ville from './Ville';

/**
 * [Disaster] model on db (by SequelizeORM)
 */

interface DisasterAttributes {
  id: number;
  premierReleve: Date,
  dernierReleve: Date,
  point: any,
  idSource: string,
  lienSource: string,
  nbRessenti: number,
  visible: boolean,
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
//What came from user
export interface DisasterInput extends Optional<DisasterAttributes, 'id'> {}
//What give to user
export interface DisasterOutput extends Required<DisasterAttributes> {}

//Typescript class
class Disaster extends Model<DisasterAttributes,DisasterInput> implements DisasterAttributes {
    public id!: number;
    public premierReleve!: Date;
    public dernierReleve!: Date;
    public idSource!: string;
    public point!: any;
    public lienSource!: string;
    public nbRessenti!: number;
    public visible!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

}

//Sequelize class
Disaster.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    premierReleve: {
        type: DataTypes.DATE,
    },
    dernierReleve: {
        type: DataTypes.DATE,
    },
    point: {
        type: DataTypes.GEOMETRY
    },
    idSource: {
        type: DataTypes.STRING(20)
    },
    lienSource: {
        type: DataTypes.STRING
    },
    nbRessenti: {
        type: DataTypes.INTEGER
    },
    visible: {
        type: DataTypes.BOOLEAN
    }
},
{
    timestamps: true,
    tableName: "Disasters",
    sequelize: sequelizeConnection,
    paranoid: true //Avoid to definitely delete records (property deletedAt)
})

/**
 * Associations
 */

//ONE [Disaster] is of ONE [Alea] type
Disaster.belongsTo(Alea, { targetKey: 'id' });
//ONE [Alea] type has MANY [Disaster]
Alea.hasMany(Disaster, { sourceKey: 'id' });

//ONE [Disaster] has ONE [Source]
Disaster.belongsTo(Source, { targetKey: 'id' });
//ONE [Source] detect MANY [Disaster]
Source.hasMany(Disaster, { sourceKey: 'id' });

//ONE [Disaster] is near ONE [Ville] --> This association is needed to make a name for the disaster
Disaster.belongsTo(Ville, { targetKey: 'id' });
//ONE [Ville] is near MANY [Disaster]
Ville.hasMany(Disaster, { sourceKey: 'id' });

export default Disaster;