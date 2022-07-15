import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Alea] routes
 */

/**
 * What to ask to CREATE [Alea]
 */
export type CreateAleaContract = {
    name: string;
    legend: string;
    disponible: boolean;
}

/**
 * What to ask to UPDATE [Alea]
 */
export type UpdateAleaContract = Optional<CreateAleaContract, 'name'>

/**
 * What to ask to FILTER [Alea]
 */
export type FilterAleaContract = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

/**
 * What to ask to FILTER [Alea] by its name
 */
export type FilterAleaNameContract = {
    name: string
}