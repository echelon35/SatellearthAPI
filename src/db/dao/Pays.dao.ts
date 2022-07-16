import {Op} from 'sequelize'
import Pays, { PaysInput, PaysOutput } from '../models/Pays'
import { ListFilters } from './types';

/**
 * [Pays] Data Access from db with SequelizeORM
 */

/**
 * Create a new [Pays] object
 * @param payload 
 * @returns [Pays] n°Id
 */
export const create = async (payload: PaysInput): Promise<PaysOutput> => {
    const createdPays = await Pays.create(payload)
    return createdPays;
}

/**
 * Update [Pays] object by its id
 * @param payload 
 * @returns [Pays] n°Id
 */
 export const update = async (id: number, payload: Partial<PaysInput>): Promise<PaysOutput | null> => {
    const searchedPays = await Pays.findByPk(id);
    if(!searchedPays){
        throw new Error(`[Pays] n°id non trouvée`)
    }
    const updatedPays = await(searchedPays as Pays).update(payload);

    return updatedPays;
}

/**
 * Get [Pays] by its id
 * @param id 
 * @returns [Pays] n°Id
 */
export const getById = async (id: number): Promise<PaysOutput | null> => {
    return Pays.findByPk(id)
}

/**
 * Get all [Pays] objects by filters
 * @param filters 
 * @returns [Pays] records
 */
export const getAll = async (filters?: ListFilters): Promise<PaysOutput[]> => {
    return Pays.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

/**
 * Count all [Pays] objects by filters
 * @param filters 
 * @returns [Pays] numbers
 */
 export const countAll = async (filters?: ListFilters): Promise<number> => {
    return Pays.count({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

/**
 * Delete [Pays] by its id
 * @param id 
 * @returns [Pays] is deleted
 */
 export const deleteById = async (id: number): Promise<boolean> => {
    const deletedPays = await Pays.destroy({
        where: {id}
    })

    return !!deletedPays;
}