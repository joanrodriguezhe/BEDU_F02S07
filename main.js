//Ejemplo 2

let paragraphs = document.body.getElementsByTagName('p');

console.log('Colección de nodos:', paragraphs);
console.log('Primer nodo:', paragraphs[0]);
console.log('Segundo nodo:', paragraphs[1]);
console.log('Tercer nodo:', paragraphs[2]);

document.body.insertBefore(paragraphs[2], paragraphs[0]);


//Ejemplo 3

function createNode(type, child) {
    let node = document.createElement(type);
    if (typeof child === "string") {
        let text = document.createTextNode(child);
        node.appendChild(text);
    } else {
        node.appendChild(child);
    }

    return node;
}

let quote = document.getElementById('quote');
let footer = createNode('footer', createNode('strong', '-Karl Popper'));
quote.appendChild(footer);

//Reto 1
let imgTags = document.body.getElementsByTagName("img");
for (img of [...imgTags]) {
    let textAlt = document.createTextNode(img.alt);
    img.parentNode.replaceChild(textAlt, img);
}