const tareaInput = document.getElementById('inputTarea');
const btnAgregar = document.querySelector('.btn-agregar');
const listaTarea = document.querySelector('.listaTareas');
const tareasTotal = document.querySelector('.tareasTotal');
const tareasRealizadas = document.querySelector('.tareasRealizadas');


let tareas = [
    {id: 1, tareaCreada: "barrer", status: false },
    {id: 2, tareaCreada: "sacar la basura", status: false },
    {id: 3, tareaCreada: "clases", status: false }
];

renderRows()

btnAgregar.addEventListener("click", function(){

    if(tareaInput.value == ""){
        alert('Debe ingresar una tarea');
    }

    else{
        const nuevaTarea = tareaInput.value;
        tareas.push({id: tareas.length+1, tareaCreada: nuevaTarea, status: false });
        tareaInput.value = "";
        renderRows()
    }
})

//FUNCION PARA BORRAR
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderRows();

}

//FUNCION PARA ACTUALIZAR TAREAS 
function renderRows(){
    let html = "";
    let conteo = 0
    

    tareas.forEach(function(tarea){

        if (tarea.status) {
            conteo++;
        }

        html += 
        `<tr >
            <td>${tarea.id}</td>
            <td>${tarea.tareaCreada}</td>
            <td>
                <button class="btn-realizado ${tarea.status}" onclick="actualizarstatus(${tarea.id})">
                        <i class="fa-solid fa-xmark fa-2x"></i>
                        <i class="fa-solid fa-check fa-2x"></i>
                </button>
            </td>
            <td>
                <button class="btn-borrar" onclick="borrar(${tarea.id})" >
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        </tr>`
        
    });
    listaTarea.innerHTML = html
    tareasTotal.innerHTML = tareas.length
    tareasRealizadas.innerHTML = conteo

}




//FUNCION PARA ACTUALIZAR TAREAS REALIZADAS

function actualizarstatus(tareaID){

    const index = tareas.findIndex(tarea => tarea.id === tareaID);
    tareas[index].status = !tareas[index].status;
    
    renderRows()
}




