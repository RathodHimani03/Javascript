//primitive value

let name = 'Max';

let cname = name;  //here being copy of value

name = "marry";

console.log('newvalue name'+ name);   //ouptput : marry
console.log('newvalue cname'+ cname);  //output : Max


//reference value


let hobbie = ['sport'];

let chobbie = hobbie;   //here being copy of pointer 

hobbie.push('cooking');

console.log('newvalue hobbie'+ hobbie);    //sport,cookie
console.log('newvalue chobbie'+ chobbie);  // sport,cookie  


let nhobby = [...hobbie];
hobbie.push('singing');
console.log('hobbie'+ hobbie); 
console.log('nhobby'+ nhobby);   //here being same as object


//example of object

let person = {age :20};

let anotherperson = person;

anotherperson.age = 32;

console.log('new person'+ person.age);   //32
console.log('new cperson'+ anotherperson.age); //32

//but something changes 

let yetAnotherperson = {...person}  //it will do copy of value
person.age = 30;
console.log('yetAnotherperson:' + yetAnotherperson.age); //32 because here been copy of value 