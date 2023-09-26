import 'core-js ';
import 'core-js/features/promises';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p')
button.addEventListener('click', () => {

  const text = textParagraph.textContent;
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(result=>{
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
  else{
    alert('feature not available ,please copy manually')
  }
  // do something...
});