
## Algoritmos III

## Trabajo práctico 2021

## Entrega 1

## Dominio general

Como dominio contaremos con una de las implementaciones del trabajo práctico RunApp de la cursada de la materia Algoritmos II del año 2021. Si el grupo está formado por integrantes de diferentes grupos, deben ponerse de acuerdo sobre qué implementación van a trabajar. Para quienes no pertenecían al grupo de la materia anterior, deberán solicitar permiso al tutor para que les brinde acceso al repositorio de algoritmos II. Los grupos son formados como máximo por 3 integrantes.
El assignment para el trabajo es en el siguiente link:

(https://classroom.github.com/g/MvS8D0EC)

Recuerden que el primero en aceptarlo crea el grupo y el resto de los integrantes seleccionan al grupo que se van a sumar. Ante cualquier duda pueden consultar con el equipo de docentes.

## Repositorios
Trabajaremos como acostumbramos en otras materias con Github. Por lo tanto deberán crear un repositorio para el frontend que vamos a modelar. El proyecto constará con dos ramas (branch) mínimo: master y development. Trabajarán desarrollando cada entrega en el branch development y para el día de la entrega se realizará un TAG entregaX, dónde X es el nro. de TP (en este caso 1) sumado a un pull request a master. 
Una vez realizada la corrección por parte de los tutores, se crearán tickets informando los cambios solicitados que deberán cerrarse. Al momento de cerrar los mismos, siempre trabajando sobre el branch development, avisan al docente para realizar la revisión correspondiente.
Una vez que queda sin correcciones, el docente aprueba el pull request, mergeando la rama a master. Antes de continuar con el desarrollo de su siguiente entrega, el grupo debe crear un TAG sobre master con la denominación RunApp0.X, donde X es el nro de entrega.

## Entregables

1. Login

1.1 Versión web

![extension installation](./assets/img/pantallas/login-version-web.png)

## Para editar el Proyecto

Podés ejecutar el Visual Studio Code desde el menú inicio o bien usando Git Bash hacés

```bash
code .
```

en el directorio donde está el proyecto.

Recordá que tu instalación de Visual Studio Code requiere las extensiones que están en [la página específica de Typescript del sitio Algoritmos 3](https://algo3.uqbar-project.org/herramientas/typescript). Y que se instalan de la siguiente manera:

![extension installation](./images/extensions.gif)

## Para ejecutar los tests

### Plugin Jest

Podés usar el plugin `Jest` que los ejecuta dentro de tu editor:

![plugin Jest](./images/jest.gif)

### Plugin Jest Runner

El `Jest Runner` que te da la opción de ejecutar o debuggear un test (aunque ya podés ver el preview si tenés la extensión Jest):

![jest runner](./images/jestRunner.gif)

También te permite debuggear y avanzar paso a paso con F10 con un simple botón derecho:

![debuggeando tests](./images/jestDebug.gif)

### Por línea de comando

Y por último, desde el Git Bash o la línea de comando:

```bash
npm test
```

### % de cobertura y badge

```bash
npm run test:badges
```

Esto automáticamente genera una carpeta `coverage/lcov-report/index.html` que podés navegar localmente para analizar las líneas de código alcanzadas por el testeo unitario automatizado. Por otra parte en la misma carpeta `coverage` genera los badges que podés agregar a tu README (junto con el badge del build de Github Actions, que viene en este archivo):

```bash
[![build](https://github.com/uqbar-project/XXXXXXXX/actions/workflows/build.yml/badge.svg)](https://github.com/uqbar-project/XXXXXXXX/actions/workflows/build.yml) ![Coverage](./coverage/badge-statements.svg) ![Coverage](./coverage/badge-lines.svg)
```

Reemplazar `XXXXXXXX` por la carpeta asociada al proyecto.

## Para borrar archivos extras

Este proyecto tiene imágenes .gif y esta explicación en el README, si querés eliminarlos podés correr el script

```bash
npm run clean
```

## Archivos de configuración

Estos son todos los archivos de configuración de tu proyecto:

- `tsconfig.json`: es el archivo de configuración de Typescript de tu proyecto, que indica a qué versión de Javascript se está transpilando, eso indica qué herramientas podemos usar (por ejemplo, los decoradores de JS vienen en la versión ES2017)
- `package.json`: indica las dependencias del proyecto, la versión semántica, entre otras cosas.
- `package-lock.json`: es importante subirlo a git, tiene las dependencias exactas y completas del proyecto.
- `jest.config.js`: es el archivo de configuración de Jest, el framework de testeo unitario que utilizamos.
- `.eslintrc`: la configuración del _linter_, que es el proceso que valida la correctitud del código. Por ejemplo, si definimos una variable `let` y no cambiamos la referencia, el linter nos va a pedir que la cambiemos a una definición `const`.
