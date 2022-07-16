import {  Router, Request,Response } from 'express'
import { CreatePaysContract, FilterPaysContract } from '../contracts/Pays.contract'
import * as PaysController from '../controllers/Pays.controller'

const PaysRouter = Router()

/**
 * Create new [Pays]
 */
 PaysRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreatePaysContract = req.body
    const result = await PaysController.create(payload).catch(error => { error : res.status(500).send("Une erreur est survenue à la création de la source : "+ error.message) })
    return res.status(200).send(result)
})

/**
 * Update [Pays] of id specified
 */
PaysRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await PaysController.updateById(id,req.body)
    return res.status(200).send(result)
})

/**
 * Delete [Pays] of id specified
 */
PaysRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await PaysController.deleteById(id)
    return res.status(200).send(result)
})

/**
 * Get [Pays] of id specified
 */
 PaysRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await PaysController.getById(id)
    return res.status(200).send(result)
})

/**
 * Get all [Pays] objects
 */
 PaysRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterPaysContract = req.query
    const results = await PaysController.getAll(filters)
    return res.status(200).send(results)
})

/**
 * Count all [Pays] objects
 */
 PaysRouter.get('/count', async (req: Request, res: Response) => {
    const filters:FilterPaysContract = req.query
    const results = await PaysController.countAll(filters)
    return res.status(200).send(results)
})

export default PaysRouter