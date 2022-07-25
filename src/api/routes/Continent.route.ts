import {  Router, Request,Response } from 'express'
import { CreateContinentContract, FilterContinentContract, UpdateContinentContract } from '../contracts/Continent.contract'
import * as ContinentController from '../controllers/Continent.controller'
import { toError500 } from '../dto/Error.dto'

const ContinentRouter = Router()

/**
 * Count all [Continent] objects
 */
ContinentRouter.get('/count', async (req: Request, res: Response) => {
    const filters:FilterContinentContract = req.query
    await ContinentController.countAll(filters)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Create new [Continent]
 */
ContinentRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateContinentContract = req.body
    await ContinentController.create(payload)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.contentType('json').status(500).send(toError500(error))
    })
})

/**
 * Update [Continent] of id specified
 */
ContinentRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload:UpdateContinentContract = req.body
    await ContinentController.updateById(id,payload)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Delete [Continent] of id specified
 */
ContinentRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await ContinentController.deleteById(id)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Get [Continent] of id specified
 */
ContinentRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await ContinentController.getById(id)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Get all [Continent] objects
 */
ContinentRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterContinentContract = req.query
    await ContinentController.getAll(filters)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

export default ContinentRouter