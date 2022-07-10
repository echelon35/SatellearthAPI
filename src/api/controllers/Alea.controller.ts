import * as service from '../services/Alea.service'
// import * as mapper from './mapper'
import { CreateAleaContract, FilterAleaContract, FilterAleaNameContract } from '../contracts/Alea.contract'
import { AleaDto } from '../dto/Alea.dto'
import { AleaOuput } from '../../db/models/Alea'

/**
 * Convert request and response into [Alea] object
 * @param alea 
 * @returns 
 */
export const toAlea = (alea: AleaOuput): AleaDto => {
    return {
        id: alea.id,
        name: alea.name,
        legend: alea.legend,
        disponible: alea.disponible,
        createdAt: alea.createdAt,
        updatedAt: alea.updatedAt,
        deletedAt: alea.deletedAt,
    }
}

export const create = async(payload: CreateAleaContract): Promise<AleaDto> => {
    return toAlea(await service.create(payload))
}
// export const update = async (id: number, payload: UpdateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.update(id, payload))
// }
export const getByName = async (name: string): Promise<AleaDto | null> => {
    const alea = await service.getByName(name);
    if(alea){
        return toAlea(alea);
    }
    else{
        return null;
    }
}
// export const deleteById = async(id: number): Promise<Boolean> => {
//     const isDeleted = await service.deleteById(id)
//     return isDeleted
// }
export const getAll = async(filters: FilterAleaContract): Promise<AleaDto[]> => {
    return (await service.getAll(filters)).map(toAlea)
}