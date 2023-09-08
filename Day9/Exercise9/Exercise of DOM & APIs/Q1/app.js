
const button = document.querySelector('button');

const callNewFunc = ()=>{
    
    const script = document.createElement('script');
    script.src ="newApp.js";
    script.defer = true;
    document.head.append(script);

}

button.addEventListener('click',callNewFunc);
