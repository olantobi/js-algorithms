
// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage=itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let pageCounts= Math.ceil(this.collection.length/this.itemsPerPage);
    pageIndex= pageIndex + 1;
    if(pageIndex > pageCounts){
      return -1;
    }
    if(pageIndex < pageCounts){
       return this.itemsPerPage;
    }
    if(pageIndex == pageCounts){
      return this.itemsPerPage -((pageIndex * this.itemsPerPage)- this.collection.length);
    }
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    let indexValue=Math.floor(itemIndex/this.itemsPerPage);
    if(this.collection.length){
      let pageCounts= Math.ceil(this.collection.length/this.itemsPerPage);
      if(indexValue>=0 && indexValue < pageCounts){
        return indexValue;
      }
    }
    return -1;
  }

//   module.exports = pagination;