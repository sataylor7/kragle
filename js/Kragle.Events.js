Kragle.Events = (function(){
    function Events(){
        this.events = {};
    }

    Events.prototype.on = function(eventName, fn){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    };

    Events.prototype.off = function(eventName, fn){
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    };

    Events.prototype.emit = function(eventName, data){
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    };

    return new Events();
})();
