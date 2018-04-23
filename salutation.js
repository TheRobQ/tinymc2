(function(){
  //hidden from global scope
  var nameObject = {};

  function Names(first, last) {
    nameObject.firstName = first;
    nameObject.lastName = last;
    //first and last could also be a 'this' as commented out below
      //protype inheritence flag
      if(this instanceof Names){
        // this.firstName = first;
        // this.lastName = last;
        this.fullName = function(){
          return nameObject.firstName + ' ' +  nameObject.lastName
        };
        this.greeting = function(){
          return `Greetingd and Salutations ${nameObject.firstName}  ${nameObject.lastName}`
        };
    }
    else return new Names(first, last)
  }
   var obj = {Names: Names};
   //exposed to global scope
   Salutation =  obj.Names
})();

//not defined
// console.log(Names);
//not defined
// console.log(nameObject);
// Now we can call our methods
console.log(Salutation);


//Attempt 1 exposes methods to the global scope, but not variables, however the calls aren't as instructed on the sheet(you would call Salutation.fullName(first, last))
// (function(window){
//     function myLibrary(){
//       //not accessible to global scope
//       var name = {
//         firstName: 'first',
//         lastName: 'last'
//       };
//
//       var Salutation = {};
//
//       // Add functions to Salutation Object
//       Salutation.fullName = function(first, last){
//           name.firstName = first
//           name.lastName = last
//           return name.firstName + ' ' +name.lastName
//       }
//
//       Salutation.greeting = function(first, last){
//           name.firstName = first
//           name.lastName = last
//           `Greetings and Salutations ${name.firstName} ${name.lastName }`
//       }
//       return Salutation
//     }
//   // Library is globally accesible
//   if(typeof(window.Salutation) === 'undefined'){
//     window.Salutation = myLibrary();
//     }
//   return myLibrary()
// })(window);
//
// // Now we can call the library Object
// console.log(Salutation);
