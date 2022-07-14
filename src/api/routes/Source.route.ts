import { Router, Request,Response } from 'express'
import { CreateSourceContract, FilterSourceContract, FilterSourceIdContract } from '../contracts/Source.contract'
import * as SourceController from '../controllers/Source.controller'

const SourceRouter = Router()

/**
 * Update [Source]
 */
SourceRouter.put('/:id', () => {
})

/**
 * Delete [Source]
 */
SourceRouter.delete('/:id', () => {
})


/**
 * Create new [Source]
 */
SourceRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateSourceContract = req.body
    const result = await SourceController.create(payload).catch(error => { error : res.status(500).send("Une erreur est survenue à la création de la source : "+ error.message) })
    return res.status(200).send(result)
})

/**
 * Get [Source] object by its id
 */
 SourceRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await SourceController.getById(id)
    return res.status(200).send(result)
})

/**
 * Get all [Source] objects
 */
SourceRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterSourceContract = req.query
    const results = await SourceController.getAll(filters)
    return res.status(200).send(results)
})

export default SourceRouter