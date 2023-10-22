let person = parseInt(prompt(` enter your age`))

if (person >= 18){
	console.log(`your are eligible for vote`)
}
else {
	console.log(`you need ${18 - person} more years to vote`)
}