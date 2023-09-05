const intervalId = setInterval(() => {
    console.log("analytics starts.........");
},2000); 

document.getElementById('stop-analytics-btn').addEventListener('click',() => {

    clearInterval(intervalId)

})