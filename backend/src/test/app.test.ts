import assert from 'assert';
import request from 'supertest';
import server from '../index';

describe("Prueba Challenge",() =>
{
	it("GET request:  challenge/getCuit/:id",
		done =>
		{
			request(server.app)
				.get('/challenge/getCuit/11111111')
				.end( (err, res ) =>
				{
					assert(res.body.success == true);
					done();
				});
		});
	it("GET request:  challenge/getUserData/:cuit",
		done =>
		{
			request(server.app)
				.get('/challenge/getUserData/99999999')
				.end( (err, res ) =>
				{
					assert(res.body.success == true);
					done();
				});
		});
})

