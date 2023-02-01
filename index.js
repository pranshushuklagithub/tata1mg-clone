let sliderElements= [
    {img : "https://onemg.gumlet.io/be7fddf1-7bd4-4907-8b75-0eae061fbdff_1673621085.png?w=1013&h=250&format=auto"},
    {img : "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/87994cde-265b-49ab-8663-170351e6b51f.png"},
    {img: "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/f8c7424c-ed6d-43a6-9ce7-a8227d7a9bc3.png"},
    {img :"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/54af0f08-b776-4367-ab3e-2854eb2bb672.png"},
]

// console.log(sliderElements);
var i = 0;
var c = 0;
window.onload = function() {
    var image = document.createElement("img");
    image.src = sliderElements[i].img;
    document.getElementById("slider").append(image);
    
   var id =  setInterval(function(){
        if(i == sliderElements.length)  {
            i = 0;
        }
        console.log(i);
        document.getElementById("slider").textContent = ""
        var image = document.createElement("img");
        image.src = sliderElements[i].img;
        document.getElementById("slider").append(image);
        i++;
        c++;
        console.log(c);
        if(c===20) {
            clearInterval(id);
        } 
    },1500);
}
    


