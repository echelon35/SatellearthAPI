//import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Pays] routes
 */

/**
 * What to send to API when CREATE [Pays] = [Pays] attributes required for CREATION
 */
export type CreatePaysContract = {
    namefr: string;
    nameus: string;
    trigramme: string;
    iso3166: string;
    population: number;
    superficie: number;
    geom: any;
    wikilink: string;
}

/**
 * What to send to API when UPDATE [Pays] = some [Pays] attributes to UPDATE
 */
// FOR USE CREATE CONTRACT PARTIALLY :
//export type UpdatePaysContract = Optional<CreatePaysContract, ''>
// FOR USE SAME CONTRACT THAN CREATION CONTRACT :
export type UpdatePaysContract = CreatePaysContract

/**
 * What to send to API when GET [Pays] by its id => USED BY GET,UPDATE,DELETE
 */
export type PaysIdContract = {
    id: number;
}

/**
 * What filters to send to API when GET OR COUNT ALL [Pays] by filters
 */
export type FilterPaysContract = {
}