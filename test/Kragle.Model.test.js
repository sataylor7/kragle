(function() {
    var expect = chai.expect;
    describe('Kragle.Model', function() {
        it('should exist', function(){
            expect(Kragle.Model).to.exist;
        });
        describe('instance', function(){
            var kragle_model;
            beforeEach(function(done){
                kragle_model = new Kragle.Model();
                done();
            });
            it('should create a new instance of Kragle.Model', function(done){
                expect(kragle_model).to.be.instanceof(Kragle.Model);
                done()
            });
            it('should have property "fields"', function(done){
                expect(kragle_model).to.have.property('fields');
                done()
            });
        });
        describe('instance methods', function(){
            describe('getId()', function(){
                var kragle_model;
                beforeEach(function(done){
                    kragle_model = new Kragle.Model({
                        _id: '1234afew3',
                        name: 'fluffy',
                        age: 22
                    });
                    done();
                });
                it('should return the models id', function(done){
                    var id = kragle_model.getId();
                    expect(id).to.equal('1234afew3');
                    done();
                });
            });
            var kragle_model;
            beforeEach(function(done){
                kragle_model = new Kragle.Model({
                    name: 'fluffy',
                    age: 22
                });
                done();
            });
            describe('get()', function(){
                it('should return "fluffy"', function(done){
                    var name = kragle_model.get('name');
                    expect(name).to.equal('fluffy');
                    done();
                });
            });
            describe('set()', function(){
                it('should set "favorite_color" on the instance', function(done){
                    kragle_model.set('favorite_color', 'purple');
                    expect(kragle_model.fields).to.have.property('favorite_color', 'purple');
                    done();
                });
                describe('setting an already existing property', function(){
                    it('should return the value of the property', function(done){
                        var name = kragle_model.set('name', 'fluffy');
                        expect(name).to.equal('fluffy');
                        done();
                    });
                });
            });
            describe('setUp()', function(){
                it('should setUp all the fields passed in to the instance', function(done){
                    kragle_model.setUp({
                        nickname: 'fluff',
                        pet: 'dragon'
                    });
                    expect(kragle_model.fields).to.have.property('nickname', 'fluff');
                    expect(kragle_model.fields).to.have.property('pet', 'dragon');
                    done();
                });
            });
            describe('toJSON()', function(){
                it('should return a serialized Kragle.Model object', function(done){
                    var serialized_model = kragle_model.toJSON();
                    expect(serialized_model).to.have.property('name', 'fluffy');
                    expect(serialized_model).to.have.property('age', 22);
                    done();
                });
            });
            describe('reset()', function(){
                it('should reset the fields property to an empty object', function(done){
                    kragle_model.reset();
                    expect(kragle_model.fields).to.be.empty;
                    done();
                });
            });
        });
        describe('methods', function(){
            describe('deserialize()', function(){
                it('should return a deserialized model',  function(done){
                    var json = {
                        name: 'fluffy',
                        age: 22,
                        pet: 'dragon'
                    };
                    var model = Kragle.Model.deserialize(Kragle.Model, json);
                    expect(model.fields).to.deep.equal(json);
                    done();
                });
            });
        });
    });
}());
