/*function nit(a,b,c){
	let out = c
	if (a > b && a > c){
		out = a
	}
	else if (b > a && b > c){
		out = b
	}
	console.log(out)
	//return out

}
nit(3,5,8)
console.log(nit(4,5,6))*/
 
 /*function kol(r,t,y){
 	r += t +y
 	return r
 }

 console.log(kol(3,5,4))
 console.log(kol())*/


// let colors = ['yellow','green','red','blue','gray','tomato']

// let voterage = [13,34,12,7,45,25,19]
// let filterdcolors = colors.filter((el) => el.includes('o'))

// console.log(filterdcolors)

// let rambo = colors.every((el) => el.includes('a'))
// console.log(rambo)

// let slcolors = colors.some((el) => el.includes('g'))
// console.log(slcolors)


// let rambo = voterage.every((el) => el >= 18)
// console.log(rambo)

// let slcolors = voterage.some((el) => el >= 18)
// console.log(slcolors)


let colors = ['yellow','green','red','blue','gray','tomato']

let nations = ['ind','pak','aus','us','sri']

let flags = [...colors,...nations]

console.log(flags)

