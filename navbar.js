export default function create(){
    var nav=document.querySelector('.navbar')
    console.log("creating navbar")
    // this navbar cotains three div first_div, second_div, third_div
    // this is first_div and in this div i have tow sepreate part f1 and f2
    var div1=document.createElement('div')
    div1.setAttribute('class', 'first_div')
    console.log(div1);
    // this is f1th part
    var f1=document.createElement('div')
    f1.setAttribute('class', 'f1')
    // create logo and first div elements
    var logo=document.createElement('img')
    logo.src="https://www.1mg.com/images/tata_1mg_logo.svg"
    logo.setAttribute('class', 'logo')
    var l1=document.createElement('a')
    l1.setAttribute('href', 'watch.html')
    l1.textContent="MEDICINES"
    var l2=document.createElement('a')
    l2.setAttribute('href', 'watch.html')
    l2.textContent="LAB TESTS"
    var l3=document.createElement('a')
    l3.setAttribute('href', 'watch.html')
    l3.textContent="CONSULT DOCTORS"
    var l4=document.createElement('a')
    l4.setAttribute('href', 'watch.html')
    l4.textContent="COVID-19"
    var l5=document.createElement('a')
    l5.setAttribute('href', 'watch.html')
    l5.textContent="AYURVEDA"
    var l6=document.createElement('a')
    l6.setAttribute('href', 'watch.html')
    l6.textContent="CARE PLAN"
    f1.append(l1, l2, l3, l4, l5, l6 )
    // div1.append(logo,f1)
    // nav.append(div1)
    // this is f2th part
    var f2=document.createElement('div')
    f2.setAttribute('class','f2')
    var q1=document.createElement('div')
    var s1=document.createElement('span')
    s1.textContent="Login | Sign Up"
    var s2=document.createElement('span')
    s2.textContent="Offers"
    var q2=document.createElement('div')
    var cart=document.createElement('img')
    cart.src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png"
    cart.setAttribute('class', 'cart')
    var q3=document.createElement('div')
    var s4=document.createElement('span')
    s4.textContent="Need Help?"
    q1.append(s1, s2)
    q2.append(cart)
    q3.append(s4)
    f2.append(q1, q2, q3)
    div1.append(logo, f1,f2)
    nav.append(div1)






















    // var div2=document.createElement('div')
    // div2.setAttribute('class', 'second_div')
    // var div3=document.createElement('div')
    // div3.setAttribute('class', 'third_div')
}
