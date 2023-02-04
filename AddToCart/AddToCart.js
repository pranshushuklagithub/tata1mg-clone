var cartarr = JSON.parse(localStorage.getItem("1mg-cart")) || [];
console.log(cartarr);

displayCartArr(cartarr);
window.onload = function Subtotal() {
  var mrp = cartarr.reduce((acc, curr) => {
    return acc + curr.Price * curr.quantity
  }, 0);
  document.querySelector(".prod-mrp").innerHTML = parseInt(mrp);
  var total = parseInt(mrp) + 50;
  document.querySelector(".prod-price").innerHTML = parseInt(total);
}

// var total = 0;
function displayCartArr(cartarr) {

  document.getElementById("CartItems").textContent = "";
  cartarr.forEach(function (ele, index) {
    var div = document.createElement("div");
    div.setAttribute("id", "leftPart");

    var leftdiv = document.createElement("div");

    var title = document.createElement("h4");
    title.textContent = ele.Title;

    var Prescription = document.createElement("p");
    Prescription.textContent = ele.Prescription;
    
    // var image = document.createElement("img");
    // image.setAttribute("src",ele.Image);

    var quantity = document.createElement("p");
    quantity.textContent = ele.Like1;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("id", "PriceDiv");
    var price = document.createElement("p");
    price.textContent = '₹' + ele.Price;
    // console.log(Number(ele.Price));

    var btn = document.createElement("button")
    // btn.textContent = "Remove";
    btn.setAttribute("class", "fa-regular fa-trash-can")
    // btn.textContent = "Remove";
    // btn.style.fontSize ="smaller";
    btn.addEventListener("click", function () {
      removeItems(index);
    })
    // var quan = document.createElement("div")
    // var inc = document.createElement("div");
    // inc.setAttribute("class", "fa-solid fa-circle-plus")

    // var dec = document.createElement("div");
    // dec.setAttribute("class","fa-solid fa-circle-minus");
    // quan.appendChild(inc,dec);
    var imgdiv = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",ele.Image);
    imgdiv.appendChild(image);
    priceDiv.append(price);
    leftdiv.append(title,Prescription,quantity,priceDiv,btn);
    div.append(leftdiv,imgdiv);
    document.getElementById("CartItems").append(div);

  })
}
function removeItems(index) {
  cartarr.splice(index, 1);
  localStorage.setItem("1mg-cart", JSON.stringify(cartarr));
  displayCartArr(cartarr);
}
