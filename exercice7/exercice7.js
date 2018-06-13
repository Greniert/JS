var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

var text1 = document.createTextNode("div1")
var text2 = document.createTextNode("div2")
var text3 = document.createTextNode("div3")

div1.appendChild (text1);
div2.appendChild (text2);
div3.appendChild (text3);

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);

div1.style.color = "red";
div2.style.color = "green";
div3.style.color = "blue";

div1.style.cssFloat = "left";
div2.style.cssFloat = "left";
div3.style.cssFloat = "left";
