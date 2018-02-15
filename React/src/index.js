const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

const newArr = [];

for(let i= 0, l = arr.length; i< l; i++){
    if(arr[i].name === "ford" ){
		newArr.push(arr[i]);
	}
}

console.log("Filter results:",newArr);