//rmove the dublicate


// let dublicate = ['java','docker','aws','cloud','reactjs','java','aws','cloud']


//   // body...


//   let out = []
//   for (let i = 0; dublicate.length-1 ; i++){
    
//   //console.log(i)
//   if (i not in out){
//     out.push(i)
//  console.log(out)

//   }
     
//  }


// var arry=[1,3, 2, 4, 65,6,7, 6,4, 3, 2];
// var h=[];

// for(let i in arry){
//   console.log(i)
//   if(arry[i] not in h[i]){
//     h.push(i)
//     console.log(h)

//   }
// }


let numbers = ['java','docker','aws','cloud','reactjs','java','aws','cloud'];

// let uniqueNumbers = numbers.reduce(function(acc, currentValue) {
//   if (acc.indexOf(currentValue) === -1) {
//     acc.push(currentValue);
//   }
//   return acc;
// }, []);
let out = []
for(let z of numbers ){
  //x=numbes.slice())

//let same =[]
//let y =
  if (z.includs(out)){
    let t= out.push(z)
    console.log(t)
   // same.push[x]
  }
}
//  else
//   console.log(out)

// console.lo