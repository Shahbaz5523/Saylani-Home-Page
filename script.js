onscroll = () => {
    if (scrollY >= header.offsetHeight) {
        navbarFixed.style.position = "fixed";
        navbarFixed.style.top = "0px";
        navbarFixed.style.width = "100vw";
    } else {
        navbarFixed.style.position = "";
    }
}

// for Show Mobile NavBAr

var show = false;

let showmenu = ()=>{
    if(show === true){
        mobileNav.classList.remove('showNav');
        show = false;
    }else{
        mobileNav.classList.add('showNav');
        show = true;
    }
}

// for slider working 

var count = 1;

let right = () => {
    console.log(count)
    if (count === 1) {
        sliderBackground.style.width = '0%';
        sliderBackground2.style.width = '100%';
        count = 2;
        console.log(count);
        timer.style.width = '0px';

        // This is used for Complete the first Img Transition and then enable to change next
        rightBtn.setAttribute('onclick', '');
        setTimeout(() => {
            rightBtn.setAttribute('onclick', 'right()');
        }, 1700);
    } else if (count === 2) {
        sliderBackground2.style.width = '0%';
        sliderBackground3.style.width = '100%';
        count = 3;
        console.log(count);
        timer.style.width = '0px';        

        // This is used for Complete the first Img Transition and then enable to change next
        rightBtn.setAttribute('onclick', '');
        setTimeout(() => {
            rightBtn.setAttribute('onclick', 'right()');
        }, 1700);
    }else if(count === 3){
        sliderBackground3.style.width = '0%';
        sliderBackground4.style.width = '100%';
        count = 4;
        console.log(count);
        timer.style.width = '0px';        
        // This is used for Complete the first Img Transition and then enable to change next
        rightBtn.setAttribute('onclick', '');
        setTimeout(() => {
            rightBtn.setAttribute('onclick', 'right()');
        }, 1700);
    }else {
        console.log(count);
        rightBtn.style.boxShadow = "0px 0px 20px 0px red";
        setTimeout(() => {
            rightBtn.style.boxShadow = "0px 0px 20px 0px black";
        }, 500);
    }
}

let left = () => {
    if(count === 4){
        console.log(count);
        sliderBackground4.style.width = '0%';
        sliderBackground3.style.width = '100%';
        count = 3;
        console.log(count);
        timer.style.width = '0px';        

        // This is used for Complete the first Img Transition and then enable to change next
        leftBtn.setAttribute('onclick', '');
        setTimeout(() => {
            leftBtn.setAttribute('onclick', 'left()');
        }, 1700);
    }else if (count === 3) {
        console.log(count);
        sliderBackground3.style.width = '0%';
        sliderBackground2.style.width = '100%';
        count = 2;
        console.log(count);
        timer.style.width = '0px';        

        // This is used for Complete the first Img Transition and then enable to change next
        leftBtn.setAttribute('onclick', '');
        setTimeout(() => {
            leftBtn.setAttribute('onclick', 'left()');
        }, 1700);
    } else if (count === 2) {
        console.log(count);
        sliderBackground2.style.width = '0%';
        sliderBackground.style.width = '100%';
        count = 1;
        console.log(count);
        timer.style.width = '0px';        

        // This is used for Complete the first Img Transition and then enable to change next
        leftBtn.setAttribute('onclick', '');
        setTimeout(() => {
            leftBtn.setAttribute('onclick', 'left()');
        }, 1700);
    } else {
        console.log(count);
        leftBtn.style.boxShadow = "0px 0px 20px 0px red";
        setTimeout(() => {
            leftBtn.style.boxShadow = "0px 0px 20px 0px black";
        }, 500);
    }
}

// Change Slider image

var timestep = 15;
let key = setInterval(() => {
    let a = timer.offsetWidth;
    let n = a + 1;
    if(timer.offsetWidth < innerWidth){
        timer.style.width = n + 'px';
    }else{
        timer.style.width = 0 + 'px';
        if(count == 1){
            sliderBackground.style.width='0%';          
            sliderBackground2.style.width='100%';                      
            count = 2;
        }else if(count == 2){
            sliderBackground2.style.width='0%';          
            sliderBackground3.style.width='100%';
            count = 3;
        }else if(count === 3){
            sliderBackground3.style.width='0%';          
            sliderBackground4.style.width='100%';
            count = 4;
        }else{
            sliderBackground4.style.width='0%';          
            sliderBackground.style.width='100%';
            count = 1;
        }
    }
}, timestep);
