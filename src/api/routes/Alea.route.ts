import { Router, Request,Response } from 'express'
import { CreateAleaContract, FilterAleaContract, FilterAleaNameContract } from '../contracts/Alea.contract'
import * as AleaController from '../controllers/Alea.controller'

const AleaRouter = Router()

// AleaRouter.get(':/id', async (req: Request, res: Response) => {
//     const id = Number(req.params.id)
//     const result = await AleaController.getById(id)
//     return res.status(200).send(result)
// })

AleaRouter.put('/:id', () => {
  // update alea
})

AleaRouter.delete('/:id', () => {
  // delete alea
})


/**
 * Create new [Alea]
 */
AleaRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateAleaContract = req.body
    const result = await AleaController.create(payload).catch(error => { error : res.status(500).send("Une erreur est survenue à la création de l'aléa : "+ error.message) })
    return res.status(200).send(result)
})

/**
 * Get [Alea] object by its id
 */
 AleaRouter.get('/:name', async (req: Request, res: Response) => {
    const results = await AleaController.getByName(req.params.name)
    return res.status(200).send(results)
})

/**
 * Get all [Alea] objects
 */
AleaRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterAleaContract = req.query
    const results = await AleaController.getAll(filters)
    return res.status(200).send(results)
})

export default AleaRouter