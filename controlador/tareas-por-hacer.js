//imports
const fs = require('fs');

//init lista temporal tareas
let tareasPorHacer = [];

//obtener contenido del json de tareas
const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

//guardar json de tareas segun lista temporal
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

//agregar nueva tarea a la lista temporal y guardarla en json
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

//get para obtener tareas
const getLista = () => {
    cargarDB();
    return tareasPorHacer;
}

//completa como true una de las tareas de la lista, se maneja según la descripción
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

//según su descripción, elimina una tarea de  la lista temporal y la guarda en el json
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

//lista en consola las tareas totales, con el comando -c solo lista las completas o incompletas
const listado = (opcion) => {
    let listado = getLista();
    if(opcion === null){
        for (let tarea of listado) {
            console.log("======= POR HACER =====".blue);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
        }
        return;
    }
    if(opcion === 'true'){
        for (let tarea of listado) {
            if(tarea.completado === true){
                console.log("======= POR HACER =====".green);
                console.log(tarea.descripcion);
                console.log("Estado: ", tarea.completado);
            }
        }
        return;
    }
    if(opcion === 'false'){
        for (let tarea of listado) {
            if(!tarea.completado == true){
                console.log("======= POR HACER =====".red);
                console.log(tarea.descripcion);
                console.log("Estado: ", tarea.completado);
            }
        }
        return;
    }
    console.log('Escribe true o false con el comando -c ...\t\t\t\t\t\t\t(porfavor)');
}
    

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar,
    listado
}