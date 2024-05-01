//Expose header on curtain click
let isExposedLeft = false;
let isExposedRight = false;
let curtainLeft = document.querySelector(".curtain");
let delayMS = 1000;

function exposeLeft(){
    curtainRight.style.transition = 'transform 1s ease-out';
    curtainLeft.style.transform = 'translateX(100%)';
    setTimeout(() =>{
        curtainLeft.style.display = 'none';
    }, delayMS);
    isExposedLeft = true;
    
}

let curtainRight = document.querySelectorAll(".curtain")[1];

function exposeRight(){
    curtainRight.style.transition = 'transform 1s ease-out';
    curtainRight.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        curtainRight.style.display = 'none';
    }, delayMS)
    isExposedRight = true;
}

//Temporary text
let tempText = document.querySelector(".tempText");

let theatre = document.querySelector(".title"); //getting "opera" title from htm
let opera = document.querySelectorAll(".title")[1]; //getting "theatre" title from htm
let bottomFinished = false;
let topFinished = false;

delayMS = 3500;
let delayMS1 = 5000;

let TTInterval = setInterval(() =>{
    if(isExposedLeft && isExposedRight){
        tempText.style.display = 'none';
        clearInterval(TTInterval);

///// title box animation
        let BAInterval = setInterval(() =>{
            if(bottomFinished){
                opera.style.animation = 'none';
                opera.style.marginTop = '6em'
                setTimeout(() =>{
                    bottomFinished = false;
                }, 2000)
            }else{
                opera.style.animation = '5s Bottomtransition infinite';
            }
        }, 10)
        setTimeout(() =>{
            bottomFinished = true;
        }, delayMS1)   
        setInterval(() =>{
            setTimeout(() =>{
                bottomFinished = true;
            }, delayMS1)    
        },7000)
        setTimeout(() =>{
            theatre.style.animation = '5s Toptransition infinite';
            let TAInterval = setInterval(() =>{
                if(topFinished){
                    theatre.style.animation = 'none';
                    theatre.style.top = '-3em'
                    setTimeout(() =>{
                    topFinished = false;
                }, 2000)
                }else{
                    theatre.style.animation = '5s Toptransition infinite';
                }
            }, 10)
            setTimeout(() =>{
                topFinished = true;
            }, delayMS1)    
            setInterval(() =>{
                setTimeout(() =>{
                    topFinished = true;
                }, delayMS1)    
            },7000)

        }, delayMS)
////title box animation end
    }
}, 10)
//Title box animation



