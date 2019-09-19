const expect = require('expect');
const request = require('supertest');
const ObjectID = require('mongodb');
const {app} = require('./../server');
const {Intern} = require('./../server');


const intern  = [{
	_id: new ObjectID,
	Name: 'deep solanki'
},{
	_id: new ObjectID,
	Name: 'Deep'
}]
// beforeEach((done) => {
// 	intern.remove({}).then(() => done());
// });

// describe('POST /post', () => {
// 	it('intern data',(done) => {
// 		var Name = 'abc def';

// 		request(app)
// 			.post('/post')
// 			.send({Name})
// 			.expect(200)
// 			.expect((res) => {
// 				expect(res.body.Name).toBe(Name);
// 			})
// 			.end((err, res) => {
// 				if(err){
// 					return done(err);
// 				}

// 				Intern.find().then((deeps) => {
// 					expect(deeps.length).toBe(1);
// 					expect(deeps[0].Name).toBe(Name);
// 					done();
// 				}).catch((e) => done(e));
// 			});
// 	});
// });

describe('GET /post/:id',() => {
	it('should return intern',(done) => {
		request('server.js')
			.get(`/intern/${intern[0]._id}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.intern.Name).toBe(intern[0].Name);
			})
			.ens(done);
	})
})