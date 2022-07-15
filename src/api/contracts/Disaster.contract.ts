import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Disaster] routes
 */

/**
 * What to ask when CREATE [Disaster]
 */
export type CreateDisasterContract = {
    premierReleve: Date,
    dernierReleve: Date,
    point: any,
    idSource: string,
    lienSource: string,
    nbRessenti: number,
    visible: boolean,
}

/**
 * What to ask when UPDATE [Disaster]
 */
export type UpdateDisasterContract = Optional<CreateDisasterContract, 'idSource'|'lienSource'>

/**
 * What to ask when FILTER [Disaster]
 */
export type FilterDisasterContract = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

/**
 * What to ask when FILTER [Disaster] by its id
 */
export type FilterDisasterIdContract = {
    id: number;
}