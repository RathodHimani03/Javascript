// write a program to reverse string of given string ex. "Hello World" 


const revString = (n) => {

    let l = n.length;
    
    let s =" ";

    for(let i=l-1;i>=0;i--){
           s+=n.charAt(i)
           
           
    }
    return s;

}






const input = prompt('Enter the String:')

revString(input)

console.log(`The reverse of the String:${revString(input)}`)