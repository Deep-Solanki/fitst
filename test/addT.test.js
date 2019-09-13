const add = require('./addT');
const expect = require('expect')


it('should add two numbers.', () =>{
	var res = add.add(10,5);
	
	expect(res).toBe(15).toBeA('number');
	// if(res != 15){
	// 	throw new Error('it must be 15');
	// }
})

it('should show square: ',() =>{
	var res = add.square(4);

	expect(res).toBe(16).toBeA('number');
	// if(res != 16){
	// 	throw new Error('it must be 16');
	// }
})



it('should',() => {
	var name = add.users([],'deep solanki');
	expect(name).toExclude('solanki')
})