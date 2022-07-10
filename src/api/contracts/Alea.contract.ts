import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Alea] routes
 */

export type CreateAleaContract = {
    name: string;
    legend: string;
    disponible: boolean;
}

export type UpdateAleaContract = Optional<CreateAleaContract, 'name'>

export type FilterAleaContract = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export type FilterAleaNameContract = {
    name: string
}