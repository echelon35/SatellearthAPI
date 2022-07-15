import {Op} from 'sequelize'
import Continent, { ContinentOutput } from '../models/Continent';
import { ListFilters } from './types';

/**
 * [Continent] Data Access from db with SequelizeORM
 */

/**
 * Get [Continent] by its id
 * @param id 
 * @returns 
 */
 export const getById = async (id: number): Promise<ContinentOutput | null> => {
    return Continent.findByPk(id)
}

/**
 * Get all [Continent] objects
 * @param filters 
 * @returns 
 */
export const getAll = async (filters?: ListFilters): Promise<ContinentOutput[]> => {
    return Continent.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}