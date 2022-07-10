import { AleaInput, AleaOuput } from "../../db/models/Alea"
import * as AleaDao from '../../db/dao/Alea.dao'
import { FindByName, GetAllAleaFilters } from "../../db/dao/types"

export const create = (payload: AleaInput): Promise<AleaOuput> => {
    return AleaDao.create(payload)
}
// export const update = (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
//     return ingredientDal.update(id, payload)
// }
export const getByName = (name: string): Promise<AleaOuput | null> => {
    return AleaDao.getByName(name)
}
// export const deleteById = (id: number): Promise<boolean> => {
//     return ingredientDal.deleteById(id)
// }
export const getAll = (filters: GetAllAleaFilters): Promise<AleaOuput[]> => {
    return AleaDao.getAll(filters)
}