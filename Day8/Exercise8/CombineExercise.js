//combine Question of Day7 and Day8

// 1) create two class FrontEnd and BackEnd which are based on WebDev class,
// both have some common properties and one same method printLanguage(which
// will print used langguage like FrontEnd -> javscript, BackEnd -> .NET)
// and some additional different  function     needMODIFY


class WebDev{

    constructor(languages){
        this.name = "WebDev";
        this.languages =languages ;
       
    }

    printLanguage (){
        console.log('The Development of '+this.name +'using languages '+this.languages);
    }
}

//Extend the class from WebDev
class FrontEnd extends WebDev{

    constructor(languages,chosedLangauge){
        super(languages);
        this.name = "FrontEnd";
        this.chosedLangauge = chosedLangauge;
        
    }

    printChoice(){
        console.log(this.name + "----> "+this.chosedLangauge);
    }
}


//Extends the  class from WebDev
class BackEnd extends WebDev{

    constructor(languages,chosedLangauge){
        super(languages);
        this.name = "Backend";
        this.chosedLangauge = chosedLangauge;
    }

    printChoice(){
        console.log(this.name + " ----> "+this.chosedLangauge);
    }
}


//make object of FrontEndSide
const w1 = new WebDev(['c','c++','python','java','javascript','TypeScript']);
w1.printLanguage();

const F1 = new FrontEnd(['javascript'],'javascript');
F1.printChoice();

const B1 = new BackEnd(['.Net'],'.Net');
B1.printChoice();

F1.printLanguage()
B1.printLanguage()