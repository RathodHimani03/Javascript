const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = '123';

const user = {
    name:'Max',
    age:30,
    hobbies:['Sports','Cooking']
}
storeBtn.addEventListener('click',() => {
    localStorage.setItem('uid',userId);
    sessionStorage.setItem('user',JSON.stringify(user))
        
})

retrBtn.addEventListener('click',() => {
    const extractedId = localStorage.getItem('uid');

    if(extractedId){
        console.log('Get the id-'+extractedId)
    }
    else{
        console.log('could not find id');
    }
})
