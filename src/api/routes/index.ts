import { Router } from 'express'
import AleaRouter from './Alea.route'
import SourceRouter from './Source.route'

const router = Router()

router.use('/aleas', AleaRouter)
router.use('/sources', SourceRouter)

export default router