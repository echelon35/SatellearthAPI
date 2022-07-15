import { ListFilters } from "../../db/dao/types"
import * as ContinentDao from '../../db/dao/Continent.dao'
import { ContinentOutput } from "../../db/models/Continent"

/**
 * [Continent] service between API and DB
 */

/**
 * Ask db to get [Continent] by its id
 * @param id 
 * @returns 
 */
 export const getById = (id: number): Promise<ContinentOutput | null> => {
    return ContinentDao.getById(id)
}

/**
 * Ask db to get all [Continent] objects
 * @param filters 
 * @returns 
 */
export const getAll = (filters: ListFilters): Promise<ContinentOutput[]> => {
    return ContinentDao.getAll(filters)
}