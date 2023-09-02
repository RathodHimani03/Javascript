//combine Question of Day7 and Day8

// 1) create two class FrontEnd and BackEnd which are based on WebDev class,
// both have some common properties and one same method printLanguage(which
// will print used langguage like FrontEnd -> javscript, BackEnd -> .NET)
// and some additional different  function     needMODIFY


class WebDev{


    constructor(languages){
        this.name = "WebDev";
        this.languages = languages;
    }

    printLanguage (){
        console.log('The Development of '+this.name +'using languages '+this.languages);
    }
}

//Extend the class from WebDev
class FrontEnd extends WebDev{

    constructor(chosedLangauge){
        this.name = "FrontEnd";
        this.chosedLangauge = chosedLangauge;
    }

    printChoice(){
        console.log(this.name + " side using language"+this.chosedLangauge);
    }
}


//Extends the  class from WebDev
class BackEnd extends WebDev{

    constructor(chosedLangauge){
        this.name = "Backend";
        this.chosedLangauge = chosedLangauge;
    }

    printChoice(){
        console.log(this.name + " side using language"+this.chosedLangauge);
    }
}


//make object of FrontEndSide
const F1 = new WebDev(['c','c++','python','java','javascript','TypeScript']);

F1.printLanguage();