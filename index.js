import {footer} from"./footer.js"
import navbar_export from "./navbar.js";

document.getElementById("navbar").innerHTML = navbar_export();
document.querySelector(".footer").innerHTML = footer();


//product Array and display product Fun

var products=[
    {
      "Title": "Augmentin 625 Duo Tablet",
      "Title_URL": "https://www.1mg.com/drugs/augmentin-625-duo-tablet-138629",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/eluna27m2ptghojxlawz.png",
      "Price": "223.42",
      "Prescription": "Prescription Required",
      "Like1": "strip of 10 tablets",
      "Like2": "Glaxo SmithKline Pharmaceuticals Ltd",
      "Keywords": "Amoxycillin (500mg) + Clavulanic Acid (125mg)",
      "quantity": "1" 
    },
    {
      "Title": "Ascoril LS Syrup",
      "Title_URL": "https://www.1mg.com/drugs/ascoril-ls-syrup-63412",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ruma122iif8yx1nwhpfe.jpg",
      "Price": "118",
      "Prescription": "Prescription Required",
      "Like1": "bottle of 100 ml Syrup",
      "Like2": "Glenmark Pharmaceuticals Ltd",
      "Keywords": "Ambroxol (30mg/5ml) + Levosalbutamol (1mg/5ml) + Guaifenesin (50mg/5ml)",
      "quantity": "1" 
    },
    {
      "Title": "Azithral 500 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/azithral-500-tablet-325616",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/gbliwoki0x2rzz6ipnz9.jpg",
      "Price": "132.36",
      "Prescription": "Prescription Required",
      "Like1": "strip of 5 tablets",
      "Like2": "Alembic Pharmaceuticals Ltd",
      "Keywords": "Azithromycin (500mg)",
      "quantity": "1" 
    },
    {
      "Title": "Allegra 120mg Tablet",
      "Title_URL": "https://www.1mg.com/drugs/allegra-120mg-tablet-68763",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/72cfa26ecaf14e7f8285525d3ffe61f3.jpg",
      "Price": "218.81",
      "Prescription": "Prescription Required",
      "Like1": "strip of 10 tablets",
      "Like2": "Sanofi India  Ltd",
      "Keywords": "Fexofenadine (120mg)",
      "quantity": "1" 
    },
    {
      "Title": "Amoxyclav 625 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/amoxyclav-625-tablet-491614",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/adf52cdfa6364fe08a96cff274eece45.jpg",
      "Price": "223.27",
      "Prescription": "Prescription Required",
      "Like1": "strip of 10 tablets",
      "Like2": "Abbott",
      "Keywords": "Amoxycillin (500mg) + Clavulanic Acid (125mg)",
      "quantity": "1" 
    },
    {
      "Title": "Avil 25 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/avil-25-tablet-69629",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/rm5eel4umeiitnk1oggl.jpg",
      "Price": "10.97",
      "Prescription": "Prescription Required",
      "Like1": "strip of 15 tablets",
      "Like2": "Sanofi India  Ltd",
      "Keywords": "Pheniramine (25mg)",
      "quantity": "1" 
    },
    {
      "Title": "Ascoril D Plus Syrup Sugar Free",
      "Title_URL": "https://www.1mg.com/drugs/ascoril-d-plus-syrup-sugar-free-184611",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/la9aelaydysxuaizrcd5.jpg",
      "Price": "129",
      "Prescription": "Prescription Required",
      "Like1": "bottle of 100 ml Syrup",
      "Like2": "Glenmark Pharmaceuticals Ltd",
      "Keywords": "Phenylephrine (5mg) + Chlorpheniramine Maleate (2mg) + Dextromethorphan Hydrobromide (10mg)",
      "quantity": "1" 
    },
    {
      "Title": "Azee 500 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/azee-500-tablet-324155",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/isxuezdzbz8a5mi2jcmw.jpg",
      "Price": "132.38",
      "Prescription": "Prescription Required",
      "Like1": "strip of 5 tablets",
      "Like2": "Cipla Ltd",
      "Keywords": "Azithromycin (500mg)",
      "quantity": "1" 
    },
    {
      "Title": "Alex Syrup",
      "Title_URL": "https://www.1mg.com/drugs/alex-syrup-63175",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pham6qafha8bqpq6j0jy.jpg",
      "Price": "129",
      "Prescription": "Prescription Required",
      "Like1": "bottle of 100 ml Syrup",
      "Like2": "Glenmark Pharmaceuticals Ltd",
      "Keywords": "Phenylephrine (5mg/5ml) + Chlorpheniramine Maleate (2mg/5ml) + Dextromethorphan Hydrobromide (10mg/5ml)",
      "quantity": "1" 
    }
]




