function genericFunc(argument) {
    var ArrayOfT = [];
    ArrayOfT.push(argument);
    return ArrayOfT;
}
var ArrayFromString = genericFunc("Phung");
console.log(ArrayFromString[0]);
console.log(typeof ArrayFromString[0]);
var ArrayFromNumber = genericFunc(24);
console.log(ArrayFromNumber[0]);
console.log(typeof ArrayFromNumber[0]);
