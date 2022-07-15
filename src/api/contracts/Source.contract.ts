import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Source] routes
 */

/**
 * What to ask when CREATE [Source]
 */
export type CreateSourceContract = {
    adresse: string;
    name: string;
    icone: Text;
}

/**
 * What to ask when UPDATE [Source]
 */
export type UpdateSourceContract = Optional<CreateSourceContract, 'adresse'>

/**
 * What to ask when FILTER [Source]
 */
export type FilterSourceContract = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

/**
 * What to ask when FILTER [Source] by its id
 */
export type FilterSourceIdContract = {
    id: number;
}