/**
 * Representation of [Disaster] object
 */
 export interface DisasterDto {
    id: number
    premierReleve: Date,
    dernierReleve: Date,
    point: any,
    idSource: string,
    lienSource: string,
    nbRessenti: number,
    visible: boolean,
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }