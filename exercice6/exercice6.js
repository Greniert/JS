//récupération de la div existante
var hllo = document.getElementsByTagName("div")[0];
var hlloTXT = hllo.childNodes[0];

//création d'une div javascript
var bye = document.createElement("div");
var newText = document.createTextNode("bye");
document.body.appendChild(bye);

//on efface le contenue des divs
bye.innerHTML= "";
hllo.innerHTML= "";

//et on iverse en donnant à chaque div le contenu de l'autre
bye.appendChild (hlloTXT);
hllo.appendChild (newText);

//style
bye.style.cssFloat = "left";
hllo.style.cssFloat = "right";
hllo.style.color = "green";
bye.style.color = "blue";
bye.style.position = "absolute";
