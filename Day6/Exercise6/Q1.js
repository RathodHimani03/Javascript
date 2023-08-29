// Question:1
//  write a program following pattern.
// *                           
// * *  
// * * *  
// * * * *  
// * * * * *    


let text = " ";

for (let i = 0; i < 5; i++) {

    for (let j = 0; j < i + 1; j++) {
        text += '*' + ' '
    }

    //   text='';
    text += '\n'

}

console.log(text);