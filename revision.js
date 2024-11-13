import { assert } from "chai";
import { expect } from "chai";


//assert
describe("capitalize" , ()=>{
    it("this will return only capital letters" , ()=>{
       assert.equal("esther".toUpperCase() , "ESTHER") 
    })
})

//check if a string exists
describe("Validate" ,()=>{
    it("returns the string found" , ()=>{
        assert.equal("my name is esther and i am a developer".includes("esther") ,true)
    })
})

const add = (a, b) => a + b;

describe('Add Function', function() {
  it('should add two numbers', function() {
    assert.equal(add(2, 3), 5);
  });

  it('should handle negative numbers', function() {
    assert.equal(add(-2, 3), 1);
  });
});


//expect

describe('Number', function() {
    it('should be a number', function() {
      expect(4).to.be.a('number');
    });
  });

//   console.log("4" + "4")

function multiply(a, b) {
    return a * b;
  }

  describe('Multiplication', () => {
    it('should return 20 when multiplying 4 and 5', () => {
      expect(multiply(4, 5)).to.equal(20);
    });
  });
  

//async
it('should complete asynchronously', function(done) {
    setTimeout(function() {
      done(); // This tells Mocha that the async operation is done.
    }, 100);
  });
  