let sliderElements = [
    {img : "https://onemg.gumlet.io/be7fddf1-7bd4-4907-8b75-0eae061fbdff_1673621085.png?w=1013&h=250&format=auto"},
    {img : "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/87994cde-265b-49ab-8663-170351e6b51f.png"},
    {img: "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/f8c7424c-ed6d-43a6-9ce7-a8227d7a9bc3.png"},
    {img :"https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/54af0f08-b776-4367-ab3e-2854eb2bb672.png"},
]

var flag = 0;

document.getElementById("spn-1").addEventListener("click",function() {
    changeSlide(1);
});
document.getElementById("spn-2").addEventListener("click",function() {
    changeSlide(2);
});
document.getElementById("spn-3").addEventListener("click",function() {
    changeSlide(3);
});
document.getElementById("spn-4").addEventListener("click",function() {
    changeSlide(4);
});

document.getElementById("left-Scroll").addEventListener("click",function() {
    scrollRight(0);
});
document.getElementById("right-Scroll").addEventListener("click",function() {
    scrollRight(1);
});

document.getElementById("left-Scroll-flex3").addEventListener("click",function() {
    scrollRightflex(0);
});
document.getElementById("right-Scroll-flex3").addEventListener("click",function() {
    scrollRightflex(1);
});

document.getElementById("left-Scroll-grid").addEventListener("click",function() {
    scrollRightgrid(0);
});

document.getElementById("right-Scroll-grid").addEventListener("click",function() {
    scrollRightgrid(1);
});
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

document.getElementById("option-last-grid").style.display = "none";
document.getElementById("option-2ndlast-grid").style.display = "none";
document.getElementById("left-Scroll-grid").style.display = "none";

// document.getElementById("left-Scroll-prod1").style.display = "none";


// interval slide show 

var x = 0;
setInterval(() => {
    if(x==1) {
        document.getElementById("slide-1").style.display = "block";
        document.getElementById("slide-2").style.display = "none";
        document.getElementById("slide-3").style.display = "none";
        document.getElementById("slide-4").style.display = "none";
        document.getElementById("spn-1").style.backgroundColor = "black";
        document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";
    }
    else if(x==2) {
        document.getElementById("slide-1").style.display = "none";
        document.getElementById("slide-2").style.display = "block";
        document.getElementById("slide-3").style.display = "none";
        document.getElementById("slide-4").style.display = "none";
        document.getElementById("spn-2").style.backgroundColor = "black";
        document.getElementById("spn-1").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";
    }
    else if(x==3) {
        document.getElementById("slide-1").style.display = "none";
        document.getElementById("slide-2").style.display = "none";
        document.getElementById("slide-3").style.display = "block";
        document.getElementById("slide-4").style.display = "none";
        document.getElementById("spn-3").style.backgroundColor = "black";
        document.getElementById("spn-1").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-4").style.backgroundColor = "rgb(158, 160, 160)";
       
    }
    else if(x==4) {
        document.getElementById("slide-1").style.display = "none";
        document.getElementById("slide-2").style.display = "none";
        document.getElementById("slide-3").style.display = "none";
        document.getElementById("slide-4").style.display = "block";
        document.getElementById("spn-4").style.backgroundColor = "black";
        document.getElementById("spn-1").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-2").style.backgroundColor = "rgb(158, 160, 160)";
        document.getElementById("spn-3").style.backgroundColor = "rgb(158, 160, 160)";
    }else {
        x = 0;
    }
    x++;
}, 2000);


