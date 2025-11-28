let form = document.getElementById("formulario");

function calcular () {
    let total = 0;
    document.querySelectorAll("select, input[type='checkbox']:checked").forEach(element => {
        total += Number(element.value);
    })

    if (form.almacenamiento.value == "695") {
        total += 695;
    }

    document.getElementById('precio').innerText = "$" + total.toLocaleString();
}