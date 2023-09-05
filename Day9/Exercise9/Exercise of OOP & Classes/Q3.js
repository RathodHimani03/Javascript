// Question:03
// Write a program gather and display infromation from an object like the reading 
// status (i.e. display book name, author name and reading status) of books and 
// check book are reading or not in console.

class Book{

    constructor(name,aname,rstatus){

        this.name = name;
        this.authorname = aname;
        this.readingstatus = rstatus;
    }

    getInfo(){

        this.info = {
            BookName : this.name,
            AuthorNName : this.authorname,
            ReadingStatus : this.readingstatus
        }
    }

    display(){
         for(let i in this.info){
            console.log(`${i}:${this.info[i]}`);
         }
    }

    checkBookStatus(){

        const ouotput = this.readingstatus === "false" ? "not one read yet" : "many reading this book";
         console.log(ouotput);
    }
}

const prompt=require("prompt-sync")({sigint:true}); //for taking userinput from the terminal of the VScode.


let name = prompt("Enter the booknaeme:");
let aname = prompt("Enter the authorname:");
let status = prompt("Enter the reading status:(true/false ): ")

const c1 = new Book(name,aname,status);
c1.getInfo();
c1.display();
c1.checkBookStatus();