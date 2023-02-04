document.getElementById("verifybtn").addEventListener("click",SaveUpiNumber)
function SaveUpiNumber(){
    var upiNumber = document.getElementById("upinumber").value
    console.log(upiNumber);
    if(upiNumber.length >= 10){
        // console.log("hello");
        localStorage.setItem("UpiNumber",JSON.stringify(upiNumber));
        document.getElementById("verifybtn").innerHTML = "Verified";
        // document.getElementById("verifybtn").style = "background-color #ff6f61;";
    }else{
        alert("Please fill valid UPI");
    }
}
document.getElementById("checkout-btn").addEventListener("click",CheckUpi);
function CheckUpi(){
    var checkNumber = JSON.parse(localStorage.getItem("UpiNumber"));
    if(checkNumber){
        // alert("Your Order has successfully placed");
        document.getElementById("result").innerHTML = "Your Order has succesfully placed"
        setTimeout(()=>{
            // add.textContent="ADD";
            window.location = "index.html";
        },1500);
    }
}
var cartarr = JSON.parse(localStorage.getItem("1mg-cart")) || [];
console.log(cartarr);

// displayCartArr(cartarr);
window.onload = function Subtotal() {
  var mrp = cartarr.reduce((acc, curr) => {
    return acc + curr.Price * curr.quantity
  }, 0);
  document.querySelector(".prod-mrp").innerHTML = parseInt(mrp);
  var total = parseInt(mrp) + 50;
  document.querySelector(".prod-price").innerHTML = parseInt(total);
}

