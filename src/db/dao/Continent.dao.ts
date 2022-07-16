import {Op} from 'sequelize'
import Continent, { ContinentInput, ContinentOutput } from '../models/Continent'
import { ListFilters } from './types';

/**
 * [Continent] Data Access from db with SequelizeORM
 */

/**
 * Create a new [Continent] object
 * @param payload 
 * @returns [Continent] n°Id
 */
export const create = async (payload: ContinentInput): Promise<ContinentOutput> => {
    const createdContinent = await Continent.create(payload)
    return createdContinent;
}

/**
 * Update [Continent] object by its id
 * @param payload 
 * @returns [Continent] n°Id
 */
 export const update = async (id: number, payload: Partial<ContinentInput>): Promise<ContinentOutput | null> => {
    const searchedContinent = await Continent.findByPk(id);
    if(!searchedContinent){
        throw new Error(`[Continent] n°id non trouvé`)
    }
    const updatedContinent = await(searchedContinent as Continent).update(payload);

    return updatedContinent;
}

/**
 * Get [Continent] by its id
 * @param id 
 * @returns [Continent] n°Id
 */
export const getById = async (id: number): Promise<ContinentOutput | null> => {
    return Continent.findByPk(id)
}

/**
 * Get all [Continent] objects by filters
 * @param filters 
 * @returns [Continent] records
 */
export const getAll = async (filters?: ListFilters): Promise<ContinentOutput[]> => {
    return Continent.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

/**
 * Count all [Continent] objects by filters
 * @param filters 
 * @returns [Continent] numbers
 */
 export const countAll = async (filters?: ListFilters): Promise<number> => {
    return Continent.count({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

/**
 * Delete [Continent] by its id
 * @param id 
 * @returns [Continent] is deleted
 */
 export const deleteById = async (id: number): Promise<boolean> => {
    const deletedContinent = await Continent.destroy({
        where: {id}
    })

    return !!deletedContinent;
}