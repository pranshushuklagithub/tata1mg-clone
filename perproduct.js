

var ProdData=JSON.parse(localStorage.getItem("1mg-prod"))||[];

console.log(ProdData);

var scrollbtn=document.querySelectorAll(".scrolls");
scrollbtn.forEach((scrol)=>{
    scrol.addEventListener("click",()=>{
        var scrolid=scrol.id.split("-")[1];
        var targetid=document.querySelector("#"+scrolid);
        targetid.scrollIntoView({behavior:"smooth"});
    });
});

Displayprod(ProdData);
DisplayDes();
var add=document.querySelector("#cartbutton");
add.addEventListener("click",()=>{
    add.textContent="ADDING..."
    setTimeout(()=>{
        Addcart(ProdData);
        add.textContent="✔ ADDED";
        setTimeout(()=>{
            add.textContent="ADD TO CART";
        },1500);
    },1500);
});
function Addcart(elem){
    localStorage.setItem("1mg-cart",JSON.stringify(elem));
}
document.querySelector("#strikeprice").textContent=ProdData.Price;
document.querySelector("#price").textContent=ProdData.Price;
//var 
function Displayprod(ProdData){
    console.log(ProdData.Title);
    document.querySelector("title").textContent=ProdData.Title;
    var div1=document.createElement("div");
    div1.setAttribute("id","ptitle");
    var title=document.createElement("h2");
    title.textContent=ProdData.Title;
    var simage=document.createElement("img");
    simage.setAttribute("id","simage");
    simage.src="https://onemg.gumlet.io/speaker_on_a0hvxt.svg";
    simage.addEventListener("click",()=>{
        change();
    })
    div1.append(title,simage);
    var div2=document.createElement("div");
    div2.setAttribute("id","plist");
    var presdiv=document.createElement("div");
    presdiv.setAttribute("id","presdiv");
    var presimg=document.createElement("img");
    presimg.src="https://onemg.gumlet.io/w_20,h_20/q_auto,f_auto/rx_icon.png";
    var presdis=document.createElement("p");
    presdis.textContent=ProdData.Prescription;
    presdiv.append(presimg,presdis);
    var man=document.createElement("h4");
    man.textContent="MANUFACTURER/ MARKETER";
    var lik2=document.createElement("p");
    lik2.textContent=ProdData.Like2;
    var comp=document.createElement("h4");
    comp.textContent="SALT COMPOSITION";
    var Key=document.createElement("p");
    Key.textContent=ProdData.Keywords;
    var str=document.createElement("h4");
    str.textContent="STORAGE";
    var temp=document.createElement("p");
    temp.textContent="Store below 30°C";
    div2.append(presdiv,man,lik2,comp,Key,str,temp);
    var div3=document.createElement("div");
    div3.setAttribute("id","div3");
    var pimage=document.createElement("img");
    pimage.src=ProdData.Image;
    div3.append(pimage);
    var div4=document.createElement("div");
    div4.setAttribute("id","div4");
    div4.append(div2,div3);
    document.querySelector("#product").append(div1,div4);
}



async function DisplayDes(){
    var productdes=document.querySelector("#proddes");
    var pd= await getProductDescription(ProdData.Title_URL);
    async function getProductDescription(url) {
        try {
        var response = await fetch(url);
        var html = await response.text();
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var descriptionElement = doc.querySelector(".DrugOverview__content___22ZBX");
        console.log(descriptionElement);
        return descriptionElement;
        } catch (error) {
        console.error(error);
        return "Could not fetch product description";
        }
    }
    productdes.append(pd);
}

function change(){
    var simg=document.querySelector("#simage");
    if(simg.src==="https://onemg.gumlet.io/speaker_on_a0hvxt.svg"){
        simg.src="https://onemg.gumlet.io/speaker_off_rm2lrh.svg";
        var synth =window.speechSynthesis;
        var description =document.querySelector(".DrugOverview__content___22ZBX").textContent;
        var utterance =new SpeechSynthesisUtterance(description);
        synth.speak(utterance);
    }else{
        simg.src="https://onemg.gumlet.io/speaker_on_a0hvxt.svg";
        window.speechSynthesis.cancel();
    }
}