var products=[
    {
      "Title": "Augmentin 625 Duo Tablet",
      "Title_URL": "https://www.1mg.com/drugs/augmentin-625-duo-tablet-138629",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/eluna27m2ptghojxlawz.png",
      "Price": "223.42",
      "Prescription": "Prescription Required",
      "Like1": "strip of 10 tablets",
      "Like2": "Glaxo SmithKline Pharmaceuticals Ltd",
      "Keywords": "Amoxycillin (500mg) + Clavulanic Acid (125mg)",
      "quantity": "1" 
    },
    {
      "Title": "Ascoril LS Syrup",
      "Title_URL": "https://www.1mg.com/drugs/ascoril-ls-syrup-63412",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ruma122iif8yx1nwhpfe.jpg",
      "Price": "118",
      "Prescription": "Prescription Required",
      "Like1": "bottle of 100 ml Syrup",
      "Like2": "Glenmark Pharmaceuticals Ltd",
      "Keywords": "Ambroxol (30mg/5ml) + Levosalbutamol (1mg/5ml) + Guaifenesin (50mg/5ml)",
      "quantity": "1" 
    },
    {
      "Title": "Azithral 500 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/azithral-500-tablet-325616",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/gbliwoki0x2rzz6ipnz9.jpg",
      "Price": "132.36",
      "Prescription": "Prescription Required",
      "Like1": "strip of 5 tablets",
      "Like2": "Alembic Pharmaceuticals Ltd",
      "Keywords": "Azithromycin (500mg)",
      "quantity": "1" 
    },
    {
      "Title": "Allegra 120mg Tablet",
      "Title_URL": "https://www.1mg.com/drugs/allegra-120mg-tablet-68763",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/72cfa26ecaf14e7f8285525d3ffe61f3.jpg",
      "Price": "218.81",
      "Prescription": "Prescription Required",
      "Like1": "strip of 10 tablets",
      "Like2": "Sanofi India  Ltd",
      "Keywords": "Fexofenadine (120mg)",
      "quantity": "1" 
    },
    {
      "Title": "Amoxyclav 625 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/amoxyclav-625-tablet-491614",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/adf52cdfa6364fe08a96cff274eece45.jpg",
      "Price": "223.27",
      "Prescription": "Prescription Required",
      "Like1": "strip of 10 tablets",
      "Like2": "Abbott",
      "Keywords": "Amoxycillin (500mg) + Clavulanic Acid (125mg)",
      "quantity": "1" 
    },
    {
      "Title": "Avil 25 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/avil-25-tablet-69629",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/rm5eel4umeiitnk1oggl.jpg",
      "Price": "10.97",
      "Prescription": "Prescription Required",
      "Like1": "strip of 15 tablets",
      "Like2": "Sanofi India  Ltd",
      "Keywords": "Pheniramine (25mg)",
      "quantity": "1" 
    },
    {
      "Title": "Ascoril D Plus Syrup Sugar Free",
      "Title_URL": "https://www.1mg.com/drugs/ascoril-d-plus-syrup-sugar-free-184611",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/la9aelaydysxuaizrcd5.jpg",
      "Price": "129",
      "Prescription": "Prescription Required",
      "Like1": "bottle of 100 ml Syrup",
      "Like2": "Glenmark Pharmaceuticals Ltd",
      "Keywords": "Phenylephrine (5mg) + Chlorpheniramine Maleate (2mg) + Dextromethorphan Hydrobromide (10mg)",
      "quantity": "1" 
    },
    {
      "Title": "Azee 500 Tablet",
      "Title_URL": "https://www.1mg.com/drugs/azee-500-tablet-324155",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/isxuezdzbz8a5mi2jcmw.jpg",
      "Price": "132.38",
      "Prescription": "Prescription Required",
      "Like1": "strip of 5 tablets",
      "Like2": "Cipla Ltd",
      "Keywords": "Azithromycin (500mg)",
      "quantity": "1" 
    },
    {
      "Title": "Tata 1mg Combo Pack",
      "Title_URL": "https://www.1mg.com/drugs/alex-syrup-63175",
      "Image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg",
      "Price": "1029",
      "Prescription": "Prescription Required",
      "Like1": "bottle of 100 ml Syrup",
      "Like2": "Glenmark Pharmaceuticals Ltd",
      "Keywords": "Phenylephrine (5mg/5ml) + Chlorpheniramine Maleate (2mg/5ml) + Dextromethorphan Hydrobromide (10mg/5ml)",
      "quantity": "1" 
    }
];

