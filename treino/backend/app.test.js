const supertest = require('supertest');
const app = require('./app');


test('GET /participacoes/5/6', async () => {
    const response = await supertest(app)
    .get('/participacoes/5/6');
    
    expect(response.statusCode).toEqual(200);
    expect(response.body.participacoesEmGols).toEqual(11);
    })