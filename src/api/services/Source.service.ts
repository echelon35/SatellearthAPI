import { SourceInput, SourceOutput } from "../../db/models/Source"
import * as SourceDao from '../../db/dao/Source.dao'
import { ListFilters } from "../../db/dao/types"

export const create = (payload: SourceInput): Promise<SourceOutput> => {
    return SourceDao.create(payload)
}

export const getById = (id: number): Promise<SourceOutput | null> => {
    return SourceDao.getById(id)
}

export const getAll = (filters: ListFilters): Promise<SourceOutput[]> => {
    return SourceDao.getAll(filters)
}