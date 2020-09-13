import server from '../../Server';
import { response } from 'express';
import supertest from 'supertest';
import { IProduct } from '../../models/Product';
const request = supertest(server);

it('GET, Hits /Produce endpoint and returns a json of Product Type', async done => {

    const res = await request.get('/api/v1/produce');
    expect(res.status).toBe(200);
    const parseJsonArray = () => {
        const body = <IProduct[]>JSON.parse(res.text);
    }
    expect(parseJsonArray).not.toThrow();
    
    done();
});