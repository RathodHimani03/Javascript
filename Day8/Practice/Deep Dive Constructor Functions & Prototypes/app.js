// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
//   greet = ()=>{
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// function Person() {
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function() {
//       console.log(
//         'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//       );
//     };
//   }
  
//   Person.describe = function() {
//     console.log('Creating persons...');
//   }
  
  // Person.prototype = {
  //   printAge() {
  //     console.log(this.age);
  //   }
  // };
  
//   Person.prototype.printAge = function() {
//     console.log(this.age);
//   };
  
//   console.dir(Person);
  
//   const p = new Person();
//   p.greet();
//   p.printAge();


// const button = document.querySelector('button');
// button.addEventListener('click',p.greet.bind(p))

const course = {
    title:"javascript - The Complete Guide",
    rating: 5
}
//different way to creating objects

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course,{
    // ...Object.getPrototypeOf(course),
    printRating : function() {
        console.log(`${this.rating}/5`);
    }
})

const student = Object.create({
    printProgress:function(){
        console.log(this.progress);
    } },{
        name:{
            configurable:true,
            enumerable:true,
            value:"max",
            writable:true
        }
    });

    student.name ='Max';

    Object.defineProperty(student,'progress',{
        configurable:true,
        Enumerator:true,
        value:0.8,
        writable:false
    })

    console.log(student)
console.log(student.printProgress)
course.printRating()