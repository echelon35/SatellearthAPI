import express, { Application, Request, Response } from 'express'
import routes from './api/routes'

const port = process.env.LISTENING_PORT;

export const get = () => {
    const app: Application = express()

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.get('/', async(req: Request, res: Response): Promise<Response> => {
        console.log("Welcome to the SatellEarth API!")
        return res.status(200).send({ message: `Welcome to the SatellEarth API! \n Endpoints available at http://localhost:${port}/api/v1` })
    })
    
    app.use('/api/v1', routes)

    return app
}