Displayprod(products,0,5);

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

function scrollRight(x) {
    if(x==1) {
        document.getElementById("option-first").style.display = "none";
        document.getElementById("option-second").style.display = "none";

        document.getElementById("option-last").style.display = "block";
        document.getElementById("option-2ndlast").style.display = "block";

        document.getElementById("right-Scroll").style.display = "none";
        document.getElementById("left-Scroll").style.display = "block";
    }else {
        document.getElementById("option-last").style.display = "none";
        document.getElementById("option-2ndlast").style.display = "none";

        document.getElementById("option-first").style.display = "block";
        document.getElementById("option-second").style.display = "block";

        document.getElementById("left-Scroll").style.display = "none";
        document.getElementById("right-Scroll").style.display = "block";
    }
     
}

function scrollRightgrid(x) {
    if(x==1) {
        document.getElementById("option-first-grid").style.display = "none";
        document.getElementById("option-second-grid").style.display = "none";

        document.getElementById("option-last-grid").style.display = "block";
        document.getElementById("option-2ndlast-grid").style.display = "block";

        document.getElementById("right-Scroll-grid").style.display = "none";
        document.getElementById("left-Scroll-grid").style.display = "block";
    }else {
        document.getElementById("option-last-grid").style.display = "none";
        document.getElementById("option-2ndlast-grid").style.display = "none";

        document.getElementById("option-first-grid").style.display = "block";
        document.getElementById("option-second-grid").style.display = "block";

        document.getElementById("left-Scroll-grid").style.display = "none";
        document.getElementById("right-Scroll-grid").style.display = "block";
    }
     
}



function scrollRightflex(x) {

    if(x==1) {
        console.log(1);
        document.getElementById("option-first-flex3").style.display = "none";
        document.getElementById("option-second-flex3").style.display = "none";

        document.getElementById("option-last-flex3").style.display = "block";
        document.getElementById("option-2ndlast-flex3").style.display = "block";

        document.getElementById("right-Scroll-flex3").style.display = "none";
        document.getElementById("left-Scroll-flex3").style.display = "block";
    }else {
        console.log(0);
        document.getElementById("option-last-flex3").style.display = "none";
        document.getElementById("option-2ndlast-flex3").style.display = "none";

        document.getElementById("option-first-flex3").style.display = "block";
        document.getElementById("option-second-flex3").style.display = "block";

        document.getElementById("left-Scroll-flex3").style.display = "none";
        document.getElementById("right-Scroll-flex3").style.display = "block";
    }

    
}




function Displayprod(products,ind,lastIndex){

        for(var i = ind; i < lastIndex; i++) {
            // console.log(products[i].Title,i);
    
            var productDiv = document.createElement("div");
            var image = document.createElement("img");
            image.src = products[i].Image;
            var title = document.createElement("h2");
            title.textContent = products[i].Title;
            var price = document.createElement("h2");
            price.textContent = "₹" + products[i].Price;
            var Prescription = document.createElement("p");
            Prescription.textContent = products[i].Prescription;
    
            var add=document.createElement("button");
            add.textContent="ADD";
    
            add.addEventListener("click",()=>{
                add.textContent="ADDING..."
                setTimeout(()=>{
                    Addcart(products[i]);
                },2000);
                
                
                setTimeout(()=>{
                    add.textContent="✔ ADDED";
                },500);
                
                setTimeout(()=>{
                    add.textContent="ADD";
                },2000);
                //Addcart(data);
            });
    
            productDiv.append(image,title,price,Prescription,add);
            document.querySelector(".product").append(productDiv);
        }
        
        document.querySelector(".product").append(document.querySelector(".product-link-right-arrow"));
}

function scrollRightprod1(x) {
    var a = document.createElement("a");
    a.href = "product.html";
    document.querySelector("#right-Scroll-prod1").append(a);
    console.log(x);
    if (x == 1) {
        flag = 1;
        Displayprod(products,5,9);
    }else {
        flag = 0;
        Displayprod(products,0,5);
    }
}



function Addcart(elem){
    Dataobj=JSON.parse(localStorage.getItem("1mg-cart"))||[];
    Dataobj.push(elem);
    localStorage.setItem("1mg-cart",JSON.stringify(Dataobj));
}





        
    


