import { ContinentOutput } from "../../db/models/Continent"
import { CreateContinentContract, FilterContinentContract, UpdateContinentContract } from "../contracts/Continent.contract"
import { ContinentDto } from "../dto/Continent.dto"
import * as service from '../services/Continent.service'

/**
 * Convert db [Continent] model to [Continent] api model
 * @param Continent 
 * @returns 
 */
export const toContinent = (Continent: ContinentOutput): ContinentDto => {
    return {
        id: Continent.id,
        namefr: Continent.namefr,
        nameus: Continent.nameus,
        createdAt: Continent.createdAt,
        updatedAt: Continent.updatedAt,
        deletedAt: Continent.deletedAt,
    }
}

/**
 * Create new [Continent] defined by user
 * @param payload 
 * @returns 
 */
export const create = async(payload: CreateContinentContract): Promise<ContinentDto> => {
    return toContinent(await service.create(payload))
}

/**
 * Update [Continent] requested by user
 * @param id 
 * @returns 
 */
export const updateById = async (id: number, payload: UpdateContinentContract): Promise<ContinentDto | null> => {
    const foundContinent = await service.updateById(id,payload);
    if(foundContinent){
        return toContinent(foundContinent);
    }
    else{
        return null;
    }
}

/**
 * Get [Continent] requested by user
 * @param id 
 * @returns 
 */
export const getById = async (id: number): Promise<ContinentDto | null> => {
    const foundContinent = await service.getById(id);
    if(foundContinent){
        return toContinent(foundContinent);
    }
    else{
        return null;
    }
}

/**
 * Get all [Continent] requested by user
 * @param filters 
 * @returns 
 */
export const getAll = async(filters: FilterContinentContract): Promise<ContinentDto[]> => {
    return (await service.getAll(filters)).map(toContinent)
}

/**
 * Count all [Continent] requested by user
 * @param filters 
 * @returns 
 */
export const countAll = async(filters: FilterContinentContract): Promise<number> => {
    return (await service.countAll(filters))
}

/**
 * Delete [Continent] requested by user
 * @param id 
 * @returns 
 */
export const deleteById = async (id: number): Promise<boolean> => {
    return (await service.deleteById(id));
}