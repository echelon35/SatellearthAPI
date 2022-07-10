import { Router } from 'express'
import AleaRouter from './Alea.route'

const router = Router()

router.use('/aleas', AleaRouter)

export default router