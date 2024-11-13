//import 
// const assert = require('assert'); //commonjs
// const expect = require('chai').expect;
import assert from 'assert'; //ES6 version
import { expect } from 'chai'; //ES6 version
import { describe } from 'mocha';


//usage
describe('names of students', function() {
  it('should return -1 when the value is not present', function() {
    assert.equal(["Esther" , "Tumi" , "Victor"].indexOf("Evangel"), -1)
  });
});


describe("Add" , function(){
    it("this is the test for additon of numbers" , function(){
        assert.ok(12 / 3 - 2 , 2)
    })
})

//write a test for multiplication and addtion of numbers

//testing functions 
const add = (a, b) => a + b;

describe('Add Function', function() {
  it('should add two numbers', function() {
    assert.equal(add(2, 3), 5);
  });

  it('should handle negative numbers', function() {
    assert.equal(add(-2, 3), 1);
  });
});



//expect , should , assert (ok , equal , not equal)

//expect
describe('Number', function() {
    it('should be a number', function() {
      expect(40 + 60).to.be.a('number');
    });
  });


const target = parseInt("40")
const wallet = parseInt("60")
console.log(target + wallet)
console.log(40 + 60)


//multiplication
function product(a , b){
  return a * b
}
//testing the function
describe("Product" , function(){
  it("this is to get the product of two numbers" , function(){
    expect(product(2 , 3)).to.equal(6)
  })
})

//Checking if a string contains a certain word

function userPassword(password){
  return(password)
}

describe('Password_Check', () => {
  it('should contain the word "user"', () => {
    
    expect(userPassword("user esther")).to.include('user');
  });
})


describe('Array', () => {
  it('should have a length of 3', () => {
    const arr = [1, 2, 3];
    expect(arr).to.have.lengthOf(3);
  });
});


//Test that a promise resolves with the expected value.
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('data'), 500); });
}
describe('Promise', () => {
  it('should resolve with "data"', async () => {
    const result = await fetchData();
    expect(result).to.equal('data');
  });
});


//check if an object has a specific value

const user = {
  myName : "Esther" , 
  gender : "Female"
}

describe("Verify" , ()=>{
  it("this is to verify the gender" , ()=>{
    expect(user.gender).to.equal("Female")
  })
})

//role-based login
const userInfo = {
  name : "John",
  role : "admin"
}

describe("Role-Based" , ()=>{
  it("only 'admins' are permitted to login here" , ()=>{
    expect(userInfo.role).to.equal("admin")
  })
})




function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
describe('Division', () => {
  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
  });
});


