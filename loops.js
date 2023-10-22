//loops

//for(initialization; condition; increment/decriment)

// for(i=10;i<=20;i+=3)

// 	console.log(`the value of is ${i}`)

// for(i=10;i<=20;i++){

// 	out = i**3
// 	console.log(`the cube of ${i} is ${out}`)
// }

let country = ['india','pak','nz','aus','uk']

for(i = 0;country.length;i++){

	if(i==3)continue;
	console.log(country[i])
}
