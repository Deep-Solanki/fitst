const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Intern} = require('./../server');

beforeEach((done) => {
	Intern.remove({}).then(() => done());
});

describe('POST /post', () => {
	it('intern data',(done) => {
		var Name = 'abc def';

		request(app)
			.post('/post')
			.send({Name})
			.expect(200)
			.expect((res) => {
				expect(res.body.Name).toBe(Name);
			})
			.end((err, res) => {
				if(err){
					return done(err);
				}

				Intern.find().then((deeps) => {
					expect(deeps.length).toBe(1);
					expect(deeps[0].Name).toBe(Name);
					done();
				}).catch((e) => done(e));
			});
	});
});