

const parentdiv =  document.querySelector('div');
const childdiv = parentdiv.children[0];
const p = document.querySelector('div').children[1];

p.textContent =`get the distance of parent div from top by 
using element of child div(inside div):${parentdiv.offsetTop}`

childdiv.scrollBy(0,100);
childdiv.scrollTo(0,50);