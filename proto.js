
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.itemCount = collection.length;    
  this.pageCount = (this.itemCount % itemsPerPage == 0) ? Math.floor(this.itemCount / itemsPerPage) : Math.floor(this.itemCount / itemsPerPage) + 1;
}

PaginationHelper.prototype.itemCount = function() {
  return this.itemCount;
}

PaginationHelper.prototype.pageCount = function() {
  return this.pageCount;
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex > this.pageCount)
    return -1;
  else if (pageIndex < this.pageCount)
    return this.itemsPerPage;
  else
    return (this.itemCount % this.itemsPerPage == 0) ? this.itemsPerPage : this.itemCount % this.itemsPerPage;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let pageNumber = Math.ceil(itemIndex / itemsPerPage);
  
  return pageNumber;
}

module.exports = PaginationHelper;