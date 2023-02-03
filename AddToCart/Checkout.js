document.querySelector("#SaveAddress").addEventListener("click", saveAddress);
    var address = JSON.parse(localStorage.getItem("add")) || [];
    function saveAddress() {
        event.preventDefault();
        var obj = {
            flat: document.getElementById("Flat_Number").value,
            Landmark: document.getElementById("Landmark").value,
            Pincode: document.getElementById("Pincode").value,
            Locality: document.getElementById("Locality").value,
            City: document.getElementById("City").value,
            State:document.getElementById("State").value,
            Customer_Name:document.getElementById("Customer_Name").value,
            Mobile_Number:document.getElementById("Mobile_Number").value,
        }
        if (obj.flat.length != 0 && obj.Pincode.length != 0
            && obj.Locality.length != 0 && obj.City.length != 0 && obj.State.length != 0
            && obj.Customer_Name.length != 0 && obj.Mobile_Number.length != 0 )   {
            address.push(obj);
        }else{
            alert("Please fill all the details");
        }
        // console.log(arr);
        localStorage.setItem("add", JSON.stringify(address));
        
    }
    document.querySelector("#SaveAddress").addEventListener("click",SendToVarify);
    function SendToVarify(){
        if(address.length != 0){
            window.location.href = "varify.html";
        }
    }
      
    