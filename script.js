let seconds = 0;
let minutes = 0;
let hours = 0;
var flag = "off"
// let myinterval = null;

const start_btn = document.querySelector('#start');
const timer = document.querySelector('#row2');
const reset_btn = document.querySelector('#reset');

function pad2(number) {
   
    return (number < 10 ? '0' : '') + number
  
}

//setInterval(function(){ alert("Hello"); }, 3000);

start_btn.addEventListener('click' , ()=>{


    if(flag == "off"){
        flag = "on";
        start_btn.textContent = "Pause";
        const myinterval = setInterval(function(){ 

            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if(minutes == 60){
                    minutes = 0;
                    hours++;
                if(hours == 99){
                    seconds=0;
                    minutes=0;
                    hours=0; } } } 
                    timer.textContent = pad2(hours)  + ":" +  pad2(minutes)  + ":" +  pad2(seconds) ;
        
                    reset_btn.addEventListener('click', ()=>{
                        start_btn.textContent = "Start";
                        window.clearInterval(myinterval);
                        seconds=0;
                        minutes=0;
                        hours=0;
                        timer.textContent = pad2(hours)  + ":" +  pad2(minutes)  + ":" +  pad2(seconds) ;
                    
                    })
        
                },1000)  //end of myinterval
        
     
    // timer.textContent = pad2(hours)  + ":" +  pad2(minutes)  + ":" +  pad2(seconds) ;


    


    } //to if

    else {
        flag = "off";
        start_btn.textContent = "Start";
        clearInterval(myinterval);
        console.log("hi")
        reset_btn.addEventListener('click', ()=>{
            start_btn.textContent = "Start";
            window.clearInterval(myinterval);
            seconds=0;
            minutes=0;
            hours=0;
            timer.textContent = pad2(hours)  + ":" +  pad2(minutes)  + ":" +  pad2(seconds) ;
        
        })


    }})

    

    

 

// reset_btn.addEventListener('click', ()=>{

//     window.clearInterval(myinterval);
//     seconds=0;
//     minutes=0;
//     hours=0;
//     timer.textContent = pad2(hours)  + ":" +  pad2(minutes)  + ":" +  pad2(seconds) ;

// })




