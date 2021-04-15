
var proto = require('./proto');

let coll = ["ade", "titi", "ola", "yinka", "tutu", "sola", "yemi", "tobi", "taiye", "kehinde", "idowu", "alaba", "idogbe"];
let itemsPerPage = 2

function pageNumber(itemIndex) {
    //let pageNumber = (itemIndex % itemsPerPage == 0) ? Math.floor(itemIndex / itemsPerPage) : Math.floor(itemIndex / itemsPerPage) + 1;
    let pageNumber = Math.ceil(itemIndex / itemsPerPage);
    return pageNumber;
  }
// console.log(itemsPerPage);
// let prot = proto.PaginationHelper(coll, itemsPerPage);
var itemIndex = 4;
// var itemPerPage = 2;

console.log(pageNumber(itemIndex));




