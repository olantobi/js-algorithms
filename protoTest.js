

function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage=itemsPerPage;    
  }

  module.exports.itemCount = PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }

 module.exports.pageCount = PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
  }

 module.exports.pageItemCount = PaginationHelper.prototype.pageItemCount = function(pageIndex) {
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

 module.exports.pageIndex = PaginationHelper.prototype.pageIndex = function(itemIndex) {
    let indexValue=Math.floor(itemIndex/this.itemsPerPage);
    if(this.collection.length){
      let pageCounts= Math.ceil(this.collection.length/this.itemsPerPage);
      if(indexValue>=0 && indexValue < pageCounts){
        return indexValue;
      }
    }
    return -1;
  }

  module.exports.PaginationHelper = PaginationHelper;