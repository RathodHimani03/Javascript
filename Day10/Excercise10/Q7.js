// 2) write a program create a new string without the first and last character of a given string   


const changeString = (n) => {

    return n.slice(1,n.length-1);                                                                                                                                                                                                                                        

}



const input = prompt('Enter the String:')


console.log(`The reverse of the String:${changeString(input)}`)