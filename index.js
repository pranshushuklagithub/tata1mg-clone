let sliderElements= [
    {img : "https://onemg.gumlet.io/be7fddf1-7bd4-4907-8b75-0eae061fbdff_1673621085.png?w=1013&h=250&format=auto"},
    {img : "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/87994cde-265b-49ab-8663-170351e6b51f.png"},
    {img: "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/f8c7424c-ed6d-43a6-9ce7-a8227d7a9bc3.png"},
    {img :"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/54af0f08-b776-4367-ab3e-2854eb2bb672.png"},
]


window.onload = function() {
document.getElementById("slide-1").style.display = "block";
document.getElementById("slide-2").style.display = "none";
document.getElementById("slide-3").style.display = "none";
document.getElementById("slide-4").style.display = "none";

document.getElementById("spn-1").style.backgroundColor = "black";
document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";


document.getElementById("option-last").style.display = "none";
document.getElementById("option-2ndlast").style.display = "none";
document.getElementById("left-Scroll").style.display = "none";

document.getElementById("option-last-flex3").style.display = "none";
document.getElementById("option-2ndlast-flex3").style.display = "none";
document.getElementById("left-Scroll-flex3").style.display = "none";

}

// By this function the slide is getting changed
function changeSlide(n) {
    if(n==1) {
        document.getElementById("slide-1").style.display = "block";
        document.getElementById("slide-2").style.display = "none";
        document.getElementById("slide-3").style.display = "none";
        document.getElementById("slide-4").style.display = "none";
        document.getElementById("spn-1").style.backgroundColor = "black";
        document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";
    }
    else if(n==2) {
        document.getElementById("slide-1").style.display = "none";
        document.getElementById("slide-2").style.display = "block";
        document.getElementById("slide-3").style.display = "none";
        document.getElementById("slide-4").style.display = "none";
        document.getElementById("spn-2").style.backgroundColor = "black";
        document.getElementById("spn-1").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";
    }
    else if(n==3) {
        document.getElementById("slide-1").style.display = "none";
        document.getElementById("slide-2").style.display = "none";
        document.getElementById("slide-3").style.display = "block";
        document.getElementById("slide-4").style.display = "none";
        document.getElementById("spn-3").style.backgroundColor = "black";
        document.getElementById("spn-1").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";
       
    }
    else if(n==4) {
        document.getElementById("slide-1").style.display = "none";
        document.getElementById("slide-2").style.display = "none";
        document.getElementById("slide-3").style.display = "none";
        document.getElementById("slide-4").style.display = "block";
        document.getElementById("spn-4").style.backgroundColor = "black";
        document.getElementById("spn-1").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
    }
}

// By this function we can scroll over the items horizontly 

function scrollRight() {

    document.getElementById("option-first").style.display = "none";
    document.getElementById("option-second").style.display = "none";
    document.getElementById("right-Scroll").style.display = "none";
    document.getElementById("left-Scroll").style.display = "block";

    
}

function scrollLeft() {

    document.getElementById("option-last").style.display = "none";
    document.getElementById("option-2ndlast").style.display = "none";
    document.getElementById("left-Scroll").style.display = "none";
    document.getElementById("right-Scroll").style.display = "block";

    
}

function scrollRightflex() {

    document.getElementById("option-first-flex3").style.display = "none";
    document.getElementById("option-second-flex3").style.display = "none";
    document.getElementById("right-Scroll-flex3").style.display = "none";
    document.getElementById("left-Scroll-flex3").style.display = "block";

    
}

function scrollLeftflex() {

    document.getElementById("option-last-flex3").style.display = "none";
    document.getElementById("option-2ndlast-flex3").style.display = "none";
    document.getElementById("left-Scroll-flex3").style.display = "none";
    document.getElementById("right-Scroll-flex3").style.display = "block";

   
    

}



        
    


