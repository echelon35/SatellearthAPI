import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Disaster] routes
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

export type UpdateDisasterContract = Optional<CreateDisasterContract, 'idSource'|'lienSource'>

export type FilterDisasterContract = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export type FilterDisasterIdContract = {
    id: number;
}