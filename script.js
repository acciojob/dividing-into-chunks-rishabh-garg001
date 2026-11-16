const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let k = n
let res = []
let sub = []
for(let i=0;i<=arr.length-1;i++){
  if(arr[i] <= k){
    sub.push(arr[i])
    k  -= arr[i] //5-1 4-2
  }else{
    res.push(sub)
    sub=[]
    k =n 

    sub.push(arr[i])
    k -= arr[i]
    
  }
}
if(sub.length > 0){
  res.push(sub)
}

 return res;


};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
