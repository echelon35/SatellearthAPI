import { PaysInput, PaysOutput } from "../../db/models/Pays"
import * as PaysDao from '../../db/dao/Pays.dao'
import { ListFilters } from "../../db/dao/types"

/**
 * [Pays] service between API and DB
 */

/**
 * Ask db to create new [Pays] type
 * @param payload 
 * @returns 
 */
export const create = (payload: PaysInput): Promise<PaysOutput> => {
    return PaysDao.create(payload)
}

/**
 * Ask db to update [Pays] object of id specified
 * @param id
 * @returns 
 */
export const updateById = (id: number, payload: PaysInput): Promise<PaysOutput | null> => {
    return PaysDao.update(id,payload);
}

/**
 * Ask db to get [Pays] object of id specified
 * @param id
 * @returns 
 */
export const getById = (id: number): Promise<PaysOutput | null> => {
    return PaysDao.getById(id);
}

/**
 * Ask db to get all [Pays] objects
 * @param filters 
 * @returns 
 */
export const getAll = (filters: ListFilters): Promise<PaysOutput[]> => {
    return PaysDao.getAll(filters)
}

/**
 * Ask db to count all [Pays] objects matching filters
 * @param filters 
 * @returns 
 */
export const countAll = (filters: ListFilters): Promise<number> => {
    return PaysDao.countAll(filters)
}

/**
 * Ask db to delete [Pays] object of id specified
 * @param id
 * @returns 
 */
 export const deleteById = (id: number): Promise<boolean> => {
    return PaysDao.deleteById(id);
}