
let N = 1000; 
let graph = [];

for (let i=0; i<N; i++) {
    graph.push([]);
}
// console.log(graph);
// let graph = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
// [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]; 
  
// Initially all nodes 
// marked as unvisited 
let visited = []; 

// DFS function that visits all 
// connected nodes from a given node 
function dfs(node, a, mini) 
{ 
    // Stores the minimum 
    mini = Math.min(mini, a[node]); 
  
    // Marks node as visited 
    visited[node] = true; 
  

    // console.log("Graph: ", graph);
    console.log("Graph Node: ", graph[node], " :: Node: ", node);
    // Traversed in all the connected nodes 
    graph[node].forEach((i) => {
        if (!visited[i]) {
            dfs(i, a, mini);
        }
    });
} 
  
// Function to add the edges 
function addedge(u, v) 
{ 
    // console.log("Graph: ", graph);
    // console.log("U: ", u, " :: V: ", v);
    
    graph[u - 1].push(v - 1); 
    graph[v - 1].push(u - 1); 
} 
  
// Function that returns the sum of all minimums 
// of connected componenets of graph 
function minimumSumConnectedComponents(a, n) 
{ 
    // Initially sum is 0 
    let sum = 0; 
  
    // Traverse for all nodes 
    for (let i = 0; i < n; i++) { 
        if (!visited[i]) { 
            let mini = a[i]; 
            dfs(i, a, mini); 
            sum += mini; 
        } 
    } 
      
    // Returns the answer 
    return sum; 
} 
  
// Driver Code 
function main() 
{ 
    let a = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10]; 
      
    // Add edges 
    addedge(1, 2); 
    addedge(3, 4); 
    addedge(5, 6); 
    addedge(7, 8); 
    addedge(9, 10); 
      
    let n = a.length; 
  
    // Calling Function 
    console.log(minimumSumConnectedComponents(a, n)); 
    // return 0; 
}

main();