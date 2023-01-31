window.onload  = function() {
    var Container1 = document.createElement("div");
    Container1.style.width = "100%" ;
    
    var image  = document.createElement("img");
    image.src = "https://onemg.gumlet.io/be7fddf1-7bd4-4907-8b75-0eae061fbdff_1673621085.png?w=802&h=200&format=auto";
    image.style.width = "100%" ;

    Container1.append(image);
    document.getElementById("parent-container").append(Container1);
}