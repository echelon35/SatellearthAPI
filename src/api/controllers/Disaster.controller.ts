import * as service from '../services/Disaster.service'
import Disaster, { DisasterOutput } from '../../db/models/Disaster'
import { CreateDisasterContract, FilterDisasterContract } from '../contracts/Disaster.contract'

import { DisasterDto } from "../dto/Disaster.dto"

/**
 * Convert request and response into [Disaster] object
 * @param disaster 
 * @returns 
 */
export const toDisaster = (disaster: DisasterOutput): DisasterDto => {
    return {
        id: disaster.id,
        premierReleve: disaster.premierReleve,
        dernierReleve: disaster.dernierReleve,
        point: disaster.point,
        idSource: disaster.idSource,
        lienSource: disaster.lienSource,
        nbRessenti: disaster.nbRessenti,
        visible: disaster.visible,
        createdAt: disaster.createdAt,
        updatedAt: disaster.updatedAt,
        deletedAt: disaster.deletedAt,
    }
}

/**
 * Create new [Disaster] requested by user
 * @param payload 
 * @returns 
 */
export const create = async(payload: CreateDisasterContract): Promise<DisasterDto> => {
    return toDisaster(await service.create(payload))
}

/**
 * Get [Disaster] requested by user
 * @param id 
 * @returns 
 */
export const getById = async (id: number): Promise<DisasterDto | null> => {
    const source = await service.getById(id);
    if(source){
        return toDisaster(source);
    }
    else{
        return null;
    }
}

/**
 * Get all [Disaster] requested by user
 * @param filters 
 * @returns 
 */
export const getAll = async(filters: FilterDisasterContract): Promise<DisasterDto[]> => {
    return (await service.getAll(filters)).map(toDisaster)
}