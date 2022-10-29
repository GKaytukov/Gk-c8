function slowThing (callback) {
    console.log ('Hi, I am slow')
    callback()

}
//I need a callback 
//Anonymous Function Line 11
//Define function
//Line 19 I am calling 
//I am defining the function and then sticking inside the parathesis
slowThing(() => {
console.log('This is CALLBACK')

})

console.log(_____________)

function doSecond() {                           //Declaring the function
console.log('Do this after slowthing')

}
slowThing(doSecond)
//Put it without parathesis 

