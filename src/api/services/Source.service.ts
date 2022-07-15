import { SourceInput, SourceOutput } from "../../db/models/Source"
import * as SourceDao from '../../db/dao/Source.dao'
import { ListFilters } from "../../db/dao/types"

/**
 * [Source] service between API and DB
 */

/**
 * Ask db to create new [Source]
 * @param payload 
 * @returns 
 */
export const create = (payload: SourceInput): Promise<SourceOutput> => {
    return SourceDao.create(payload)
}

/**
 * Ask db to get [Source] object by its id
 * @param id 
 * @returns 
 */
export const getById = (id: number): Promise<SourceOutput | null> => {
    return SourceDao.getById(id)
}

/**
 * Ask db to get all [Source] objects
 * @param filters 
 * @returns 
 */
export const getAll = (filters: ListFilters): Promise<SourceOutput[]> => {
    return SourceDao.getAll(filters)
}