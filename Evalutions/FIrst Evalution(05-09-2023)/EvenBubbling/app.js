// Event bubbling(child to parent) is a method of event propagation in the
// HTML DOM API when an event is in an element inside another element,
// and both elements have registered a handle to that event

const div = document.querySelector('div');
const button = document.querySelector('button');

//here add event listener to parent of the button 
// still when i click on the button it will Reflect

div.addEventListener('click',() => {
    console.log("div");
});

// button.addEventListener('click',() => {
//     console.log("button");
// })

//the above result come ==>button
                        // div

                        
// -------------------------------------------------------------------------------

//Even Capture(parent to child)

// div.addEventListener('click',() => {
//     console.log("div");
// },true);

// button.addEventListener('click',() => {
//     console.log("button");
// },true);

//the above result come ==>div
                        // button


// -------------------------------------------------------------------------------

//stop propogation


// button.addEventListener('click',(event) => {
//     event.stopPropagation();
//     console.log("button");
// })
//the above result come ==>button

// -----------------------------------------------------------------------


//immidiate stop propogation
//we can take more than one event listener to same widget (ie. button)

// button.addEventListener('click',(event) => {
    
//     console.log("button2");
// })

// button.addEventListener('click',(event) => {
//     event.stopImmediatePropagation(); 
//     console.log("button1");
// })

//result ==> button2
        //==>button1

        
// ----------------------------------------------------------------------

//if we want to stop by default behaviour  use prevent Default 
// (ex.if we want to stop that we click on link it will not go to that page)

const a = document.querySelector('a');

a.addEventListener('click',(event) => {
    event.preventDefault();  
})