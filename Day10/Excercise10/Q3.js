// When you leave the input field, a function is triggered which transforms
//  the input text to upper case. 
// Ex. like enter user hello change the tab output shuld be "HELLO"    


const output = (string) => {
     const nString = string.toUpperCase()
    console.log(`Your Entered String modified:${nString}`)
}


const input =  prompt('Enter the String:')

output(input)