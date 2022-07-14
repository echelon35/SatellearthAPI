import { FindByName, ListFilters } from "../../db/dao/types"
import * as DisasterDao from '../../db/dao/Disaster.dao'
import { DisasterInput, DisasterOutput } from "../../db/models/Disaster"

/**
 * Create new [Disaster] entity
 * @param payload 
 * @returns 
 */
export const create = (payload: DisasterInput): Promise<DisasterOutput> => {
    return DisasterDao.create(payload)
}

/**
 * Get [Disaster] entity by its id
 * @param id 
 * @returns 
 */
export const getById = (id: number): Promise<DisasterOutput | null> => {
    return DisasterDao.getById(id)
}

/**
 * Get all [Disaster] entity
 * @param filters 
 * @returns 
 */
export const getAll = (filters: ListFilters): Promise<DisasterOutput[]> => {
    return DisasterDao.getAll(filters)
}