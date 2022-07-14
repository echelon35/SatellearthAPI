import {  Router, Request,Response } from 'express'
import { CreateDisasterContract, FilterDisasterContract } from '../contracts/Disaster.contract'
import * as DisasterController from '../controllers/Disaster.controller'

const DisasterRouter = Router()

/**
 * Get [Disaster] object by its id
 */
DisasterRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await DisasterController.getById(id)
    return res.status(200).send(result)
})

/**
 * Update [Disaster]
 */
DisasterRouter.put('/:id', () => {
})

/**
 * Delete [Disaster]
 */
DisasterRouter.delete('/:id', () => {
})


/**
 * Create new [Disaster]
 */
DisasterRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateDisasterContract = req.body
    const result = await DisasterController.create(payload).catch(error => { error : res.status(500).send("Une erreur est survenue à la création de la source : "+ error.message) })
    return res.status(200).send(result)
})

/**
 * Get all [Disaster] objects
 */
 DisasterRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterDisasterContract = req.query
    const results = await DisasterController.getAll(filters)
    return res.status(200).send(results)
})

export default DisasterRouter