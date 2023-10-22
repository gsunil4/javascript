let x = parseInt(prompt(`enter value for firts number:`))

let y = parseInt(prompt(`enter value for second number:`))

let z = parseInt(prompt(`enter value for third number:`))
console.log(`x = ${x}`)
console.log(`y = ${y}`)
console.log(`z = ${z}`)

// if(x > y && x > z){
// 	console.log(`${x} x is grater`)
// }
// else if (y > x && y > z){
// 	console.log(`${y} y is grater`)
// }
// else if (z > x && z > y){
// 	console.log(`${z} z is grater`)
// }
// else{
// 	console.log(`All are equal`)
// }


if(x > y && x > z){
	setTimeOut(()=>console.log(`${x}is grater`), 2000)
}
else if (y > x && y > z){
	setTimeOut(()=>console.log(`${y}is grater`), 4000)
}
else if (z > x && z > y){
	setTimeOut(()=>console.log(`${z} is grater`), 8000)
}
else{
	setTimeOut(()=>console.log(`All are equal`), 1000)
}