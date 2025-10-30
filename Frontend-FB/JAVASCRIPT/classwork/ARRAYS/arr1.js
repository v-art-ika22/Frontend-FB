//first method todefine array
//const arr=[1,2,3,4,"vartika",undefined,NaN, null, false];
  

//second method
//const arr=new Array(8); //8 is length here an array will be formed to 8 empty items

//give values in array
/* arr=new Array("abc","def","vartika");
console.log(arr);*/


//merge two arrays
//we have .push method which pushes a value at the end of an array

const start=[1,2,3,4];
const end=[4,5,6,7];

/*for(let num of start){
    newArray.push(num);
}
for(let num of end){
    newArray.push(num);
}
console.log(newArray);*/

//another way to merge using concat method

 /*const newArray=start.concat(end);
 console.log(newArray);*/
 //.concat method returns a new array and does not make changes in same array


//find the index of 56
 /*const start1=[1,2,3,4,5,6,7,24,56,89];
 console.log(start1.indexOf(56));*/

// pop method
 //const arr=[1,2,3,4,5,6,7];
 /*let n=arr.pop(7);
 console.log(n);*/

 //shift method
 /*let n=arr.shift(2);
 console.log(n);*/

 //find method
 /*const arr=[1,3,5,8,2,4,5,67,8];
 const firstEven =arr.find((num)=>{
    return num%2===0
 }) ;     
 console.log(firstEven);*/
 
 //arr.find() ye find ek function maangta h

 //internal working of find
 //function find(check,arr){
 // for(let i=0;i<arr.length;i++){//
 //    if(check(arr[i])){
 //          return arr[i];}
 //           }}}
  function isPrime(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
   return true;

  }
 const arr=[1,2,3,4,5,6,76,65,79,8,5,4,32];
 const newArr = arr.filter(isPrime);
 console.log(newArr);








