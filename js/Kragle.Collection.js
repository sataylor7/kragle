Kragle.Collection = (function(){
    function Collection(model){
        this.model = model;
        this.collection = [];
    }
    Collection.prototype.add = function(models){
        return this.set(models);
    };
    Collection.prototype.get = function(id){
        var collection = this.collection,
            myModel;
        collection.forEach(function(model){
            if(model._id === id){
                myModel = model;
            }
        });
        return myModel;
    };
    Collection.prototype.set = function(models){
        var singular = !Array.isArray(models),
            models = (singular) ? [models] : models.slice(),
            model;

        // loop through the models and make sure the model doesnt exist in the collection already
        // add model to the collection or update an existing one
        for(var i = 0; i < models.length; i++){
            model = models[i];
            var existing = this.get(model._id);
            if(existing){
                models[i] = existing;
            }else{
                this.collection.push(this.model.deserialize(this.model, model));
            }
        }
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
            if(item.fields[key] === value){
                return item;
            }
        });
    };
    return Collection;
})(Kragle.Events);
