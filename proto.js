
let pagination = function PaginationHelper(collection, itemsPerPage){
  this.itemCount = collection.length;
  this.pageCount = (this.itemCount % itemsPerPage == 0) ? Math.floor(this.itemCount / itemsPerPage) : Math.floor(this.itemCount / itemsPerPage) + 1;
  this.itemsPerPage = itemsPerPage;
}
​
// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.itemCount;
}
​
// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.pageCount;
}
​
// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex > this.pageCount)
    return -1;
  else if (pageIndex < this.pageCount)
    return this.itemsPerPage;
  else
    return (this.itemCount % this.itemsPerPage == 0) ? this.itemsPerPage : this.itemCount % this.itemsPerPage;
}
​
// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let pageNumber = (itemIndex % this.itemsPerPage == 0) ? Math.floor(itemIndex / this.itemsPerPage) : Math.floor(itemIndex / this.items) + 1;
  
  return pageNumber
}

module.exports = pagination;

 