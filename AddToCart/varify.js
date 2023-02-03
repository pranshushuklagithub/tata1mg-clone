var arr = JSON.parse(localStorage.getItem("1mg-cart")) || [];
console.log(arr);
displayCartArr(arr);
window.onload = function Subtotal() {
  var mrp = arr.reduce((acc, curr) => {
    return acc + curr.Price * curr.quantity
  }, 0);
  document.querySelector(".prod-mrp").innerHTML = parseInt(mrp);
  var total = parseInt(mrp) + 50;
  document.querySelector(".prod-price").innerHTML = parseInt(total);
}

// var total = 0;
function displayCartArr(cartarr) {

  document.getElementById("items").textContent = "";
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
    document.getElementById("items").append(div);

  })
}