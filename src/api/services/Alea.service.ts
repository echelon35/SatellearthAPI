import { AleaInput, AleaOutput } from "../../db/models/Alea"
import * as AleaDao from '../../db/dao/Alea.dao'
import { ListFilters } from "../../db/dao/types"

/**
 * [Alea] service between API and DB
 */

/**
 * Ask db to create new [Alea] type
 * @param payload 
 * @returns 
 */
export const create = (payload: AleaInput): Promise<AleaOuput> => {
    return AleaDao.create(payload)
}

/**
 * Ask db to get [Alea] object by its id
 * @param name 
 * @returns 
 */
export const getByName = (name: string): Promise<AleaOuput | null> => {
    return AleaDao.getByName(name)
}

/**
 * Ask db to get all [Alea] objects
 * @param filters 
 * @returns 
 */
export const getAll = (filters: ListFilters): Promise<AleaOuput[]> => {
    return AleaDao.getAll(filters)
}