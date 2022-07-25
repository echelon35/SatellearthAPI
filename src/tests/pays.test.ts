import fs from "fs"
import * as csv from "csv"

import Pays from "../db/models/Pays";
import { request } from ".";


describe('Pays routes', () => {

    //What to do before tests
    beforeAll(async() => {

        await Pays.sync({force: true});

        var input = fs.createReadStream("./src/tests/mockfiles/pays.csv");
        var parser = csv.parse({
            delimiter: ';',
            relax_quotes: true,
            columns: true
        });
    
        //Lecture du fichier mock
        parser.on('readable', async function () {
            var line: any;
            while(line = parser.read()) {
              const pays = {
                namefr: line.namefr,
                nameus: line.nameus,
                population: line.population,
                superficie: line.superficie,
                iso3166: line.iso3166_2,
                trigramme: line.trigramme,
                wikilink: line.wikilink,
                geom: Pays.sequelize?.fn('ST_GeomFromGeoJSON',`${line.geom}`),
                continentId: line.continentId
              }
              await Pays.create(pays);
            }
        });

        Promise.resolve(input.pipe(parser));
    })

    //Test CREATE [Pays]
    describe('Create [Pays]', () => {
        it('should return the newly [Pays] created', async () => {
            const {body: data} = await request
            .post(`/api/v1/pays`)
            .set('Accept', 'application/json')
            .send({
                //Payload for creation of [Pays]
                namefr: "Test",
                nameus: "Test",
                trigramme: "TES",
                iso3166: "TS",
                population: 10000,
                superficie: 2000,
                geom: {"type":"Polygon","coordinates":[[[3.595410156,11.696289063],[3.55390625,11.631884766],[3.490527344,11.49921875],[3.487792969,11.395410156],[3.638867188,11.176855469],[3.65625,11.154589844],[3.6953125,11.1203125],[3.71640625,11.079589844],[3.734179688,10.971923828],[3.744921875,10.850439453],[3.756835938,10.76875],[3.8296875,10.653759766],[3.834472656,10.607421875],[3.783789063,10.435888672],[3.771777344,10.417626953],[3.758496094,10.412695312],[3.680273438,10.427783203],[3.646582031,10.408984375],[3.604101563,10.350683594],[3.577929688,10.292480469],[3.5765625,10.268359375],[3.645898438,10.16015625],[3.602050781,10.004541016],[3.557226563,9.907324219],[3.476757813,9.851904297],[3.404785156,9.838623047],[3.354492188,9.812792969],[3.325195313,9.778466797],[3.329492188,9.667041016],[3.2234375,9.565625],[3.164648438,9.494677734],[3.136132813,9.451611328],[3.148046875,9.320605469],[3.110449219,9.18828125],[3.044921875,9.083837891],[2.898046875,9.061376953],[2.774804688,9.048535156],[2.732910156,8.782519531],[2.734667969,8.614013672],[2.723632813,8.441894531],[2.703125,8.371826172],[2.711523438,8.272998047],[2.70234375,8.049804688],[2.686035156,7.873730469],[2.707714844,7.826611328],[2.720410156,7.723095703],[2.719335938,7.616259766],[2.750976563,7.541894531],[2.78515625,7.476855469],[2.783984375,7.443408203],[2.765820313,7.422509766],[2.750488281,7.395068359],[2.750585938,7.143212891],[2.756738281,7.067919922],[2.747753906,7.019824219],[2.721386719,6.980273437],[2.731738281,6.852832031],[2.752929688,6.771630859],[2.774609375,6.71171875],[2.753710938,6.661767578],[2.735644531,6.595703125],[2.708007813,6.427685547],[2.706445313,6.369238281],[2.286914063,6.328076172],[1.818164063,6.260644531],[1.62265625,6.216796875],[1.6109375,6.250830078],[1.777929688,6.294628906],[1.743164063,6.426269531],[1.639257813,6.581542969],[1.598535156,6.610205078],[1.577539063,6.687402344],[1.602929688,6.738085937],[1.590820313,6.772265625],[1.58203125,6.877001953],[1.530957031,6.992431641],[1.624707031,6.997314453],[1.624707031,7.369189453],[1.624609375,7.725878906],[1.624609375,8.030224609],[1.624609375,8.270996094],[1.606640625,8.559277344],[1.603808594,8.770996094],[1.600195313,9.050048828],[1.566308594,9.137255859],[1.424316406,9.285009766],[1.385742188,9.361669922],[1.37890625,9.462988281],[1.347070313,9.567529297],[1.345117188,9.750195312],[1.342871094,9.962939453],[1.330078125,9.996972656],[1.176171875,10.098388672],[0.958300781,10.242041016],[0.7921875,10.3515625],[0.779980469,10.359570312],[0.763378906,10.386669922],[0.7875,10.710253906],[0.821875,10.752587891],[0.874804688,10.885742188],[0.900488281,10.993261719],[0.924609375,10.992822266],[0.958007813,11.027783203],[0.985058594,11.079003906],[1.013867188,11.068115234],[1.062304688,11.058203125],[1.084570313,11.076367187],[1.081542969,11.116015625],[1.097558594,11.156347656],[1.135546875,11.174365234],[1.145507813,11.210400391],[1.145800781,11.251904297],[1.178710938,11.262744141],[1.234667969,11.261035156],[1.28046875,11.273974609],[1.317382813,11.295263672],[1.36484375,11.37890625],[1.391503906,11.408007812],[1.399707031,11.428710938],[1.426757813,11.447119141],[1.501367188,11.455566406],[1.561425781,11.449121094],[1.6,11.400634766],[1.857617188,11.443359375],[1.980371094,11.418408203],[2.230859375,11.629150391],[2.287207031,11.691259766],[2.36328125,11.840087891],[2.389160156,11.897070312],[2.412695313,11.999316406],[2.36328125,12.188427734],[2.366015625,12.221923828],[2.469335938,12.262792969],[2.5984375,12.294335937],[2.6484375,12.296777344],[2.681347656,12.312792969],[2.728515625,12.353613281],[2.805273438,12.383837891],[2.850195313,12.373681641],[2.878125,12.367724609],[3.149609375,12.118066406],[3.267382813,11.991894531],[3.299121094,11.927148437],[3.359960938,11.88046875],[3.449804688,11.851953125],[3.531738281,11.787451172],[3.595410156,11.696289063]]]},
                continentId: 2,
                wikilink: "http://satellearth.com",
            })
            .expect('Content-Type',/json/)
            .expect(200)

        })
    })

    //Test CREATE [Pays] with errors
    describe('Create [Pays] where [Continent] not exists', () => {
        it('should return an error 500', async () => {
            const {body: data} = await request
            .post(`/api/v1/pays`)
            .set('Accept', 'application/json')
            .send({
                //Payload for creation of [Pays]
                namefr: "Test",
                nameus: "Test",
                trigramme: "TES",
                iso3166: "TS",
                population: 10000,
                superficie: 2000,
                geom: {"type":"Polygon","coordinates":[[[3.595410156,11.696289063],[3.55390625,11.631884766],[3.490527344,11.49921875],[3.487792969,11.395410156],[3.638867188,11.176855469],[3.65625,11.154589844],[3.6953125,11.1203125],[3.71640625,11.079589844],[3.734179688,10.971923828],[3.744921875,10.850439453],[3.756835938,10.76875],[3.8296875,10.653759766],[3.834472656,10.607421875],[3.783789063,10.435888672],[3.771777344,10.417626953],[3.758496094,10.412695312],[3.680273438,10.427783203],[3.646582031,10.408984375],[3.604101563,10.350683594],[3.577929688,10.292480469],[3.5765625,10.268359375],[3.645898438,10.16015625],[3.602050781,10.004541016],[3.557226563,9.907324219],[3.476757813,9.851904297],[3.404785156,9.838623047],[3.354492188,9.812792969],[3.325195313,9.778466797],[3.329492188,9.667041016],[3.2234375,9.565625],[3.164648438,9.494677734],[3.136132813,9.451611328],[3.148046875,9.320605469],[3.110449219,9.18828125],[3.044921875,9.083837891],[2.898046875,9.061376953],[2.774804688,9.048535156],[2.732910156,8.782519531],[2.734667969,8.614013672],[2.723632813,8.441894531],[2.703125,8.371826172],[2.711523438,8.272998047],[2.70234375,8.049804688],[2.686035156,7.873730469],[2.707714844,7.826611328],[2.720410156,7.723095703],[2.719335938,7.616259766],[2.750976563,7.541894531],[2.78515625,7.476855469],[2.783984375,7.443408203],[2.765820313,7.422509766],[2.750488281,7.395068359],[2.750585938,7.143212891],[2.756738281,7.067919922],[2.747753906,7.019824219],[2.721386719,6.980273437],[2.731738281,6.852832031],[2.752929688,6.771630859],[2.774609375,6.71171875],[2.753710938,6.661767578],[2.735644531,6.595703125],[2.708007813,6.427685547],[2.706445313,6.369238281],[2.286914063,6.328076172],[1.818164063,6.260644531],[1.62265625,6.216796875],[1.6109375,6.250830078],[1.777929688,6.294628906],[1.743164063,6.426269531],[1.639257813,6.581542969],[1.598535156,6.610205078],[1.577539063,6.687402344],[1.602929688,6.738085937],[1.590820313,6.772265625],[1.58203125,6.877001953],[1.530957031,6.992431641],[1.624707031,6.997314453],[1.624707031,7.369189453],[1.624609375,7.725878906],[1.624609375,8.030224609],[1.624609375,8.270996094],[1.606640625,8.559277344],[1.603808594,8.770996094],[1.600195313,9.050048828],[1.566308594,9.137255859],[1.424316406,9.285009766],[1.385742188,9.361669922],[1.37890625,9.462988281],[1.347070313,9.567529297],[1.345117188,9.750195312],[1.342871094,9.962939453],[1.330078125,9.996972656],[1.176171875,10.098388672],[0.958300781,10.242041016],[0.7921875,10.3515625],[0.779980469,10.359570312],[0.763378906,10.386669922],[0.7875,10.710253906],[0.821875,10.752587891],[0.874804688,10.885742188],[0.900488281,10.993261719],[0.924609375,10.992822266],[0.958007813,11.027783203],[0.985058594,11.079003906],[1.013867188,11.068115234],[1.062304688,11.058203125],[1.084570313,11.076367187],[1.081542969,11.116015625],[1.097558594,11.156347656],[1.135546875,11.174365234],[1.145507813,11.210400391],[1.145800781,11.251904297],[1.178710938,11.262744141],[1.234667969,11.261035156],[1.28046875,11.273974609],[1.317382813,11.295263672],[1.36484375,11.37890625],[1.391503906,11.408007812],[1.399707031,11.428710938],[1.426757813,11.447119141],[1.501367188,11.455566406],[1.561425781,11.449121094],[1.6,11.400634766],[1.857617188,11.443359375],[1.980371094,11.418408203],[2.230859375,11.629150391],[2.287207031,11.691259766],[2.36328125,11.840087891],[2.389160156,11.897070312],[2.412695313,11.999316406],[2.36328125,12.188427734],[2.366015625,12.221923828],[2.469335938,12.262792969],[2.5984375,12.294335937],[2.6484375,12.296777344],[2.681347656,12.312792969],[2.728515625,12.353613281],[2.805273438,12.383837891],[2.850195313,12.373681641],[2.878125,12.367724609],[3.149609375,12.118066406],[3.267382813,11.991894531],[3.299121094,11.927148437],[3.359960938,11.88046875],[3.449804688,11.851953125],[3.531738281,11.787451172],[3.595410156,11.696289063]]]},
                continentId: 999,
                wikilink: "http://satellearth.com",
            })
            .expect('Content-Type',/json/)
            .expect(500)

        })
    })

    //Test CREATE [Pays] with errors
    describe('Create [Pays] with missing Geom', () => {
        it('should return an error 500', async () => {
            const {body: data} = await request
            .post(`/api/v1/pays`)
            .set('Accept', 'application/json')
            .send({
                //Payload for creation of [Pays]
                namefr: "Test",
                nameus: "Test",
                trigramme: "TES",
                iso3166: "TS",
                population: 10000,
                superficie: 2000,
                continentId: 1,
                wikilink: "http://satellearth.com",
            })
            .expect('Content-Type',/json/)
            .expect(500)

        })
    })

    //Test UPDATE [Pays] by its id
    describe('Update [Pays]', () => {
        it('should return [Pays] updated with specified id', async () => {
            const {body: data} = await request
            .put(`/api/v1/pays/4`)
            .set('Accept', 'application/json')
            .send({
              //Payload for creation of [Pays]
              namefr: "Toto",
              nameus: "Test"
          })
            .expect('Content-Type',/json/)
            .expect(200)

            expect(data.namefr).toEqual("Toto")
            expect(data.nameus).toEqual("Test")
        })
    })

    //Test GET [Pays] by its id
    describe('Get [Pays]', () => {
        it('should return a single [Pays] with specified id', async () => {
            const {body: data} = await request
            .get(`/api/v1/pays/2`)
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)

            // expect(/*PARAM*/).toEqual(/*VALUE*/)
        })
    })

    //Test GET [Pays] by its id
    describe('Get [Pays] where id not exists', () => {
        it('should return an error 404', async () => {
            const {body: data} = await request
            .get(`/api/v1/pays/999`)
            .expect(404)

            // expect(/*PARAM*/).toEqual(/*VALUE*/)
        })
    })

    //Test GET ALL [Pays]
    describe('Get All', () => {
        it('should return an array of existing [Pays]', async () => {
            const {body: data} = await request
            .get('/api/v1/pays')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)

            // expect(/*PARAM*/).toEqual(/*VALUE*/)
        })
    })

    //Test COUNT ALL [Pays]
    describe('Count All', () => {
        it('should return the number of [Pays]', async () => {
            const {body: data} = await request
            .get('/api/v1/pays/count')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)

            expect(data.count).toEqual(4)
        })
    })

    //Test DELETE [Pays] by its id
    describe('Delete [Pays]', () => {
        it('should return true', async () => {
            const {body: data} = await request
            .delete(`/api/v1/pays/3`)
            .set('Accept', 'application/json')
            .expect(200)

            // expect(/*PARAM*/).toEqual(/*VALUE*/)
        })
    })

})