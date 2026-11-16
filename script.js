const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let arr = [1, 2, 3, 4, 1, 0, 2, 2]
let res = []
let sub = []
for(let i=0;i<=arr.length-1;i++){
  if(arr[i] <= n){
    sub.push(arr[i])
    n  -= arr[i] //5-1 4-2
  }else{
    res.push(sub)
    sub=[]
    n =5 

    sub.push(arr[i])
    n -= arr[i]
    
  }
}
if(sub.length > 0){
  res.push(sub)
}

console.log(res)
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
