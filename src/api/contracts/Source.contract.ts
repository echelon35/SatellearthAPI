import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Source] routes
 */

export type CreateSourceContract = {
    adresse: string;
    name: string;
    icone: Text;
}

export type UpdateSourceContract = Optional<CreateSourceContract, 'adresse'>

export type FilterSourceContract = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export type FilterSourceIdContract = {
    id: number;
}