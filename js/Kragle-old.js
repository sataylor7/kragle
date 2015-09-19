var Kragle = {};
(function (Kragle) {
    var Model = (function () {
        function Model(attributes) {
            var attrs = attributes || {};
            this.fields = {};
            this.setUp(attrs);
        }
        //instance methods
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
        Model.uniqueId = function(length, prefix) {
            var id;
            if (!length) {
                length = 16;
            }
            if (!prefix) {
                prefix = "";
            }
            id = "";
            while (id.length < length) {
                id += Math.random().toString(36).substr(2);
            }
            id.substr(0, length);
            prefix = (prefix !== "") ? prefix + '-' : '';
            return id = prefix + id;
        };

        return Model;
    })();
    Kragle.Model = Model;
})(Kragle);

//a model needs to set/get fields
