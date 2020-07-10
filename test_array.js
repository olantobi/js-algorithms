let graph = [];
let N = 1000;
// let arr = [[], []];
for (let i=0; i<N; i++) {
    graph.push([]);
}
// // console.log(arr);

// let u = 9;
// let v = 10;

// // U:  9  :: V:  10
// graph[u - 1].push(v - 1); 
// graph[v - 1].push(u - 1); 

// graph[u - 1].push(v - 1); 
// graph[v - 1].push(u - 1); 

// console.log(graph);
let node = 0;

graph[node].push(1);

let testArr = [1, 2];
console.log("Graph Node: ", graph[node]);
// Traversed in all the connected nodes 
// graph[node].foreach((i) => {
//     console.log("i = ", i);
// });

testArr.forEach((i) => {
    console.log("i = ", i);
});