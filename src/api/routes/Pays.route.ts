import {  Router, Request,Response } from 'express'
import { CreatePaysContract, FilterPaysContract } from '../contracts/Pays.contract'
import * as PaysController from '../controllers/Pays.controller'
import { toError404, toError500 } from '../dto/Error.dto'

const PaysRouter = Router()

/**
 * Create new [Pays]
 */
 PaysRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreatePaysContract = req.body
    await PaysController.create(payload)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Update [Pays] of id specified
 */
PaysRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await PaysController.updateById(id,req.body)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Delete [Pays] of id specified
 */
PaysRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await PaysController.deleteById(id)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})


/**
 * Count all [Pays] objects
 */
 PaysRouter.get('/count', async (req: Request, res: Response) => {
    const filters:FilterPaysContract = req.query
    await PaysController.countAll(filters)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Get [Pays] of id specified
 */
 PaysRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await PaysController.getById(id)
    .then((result) => {
        if(result){
            return res.contentType('json').status(200).send(result)
        }
        else{
            return res.contentType('json').status(404).send(toError404(`Pays n°${id}`))
        }
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

/**
 * Get all [Pays] objects
 */
 PaysRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterPaysContract = req.query
    await PaysController.getAll(filters)
    .then((result) => {
        return res.contentType('json').status(200).send(result)
    })
    .catch(error => {
        return res.status(500).send(toError500(error))
    })
})

export default PaysRouter