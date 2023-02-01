import {products} from "./products.js";

var filtersData=products;
var Dataobj=JSON.parse(localStorage.getItem("1mg-cart"))||[];
//console.log(products);
filterProd("A");

function filterProd(alphabet){
    document.querySelector("#mind").textContent="Medicine Index starting with - "+alphabet;
    filtersData=products.filter((prod)=>{
        return prod.Title.startsWith(alphabet);
    });
    DisplayData();
}
function DisplayData(){
    console.log(filtersData);
    var grid=document.querySelector("#gridcon");
    grid.textContent="";
    filtersData.forEach((data)=>{
        console.log(data.Title);
        var div=document.createElement("div");
        div.setAttribute("id","items");
        var div4=document.createElement("div");
        div4.setAttribute("id","div4");
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
            Addcart(data);
        });
        div3.append(price,add);
        div.append(div4,div3);
        grid.append(div);
    });
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
        // DisplayData();
    });
});
function Addcart(elem){
    Dataobj=JSON.parse(localStorage.getItem("1mg-cart"))||[];
    Dataobj.push(elem);
    localStorage.setItem("1mg-cart",JSON.stringify(Dataobj));
    
}