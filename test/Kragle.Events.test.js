(function(){
    var expect = chai.expect;
    describe('Kragle.Events', function(){
        it('should exist', function(done){
            expect(Kragle.Events).to.exist;
            done();
        });
        describe('methods', function(){
            describe('on()', function(){
                it('should add an method on the "fluffy:unicorn" event', function(done){
                    Kragle.Events.on('fluffy:unicorn', function(){
                        console.log('Hi! I am fluffy');
                    });
                    expect(Kragle.Events.events).to.have.property('fluffy:unicorn');
                    done();
                });
            });
        });
    });
})();
