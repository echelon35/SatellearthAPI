import {Op} from 'sequelize'
import Disaster, { DisasterInput, DisasterOutput } from '../models/Disaster'
import { ListFilters } from './types';

/**
 * [Disaster] Data Access from db with SequelizeORM
 */

/**
 * Create a new [Disaster]
 * @param payload 
 * @returns 
 */
export const create = async (payload: DisasterInput): Promise<DisasterOutput> => {
    const disaster = await Disaster.create(payload)
    return disaster;
}

/**
 * Get [Disaster] by its id
 * @param id 
 * @returns 
 */
export const getById = async (id: number): Promise<DisasterOutput | null> => {
    return Disaster.findByPk(id)
}

/**
 * Get all [Disaster] objects
 * @param filters 
 * @returns 
 */
export const getAll = async (filters?: ListFilters): Promise<DisasterOutput[]> => {
    return Disaster.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}