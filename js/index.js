window.addEventListener("DOMContentLoaded", () => {

    const botonAgregar = document.getElementById("botonAgregar");
    const botonEliminar = document.getElementById("botonEliminar");

    const alumnos = [
        {
            "legajo": "50333",
            "apellidos": "Saccone",
            "nombres": "Valentina",
            "nota": "7"
        },
        {
            "legajo": "50333",
            "apellidos": "Sánchez",
            "nombres": "Esteban Nicolás",
            "nota": "7"
        },
        {
            "legajo": "50333",
            "apellidos": "Saccone",
            "nombres": "Valentina",
            "nota": "7"
        }
    ]

    

    botonAgregar.addEventListener("click", () => {
        const legajo = document.getElementById("legajo").value;
        const apellidos = document.getElementById("apellidos").value;
        const nombres = document.getElementById("nombres").value;
        const nota = document.getElementById("nota").value;

        const alumno = {
            "legajo": `${legajo}`,
            "apellidos": `${apellidos}`,
            "nombres": `${nombres}`,
            "nota": `${nota}`
        }

        alumnos.push(alumno);
        render(alumnos);

    })

    botonEliminar.addEventListener("click",() =>{


    })

    const render = arrayAlumnos => {
        console.log('renderizando alumnos', arrayAlumnos);
        const tablaAlumnos = document.getElementById('tablaAlumnos');
        tablaAlumnos.innerHTML = ''
        let tmpHtml = `
        <tr>
            <th>Legajo</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Nota</th>
            <th>Acciones</th>
        </tr>`
        arrayAlumnos.forEach((alumno,index) => {

            const { legajo, apellidos, nombres, nota } = alumno
            tmpHtml += `
            <tr>
                <td>${legajo}</td>
                <td>${apellidos}</td>
                <td>${nombres}</td>
                <td>${nota}</td>
                <td>
                    <button type="button" class="btn btn-danger m-1 w-50 p-2" id="buttonListadoUsuarios">
                        <i class="fa-solid fa-trash text-light" aria-hidden="true" id="botonEliminar${index}"></i>
                    </button>
                </td>
            </tr>`


        }); //arrayUsuarios.forEach

        console.log(tmpHtml);
        tablaAlumnos.innerHTML = tmpHtml
    }

    render(alumnos);

})