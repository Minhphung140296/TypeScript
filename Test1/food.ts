interface Person {
    name : string
    age : number
}

function SpeakPerson(person: Person):void{
    console.log("I am " + person.name +". I am " + person.age + ". Nice to meet you");
}

var Personal = {
    name : "Phung Le",
    age : 24
}
SpeakPerson(Personal);