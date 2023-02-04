var AddObj = JSON.parse(localStorage.getItem("add"));
console.log(AddObj);
displayAddress(AddObj);
function displayAddress(AddObj){
  var div = document.createElement("div");
  var h3 = document.createElement("h3")
  h3.textContent = "HOME"
  
  var name = document.createElement("p")
  name.textContent = AddObj.Customer_Name;

  var number = document.createElement("p");
  number.textContent = AddObj.Mobile_Number;

  var flat = document.createElement("p")
  flat.textContent = AddObj.flat;

  var city = document.createElement("p");
  city.textContent = AddObj.City
  
  var state = document.createElement("p");
  state.textContent = AddObj.state;

  var pincode = document.createElement("p");
  pincode.textContent = AddObj.Pincode;

  div.append(h3,name,number,flat,city,state,pincode);
  document.getElementById("FirstChild").append(div);


  
}

var cartarr = JSON.parse(localStorage.getItem("1mg-cart")) || [];
window.onload = function Subtotal() {
  var mrp = cartarr.reduce((acc, curr) => {
    return acc + curr.Price * curr.quantity
  }, 0);
  document.querySelector(".prod-mrp").innerHTML = parseInt(mrp);
  var total = parseInt(mrp) + 50;
  document.querySelector(".prod-price").innerHTML = parseInt(total);
}

// console.log(arr);
// displayCartArr(arr);
// window.onload = function Subtotal() {
//   var mrp = arr.reduce((acc, curr) => {
//     return acc + curr.Price * curr.quantity
//   }, 0);
//   document.querySelector(".prod-mrp").innerHTML = parseInt(mrp);
//   var total = parseInt(mrp) + 50;
//   document.querySelector(".prod-price").innerHTML = parseInt(total);
// }

// // var total = 0;
displayCartArr(cartarr);
function displayCartArr(cartarr) {

  // document.getElementById("items").textContent = "";
  cartarr.forEach(function (ele) {
    var div = document.createElement("div");
    div.setAttribute("id", "leftPart");

    var image = document.createElement("img");
    image.setAttribute("src",ele.Image);

    var title = document.createElement("h4");
    title.textContent = ele.Title;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("id", "PriceDiv");
    var price = document.createElement("p");
    price.textContent = '₹' + ele.Price;
    
    priceDiv.append(price);
    div.append(image,title,priceDiv);
    document.getElementById("CartItems").append(div);

  })
}
document.querySelector("#checkout-btn").addEventListener("click",sendtoPayment)
function sendtoPayment(){
  window.location.href = "payment.html";
}