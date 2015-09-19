var Kragle =(function(){
    function Kragle() {}
    Kragle.version = '0.0.2';
    Kragle.models = {};
    Kragle.collections = {};
    Kragle.lookUpModel = function(id){
        return Kragle.models[id];
    };
    Kragle.uniqueId = function(length, prefix) {
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
    return Kragle;
})();
