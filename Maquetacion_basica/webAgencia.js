const travel = []

// Reto 3: escribe una funcion que recoja la info de los campos de texto y cree un objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón "solicitar información"

function saveInfo() {
    const nameInput = document.getElementById("name").value;
    const originInput = document.getElementById("origin").value;
    const destinationInput = document.getElementById("destination").value;
    const numberInput = document.getElementById("number").value;
    const dateInput = document.getElementById("date").value;

    const newTravel = {
        nombre: nameInput, 
        origen: originInput, 
        destino: destinationInput, 
        numeroPersonas: numberInput, 
        fecha: dateInput
    };
    travel.push(newTravel);

    console.log(travel);
}

function filterDestination(){
    const filteredList = travel.filter(travel => {
        const travelDestination = travel.destino.toLowerCase();
        const destination1 = travelDestination === "canarias";
        const destination2 = travelDestination === "mallorca";
        const destination3 = travelDestination === "galicia";
        return destination1 || destination2 || destination3;
    })
    // en el ejercicio 4, para que se muestre por pantalla, necesito cambiar el return a console.log
    return filteredList.forEach (travel => {
        const travelElement = document.createElement("li");
        travelElement.innerText = `Nombre: ${travel.nombre}, Origen: ${travel.origen}, Destino: ${travel.destino}, Número de personas: ${travel.numeroPersonas}, Fecha: ${travel.fecha}`;
        travelList.appendChild(travelElement);
    });
}


