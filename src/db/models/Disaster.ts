import { DataTypes, GeometryDataType, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db.config'
import Alea from './Alea';
import Source from './Source';

interface DisasterAttributes {
  id: number;
  premierReleve: Date,
  dernierReleve: Date,
  point: any,
  idSource: string,
  lienSource: string,
  nbRessenti: boolean,
  visible: boolean,
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface DisasterInput extends Optional<DisasterAttributes, 'id'> {}
export interface DisasterOuput extends Required<DisasterAttributes> {}

class Disaster extends Model<DisasterAttributes,DisasterInput> implements DisasterAttributes {
    public id!: number;
    public premierReleve!: Date;
    public dernierReleve!: Date;
    public idSource!: string;
    public point: any;
    public lienSource!: string;
    public nbRessenti!: boolean;
    public visible!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

}

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
    // sourceId:{
    //     type: DataTypes.STRING(50)
    // },
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
    },
    // villeId:{
    //     type: DataTypes.INTEGER
    // },
    // distance_ville:{
    //     type: DataTypes.DOUBLE
    // }
},
{
    timestamps: true,
    tableName: "Disasters",
    sequelize: sequelizeConnection,
    paranoid: true //Avoid to definitely delete records (property deletedAt)
})

Disaster.belongsTo(Alea, { targetKey: 'id' });
Alea.hasOne(Disaster, { sourceKey: 'id' });

Disaster.belongsTo(Source, { targetKey: 'id' });
Source.hasOne(Disaster, { sourceKey: 'id' });

export default Disaster;