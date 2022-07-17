import { agent as _request } from "supertest"
import {get as getApplication} from '../../server'
import dbInit from "../db/init"

export const request = _request(getApplication())
import Continent, { ContinentOutput } from "../db/models/Continent";


describe('Continent routes', () => {
    let continentId: number
    let continent: ContinentOutput

    dbInit();

    //What to do before tests
    beforeAll(async () => {

        // await thisDb.sequelize?.query("SET FOREIGN_KEY_CHECKS = 0")
        // await thisDb.destroy({ cascade: true, truncate: true, force: true });
        // await thisDb.sequelize?.query("SET FOREIGN_KEY_CHECKS = 1")
        await Continent.sync({force: true});

        [continent] = await Promise.all([
            Continent.create({namefr:"Afrique",nameus:"Africa"}),
            Continent.create({namefr:"Europe",nameus:"Europa"}),
        ])

        ;({id: continentId} = continent)
    })

    //What to do after tests
    afterAll(async () => {

    })

    //Test CREATE [Continent]
    describe('Create [Continent]', () => {
        it('should return the newly [Continent] created', async () => {
            const {body: data} = await request
            .post(`/api/v1/continents`)
            .set('Accept', 'application/json')
            .send({
                namefr: "Amérique",
                nameus: "North-America"
            })
            .expect('Content-Type',/json/)
            .expect(200)
            
            expect(data.id).toEqual(3)
            expect(data.namefr).toEqual("Amérique")
            expect(data.nameus).toEqual("North-America")
        })
    })

    //Test UPDATE [Continent] by its id
    describe('Update [Continent]', () => {
        it('should return [Continent] updated with specified id', async () => {
            const {body: data} = await request
            .put(`/api/v1/continents/${continentId}`)
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)
                
            expect(data.id).toEqual(continentId)
            expect(data.namefr).toEqual(continent.namefr)
            expect(data.nameus).toEqual(continent.nameus)
        })
    })

    //Test GET [Continent] by its id
    describe('Get [Continent]', () => {
        it('should return a single [Continent] with specified id', async () => {
            const {body: data} = await request
            .get(`/api/v1/continents/${continentId}`)
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)
                
            expect(data.id).toEqual(continentId)
            expect(data.namefr).toEqual(continent.namefr)
            expect(data.nameus).toEqual(continent.nameus)
        })
    })

    //Test GET ALL [Continent]
    describe('Get All', () => {
        it('should return an array of existing [Continent]', async () => {
            const {body: data} = await request
            .get('/api/v1/continents')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)

            expect(data?.length).toEqual(3)
        })
    })

    //Test COUNT ALL [Continent]
    describe('Count All', () => {
        it('should return the number of [Continent]', async () => {
            const {body: data} = await request
            .get('/api/v1/continents/count')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)

            expect(data.count).toEqual(3)
        })
    })

    //Test DELETE [Continent] by its id
    describe('Delete [Continent]', () => {
        it('should return true', async () => {
            const {body: data} = await request
            .delete(`/api/v1/continents/${continentId}`)
            .set('Accept', 'application/json')
            .expect(200)
                
            expect(data).toEqual(true)
        })
    })

})