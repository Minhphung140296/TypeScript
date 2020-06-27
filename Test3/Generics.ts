function genericFunc<T>(argument: T):T[]{
    var ArrayOfT: T[] = [];
    ArrayOfT.push(argument);
    return ArrayOfT;
}
var ArrayFromString = genericFunc<string>("Phung");
console.log(ArrayFromString[0]);
console.log(typeof ArrayFromString[0]);

var ArrayFromNumber = genericFunc<number>(24);
console.log(ArrayFromNumber[0]);
console.log(typeof ArrayFromNumber[0]);



