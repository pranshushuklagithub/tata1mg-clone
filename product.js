import {footer} from"./footer.js"
import navbar_export from "./navbar.js";

document.getElementById("navbar").innerHTML = navbar_export();
document.querySelector(".footer").innerHTML = footer();

import {products} from "./products.js";

var filtersData=products;
var Dataobj=JSON.parse(localStorage.getItem("1mg-cart"))||[];
var elemperpage=15;
var pagenum=1;
var totalpages=2;
filterProd("A");

var dialogbox=document.querySelector("#dailogbox");
var modal=document.querySelector(".modal");
var closeBtn =document.querySelector(".close-btn");
dialogbox.addEventListener("click",()=>{
  modal.style.display = "flex";
});
closeBtn.addEventListener("click",()=>{
  modal.style.display = "none";
});

function filterProd(alphabet){
    elemperpage=15;
    pagenum=1;
    document.querySelector("#mind").textContent="Medicine Index starting with - "+alphabet;
    filtersData=products.filter((prod)=>{
        return prod.Title.startsWith(alphabet);
    });
    totalpages=Math.ceil(filtersData.length/elemperpage);
    DisplayData();
}
function DisplayData(){
    console.log(filtersData);
    var sindex=(pagenum-1)*elemperpage;
    document.querySelector("#sindex").textContent=sindex;
    var eindex=sindex+elemperpage;
    document.querySelector("#eindex").textContent=eindex;
    document.querySelector("#tlength").textContent=filtersData.length;
    document.querySelector("#pageno").textContent=pagenum;
    var perpagedata=filtersData.slice(sindex,eindex);
    var grid=document.querySelector("#gridcon");
    grid.textContent="";
    perpagedata.forEach((data)=>{
        console.log(data.Title);
        var div=document.createElement("div");
        div.setAttribute("id","items");
        var div4=document.createElement("div");
        div4.setAttribute("id","div4");
        div4.addEventListener("click",()=>{
            localStorage.setItem("1mg-prod",JSON.stringify(data));
            window.location="perproduct.html";
        });
        var div1=document.createElement("div");
        div1.setAttribute("id","div1");
        var image=document.createElement("img");
        image.src=data.Image;
        div1.append(image);
        var div2=document.createElement("div");
        div2.setAttribute("id","div2");
        var title=document.createElement("h3");
        title.textContent=data.Title;
        var presimg=document.createElement("img");
        presimg.src="https://onemg.gumlet.io/w_20,h_20/q_auto,f_auto/rx_icon.png";
        var pres=document.createElement("p");
        pres.append(presimg);
        pres.textContent=data.Prescription;
        var strip=document.createElement("p");
        strip.textContent=data.Like1;
        var company=document.createElement("p");
        company.textContent=data.Like2;
        var composition=document.createElement("p");
        composition.textContent=data.Keywords;
        div2.append(title,pres,strip,company,composition);
        div4.append(div1,div2);
        var div3=document.createElement("div");
        div3.setAttribute("id","div3");
        var price=document.createElement("h3");
        price.textContent="MRP₹"+data.Price;
        var add=document.createElement("button");
        add.setAttribute("id","cartbutton");
        add.textContent="ADD"
        add.addEventListener("click",()=>{
            add.textContent="ADDING..."
            setTimeout(()=>{
                Addcart(data);
                add.textContent="✔ ADDED";
                setTimeout(()=>{
                    add.textContent="ADD";
                },1500);
            },1500);
        });
        add.textContent="ADD";
        div3.append(price,add);
        div.append(div4,div3);
        grid.append(div);
    });
    var prv=document.querySelector("#prev");
    if(pagenum===1){
        prv.disabled=true;
        prv.style.color="#666";
    }else{
        prv.disabled=false;
        prv.style.color="#ff6f61";
    }
    var nxt=document.querySelector("#next");
    if(pagenum===totalpages){
        nxt.disabled=true;
        nxt.style.color="#666";
    }else{
        nxt.disabled=false;
        nxt.style.color="#ff6f61";
    }
}
var filters=document.querySelectorAll(".filter");
filters.forEach((filter)=>{
    filter.addEventListener("click",async ()=>{
        console.log(filter.id.split("-")[1]);
        var alphabet=filter.id.split("-")[1];
        var activeclass=document.querySelector(".active");
        if(activeclass){
            activeclass.classList.remove("active");
        }
        filter.classList.add("active");
        filterProd(alphabet);
    });
});
function Addcart(elem){
    Dataobj=JSON.parse(localStorage.getItem("1mg-cart"))||[];
    Dataobj.push(elem);
    localStorage.setItem("1mg-cart",JSON.stringify(Dataobj));
}
var previous=document.querySelector("#prev");
var next=document.querySelector("#next");
previous.addEventListener("click",()=>{
    pagenum--;
    window.scrollTo(0, 0);
    DisplayData();
});
next.addEventListener("click",()=>{
    pagenum++;
    window.scrollTo(0, 0);
    DisplayData();
});