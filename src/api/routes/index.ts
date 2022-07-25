import { Router } from 'express'
import AleaRouter from './Alea.route'
import ContinentRouter from './Continent.route'
import DisasterRouter from './Disaster.route'
import PaysRouter from './Pays.route'
import SourceRouter from './Source.route'

const router = Router()

router.use('/aleas', AleaRouter)
router.use('/sources', SourceRouter)
router.use('/disasters', DisasterRouter)
router.use('/continents', ContinentRouter)
router.use('/pays', PaysRouter)

export default router