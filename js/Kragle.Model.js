Kragle.Model = (function(){
    function Model(attributes) {
        var attrs = attributes || {};
        this.fields = {};
        this._id = (!attrs._id)? Kragle.uniqueId() : attrs._id;
        this.setUp(attrs);
        Kragle.models[this._id] = this;
    }
    //instance methods
    Model.prototype.getId = function(){
        return this._id;
    };
    Model.prototype.get = function (name) {
        if(!name) return;
        return this.fields[name];
    };
    Model.prototype.set = function (key, value) {
        if(value === this.get(key)){
            return value;
        }
        this.fields[key] = value;
    };
    Model.prototype.setUp = function(attrs){
        for(var attr in attrs){
           this.set(attr, attrs[attr]);
        }
    };
    Model.prototype.toJSON = function(){
        var serialized_model = {};
        for(var key in this.fields){
            if(this.fields.hasOwnProperty(key)){
                serialized_model[key] = this.fields[key];
            }
        }
        return serialized_model;
    };
    Model.prototype.reset = function(){
        this.fields = {};
    };
    //class methods
    Model.deserialize = function(child_constructor, json){
        var deserialized_model = (json._id) ? new child_constructor({_id: json._id}) : new child_constructor();
        for(var key in json){
            if(json.hasOwnProperty(key)){
                if(key === '_id' || key === 'fields'){
                    deserialized_model[key] = json[key];
                }else{
                    deserialized_model.fields[key] = json[key];
                }
            }
        }
        return deserialized_model;
    };
    return Model;
})();
