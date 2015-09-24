Kragle.Collection = (function(){
    function Collection(model){
        this.model = model;
        this.collection = [];
    }
    Collection.prototype.add = function(model){
        //check to make sure the model doesn't already exist in the collection
        this.collection.push(this.model.deserialize(this.model, model));
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
        return this.collection.filter(function(item){
            console.log(item)
            if(item.fields[key] === value){
                return item;
            }
        });
    };
    return Collection;
})();
