import {Op} from 'sequelize'
import Disaster, { DisasterInput, DisasterOuput } from '../models/Disaster'
import { ListFilters } from './types';

/**
 * Create a new [Disaster]
 * @param payload 
 * @returns 
 */
export const create = async (payload: DisasterInput): Promise<DisasterOuput> => {
    const disaster = await Disaster.create(payload)
    return disaster;
}

/**
 * Get all [Disaster] objects
 * @param filters 
 * @returns 
 */
export const getAll = async (filters?: ListFilters): Promise<DisasterOuput[]> => {
    return Disaster.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}