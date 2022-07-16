import { ContinentInput, ContinentOutput } from "../../db/models/Continent"
import * as ContinentDao from '../../db/dao/Continent.dao'
import { ListFilters } from "../../db/dao/types"

/**
 * [Continent] service between API and DB
 */

/**
 * Ask db to create new [Continent] type
 * @param payload 
 * @returns 
 */
export const create = (payload: ContinentInput): Promise<ContinentOutput> => {
    return ContinentDao.create(payload)
}

/**
 * Ask db to update [Continent] object of id specified
 * @param id
 * @returns 
 */
export const updateById = (id: number, payload: ContinentInput): Promise<ContinentOutput | null> => {
    return ContinentDao.update(id,payload);
}

/**
 * Ask db to get [Continent] object of id specified
 * @param id
 * @returns 
 */
export const getById = (id: number): Promise<ContinentOutput | null> => {
    return ContinentDao.getById(id);
}

/**
 * Ask db to get all [Continent] objects
 * @param filters 
 * @returns 
 */
export const getAll = (filters: ListFilters): Promise<ContinentOutput[]> => {
    return ContinentDao.getAll(filters)
}

/**
 * Ask db to count all [Continent] objects matching filters
 * @param filters 
 * @returns 
 */
export const countAll = (filters: ListFilters): Promise<number> => {
    return ContinentDao.countAll(filters)
}

/**
 * Ask db to delete [Continent] object of id specified
 * @param id
 * @returns 
 */
 export const deleteById = (id: number): Promise<boolean> => {
    return ContinentDao.deleteById(id);
}