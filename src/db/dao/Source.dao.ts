import {Op} from 'sequelize'
import Source, { SourceInput, SourceOutput } from '../models/Source'
import { ListFilters } from './types';

/**
 * Create a new [Source]
 * @param payload 
 * @returns 
 */
export const create = async (payload: SourceInput): Promise<SourceOutput> => {
    const source = await Source.create(payload)
    return source;
}

/**
 * Get [Source] by its id
 * @param id 
 * @returns 
 */
 export const getById = async (id: number): Promise<SourceOutput | null> => {
    return Source.findByPk(id)
}

/**
 * Get all [Source] objects
 * @param filters 
 * @returns 
 */
export const getAll = async (filters?: ListFilters): Promise<SourceOutput[]> => {
    return Source.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}