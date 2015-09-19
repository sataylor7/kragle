(function() {
    var expect = chai.expect;
    describe('Kragle', function() {
        it('should exist', function(){
            expect(Kragle).to.exist;
        });
        it('should have version "0.0.2"', function(done){
            expect(Kragle.version).to.equal('0.0.2');
            done();
        });

        describe('methods', function(){
            var test_model = {
                _id: 7,
                fields: {
                    name: 'fluffy',
                    age: 22
                }
            };
            describe('static models', function(){
                it('should be an object', function(done){
                    Kragle.models[test_model._id] = test_model;
                    expect(Kragle.models).to.be.an('object');
                    expect(Kragle.models[test_model._id]).to.deep.equal(test_model);
                    done();
                });
            });
            describe('lookUpModel()', function(){
                it('should return the correct model from the collection', function(done){
                    var model = Kragle.lookUpModel(test_model._id);
                    expect(model).to.deep.equal(test_model);
                    done();
                });
            });
        });
    });
}());
