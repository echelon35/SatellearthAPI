import * as service from '../services/Source.service'
// import * as mapper from './mapper'
import { CreateSourceContract, FilterSourceContract, FilterSourceIdContract } from '../contracts/Source.contract'
import { SourceDto } from '../dto/Source.dto'
import Source, { SourceOutput } from '../../db/models/Source'

/**
 * Convert request and response into [Source] object
 * @param source 
 * @returns 
 */
export const toSource = (source: SourceOutput): SourceDto => {
    return {
        id: source.id,
        adresse: source.adresse,
        name: source.name,
        icone: source.icone,
        createdAt: source.createdAt,
        updatedAt: source.updatedAt,
        deletedAt: source.deletedAt,
    }
}

export const create = async(payload: CreateSourceContract): Promise<SourceDto> => {
    return toSource(await service.create(payload))
}
// export const update = async (id: number, payload: UpdateIngredientDTO): Promise<Ingredient> => {
//     return mapper.toIngredient(await service.update(id, payload))
// }
export const getById = async (id: number): Promise<SourceDto | null> => {
    const source = await service.getById(id);
    if(source){
        return toSource(source);
    }
    else{
        return null;
    }
}
// export const deleteById = async(id: number): Promise<Boolean> => {
//     const isDeleted = await service.deleteById(id)
//     return isDeleted
// }
export const getAll = async(filters: FilterSourceContract): Promise<SourceDto[]> => {
    return (await service.getAll(filters)).map(toSource)
}