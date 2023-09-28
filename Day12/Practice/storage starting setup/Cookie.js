const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');



storeBtn.addEventListener('click', () => {
    const user = {
        name: 'Max',
        age: 30,
        hobbies: ['Sports', 'Cooking']
    }
    //set the cookie
    document.cookie = `item=milk`;
    //set the expiry of the cookie
    // document.cookie = `newuser=${user}; max-age=2`; //max-age :take seconds
    document.cookie = `newuser=${JSON.stringify(user)}; expires=Tue,26 Sep 2023 12:00:00 UTC`;
    // document.cookie = `item=chocolate;
})

retrBtn.addEventListener('click', () => {
    const x = document.cookie.split(';')

    const data = x.map(i => {
        return i.trim();
    })
    console.log(data)

    //for getting keys 

    for (let k of data) {
        let temp = k.split('=');
        // console.log(temp[0] + "=" + temp[1]);

        // console.log(typeof (temp[1]))//string

        
        //    if(typeof(JSON.parse(temp[1])) == Object ){
        //     console.log("The key values of the object")

        //     Object.entries(temp[1])
        //    }
    }
})