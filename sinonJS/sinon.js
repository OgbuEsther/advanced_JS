//import 
const sinon = require("sinon");


//stubbing
const stub = sinon.stub();
stub.returns(42);
expect(stub()).to.equal(42);

// function add(x , y , z , a){
//     return x + y + z + a
// }

//mocking
const myObject = { myMethod: function () {} };
const mock = sinon.mock(myObject);
mock.expects("myMethod").once().withArgs(4);

myObject.myMethod(4);  // This will pass
mock.verify();


//spying

let newObject = {age : 25 , gender : "Female" , name : "esther" , dept : "CSC" , courses : 7  }
let newObject1 = {age : 25 , gender : "Female"}
let newObject2 = {age : 25 , gender : "Female"}

let holder = [newObject , newObject1 , newObject2]