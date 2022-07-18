import {Op} from 'sequelize'
import Alea, { AleaInput, AleaOuput } from '../models/Alea'
import { ListFilters } from './types';

/**
 * [Alea] Data Access from db with SequelizeORM
 */

/**
 * Create a new type of [Alea]
 * @param payload 
 * @returns 
 */
export const create = async (payload: AleaInput): Promise<AleaOuput> => {
    const alea = await Alea.create(payload)
    return alea;
}

/**
 * Get [Alea] object by its name
 * @param filters 
 * @returns 
 */
 export const getByName = async (name: string): Promise<AleaOuput | null> => {
    return Alea.findOne({
        where: {
            ...({name: {[Op.iLike]: name}})
        }
    })
}

/**
 * Get all [Alea] objects
 * @param filters 
 * @returns 
 */
export const getAll = async (filters?: ListFilters): Promise<AleaOuput[]> => {
    return Alea.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}