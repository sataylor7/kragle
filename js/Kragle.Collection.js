Kragle.Collection = (function(){
    function Collection(){
        this.collection = [];
    }
    Collection.prototype.add = function(model){
        this.collection.push(model);
    };
    Collection.prototype.get = function(){
        return this.collection;
    };
    Collection.prototype.remove = function(id){
        var collection = this.collection;
        collection.forEach(function(model, index){
            if(model._id === id){
                collection.splice(index, 1);
            }
        });
    };
    Collection.prototype.filter = function(key, value){
        return this.collection.filter(function(model){
            if(model.fields[key] === value){
                return model;
            }
        });
    };
    return Collection;
})();
