function add(x,y){
    return x / y;
}

describe('Add Functionality', function(){

    it('should add two values', function(){
        var result = add(1,2);
        expect(result).toBe(3);
    });

});