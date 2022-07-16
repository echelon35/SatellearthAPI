import {  Router, Request,Response } from 'express'
import { CreateContinentContract, FilterContinentContract } from '../contracts/Continent.contract'
import * as ContinentController from '../controllers/Continent.controller'

const ContinentRouter = Router()

/**
 * Create new [Continent]
 */
 ContinentRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateContinentContract = req.body
    const result = await ContinentController.create(payload).catch(error => { error : res.status(500).send("Une erreur est survenue à la création de la source : "+ error.message) })
    return res.status(200).send(result)
})

/**
 * Update [Continent] of id specified
 */
ContinentRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await ContinentController.updateById(id,req.body)
    return res.status(200).send(result)
})

/**
 * Delete [Continent] of id specified
 */
ContinentRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await ContinentController.deleteById(id)
    return res.status(200).send(result)
})

/**
 * Get [Continent] of id specified
 */
 ContinentRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await ContinentController.getById(id)
    return res.status(200).send(result)
})

/**
 * Get all [Continent] objects
 */
 ContinentRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterContinentContract = req.query
    const results = await ContinentController.getAll(filters)
    return res.status(200).send(results)
})

/**
 * Count all [Continent] objects
 */
 ContinentRouter.get('/count', async (req: Request, res: Response) => {
    const filters:FilterContinentContract = req.query
    const results = await ContinentController.countAll(filters)
    return res.status(200).send(results)
})

export default ContinentRouter