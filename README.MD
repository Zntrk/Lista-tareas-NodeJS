## Aplicación de comandos NodeJS

Lista de Tareas

Esta aplicación permite agregar, eliminar, completar y mostrar tareas mediante consola, la aplicación guarda sus datos en un fichero de tipo .json adjunto en la carpeta DB.
Para su funcionamiento es necesario instalar sus paquetes mediante el comando:

```
npm install
```

La lista de comandos de la aplicación se muestra ejecutando:

```
node app --help
```

Comandos

- crear: agrega una nueva tarea, es decir escribe en el archivo .json una nueva descripcion (tarea) y la inicia como false (incompleta).


```
node app crear "Comprar azucar"
```

- actualizar: cambia el estado de una tarea mediante su descripción y la opción -t (completado) 

```
node app actualizar "Comprar azucar" -t true
```

- borrar: elimina una tarea del archivo -json mediante su descripción.

```
node app borrar "Comprar azucar"
```

- listar: muestra en consola todas las tareas, si se usa el comando -c true/false muestra solo las tareas completas o incompletas.

```
node app listar
```

```
node app listar -c true
```
