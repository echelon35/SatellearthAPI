import { Router } from 'express'
import AleaRouter from './Alea.route'
import DisasterRouter from './Disaster.route'
import SourceRouter from './Source.route'

const router = Router()

router.use('/aleas', AleaRouter)
router.use('/sources', SourceRouter)
router.use('/disasters', DisasterRouter)

export default router