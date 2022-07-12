import { FindByName, ListFilters } from "../../db/dao/types"
import * as DisasterDao from '../../db/dao/Disaster.dao'
import { DisasterInput, DisasterOutput } from "../../db/models/Disaster"

export const create = (payload: DisasterInput): Promise<DisasterOutput> => {
    return DisasterDao.create(payload)
}

export const getAll = (filters: ListFilters): Promise<DisasterOutput[]> => {
    return DisasterDao.getAll(filters)
}