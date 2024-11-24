// you cannot use types to implement classes (unlike interface)

// in types you can define multiple type (unlike interface)

//  you use '=' 

type User = {
    firstName: string,
    lastName: string,
    age: number
}

type num = number | string

function isLegal(user:User){
    return user.age>18 ? true : false;
}

function printNum(number:num){
    console.log(number);
}
printNum("one");
printNum(1);

// ................................................................................................................

// creating hybrid types

type Employee = {
    name: string,
    startDate: Date
};
type Manager = {
    name: string,
    department: string
};

type TeamLead = Employee & Manager;

const teamLead : TeamLead = {
    name : "harkirat",
    startDate : new Date(),
    department : "Software Developer"
}