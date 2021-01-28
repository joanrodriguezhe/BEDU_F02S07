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

//Reto 2
const data = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

let div = document.getElementById('mountains');
div.appendChild(document.createElement('table'));

let table = document.getElementsByTagName('table')[0];

table.appendChild(document.createElement('tr'));

let tr = document.createElement('tr');

Object.keys(data[0]).forEach(text => {
    let head = document.createTextNode(text);
    let th = document.createElement('th');
    th.appendChild(head);
    tr.appendChild(th);
})
table.appendChild(tr);
tr = document.createElement('tr');

data.forEach(row => {
    let name = document.createTextNode(row.name);
    let tdName = document.createElement('td');
    tdName.appendChild(name)
    tr.appendChild(tdName);
    let height = document.createTextNode(row.height);
    let tdHeight = document.createElement('td');
    tdHeight.style.textAlign = "right";
    tdHeight.appendChild(height)
    tr.appendChild(tdHeight);
    let place = document.createTextNode(row.place);
    let tdPlace = document.createElement('td');
    tdPlace.appendChild(place)
    tr.appendChild(tdPlace);

    table.appendChild(tr);
    tr = document.createElement('tr');
});

