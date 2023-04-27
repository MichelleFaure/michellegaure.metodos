const tareaInput = document.getElementById('inputTarea');
const btnAgregar = document.querySelector('.btn-agregar');
const listaTarea = document.querySelector('.listaTareas');
const tareasTotal = document.querySelector('.tareasTotal');
const tareasRealizadas = document.querySelector('.tareasRealizadas');

let tareas = [];
btnAgregar.addEventListener("click", function(){
    const nuevaTarea = tareaInput.value;
    tareas.push({id: Date.now(), tareaCreada: nuevaTarea });
    tareaInput.value = "";
    renderRows()
    actualizarTotal()
    actualizartareasRealizadas()

})


//FUNCION PARA BORRAR
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderRows();
    actualizarTotal()
}

//FUNCION PARA ACTUALIZAR TAREAS 
function renderRows(){
    let html = "";

    tareas.forEach(function(tarea){
        html += 
        `<tr >
            <td>${tarea.id}</td>
            <td>${tarea.tareaCreada}</td>
            <td>
                <input type="checkbox" class="check">
            </td>
            <td>
                <button class="btn-borrar" onclick="borrar(${tarea.id})" ><i class="fa-solid fa-xmark"></i></button>
            </td>
        </tr>`
    });
    listaTarea.innerHTML = html
}

//FUNCION PARA ACTUALIZAR TOTAL DE TAREAS 
function actualizarTotal(){
    tareasTotal.innerHTML = tareas.length
}


//FUNCION PARA ACTUALIZAR TAREAS REALIZADAS
function actualizartareasRealizadas(){
    const check = document.querySelectorAll('.check');
    let conteo = 0

    check.forEach(function(item){
        item.addEventListener("click", function(){
            if(item.checked){
                conteo++
            }
            else{
                conteo--
            }
            tareasRealizadas.innerHTML = conteo
        })
    });
}