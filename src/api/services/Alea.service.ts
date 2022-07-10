import { AleaInput, AleaOuput } from "../../db/models/Alea"
import * as AleaDao from '../../db/dao/Alea.dao'
import { FindByName, ListFilters } from "../../db/dao/types"

export const create = (payload: AleaInput): Promise<AleaOuput> => {
    return AleaDao.create(payload)
}

export const getByName = (name: string): Promise<AleaOuput | null> => {
    return AleaDao.getByName(name)
}

export const getAll = (filters: ListFilters): Promise<AleaOuput[]> => {
    return AleaDao.getAll(filters)
}