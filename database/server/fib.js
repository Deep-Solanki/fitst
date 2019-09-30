let n = 10;
let a1 = 0;
let a2 = 1;
for(i=0;i<n;i++){
	console.log(a1);
	let some = a1 + a2;
	a1 = a2;
	a2 = some;
}