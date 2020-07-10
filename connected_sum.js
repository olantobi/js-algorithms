
let nodes = 10;
// let graph 
let graph = [];

for (let i = 0; i < nodes; i++) {
    graph.push([]);
}

let edges = [[1,2], [1,3], [2,4], [3,5], [7,8]];

// console.log(edges);

edges.forEach((elem) => {
    addEdge(elem[0], elem[1]);
})
console.log(graph);
// // Initially all nodes 
// // marked as unvisited 
// let visited = []; 

// // DFS function that visits all 
// // connected nodes from a given node 
// function dfs(node, arr) 
// { 
//     // Stores the minimum 
//     let arrLen = arr.length;
//     let sqrt = Math.ceil(Math.sqrt(arrLen));
  
//     // Marks node as visited 
//     visited[node] = true; 
//     console.log("SQRT: ", sqrt);
//     return sqrt;

//     // // console.log("Graph: ", graph);
//     // console.log("Graph Node: ", graph[node], " :: Node: ", node);
//     // // Traversed in all the connected nodes 
//     // graph[node].forEach((i) => {
//     //     if (!visited[i]) {
//     //         dfs(i, a, mini);
//     //     }
//     // });
// } 
  
// // Function to add the edges 
function addEdge(u, v) 
{   
    graph[u-1][v-1] = 1;
} 
  
// // Function that returns the sum of all minimums 
// // of connected componenets of graph 
// function sumConnectedComponents(a, n) 
// { 
//     // Initially sum is 0 
//     let sum = 0; 
  
//     // Traverse for all nodes 
//     for (let i = 0; i < n; i++) { 
//         if (!visited[i]) { 
//             // let mini = a[i]; 
//             sum += dfs(i, a); 
//             // sum += mini; 
//         } 
//     } 
      
//     // Returns the answer 
//     return sum; 
// } 
  
// // Driver Code 
// function main() 
// { 
//     let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//     int len = 10;

//     // Add edges 
//     addedge(1, 2); 
//     addedge(1, 3); 
//     addedge(2, 4); 
//     addedge(3, 5); 
//     addedge(7, 8); 
      
//     let n = a.length; 
  
//     // Calling Function 
//     console.log(sumConnectedComponents(a, n)); 
//     // return 0; 
// }

// main();

console.log(graph[6][7]);
console.log(graph[2][4]);
console.log(graph[3][5]);