//shallow copy and deep copy


const original = {

  name : {
    firstname:"Ashu",
    lastname : "Rathod"
  },

  age:12,
  city:'Rajkot',


};



//shallow copy 

// const shallowObj = {...original};

// shallowObj.age =20 //it will not affect to original 
// original. age =23  //will not affect to shallow

// shallowObj.name.firstname ="Ashutosh", //will affect to both object
// original.name.nickname = "ashu", //will affect to both object


//deeep copy

const deepObj = JSON.parse(JSON.stringify(original));

deepObj.city = "ahamadabad" //will not affect original
original.age = 23 //will not affect deepobj
deepObj.nickname = "shivu"  //will not affect original
original.name.firstname ="Ashutosh" //willnot affect deepobj



console.log(original,deepObj);