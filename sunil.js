
let g= "iMySunil"

let r = /.([a-z])([A-Z][a-z])/
let y = g.split(r)
let t = y.toLowerCase()

 console.log(t)




// // splitting camel case to multiple words
// const str = "adnanTechCom".replace(/([a-z])([A-Z])/g, "$1 $2")
 
// // capitalizing the string
// const capitalize = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitalize)

