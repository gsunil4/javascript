let a = [2,45,6,7,6,4,1,2,3,5,1,3,8,56]

let b = {}
//function count()
a.forEach(el =>{ b[el] = (b[el] || 0 )+1;})
 console.log(b)


