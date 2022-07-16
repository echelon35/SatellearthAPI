//import { Optional } from "sequelize/types"

/**
 * Contracts with API when using [Continent] routes
 */

/**
 * What to send to API when CREATE [Continent] = [Continent] attributes required for CREATION
 */
export type CreateContinentContract = {
    namefr: string;
    nameus: string;
}

/**
 * What to send to API when UPDATE [Continent] = some [Continent] attributes to UPDATE
 */
// FOR USE CREATE CONTRACT PARTIALLY :
//export type UpdateContinentContract = Optional<CreateContinentContract, ''>
// FOR USE SAME CONTRACT THAN CREATION CONTRACT :
export type UpdateContinentContract = CreateContinentContract

/**
 * What to send to API when GET [Continent] by its id => USED BY GET,UPDATE,DELETE
 */
export type ContinentIdContract = {
    id: number;
}

/**
 * What filters to send to API when GET OR COUNT ALL [Continent] by filters
 */
export type FilterContinentContract = {
}