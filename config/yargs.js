//bloque de parametros para comandos
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 't',
    desc: "Marca como completada o pendiente la tarea"
};

const opcion = {
    default: null,
    alias: 'c',
    desc: "Lista segun tareas completadas con True, o incompletas con False "   
};

//bloque de comandos 
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('listar', 'Muestra las tareas en consola', {
        opcion
    })
    .help()
    .argv;

module.exports = {
    argv
}