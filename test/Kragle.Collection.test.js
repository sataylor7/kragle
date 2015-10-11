(function() {
    var expect = chai.expect;
    describe('Kragle.Collection', function(){
        it('should exist', function(done){
            expect(Kragle.Collection).to.exist;
            done();
        });
        describe('instance', function(){
            var kragle_collection;
            beforeEach(function(done){
                kragle_collection = new Kragle.Collection(Kragle.Model);
                done();
            });
            it('should be an instance of Kragle.Collection', function(done){
                expect(kragle_collection).to.be.instanceof(Kragle.Collection);
                done();
            });
            describe('instance methods', function(){
                var kragle_model;
                beforeEach(function(done){
                    kragle_model = new Kragle.Model();
                    done();
                });
                describe('add()', function(){
                    it('should add the model to the collection', function(done){
                        kragle_collection.add(kragle_model);
                        expect(kragle_collection.collection.length).to.equal(1);
                        done();
                    });
                });
                describe('get()', function(){
                    it('should retrieve a model from the collection', function(done){
                        //add to the collection so that we can test this
                        kragle_collection.add(kragle_model);
                        var model = kragle_collection.get(kragle_model._id);
                        expect(model).to.be.an('object');
                        expect(model._id).to.equal(kragle_model._id);
                        done();
                    });
                });
                describe('remove()', function(){
                    it('should remove the model from the collection', function(done){
                        //add to the collection so that we can test
                        kragle_collection.add(kragle_model);
                        kragle_collection.remove(kragle_model._id);
                        expect(kragle_collection.length).to.be.empty;
                        done();
                    });
                });
                describe('filter()', function(){
                    var kragle_model_2;
                    var kragle_model_3;
                    beforeEach(function(done){
                        kragle_model_2 = new Kragle.Model({
                                                name: 'joker'
                                            });
                        kragle_model_3 = new Kragle.Model({
                                                name: 'harley'
                                            });
                        done();
                    });
                    it('should return a filtered collection', function(done){
                        //add these to the collection so we can test
                        kragle_collection.add(kragle_model_2);
                        kragle_collection.add(kragle_model_3);
                        var filtered = kragle_collection.filter('name', 'joker');
                        console.log(filtered)
                        expect(filtered[0].fields.name).to.equal('joker');
                        done();
                    });
                });
            });
        });
    });
}());
