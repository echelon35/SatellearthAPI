import { PaysOutput } from "../../db/models/Pays"
import { CreatePaysContract, FilterPaysContract, UpdatePaysContract } from "../contracts/Pays.contract"
import { PaysDto } from "../dto/Pays.dto"
import * as service from '../services/Pays.service'

/**
 * Convert db [Pays] model to [Pays] api model
 * @param Pays 
 * @returns 
 */
export const toPays = (Pays: PaysOutput): PaysDto => {
    return {
        id: Pays.id,
        namefr: Pays.namefr,
        nameus: Pays.nameus,
        trigramme: Pays.trigramme,
        iso3166: Pays.iso3166,
        population: Pays.population,
        superficie: Pays.superficie,
        geom: Pays.geom,
        wikilink: Pays.wikilink,
        createdAt: Pays.createdAt,
        updatedAt: Pays.updatedAt,
        deletedAt: Pays.deletedAt,
    }
}

/**
 * Create new [Pays] defined by user
 * @param payload 
 * @returns 
 */
export const create = async(payload: CreatePaysContract): Promise<PaysDto> => {
    return toPays(await service.create(payload))
}

/**
 * Update [Pays] requested by user
 * @param id 
 * @returns 
 */
export const updateById = async (id: number, payload: UpdatePaysContract): Promise<PaysDto | null> => {
    const foundPays = await service.updateById(id,payload);
    if(foundPays){
        return toPays(foundPays);
    }
    else{
        return null;
    }
}

/**
 * Get [Pays] requested by user
 * @param id 
 * @returns 
 */
export const getById = async (id: number): Promise<PaysDto | null> => {
    const foundPays = await service.getById(id);
    if(foundPays){
        return toPays(foundPays);
    }
    else{
        return null;
    }
}

/**
 * Get all [Pays] requested by user
 * @param filters 
 * @returns 
 */
export const getAll = async(filters: FilterPaysContract): Promise<PaysDto[]> => {
    return (await service.getAll(filters)).map(toPays)
}

/**
 * Count all [Pays] requested by user
 * @param filters 
 * @returns 
 */
export const countAll = async(filters: FilterPaysContract): Promise<number> => {
    return (await service.countAll(filters))
}

/**
 * Delete [Pays] requested by user
 * @param id 
 * @returns 
 */
export const deleteById = async (id: number): Promise<boolean> => {
    return (await service.deleteById(id));
}