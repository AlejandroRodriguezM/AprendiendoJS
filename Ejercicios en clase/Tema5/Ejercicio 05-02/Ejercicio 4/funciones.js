function mostrarDatos(event) {
    event.preventDefault();
    let valor1 = document.getElementById("nombre").value;
    let valor2 = document.getElementById("aprobar").checked;
    let id = document.getElementById("nombre").getAttribute("id");
    let name = document.getElementById("nombre").getAttribute("name");
    let type = document.getElementById("nombre").getAttribute("type");
    let checkValue = document.getElementById("aprobar").getAttribute("value");
    let checkStatus = document.getElementById("aprobar").checked;
    let defaultValue = document.getElementById("nombre").defaultValue;
    let maxLength = document.getElementById("nombre").maxLength;
    let readOnly = document.getElementById("nombre").readOnly;
    let size = document.getElementById("nombre").size;
    let ej3 = document.getElementById("ej3");
    ej3.innerHTML = "<h2>Ejercicio 3</h2>" +
        "<ul>" +
        "<li>Value: " + valor1 + "</li>" +
        "<li>Checked: " + valor2 + "</li>" +
        "<li>Id: " + id + "</li>" +
        "<li>Name: " + name + "</li>" +
        "<li>Type: " + type + "</li>" +
        "<li>Checkbox Value: " + checkValue + "</li>" +
        "<li>Checkbox Status: " + checkStatus + "</li>" +
        "<li>defaultValue: " + defaultValue + "</li>" +
        "<li>maxLength: " + maxLength + "</li>" +
        "<li>readOnly: " + readOnly + "</li>" +
        "<li>size: " + size + "</li>" +
        "</ul>";
}

function nombreRandom(event) {
    event.preventDefault();
    let names = ["John", "Emily", "Jessica", "Michael", "David"];
    let randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("nombre").value = randomName;
}

